"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
        {required && " *"}
      </Label>
      <Input
        required={required}
        type={type}
        name={name}
        className="w-full rounded-xl border border-border bg-background px-4 py-6 text-sm outline-none focus-visible:ring-lime focus-visible:border-lime"
      />
    </div>
  );
}

export function ContactForm() {
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
        
        <div className="md:col-span-2 space-y-1.5">
          <Label className="text-xs uppercase tracking-widest text-muted-foreground">
            Service interest
          </Label>
          <select
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-lime"
            name="type"
          >
            <option>Digital Brand & Experience</option>
            <option>High-Performance Development</option>
            <option>Growth & Revenue Systems</option>
            <option>AI & Workflow Automation</option>
            <option>On-Demand Product Teams</option>
            <option>Not sure — help me scope</option>
          </select>
        </div>
        
        <div className="md:col-span-2 space-y-1.5">
          <Label className="text-xs uppercase tracking-widest text-muted-foreground">
            Budget range
          </Label>
          <select
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-lime"
            name="budget"
          >
            <option>$5k – $15k</option>
            <option>$15k – $40k</option>
            <option>$40k – $100k</option>
            <option>$100k+ / retainer</option>
          </select>
        </div>
        
        <div className="md:col-span-2 space-y-1.5">
          <Label className="text-xs uppercase tracking-widest text-muted-foreground">
            Tell us about the project *
          </Label>
          <Textarea
            required
            rows={5}
            name="message"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-lime focus-visible:border-lime"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={submitting}
        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-lime py-2.5 pr-2 pl-6 text-sm font-semibold text-lime-foreground disabled:opacity-60 cursor-pointer"
      >
        {submitting ? "Sending…" : "Send Brief"}
        <span className="grid size-9 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </span>
      </button>
    </form>
  );
}
