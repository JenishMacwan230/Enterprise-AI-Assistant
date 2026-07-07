"use client";

import Link from "next/link";
import { User, Key, Palette, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type SettingsSection = "profile" | "api-keys" | "appearance";

interface SettingsNavProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const navItems: {
  id: SettingsSection;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "profile", label: "Profile", icon: User },
  { id: "api-keys", label: "API Keys", icon: Key },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export function SettingsNav({
  activeSection,
  onSectionChange,
}: SettingsNavProps) {
  return (
    <nav className="flex h-full w-60 flex-col border-r border-border/50 bg-card/80 backdrop-blur-xl">
      {/* Back to Chat */}
      <div className="p-4">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/chat">
            <ChevronLeft className="size-4" />
            Back to Chat
          </Link>
        </Button>
      </div>

      <Separator className="opacity-50" />

      {/* Section Title */}
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Settings
        </h2>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-1 flex-col gap-1 px-3 py-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {/* Active left border indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-primary animate-scale-in" />
              )}
              <Icon
                className={cn(
                  "size-4 transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom branding */}
      <div className="px-6 py-4">
        <Separator className="mb-4 opacity-50" />
        <p className="text-[11px] text-muted-foreground/60">
          Enterprise AI Assistant
        </p>
        <p className="text-[11px] text-muted-foreground/40">v1.0.0</p>
      </div>
    </nav>
  );
}
