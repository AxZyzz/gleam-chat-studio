import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";
  return (
    <div className={cn("w-full flex", isUser ? "justify-end" : "justify-start")}> 
      <div
        className={cn(
          "max-w-[85%] sm:max-w-[70%] rounded-lg px-4 py-3 text-sm leading-relaxed animate-fade-in",
          isUser
            ? "bg-gradient-primary text-foreground/95 ring-1 ring-primary/30 shadow-glow"
            : "bg-secondary text-secondary-foreground border border-border shadow-elegant"
        )}
        aria-label={isUser ? "User message" : "Assistant message"}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessageBubble;
