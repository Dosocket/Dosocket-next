const sharp = require('sharp');
const fs = require('fs');

async function processUshna() {
  const targetW = 1122;
  const targetH = 1402;

  // 1. Load image buffer
  const { data, info } = await sharp('public/ushna.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // 2. Create an RGBA buffer where background is transparent
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;

      // Detect background: light grey/white background
      // Skin tones: r > 140, g ~ 90-120, b ~ 70-100 (r > g + 20)
      const isSkin = (r > 120 && r > g + 15 && g > b);
      const isBg = (!isSkin && r > 190 && g > 190 && b > 190);

      if (isBg) {
        rgba[dstIdx + 3] = 0; // Transparent
      } else {
        // Soft edge antialiasing for boundary pixels
        const avg = (r + g + b) / 3;
        if (!isSkin && avg > 170) {
          const alpha = Math.max(0, Math.min(255, Math.floor((200 - avg) / 30 * 255)));
          rgba[dstIdx + 3] = alpha;
        } else {
          rgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  // 3. Create cutout image
  const cutoutBuffer = await sharp(rgba, {
    raw: { width, height, channels: 4 }
  }).png().toBuffer();

  // 4. Scale cutout down by ~0.84 to give generous headroom above head
  const scale = 0.84;
  const scaledW = Math.round(width * scale);
  const scaledH = Math.round(height * scale);

  const scaledCutout = await sharp(cutoutBuffer)
    .resize(scaledW, scaledH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const left = Math.round((targetW - scaledW) / 2);
  const top = 175; // Space above head

  // 5. Studio backdrop SVG
  const bgSvg = `
<svg width="${targetW}" height="${targetH}" viewBox="0 0 ${targetW} ${targetH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="studioLight" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="45%" stop-color="#F5F5F7" />
      <stop offset="100%" stop-color="#E2E2E6" />
    </radialGradient>
  </defs>
  <rect width="${targetW}" height="${targetH}" fill="url(#studioLight)" />
</svg>
`;

  const background = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  // 6. Composite with soft shadow and positioned subject
  const tempOut = 'public/ushna-adjusted.png';

  await sharp(background)
    .composite([
      { input: scaledCutout, top, left }
    ])
    .png({ quality: 95 })
    .toFile(tempOut);

  fs.copyFileSync(tempOut, 'public/ushna.png');
  fs.unlinkSync(tempOut);

  console.log('Successfully updated ushna.png with matched headroom and studio backdrop');
}

processUshna().catch(console.error);
