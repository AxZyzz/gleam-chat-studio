import { useEffect, useMemo, useState } from "react";
import MessageBubble, { type Message } from "@/components/chat/MessageBubble";
import ChatInput from "@/components/chat/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const Index = () => {
  // SEO: page title and single H1
  useEffect(() => {
    document.title = "AI Chatbot Interface — Professional Dark Glow";
  }, []);

  const initialMessages: Message[] = useMemo(
    () => [
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Hello! I’m your AI assistant. Ask me anything and I’ll reply with concise, helpful answers.",
      },
    ],
    []
  );

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setLoading(true);

    // Placeholder assistant response (no backend yet)
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Thanks! This is a demo response. I can be connected to a backend later for real answers.",
      };
      setMessages((m) => [...m, reply]);
      setLoading(false);
    }, 600);
  };

  return (
    <main className="min-h-screen w-full bg-[radial-gradient(40%_60%_at_70%_10%,hsl(var(--ring)/0.15)_0%,transparent_55%),radial-gradient(40%_40%_at_20%_80%,hsl(var(--ring)/0.12)_0%,transparent_55%)]">
      <header className="container py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-primary shadow-glow" />
            <span className="text-sm tracking-wider text-muted-foreground">Aurora</span>
          </div>
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-foreground">AI Chatbot — Professional Dark Glow</h1>
      </header>

      <section className="container pb-16">
        <Card className="glass-panel shadow-elegant">
          <div className="grid grid-rows-[1fr_auto] h-[70vh] sm:h-[75vh]">
            <ScrollArea className="p-4 sm:p-6">
              <div className="flex flex-col gap-4">
                {messages.map((m) => (
                  <MessageBubble key={m.id} message={m} />
                ))}
                {loading && (
                  <div className="text-sm text-muted-foreground animate-fade-in">Assistant is typing…</div>
                )}
              </div>
            </ScrollArea>
            <div className="p-3 sm:p-4 border-t border-border bg-card/50">
              <ChatInput onSend={handleSend} disabled={loading} />
              <p className="mt-2 text-xs text-muted-foreground">Press Enter to send.</p>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Index;
