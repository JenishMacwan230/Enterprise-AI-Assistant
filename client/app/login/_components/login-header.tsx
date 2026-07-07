"use client";

import { Bot } from "lucide-react";

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="animate-float">
        <Bot className="size-12 gradient-text" />
      </div>
      <h1 className="gradient-text text-3xl font-bold">Enterprise AI</h1>
      <p className="text-sm text-muted-foreground">
        Your intelligent workspace assistant
      </p>
    </div>
  );
}
