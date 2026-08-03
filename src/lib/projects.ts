import fs from 'fs';
import path from 'path';
import { projects as staticProjects } from './site-data';
import type { Project } from './site-data';

export async function getProjects(): Promise<Project[]> {
  const publicDir = path.join(process.cwd(), 'public');
  
  return staticProjects.map(p => {
    const dirMatch = p.image.match(/^\/projects\/([^/]+)/);
    if (!dirMatch) return p;

    const folderName = decodeURIComponent(dirMatch[1]);
    const projectDir = path.join(publicDir, 'projects', folderName);
    
    let gallery: string[] = [];
    if (fs.existsSync(projectDir)) {
      const files = fs.readdirSync(projectDir);
      gallery = files
        .filter(f => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
        .map(f => `/projects/${encodeURIComponent(folderName)}/${encodeURIComponent(f)}`);
    }

    // Set the cover and main image to the first image in the gallery, or fallback to the static one
    const image = gallery.length > 0 ? gallery[0] : p.image;
    const cover = gallery.length > 0 ? gallery[0] : p.cover;

    return {
      ...p,
      image,
      cover,
      gallery,
    };
  });
}
