import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Smartphone,
  BatteryCharging,
  Laptop,
  Wrench,
  HardDrive,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Facebook,
  Instagram,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/freshtech-logo.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshTech Repair — Fast, Reliable Phone & Computer Repairs" },
      {
        name: "description",
        content:
          "FreshTech Repair offers fast, affordable phone, laptop and desktop repairs in Philadelphia, NJ and surrounding areas. Book a repair today.",
      },
      { property: "og:title", content: "FreshTech Repair — Phone & Computer Repairs" },
      {
        property: "og:description",
        content:
          "Fast, reliable repairs for smartphones, laptops, and desktops. Honest diagnostics and quick turnaround.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Smartphone, title: "Phone Screen Repair", desc: "Cracked screens fixed quickly with quality parts and a workmanship warranty." },
  { icon: BatteryCharging, title: "Battery Replacement", desc: "Restore battery life on phones, tablets and laptops with same-day service." },
  { icon: Laptop, title: "Laptop & Desktop Repair", desc: "From boot issues to liquid damage, we diagnose and fix Mac and PC systems." },
  { icon: Wrench, title: "Software Troubleshooting", desc: "Slow computers, viruses, OS reinstalls and configuration — sorted fast." },
  { icon: HardDrive, title: "Data Recovery", desc: "Recover precious photos, documents and files from failing or damaged drives." },
  { icon: Cpu, title: "Hardware Diagnostics", desc: "Honest, transparent diagnostics so you know exactly what needs fixing." },
  { icon: Wrench, title: "Device Maintenance & Upgrades", desc: "Cleanings, tune-ups, RAM and storage upgrades to keep devices running like new." },
];

const reasons = [
  "Fast turnaround times",
  "Affordable, transparent pricing",
  "Honest diagnostics — no surprises",
  "Local and trusted service",
  "Expertise across phones, computers, tablets, gaming consoles & consumer electronics",
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const faqs = [
  {
    q: "How does FreshTech Repair work?",
    a: "FreshTech Repair is designed around convenience. In many cases, you don't even have to leave your home. Simply contact us with your device issue, and we'll coordinate pickup, repair, and drop-off based on your location and the type of service needed. And if we can't fix it, you don't pay — there's no charge until a repair is successfully completed.",
  },
  {
    q: "Do I need to visit a repair shop?",
    a: "No. FreshTech Repair focuses on making the repair process as stress-free and convenient as possible. We offer pickup and drop-off options for many repairs, allowing customers to stay comfortable at home while we handle the repair process.",
  },
  {
    q: "What devices do you repair?",
    a: "We repair smartphones, laptops, desktop computers, gaming PCs, tablets, software-related issues, and provide hardware diagnostics and troubleshooting.",
  },
  {
    q: "Do you build gaming computers?",
    a: "Yes. FreshTech Repair also builds custom gaming PCs tailored to your needs and budget. Whether you're looking for an entry-level setup or a high-performance gaming machine, we can help recommend parts, assemble the system, and optimize it for performance.",
  },
  {
    q: "How long do repairs usually take?",
    a: "Repair times vary depending on the issue and part availability. Some repairs can be completed the same day, while others may require additional time if special parts need to be ordered.",
  },
  {
    q: "Do you provide repair estimates?",
    a: "Yes. We can provide an estimate based on the issue described. However, prices may change if additional problems are discovered during diagnostics or if replacement parts differ from the original estimate.",
  },
  {
    q: "Are deposits required?",
    a: "Some repairs require a deposit, especially repairs that involve ordering parts specifically for your device. Deposits help cover the cost of special-order components and secure the repair process.",
  },
  {
    q: "What happens if my device has more damage than expected?",
    a: "If additional issues are found during repair, we will contact you before moving forward with any extra work or charges. Transparency is important to us, and no additional repairs will be completed without customer approval.",
  },
  {
    q: "Do you offer diagnostics?",
    a: "Yes. FreshTech Repair offers diagnostics for phones, computers, and other tech devices to help identify hardware or software issues before repairs begin.",
  },
  {
    q: "Can you recover lost data?",
    a: "In many cases, yes. We offer data recovery assistance for devices experiencing software corruption, boot failures, or storage-related issues. Recovery success depends on the condition of the device.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept common digital payment methods and bank transfers. Payment details are provided during the repair process.",
  },
  {
    q: "Do you repair both Apple and Android devices?",
    a: "Yes. We service both Apple and Android smartphones, along with Windows laptops/desktops and other common consumer devices.",
  },
  {
    q: "Is my personal data safe during repairs?",
    a: "Customer privacy is taken seriously. We only access the information necessary to complete repairs or diagnostics and aim to keep customer data secure and confidential throughout the process.",
  },
  {
    q: "Do you offer support after repairs?",
    a: "Yes. If you experience issues related to a recent repair, contact us and we'll work with you to resolve the problem.",
  },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <FAQ />
        <Contact />
        <ServiceArea />
      </main>
      <Footer />
    </div>
  );
}

function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="FreshTech Repair logo" className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight">
            FreshTech<span className="text-orange">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-orange text-orange-foreground hover:bg-orange/90">
            <a href="#contact">Book a Repair</a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-orange text-orange-foreground hover:bg-orange/90">
              <a href="#contact" onClick={() => setOpen(false)}>Book a Repair</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Trusted local repair experts
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Fast, Reliable Phone & Computer Repairs
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We repair smartphones, laptops, desktops, and provide tech support for everyday users and small businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-orange text-orange-foreground hover:bg-orange/90 shadow-glow">
              <a href="#contact">
                Book a Repair <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy/20 text-navy hover:bg-navy hover:text-navy-foreground"
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat value="24h" label="Avg. turnaround" />
            <Stat value="2k+" label="Devices fixed" />
            <Stat value="4.9★" label="Customer rating" />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-navy/5 blur-3xl" />
          <div className="relative ml-auto aspect-square w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="grid h-full grid-cols-2 gap-4">
              {[Smartphone, Laptop, HardDrive, Cpu].map((Icon, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-2xl bg-muted/60 transition-transform hover:-translate-y-1"
                >
                  <Icon className="h-10 w-10 text-navy" />
                  <span className="mt-2 text-xs font-medium text-muted-foreground">
                    {["Phones", "Laptops", "Storage", "Hardware"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-soft">
            <CheckCircle2 className="h-5 w-5 text-orange" />
            <div>
              <div className="text-sm font-semibold">Same-day fixes</div>
              <div className="text-xs text-muted-foreground">on most repairs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-navy">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-widest text-orange">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything your device needs"
          desc="From cracked screens to complex diagnostics, we cover the full repair spectrum for phones and computers."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-orange group-hover:text-orange-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-orange">About us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Your local tech repair team
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            FreshTech Repair is a local tech repair business focused on fast, affordable, and reliable
            service. We believe great repair starts with honest communication — clear pricing, transparent
            diagnostics, and quick turnaround.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With years of hands-on experience across mobile devices and computers, our technicians are
            equipped to handle everything from a cracked iPhone screen to a complex motherboard repair on
            your laptop.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "Years experience", v: "10+" },
            { k: "Repairs completed", v: "2,000+" },
            { k: "Avg. turnaround", v: "24h" },
            { k: "Customer rating", v: "4.9 / 5" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-3xl font-semibold text-navy">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="border-t border-border bg-navy py-20 text-navy-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange">Why choose us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Repairs you can actually trust
          </h2>
          <p className="mt-4 text-navy-foreground/70">
            We do the small things right so you can get back to work, school, or life — fast.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition-colors hover:border-orange/50"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-orange" />
              <span className="text-sm font-medium">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          desc="Quick answers to the things customers ask us most."
        />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-navy hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(1, "Please enter your name").max(100),
    email: z.string().trim().email("Please enter a valid email").max(255),
    message: z.string().trim().min(1, "Please enter a message").max(5000),
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't send right now. Please call or email us instead.");
      return;
    }
    form.reset();
    toast.success("Request sent! We'll get back to you shortly.");
  }

  return (
    <section id="contact" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Book a repair or ask a question"
          desc="Tell us about your device and we'll follow up with a quote and next steps."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <ContactItem
              icon={Phone}
              title="Phone"
              value="(267) 225-4783"
              href="tel:+12672254783"
            />
            <ContactItem
              icon={Mail}
              title="Email"
              value="help@freshtechrepair.org"
              href="mailto:help@freshtechrepair.org"
            />
            <ContactItem
              icon={MapPin}
              title="Service area"
              value="Serving Philadelphia, NJ and surrounding areas"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Device issue / message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your device and the issue..."
                required
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full bg-orange text-orange-foreground hover:bg-orange/90 sm:w-auto"
            >
              {submitting ? "Sending..." : "Send Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section
      id="service-area"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service area"
          title="Where we operate"
          desc="Proudly serving Philadelphia, South Jersey, and surrounding areas — with pickup and drop-off options for many repairs."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="FreshTech Repair service area map"
            src="https://www.google.com/maps?q=Philadelphia,PA&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-orange/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-navy">{title}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FreshTech Repair logo" className="h-9 w-9" />
            <span className="text-lg font-semibold tracking-tight">
              FreshTech<span className="text-orange">.</span> Repair
            </span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.facebook.com/freshtechrepair"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — @freshtechrepair"
              className="transition-colors hover:text-orange"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/freshtechrepair"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — @freshtechrepair"
              className="transition-colors hover:text-orange"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FreshTech Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
