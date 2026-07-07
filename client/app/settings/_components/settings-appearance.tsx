"use client";

import { useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";
type FontSize = "small" | "medium" | "large";

const themes: {
  id: Theme;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  previewBg: string;
  previewSidebar: string;
  previewCard: string;
  previewAccent: string;
  previewText: string;
}[] = [
  {
    id: "light",
    label: "Light",
    icon: Sun,
    previewBg: "bg-gray-100",
    previewSidebar: "bg-gray-200",
    previewCard: "bg-white",
    previewAccent: "bg-indigo-500",
    previewText: "bg-gray-400",
  },
  {
    id: "dark",
    label: "Dark",
    icon: Moon,
    previewBg: "bg-gray-900",
    previewSidebar: "bg-gray-800",
    previewCard: "bg-gray-800/80",
    previewAccent: "bg-indigo-500",
    previewText: "bg-gray-600",
  },
  {
    id: "system",
    label: "System",
    icon: Monitor,
    previewBg: "bg-gradient-to-br from-gray-100 to-gray-900",
    previewSidebar: "bg-gradient-to-b from-gray-200 to-gray-800",
    previewCard: "bg-gradient-to-br from-white to-gray-800",
    previewAccent: "bg-indigo-500",
    previewText: "bg-gradient-to-r from-gray-400 to-gray-600",
  },
];

const fontSizes: { id: FontSize; label: string }[] = [
  { id: "small", label: "Small" },
  { id: "medium", label: "Medium" },
  { id: "large", label: "Large" },
];

export function SettingsAppearance() {
  const [activeTheme, setActiveTheme] = useState<Theme>("dark");
  const [activeFontSize, setActiveFontSize] = useState<FontSize>("medium");

  return (
    <div className="space-y-8">
      {/* Theme Selection */}
      <Card className="glass border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {themes.map((theme) => {
              const isActive = activeTheme === theme.id;
              const Icon = theme.icon;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={cn(
                    "group relative flex flex-col items-center gap-3 rounded-xl border p-4 transition-all duration-300",
                    isActive
                      ? "gradient-border glow-primary bg-primary/5"
                      : "border-border/40 bg-card/50 hover:border-border hover:bg-card/80"
                  )}
                >
                  {/* Mini Preview */}
                  <div
                    className={cn(
                      "w-full overflow-hidden rounded-lg",
                      theme.previewBg
                    )}
                  >
                    <div className="flex h-[72px] gap-0.5 p-1.5">
                      {/* Sidebar preview */}
                      <div
                        className={cn(
                          "w-5 shrink-0 rounded-sm",
                          theme.previewSidebar
                        )}
                      />
                      {/* Main content preview */}
                      <div className="flex flex-1 flex-col gap-1 pl-1">
                        <div
                          className={cn(
                            "h-2 w-3/4 rounded-sm",
                            theme.previewAccent
                          )}
                        />
                        <div
                          className={cn(
                            "flex-1 rounded-sm",
                            theme.previewCard
                          )}
                        />
                        <div
                          className={cn(
                            "h-1.5 w-1/2 rounded-sm",
                            theme.previewText
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="flex items-center gap-2">
                    <Icon
                      className={cn(
                        "size-3.5 transition-colors duration-200",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {theme.label}
                    </span>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 size-2.5 animate-scale-in rounded-full bg-primary ring-2 ring-background" />
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Font Size */}
      <Card className="glass border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Font Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="inline-flex items-center gap-0.5 rounded-lg border border-border/40 bg-background/50 p-1">
            {fontSizes.map((size) => {
              const isActive = activeFontSize === size.id;
              return (
                <Button
                  key={size.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFontSize(size.id)}
                  className={cn(
                    "min-w-[80px] transition-all duration-200",
                    isActive
                      ? "glow-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {size.label}
                </Button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Adjust the base font size used throughout the application.
          </p>
        </CardContent>
      </Card>

      <Separator className="opacity-50" />

      <div className="flex items-center gap-3 pt-1">
        <Button className="glow-primary transition-shadow duration-300 hover:shadow-lg">
          Save Preferences
        </Button>
        <Button variant="outline">Reset to Defaults</Button>
      </div>
    </div>
  );
}
