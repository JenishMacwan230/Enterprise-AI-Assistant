"use client";

import { PanelLeftClose, Trash2, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatHeaderProps {
  title: string;
  onToggleSidebar: () => void;
  onClear: () => void;
}

export function ChatHeader({
  title,
  onToggleSidebar,
  onClear,
}: ChatHeaderProps) {
  return (
    <TooltipProvider>
      <div className="glass flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border/50 px-4">
        {/* Left: Sidebar Toggle + Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={onToggleSidebar}
                className="shrink-0 text-muted-foreground hover:text-foreground"
              >
                <PanelLeftClose className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Toggle sidebar</TooltipContent>
          </Tooltip>

          <h1 className="truncate text-sm font-semibold text-foreground">
            {title}
          </h1>
        </div>

        {/* Center: Model Selector */}
        <div className="hidden sm:flex items-center">
          <Badge
            variant="secondary"
            className="gap-1.5 px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-primary/20 hover:text-primary"
          >
            <Sparkles className="size-3 text-primary" />
            GPT-4o
          </Badge>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Download className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Export chat</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={onClear}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Clear chat</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
