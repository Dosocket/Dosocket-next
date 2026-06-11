import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Calendar, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dosocket" },
      { name: "description", content: "Book a 30-minute call with Dosocket. Same-day reply. Distributed senior team." },
      { property: "og:title", content: "Contact — Dosocket" },
      { property: "og:description", content: "Book a call · @dosocket" },
    ],
  }),
  component: ContactPage,
});

const socials: { label: string; href: string }[] = [
  { label: "Cal.com", href: BRAND.socials.cal },
  { label: "Gmail", href: BRAND.socials.gmail },
  { label: "Facebook", href: BRAND.socials.facebook },
  { label: "Instagram", href: BRAND.socials.instagram },
  { label: "LinkedIn", href: BRAND.socials.linkedin },
  { label: "X", href: BRAND.socials.x },
];

const faqs = [
  { q: "How fast can we start?", a: "Most engagements kick off within 5 business days of the scoping call. Embedded pods start the following Monday." },
  { q: "How does pricing work?", a: "Project-based for one-offs, monthly retainers for embedded pods. We scope every engagement in a paid one-week sprint." },
  { q: "Do you work with startups?", a: "Yes. About half our work is with venture-backed startups; the other half is with mid-market and growth-stage teams." },
  { q: "Where are you based?", a: "Distributed. Core teams in San Francisco and Bangalore. We've shipped projects across 14 timezones." },
];

function ContactPage() {
  return (
    <>
      <section className="container-x pt-16 pb-16">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">/ Contact</span>
        </Reveal>
        <Reveal>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
            Let's ship<br />something <span className="text-lime">unreasonable.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Tell us what you're building, or just book a 30-minute scoping call. We reply same day, every day.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <ContactForm />
          <aside className="space-y-6">
            {/* Book a Call (cal.com widget link) */}
            <a
              href={BRAND.calcom}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-lime p-7 text-lime-foreground transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Calendar className="size-3.5" /> Fastest path
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">Book a 30-min Call</div>
                <div className="mt-1 text-sm">cal.com/{BRAND.handle.slice(1)}</div>
              </div>
              <span className="grid size-10 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>

            {/* Direct contact */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Mail className="size-4 shrink-0 text-lime" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-lime">{BRAND.email}</a>
                </li>
                <li className="flex gap-3">
                  <MessageSquare className="size-4 shrink-0 text-lime" />
                  <span>{BRAND.handle} — all channels</span>
                </li>
              </ul>
            </div>

            {/* Socials — all @dosocket */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Social · {BRAND.handle}</div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2 text-sm transition-colors hover:border-lime hover:text-lime"
                  >
                    {s.label}
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-colors group-hover:text-lime" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-32">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Common questions</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                {f.q}
                <span className="text-xl text-lime transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Thanks — we'll reply within one business day.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
      className="rounded-3xl border border-border bg-card p-7 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className="md:col-span-2">
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Service interest</label>
          <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" name="type">
            <option>Digital Brand & Experience</option>
            <option>High-Performance Development</option>
            <option>Growth & Revenue Systems</option>
            <option>AI & Workflow Automation</option>
            <option>On-Demand Product Teams</option>
            <option>Not sure — help me scope</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Budget range</label>
          <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" name="budget">
            <option>$5k – $15k</option>
            <option>$15k – $40k</option>
            <option>$40k – $100k</option>
            <option>$100k+ / retainer</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about the project</label>
          <textarea required rows={5} name="message" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-lime py-2.5 pr-2 pl-6 text-sm font-semibold text-lime-foreground disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Brief"}
        <span className="grid size-9 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45"><ArrowUpRight className="size-4" /></span>
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</label>
      <input
        required={required}
        type={type}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-lime"
      />
    </div>
  );
}
