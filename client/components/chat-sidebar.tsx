"use client";

import { Plus, MessageSquare, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface Conversation {
  id: string;
  title: string;
  timestamp: string;
  preview?: string;
}

interface ChatSidebarProps {
  activeId: string | null;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  conversations: Conversation[];
}

export function ChatSidebar({
  activeId,
  onSelect,
  onNewChat,
  conversations,
}: ChatSidebarProps) {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
          Conversations
        </h2>
      </div>

      {/* New Chat Button */}
      <div className="px-3 pb-3">
        <Button
          onClick={onNewChat}
          className="w-full gap-2 gradient-border bg-card hover:bg-primary/10 text-foreground transition-all duration-200 hover:scale-[1.02]"
          variant="outline"
        >
          <Plus className="size-4" />
          New Chat
        </Button>
      </div>

      <Separator className="opacity-50" />

      {/* Conversation List */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 p-2">
          {conversations.map((conversation, index) => (
            <button
              key={conversation.id}
              onClick={() => onSelect(conversation.id)}
              className={cn(
                "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200",
                "hover:bg-sidebar-accent",
                "animate-fade-in-up",
                activeId === conversation.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
              )}
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
            >
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md transition-colors duration-200",
                  activeId === conversation.id
                    ? "bg-primary/20 text-primary"
                    : "bg-sidebar-accent/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                )}
              >
                <MessageSquare className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {conversation.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {conversation.timestamp}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon-xs"
                className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <MoreHorizontal className="size-3.5" />
              </Button>
            </button>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <Separator className="opacity-50" />
      <div className="p-3">
        <div className="rounded-lg bg-sidebar-accent/50 p-3">
          <p className="text-xs font-medium text-muted-foreground">
            Enterprise AI Assistant
          </p>
          <p className="mt-1 text-[10px] text-muted-foreground/60">
            v1.0.0 • Powered by AI
          </p>
        </div>
      </div>
    </div>
  );
}
