"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }, [value, disabled, onSend]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isEmpty = value.trim().length === 0;

  return (
    <div className="shrink-0 border-t border-border/50 p-4">
      <div className="glass mx-auto flex max-w-3xl items-end gap-3 rounded-2xl p-3">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Enterprise AI..."
          disabled={disabled}
          rows={1}
          className="min-h-[40px] max-h-[140px] flex-1 resize-none border-0 bg-transparent px-2 py-2 text-sm shadow-none placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-transparent"
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleSend}
                disabled={isEmpty || disabled}
                size="icon"
                className="size-9 shrink-0 rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 disabled:opacity-30 glow-primary"
              >
                <ArrowUp className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Send message</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <p className="mt-2 text-center text-[11px] text-muted-foreground/40">
        Press{" "}
        <kbd className="rounded border border-border/50 bg-muted/50 px-1.5 py-0.5 font-mono text-[10px]">
          Enter
        </kbd>{" "}
        to send ·{" "}
        <kbd className="rounded border border-border/50 bg-muted/50 px-1.5 py-0.5 font-mono text-[10px]">
          Shift + Enter
        </kbd>{" "}
        for new line
      </p>
    </div>
  );
}
