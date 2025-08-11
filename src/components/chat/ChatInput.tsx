import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const send = () => {
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="flex gap-2 items-center bg-card/70 border border-border rounded-lg p-2 shadow-elegant">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type a message…"
        className="bg-transparent focus-visible:ring-1 focus-visible:ring-primary"
        aria-label="Message input"
        disabled={disabled}
      />
      <Button
        onClick={send}
        disabled={disabled}
        className="animate-none hover:animate-glow-pulse"
        aria-label="Send message"
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
