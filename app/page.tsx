'use client';
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Phone, Code2, Briefcase, ChevronRight } from "lucide-react";

// Minimal shadcn/ui usage (assumes shadcn installed in your Next.js project)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// TIP: In a fresh Next.js app you can paste this into app/page.tsx and adjust imports.
// Tailwind CSS is expected. If you don't use shadcn, replace Button/Card/Badge with divs.

const projects = [
  {
    title: "CareShift Scheduling System",
    description: "Web & mobile scheduling for regional hospital. Admin assigns weekly nurse shifts; prevents overlaps; leave requests; audit logs.",
    tags: ["PHP", "MySQL", "JavaScript", "Flutter"],
    link: "https://careshift.helioho.st",
    repo: "https://github.com/russgards03/Careshift",
  },
  {
    title: "iReply HRIS",
    description: "Human Resource Information System for the company, allowing users to manage employees.",
    tags: ["Laravel", "MySQL"],
    link: "#",
    repo: "#",
  }
];

const skills = [
  "PHP", "Laravel", "JavaScript", "React", "Next.js", "MySQL", "TailwindCSS", "Git/GitHub", "FullCalendar", "Flutter"
];

const experiences = [
  {
    company: "iBento Creatives",
    role: "Freelance Developer",
    period: "2024-2025",
    bullets: [
      "Freelance developer specializing in backend development",
    ],
  },
  {
    company: "iReply Back Office Services Inc.",
    role: "Software Engineer",
    period: "2025",
    bullets: [
      "Created an usable HRIS for the company",
      "Optimized the company's workflow",
    ],
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com/", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
  { name: "Email", href: "mailto:you@example.com", icon: Mail },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 rounded-b-lg">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg">Russ Garde</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#contact"><ChevronRight className="h-4 w-4 mr-1"/>Hire Me</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              <Code2 className="h-4 w-4"/> Full‑stack Developer
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              I build clean, reliable web apps
            </h1>
            <p className="mt-4 text-slate-300 max-w-prose">
              BSIT graduate. Comfortable with PHP/Laravel + MySQL, and growing fast in JavaScript. I enjoy turning real-world workflows
              (hospital scheduling, human resource information system) into scalable, up to date systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#projects"><ExternalLink className="h-4 w-4 mr-2"/>View Projects</a>
              </Button>
              <Button asChild className="rounded-2xl">
                <a href="/resume.pdf"><Download className="h-4 w-4 mr-2"/>Download CV</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>Bacolod City, PH</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/>+63 ••• ••• ••••</div>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Icon className="h-5 w-5"/><span className="text-sm">{name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-fuchsia-500/20 blur-2xl"/>
              <Card className="relative rounded-3xl border-white/10">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-slate-300">
                    <span className="text-sm">Add a headshot or product shot here</span>
                  </div>
                  <div className="mt-4 text-sm text-slate-300">
                    Currently exploring React + Next.js and polishing UI patterns with Tailwind and shadcn/ui.
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><Briefcase className="h-5 w-5"/> Projects</h2>
          <a className="text-sm text-slate-300 hover:text-white" href="https://github.com/russgards03">See all ↗</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="rounded-3xl border-white/10 hover:border-white/20 transition">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <div className="aspect-video rounded-xl bg-slate-800/60 grid place-items-center text-xs">Screenshot</div>
                <p className="mt-3 text-sm text-black font-bold">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href={p.link} className="inline-flex items-center hover:underline text-black"><ExternalLink className="h-4 w-4 mr-1"/>Live</a>
                  <a href={p.repo} className="inline-flex items-center hover:underline text-black"><Github className="h-4 w-4 mr-1"/>Code</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {experiences.map((e) => (
            <Card key={e.company} className="rounded-3xl border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">{e.role} — {e.company}</CardTitle>
                <div className="text-sm text-black">{e.period}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-black text-sm space-y-2">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex text-white flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="darkOutline" className="rounded-full">{s}</Badge>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <Card className="mt-4 rounded-3xl border-white/10">
          <CardContent className="p-6">
            <form action="mailto:you@example.com" method="post" encType="text/plain" className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 outline-none" placeholder="Your name"/>
              <input className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 outline-none" placeholder="Email"/>
              <textarea className="md:col-span-2 h-32 rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 outline-none" placeholder="Message"/>
              <div className="md:col-span-2">
                <Button type="submit" className="rounded-2xl">Send</Button>
              </div>
            </form>
            <p className="mt-4 text-sm text-slate-400">Prefer email? you@example.com</p>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
          © {new Date().getFullYear()} Russ Garde — Built with Vercel
        </div>
      </footer>
    </div>
  );
}
