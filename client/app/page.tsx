import Link from "next/link";
import {
  ArrowRight,
  Bot,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Smart Document Analysis",
    description:
      "Upload any document and instantly extract key insights, summaries, and actionable data powered by advanced AI models.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Reporting",
    description:
      "Generate comprehensive, data-driven reports in seconds — from quarterly reviews to detailed analytics dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SSO integration, and full compliance with SOC 2, GDPR, and HIPAA standards out of the box.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Process thousands of queries simultaneously with sub-second response times and zero downtime architecture.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share AI conversations, co-edit reports, and build shared knowledge bases across your entire organization.",
  },
  {
    icon: Sparkles,
    title: "Multi-Model Support",
    description:
      "Seamlessly switch between GPT-4, Claude, Gemini, and custom models — use the right AI for every task.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<200ms", label: "Avg Response" },
  { value: "50K+", label: "Daily Queries" },
  { value: "256-bit", label: "Encryption" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* ─── Background Effects ─── */}
      <div className="pointer-events-none fixed inset-0">
        {/* Primary gradient orb — top left */}
        <div className="absolute -top-40 -left-40 size-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-soft" />
        {/* Accent gradient orb — bottom right */}
        <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-accent/8 blur-[120px] animate-pulse-soft [animation-delay:1.2s]" />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-primary/3 blur-[200px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ─── Navigation Bar ─── */}
      <header className="relative z-20 glass border-b border-border/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
              <Bot className="size-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Enterprise AI
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#stats"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Performance
            </a>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                size="sm"
                className="rounded-full px-5 glow-primary transition-all duration-200 hover:scale-105"
              >
                Launch App
                <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/chat">
              <Button size="sm" className="rounded-full glow-primary">
                Launch
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center lg:px-8 lg:pt-36 lg:pb-28">
        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[15%] size-3 rounded-full bg-primary/40 animate-float" />
          <div className="absolute right-[15%] top-[25%] size-2 rounded-full bg-accent/50 animate-float [animation-delay:0.8s]" />
          <div className="absolute left-[20%] bottom-[30%] size-2.5 rounded-full bg-primary/30 animate-float [animation-delay:1.5s]" />
          <div className="absolute right-[25%] bottom-[20%] size-1.5 rounded-full bg-accent/40 animate-float [animation-delay:2s]" />
        </div>

        <div className="animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-6 gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide border border-primary/20 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary/10"
          >
            <Sparkles className="size-3" />
            AI-Powered Enterprise Platform
          </Badge>
        </div>

        <h1
          className="animate-fade-in-up max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
        >
          Your team&apos;s{" "}
          <span className="gradient-text">intelligent</span>
          <br />
          workspace assistant
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
          style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
        >
          Transform enterprise workflows with AI that understands your documents,
          generates reports, answers questions, and automates repetitive tasks —
          all in one secure platform.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          <Link href="/chat">
            <Button
              size="lg"
              className="rounded-full px-8 text-base glow-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base transition-all duration-300 hover:bg-card/80 hover:border-border"
            >
              Explore Features
            </Button>
          </Link>
        </div>

        {/* Hero visual — floating AI bot icon */}
        <div
          className="animate-fade-in-up relative mt-16 lg:mt-20"
          style={{ animationDelay: "400ms", animationFillMode: "backwards" }}
        >
          <div className="glass relative flex size-28 items-center justify-center rounded-3xl shadow-2xl shadow-primary/10 animate-float sm:size-32">
            <Bot className="size-14 text-primary sm:size-16" />
            {/* Glow ring */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl animate-pulse-soft" />
          </div>
          {/* Orbiting dots */}
          <div className="absolute -top-3 -right-3 size-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 animate-float [animation-delay:0.5s]" />
          <div className="absolute -bottom-2 -left-4 size-3 rounded-full bg-accent/60 shadow-lg shadow-accent/20 animate-float [animation-delay:1s]" />
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section
        id="stats"
        className="relative z-10 border-y border-border/30 bg-card/30 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4 lg:px-8 lg:py-14">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 animate-fade-in-up"
              style={{
                animationDelay: `${500 + index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <span className="gradient-text text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mb-14 text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1 text-xs tracking-wide border border-border/50"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your team{" "}
            <span className="gradient-text">needs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
            Purpose-built for enterprises — combining powerful AI capabilities
            with the security and reliability your organization demands.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group glass border-border/30 py-0 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02] animate-fade-in-up"
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <CardHeader className="pb-3 pt-6">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 transition-all duration-300 group-hover:from-primary/25 group-hover:to-accent/25 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold tracking-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="glass relative overflow-hidden rounded-3xl border border-border/30 p-10 text-center sm:p-14 lg:p-20">
          {/* CTA Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 size-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to{" "}
              <span className="gradient-text">supercharge</span> your
              workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
              Join thousands of teams already using Enterprise AI to work
              smarter, faster, and more collaboratively.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/chat">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base glow-primary transition-all duration-300 hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-base"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-border/30 bg-card/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
              <Bot className="size-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Enterprise AI
            </span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Enterprise AI Assistant. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/login"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
