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
  Twitter,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/freshtech-logo.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

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
  { href: "#contact", label: "Contact" },
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
        <Contact />
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

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request sent! We'll get back to you shortly.");
    }, 600);
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
                <Input id="name" name="name" placeholder="Steven" required defaultValue="Steven" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="help@freshtechrepair.org"
                  defaultValue="help@freshtechrepair.org"
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
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-orange">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-orange">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-orange">
              <Twitter className="h-5 w-5" />
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
