"use client";

import { CheckCircle2 } from "lucide-react";

import { LoginHeader } from "@/components/login-header";
import { LoginForm } from "@/components/login-form";
import { LoginSocial } from "@/components/login-social";
import { LoginFooter } from "@/components/login-footer";

const features = [
  "AI-powered document analysis and insights",
  "Real-time team collaboration with smart suggestions",
  "Enterprise-grade security and compliance",
];

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* ─── LEFT PANEL: Decorative hero ─── */}
      <div className="relative hidden w-1/2 overflow-hidden lg:flex lg:flex-col lg:justify-center lg:px-16 xl:px-24 bg-[linear-gradient(135deg,hsl(var(--primary)/0.20),hsl(var(--background)),hsl(var(--accent)/0.10))]">
        {/* Floating abstract shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large primary orb */}
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/15 blur-3xl animate-pulse-soft" />
          {/* Accent orb */}
          <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-accent/15 blur-3xl animate-pulse-soft [animation-delay:1s]" />
          {/* Small floating circle 1 */}
          <div className="absolute left-[15%] top-[20%] size-20 rounded-full border border-primary/20 bg-primary/5 blur-[1px] animate-float" />
          {/* Small floating circle 2 */}
          <div className="absolute right-[20%] top-[35%] size-14 rounded-full border border-accent/20 bg-accent/5 blur-[1px] animate-float [animation-delay:1.5s]" />
          {/* Small floating circle 3 */}
          <div className="absolute left-[35%] bottom-[25%] size-10 rounded-full border border-primary/30 bg-primary/10 animate-float [animation-delay:0.8s]" />
          {/* Gradient line accent */}
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="gradient-text text-4xl font-bold leading-tight xl:text-5xl">
              Empower your team
              <br />
              with AI
            </h2>
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              Transform your enterprise workflows with intelligent automation,
              smart document processing, and collaborative AI that understands
              your business context.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="size-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>

          {/* Decorative card mockup */}
          <div className="glass max-w-sm rounded-xl p-4 opacity-60">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-primary/20" />
              <div className="space-y-1.5 flex-1">
                <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                <div className="h-2 w-1/2 rounded-full bg-foreground/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT PANEL: Login form ─── */}
      <div className="relative flex w-full flex-col items-center justify-center px-6 lg:w-1/2 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)/0.5))]">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 size-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 size-72 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Form container */}
        <div className="relative z-10 w-full max-w-[400px] animate-fade-in-up space-y-8">
          <LoginHeader />
          <LoginForm />
          <LoginSocial />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}
