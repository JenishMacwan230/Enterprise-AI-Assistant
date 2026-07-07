import Link from "next/link";
import { ArrowRight, BotMessageSquare, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    icon: BotMessageSquare,
    title: "Custom assistant flows",
    description: "Build app-specific experiences in user-owned components.",
  },
  {
    icon: Sparkles,
    title: "Shadcn primitives only in ui",
    description: "Keep reusable library pieces isolated under components/ui.",
  },
  {
    icon: ShieldCheck,
    title: "Clear separation",
    description: "App composition stays separate from the design-system layer.",
  },
];

export function HomeHero() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.14),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] px-6 py-10 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center gap-8">
        <div className="max-w-3xl space-y-5">
          <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-[0.24em]">
            Enterprise AI Assistant
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A clean component boundary for building AI-powered product experiences.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              components/ui stays reserved for shadcn primitives. App-specific
              composition lives in components, so the UI layer stays reusable and
              the feature layer stays owned by the app.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="#highlights">
                Explore the structure
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
                shadcn/ui
              </Link>
            </Button>
          </div>
        </div>

        <div id="highlights" className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="border-slate-200/80 bg-white/85 shadow-sm backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-slate-950 text-white">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg text-slate-950">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6 text-sm text-slate-500">
                  Built as a user-created component that composes primitives from the UI layer.
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}