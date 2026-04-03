"use client";

import { motion } from "framer-motion";

import QuantumCanvas from "@/app/components/QuantumCanvas";
import {
  certifications,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/app/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Init" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const accentMap = {
  blue: "default",
  violet: "violet",
  teal: "teal",
  pink: "default",
} as const;

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  return (
    <div className="relative text-slate-100">
      <QuantumCanvas />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1000px_640px_at_10%_-5%,rgba(0,212,255,0.14),transparent_60%),radial-gradient(950px_640px_at_100%_8%,rgba(123,47,255,0.16),transparent_62%),#020408]" />

      <header className="sticky top-0 z-20 border-b border-cyan-300/20 bg-slate-950/75 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a
            href="#home"
            className="font-[family-name:var(--font-space-mono)] text-sm tracking-[0.16em] text-cyan-300 no-underline"
          >
            BK.dev
          </a>

          <nav className="hidden md:block">
            <ul className="m-0 flex list-none items-center gap-6 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="hidden font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.14em] text-teal-300 lg:block">
            quantum state active
          </p>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-[1.12fr_0.88fr] md:px-6">
          <motion.div initial="hidden" animate="show" variants={sectionMotion} transition={{ duration: 0.6 }}>
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              Full Stack x Quantum Computing
            </p>
            <h1 className="mt-4 grid font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] sm:text-7xl">
              <span>Biraj</span>
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Karki
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.ctaPrimary}>
                <Button className="h-11 rounded-none bg-gradient-to-r from-cyan-300 to-violet-400 px-6 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.12em] text-slate-950 hover:from-cyan-200 hover:to-violet-300">
                  View Projects
                </Button>
              </a>
              <a href={profile.ctaSecondary}>
                <Button
                  variant="secondary"
                  className="h-11 rounded-none border-cyan-300/35 bg-cyan-400/5 px-6 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.12em] text-cyan-300"
                >
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-8">
              {profile.stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                >
                  <p className="m-0 font-[family-name:var(--font-syne)] text-4xl font-extrabold text-cyan-300">
                    {item.value}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-[min(380px,82vw)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 m-auto grid size-20 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#00d4ff,#7b2fff_75%)] font-[family-name:var(--font-space-mono)] text-sm shadow-[0_0_45px_rgba(0,212,255,0.6)]"
              animate={{ boxShadow: ["0 0 35px rgba(0,212,255,0.55)", "0 0 65px rgba(0,212,255,0.85)", "0 0 35px rgba(0,212,255,0.55)"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              BK
            </motion.div>

            {["46%", "70%", "94%"].map((size, idx) => (
              <motion.div
                key={size}
                className={cn(
                  "absolute inset-0 m-auto rounded-full border",
                  idx === 0 && "border-cyan-400/35",
                  idx === 1 && "border-violet-400/30",
                  idx === 2 && "border-teal-300/20",
                )}
                style={{ width: size, height: size }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: idx === 0 ? 8 : idx === 1 ? 11 : 16,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <span
                  className={cn(
                    "absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full",
                    idx === 0 && "bg-cyan-300 shadow-[0_0_16px_rgba(0,212,255,0.9)]",
                    idx === 1 && "bg-violet-300 shadow-[0_0_16px_rgba(123,47,255,0.9)]",
                    idx === 2 && "bg-teal-300 shadow-[0_0_16px_rgba(0,255,204,0.9)]",
                  )}
                />
              </motion.div>
            ))}

            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.12em] text-slate-500">
              React . Quantum . DevOps
            </p>
          </motion.div>
        </section>

        <Section id="skills" eyebrow="Superposition of Skills" title="Technical" highlight="Capabilities">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Card className="rounded-none border-cyan-400/20 bg-slate-950/75">
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-syne)] text-lg">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant={accentMap[group.accent]}>
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Wave Function Collapsed" title="Work" highlight="Experience" altHighlight>
          <div className="relative ml-2 space-y-4 border-l border-cyan-400/30 pl-6">
            {experiences.map((item, i) => (
              <motion.article
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative"
              >
                <span
                  className={cn(
                    "absolute -left-[29px] top-8 size-2.5 rounded-full",
                    item.accent === "violet" && "bg-violet-300 shadow-[0_0_14px_rgba(123,47,255,0.85)]",
                    item.accent === "teal" && "bg-teal-300 shadow-[0_0_14px_rgba(0,255,204,0.85)]",
                    item.accent === "pink" && "bg-pink-400 shadow-[0_0_14px_rgba(255,45,120,0.85)]",
                    item.accent === "blue" && "bg-cyan-300 shadow-[0_0_14px_rgba(0,212,255,0.85)]",
                  )}
                />
                <Card className="rounded-none border-cyan-400/20 bg-slate-950/75">
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <CardTitle className="font-[family-name:var(--font-syne)] text-lg">{item.role}</CardTitle>
                      <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.12em] text-cyan-300">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-sm text-violet-300">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Entangled Systems" title="Featured" highlight="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProject && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-2"
              >
                <ProjectCard
                  index="01 / FEATURED"
                  name={featuredProject.name}
                  description={featuredProject.description}
                  stack={featuredProject.stack}
                  impact={featuredProject.impact}
                />
              </motion.div>
            )}
            {standardProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <ProjectCard
                  index={`0${index + 2}`}
                  name={project.name}
                  description={project.description}
                  stack={project.stack}
                  impact={project.impact}
                />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          eyebrow="Quantum State Verified"
          title="Certifications and"
          highlight="Credentials"
          altHighlight
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, i) => (
              <motion.div
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full rounded-none border-cyan-400/20 bg-slate-950/75">
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-syne)] text-base leading-6">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.12em] text-cyan-300">
                      {item.issuer}
                    </p>
                    <p className="text-sm text-slate-400">{item.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Collapse the Wavefunction" title="Let&apos;s" highlight="Connect">
          <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Open to full-stack opportunities and quantum computing collaborations.
              </p>
              <div className="mt-5 grid gap-2">
                <ContactLink href={profile.links.email} text="Email: birajcodes@gmail.com" />
                <ContactLink href={profile.links.phone} text="Phone: +977 9845971897" />
                <ContactLink href={profile.links.linkedin} text="LinkedIn: linkedin.com/in/biraj-karki" external />
                <ContactLink href={profile.links.github} text="GitHub: github.com/birajkarki" external />
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="rounded-none border-cyan-400/25 bg-slate-950/80">
                <CardHeader className="space-y-3">
                  <p className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.16em] text-cyan-300">
                    Current Quantum State
                  </p>
                  <p className="rounded-md border border-teal-300/20 bg-teal-400/5 px-3 py-2 font-[family-name:var(--font-space-mono)] text-xs text-teal-300">
                    |psi&gt; = alpha|0&gt; + beta|1&gt;
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <StateRow label="|0&gt;" value={65} />
                  <StateRow label="|1&gt;" value={35} />
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>Location: {profile.location}</li>
                    <li>Status: Open to opportunities</li>
                    <li>Specialization: {profile.title}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-cyan-400/20 px-4 py-6 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.12em] text-slate-500 md:flex-row">
          <p>Copyright 2026 {profile.name}</p>
          <p>Always building in superposition</p>
        </div>
      </footer>
    </div>
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  altHighlight?: boolean;
  children: React.ReactNode;
};

function Section({ id, eyebrow, title, highlight, altHighlight, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
          {title}{" "}
          <span
            className={cn(
              "bg-clip-text text-transparent",
              altHighlight
                ? "bg-gradient-to-r from-violet-300 to-pink-400"
                : "bg-gradient-to-r from-cyan-300 to-violet-400",
            )}
          >
            {highlight}
          </span>
        </h2>
      </motion.div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

type ProjectCardProps = {
  index: string;
  name: string;
  description: string;
  stack: string[];
  impact?: Array<{ label: string; value: string }>;
};

function ProjectCard({ index, name, description, stack, impact }: ProjectCardProps) {
  return (
    <Card className="h-full rounded-none border-cyan-400/20 bg-slate-950/75">
      <CardHeader className="space-y-3">
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.14em] text-cyan-300">
          {index}
        </p>
        <CardTitle className="font-[family-name:var(--font-syne)] text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-slate-400">{description}</p>
        {impact && (
          <div className="flex flex-wrap gap-6">
            {impact.map((item) => (
              <div key={item.label}>
                <strong className="block font-[family-name:var(--font-syne)] text-2xl text-teal-300">
                  {item.value}
                </strong>
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.12em] text-slate-500">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function StateRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
      <span className="font-[family-name:var(--font-space-mono)] text-[11px] text-slate-400">{label}</span>
      <Progress value={value} />
      <strong className="font-[family-name:var(--font-space-mono)] text-[11px] text-cyan-300">{value}%</strong>
    </div>
  );
}

function ContactLink({ href, text, external }: { href: string; text: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-none border border-cyan-400/25 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:bg-slate-900/70"
    >
      {text}
    </a>
  );
}
