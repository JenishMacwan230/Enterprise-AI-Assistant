"use client";

import { useState, useCallback } from "react";
import { ChatSidebar, type Conversation } from "./_components/chat-sidebar";
import { ChatHeader } from "./_components/chat-header";
import { ChatMessageList } from "./_components/chat-message-list";
import { ChatInput } from "./_components/chat-input";
import { ChatEmptyState } from "./_components/chat-empty-state";
import type { Message } from "./_components/chat-message";
import { cn } from "@/lib/utils";

const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Document Analysis",
    timestamp: "Today, 2:30 PM",
    preview: "Analyze the quarterly report...",
  },
  {
    id: "2",
    title: "Report Generation",
    timestamp: "Today, 11:15 AM",
    preview: "Generate a summary of...",
  },
  {
    id: "3",
    title: "Data Query",
    timestamp: "Yesterday, 4:45 PM",
    preview: "What are the sales figures...",
  },
  {
    id: "4",
    title: "Knowledge Base Search",
    timestamp: "Yesterday, 9:00 AM",
    preview: "Find the latest policy on...",
  },
  {
    id: "5",
    title: "Content Summarization",
    timestamp: "Jul 5, 3:20 PM",
    preview: "Summarize the meeting notes...",
  },
];

const aiResponses = [
  "I've analyzed your request and here's what I found. The data shows several interesting patterns that could be valuable for your decision-making process.\n\nWould you like me to dive deeper into any specific area?",
  "Great question! Based on the available information in your knowledge base, I can provide a comprehensive overview.\n\nHere are the key points:\n• The metrics show a positive trend over the last quarter\n• There are 3 areas that need attention\n• I recommend reviewing the detailed report for actionable insights",
  "I've processed your request successfully. The generated report includes all the relevant data points and visualizations.\n\nLet me know if you'd like me to adjust the format or include additional sections.",
  "I found several relevant documents in your knowledge base. Here's a summary of the most pertinent information:\n\n1. The latest policy was updated on June 15th\n2. Key changes include new compliance requirements\n3. All teams should review the updated guidelines by end of month",
];

function getTimestamp(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationTitle, setConversationTitle] = useState("New Conversation");

  const handleSend = useCallback(
    (content: string) => {
      const userMessage: Message = {
        id: `msg-${Date.now()}`,
        role: "user",
        content,
        timestamp: getTimestamp(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Update title if this is the first message
      if (messages.length === 0) {
        setConversationTitle(
          content.length > 40 ? content.substring(0, 40) + "..." : content
        );
      }

      // Simulate AI response
      setIsTyping(true);
      setTimeout(() => {
        const randomResponse =
          aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const aiMessage: Message = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: randomResponse,
          timestamp: getTimestamp(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    },
    [messages.length]
  );

  const handleNewChat = useCallback(() => {
    setMessages([]);
    setActiveConversationId(null);
    setConversationTitle("New Conversation");
  }, []);

  const handleSelectConversation = useCallback((id: string) => {
    setActiveConversationId(id);
    const conversation = mockConversations.find((c) => c.id === id);
    setConversationTitle(conversation?.title ?? "Conversation");
    // In a real app, load conversation messages here
    setMessages([]);
  }, []);

  const handleClear = useCallback(() => {
    setMessages([]);
  }, []);

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      handleSend(suggestion);
    },
    [handleSend]
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          "shrink-0 border-r border-border/50 transition-all duration-300 ease-in-out overflow-hidden",
          sidebarOpen ? "w-[280px]" : "w-0"
        )}
      >
        <div className="h-full w-[280px]">
          <ChatSidebar
            activeId={activeConversationId}
            onSelect={handleSelectConversation}
            onNewChat={handleNewChat}
            conversations={mockConversations}
          />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <ChatHeader
          title={conversationTitle}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onClear={handleClear}
        />

        {/* Messages or Empty State */}
        {messages.length === 0 ? (
          <ChatEmptyState onSuggestionClick={handleSuggestionClick} />
        ) : (
          <ChatMessageList messages={messages} />
        )}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 px-6 pb-2 animate-fade-in">
            <div className="flex gap-1">
              <span className="size-1.5 rounded-full bg-primary animate-typing" />
              <span
                className="size-1.5 rounded-full bg-primary animate-typing"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="size-1.5 rounded-full bg-primary animate-typing"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <span className="text-xs text-muted-foreground">AI is thinking...</span>
          </div>
        )}

        {/* Input */}
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}
