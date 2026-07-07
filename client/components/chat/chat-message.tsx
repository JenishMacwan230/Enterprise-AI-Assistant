"use client";

import { Bot } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full gap-3 px-4",
        isUser ? "justify-end" : "justify-start",
        !isUser && "animate-fade-in-up"
      )}
    >
      {/* AI Avatar */}
      {!isUser && (
        <Avatar className="mt-1 shrink-0 ring-2 ring-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary">
            <Bot className="size-4" />
          </AvatarFallback>
        </Avatar>
      )}

      {/* Message Bubble */}
      <div
        className={cn("flex max-w-[75%] flex-col gap-1", isUser && "items-end")}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20"
              : "glass rounded-tl-sm text-card-foreground"
          )}
        >
          {/* Render content with line breaks */}
          {message.content.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < message.content.split("\n").length - 1 && <br />}
            </span>
          ))}
        </div>

        <span className="px-1 text-[10px] text-muted-foreground/60">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
