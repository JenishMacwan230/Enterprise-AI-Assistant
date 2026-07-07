"use client";

import { useState } from "react";
import { Eye, EyeOff, Sparkles, Bot, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ApiKeyEntry {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder: string;
  defaultValue: string;
  connected: boolean;
}

const apiKeys: ApiKeyEntry[] = [
  {
    id: "openai",
    name: "OpenAI",
    description: "GPT-4, GPT-3.5, DALL·E and more",
    icon: Sparkles,
    placeholder: "sk-...",
    defaultValue: "sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    connected: true,
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "Claude 3.5 Sonnet, Opus, Haiku",
    icon: Bot,
    placeholder: "sk-ant-...",
    defaultValue: "",
    connected: false,
  },
  {
    id: "custom",
    name: "Custom Endpoint",
    description: "Connect your own model endpoint",
    icon: Globe,
    placeholder: "https://api.example.com/v1",
    defaultValue: "",
    connected: false,
  },
];

export function SettingsApiKeys() {
  const [visibility, setVisibility] = useState<Record<string, boolean>>({});

  const toggleVisibility = (id: string) => {
    setVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-5">
      {apiKeys.map((key) => {
        const Icon = key.icon;
        const isVisible = visibility[key.id] ?? false;

        return (
          <Card
            key={key.id}
            className="glass border-border/30 transition-all duration-300 hover:border-border/60"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{key.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {key.description}
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant={key.connected ? "default" : "outline"}
                  className={
                    key.connected
                      ? "bg-success/15 text-success border-success/30"
                      : ""
                  }
                >
                  {key.connected ? "Connected" : "Not Connected"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder={key.placeholder}
                    defaultValue={key.defaultValue}
                    className="bg-background/50 pr-10 font-mono text-xs transition-all duration-200 focus-visible:bg-background"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleVisibility(key.id)}
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  {isVisible ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}

      <Separator className="opacity-50" />

      <div className="flex items-center gap-3 pt-1">
        <Button className="glow-primary transition-shadow duration-300 hover:shadow-lg">
          Save API Keys
        </Button>
        <Button variant="outline">Reset</Button>
      </div>
    </div>
  );
}
