"use client";

import { Bot, FileText, BarChart3, Search, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ChatEmptyStateProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  {
    title: "Analyze a document",
    description: "Upload and extract insights from any document",
    icon: FileText,
  },
  {
    title: "Generate a report",
    description: "Create comprehensive reports from your data",
    icon: BarChart3,
  },
  {
    title: "Search knowledge base",
    description: "Find information across your organization",
    icon: Search,
  },
  {
    title: "Summarize content",
    description: "Get concise summaries of lengthy content",
    icon: Sparkles,
  },
];

export function ChatEmptyState({ onSuggestionClick }: ChatEmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 animate-fade-in">
      {/* Floating Bot Icon */}
      <div className="relative mb-8">
        <div className="animate-float flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg shadow-primary/10">
          <Bot className="size-10 text-primary" />
        </div>
        {/* Glow ring behind icon */}
        <div className="absolute inset-0 -z-10 animate-pulse-soft rounded-2xl bg-primary/10 blur-xl" />
      </div>

      {/* Heading */}
      <h2 className="gradient-text mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
        How can I help you today?
      </h2>
      <p className="mb-10 max-w-md text-center text-sm text-muted-foreground">
        I can analyze documents, generate reports, search your knowledge base,
        and much more. Choose a suggestion below or type your own message.
      </p>

      {/* Suggestion Cards Grid */}
      <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <Card
              key={suggestion.title}
              className="gradient-border group cursor-pointer border-0 bg-card/50 py-0 transition-all duration-300 hover:scale-[1.03] hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
              style={{
                animationDelay: `${200 + index * 100}ms`,
                animationFillMode: "backwards",
              }}
              onClick={() => onSuggestionClick(suggestion.title)}
            >
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/20">
                  <Icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {suggestion.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {suggestion.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
