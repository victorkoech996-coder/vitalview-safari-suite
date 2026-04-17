import { useEffect, useRef, useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MESSAGES = [
  "Ask me anything about tours ✨",
  "Where do you want to go on safari?",
  "Masai Mara? Amboseli? Ask me!",
  "Need a custom itinerary? Let's chat",
];

const SUGGESTIONS = [
  "Best time to visit Masai Mara?",
  "Plan a 5-day safari",
  "Family-friendly tours",
  "Honeymoon packages",
];

const WHATSAPP_URL =
  "https://wa.me/254742006589?text=Hi%20VitalView%20Safari%20Bot";

type ChatMsg = { role: "bot" | "user"; text: string };

const SafariChatbot = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "bot",
      text: "Hi! I'm your Safari Assistant ✨ Ask me anything — I'll connect you to our team on WhatsApp for instant answers.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("safari-chat-dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const first = setTimeout(() => setBubbleVisible(true), 2000);
    const recur = setInterval(() => setBubbleVisible(true), 15000);
    return () => {
      clearTimeout(first);
      clearInterval(recur);
    };
  }, []);

  useEffect(() => {
    if (!bubbleVisible) return;
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [bubbleVisible]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBubbleVisible(false);
    setDismissed(true);
    sessionStorage.setItem("safari-chat-dismissed", "1");
  };

  const handleSend = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: value },
      {
        role: "bot",
        text: "Thanks! For an instant, personalized answer, tap the WhatsApp button below — our safari experts are standing by 🦁",
      },
    ]);
    setInput("");
  };

  return (
    <>
      <div
        className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2"
        style={{ maxWidth: "calc(100vw - 32px)" }}
      >
        {bubbleVisible && !dismissed && (
          <div
            className="relative bg-white rounded-2xl shadow-2xl px-4 py-3 pr-8 text-sm font-medium animate-fade-in cursor-pointer border border-[hsl(var(--gold))]/20"
            style={{ maxWidth: "240px" }}
            onClick={() => setModalOpen(true)}
          >
            <span className="bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--safari-green))] bg-clip-text text-transparent">
              {MESSAGES[msgIndex]}
            </span>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss chat bubble"
              className="absolute top-1 right-1 p-1 rounded-full hover:bg-muted transition"
            >
              <X size={12} />
            </button>
            <span
              className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white rotate-45 border-r border-b border-[hsl(var(--gold))]/20"
            />
          </div>
        )}

        <button
          onClick={() => setModalOpen(true)}
          aria-label="Open Safari Assistant chat"
          className="ai-orb relative md:w-16 md:h-16 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <span className="ai-orb-glow" />
          <span className="ai-orb-ring" />
          <span className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-dark))] to-[hsl(var(--safari-green))] border-2 border-white/80 shadow-xl">
            <Sparkles className="text-white drop-shadow" size={26} strokeWidth={2.2} />
          </span>
        </button>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md p-0 gap-0 overflow-hidden border-0 bg-gradient-to-b from-[hsl(var(--earth))] to-[#1a1410] text-white">
          {/* Header */}
          <DialogHeader className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[hsl(var(--gold-dark))]/20 to-[hsl(var(--safari-green))]/20">
            <DialogTitle asChild>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--safari-green))] flex items-center justify-center shadow-lg">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[hsl(var(--earth))] animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-lg leading-tight text-white">
                    Safari Assistant
                  </div>
                  <div className="text-xs text-white/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online · Powered by VitalView
                  </div>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="px-4 py-4 space-y-3 max-h-[340px] min-h-[260px] overflow-y-auto scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {m.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--safari-green))] flex items-center justify-center mr-2 mt-0.5 shrink-0 shadow">
                    <Sparkles size={12} className="text-white" />
                  </div>
                )}
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-earth font-medium rounded-br-md shadow-lg"
                      : "bg-white/10 backdrop-blur text-white/95 rounded-bl-md border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Suggestion chips */}
            {messages.length <= 1 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 pt-3 pb-2 border-t border-white/10 bg-black/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))] focus:bg-white/15 transition"
              />
              <button
                type="submit"
                aria-label="Send"
                className="p-2.5 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-earth hover:scale-105 transition shadow-lg disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* WhatsApp CTA */}
          <div className="px-4 pb-4 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-full hover:opacity-90 hover:scale-[1.02] transition shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.4.8-1.4.1-.2 0-.3 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.7-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              Chat on WhatsApp for instant reply
            </a>
            <p className="text-[10px] text-center text-white/40 mt-2">
              AI assistant coming soon · Currently routed to our human experts
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .ai-orb-glow {
          position: absolute;
          inset: -8px;
          border-radius: 9999px;
          background: radial-gradient(circle, hsl(var(--gold) / 0.5) 0%, transparent 70%);
          filter: blur(8px);
          animation: ai-pulse 2.4s ease-in-out infinite;
        }
        .ai-orb-ring {
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          border: 2px solid hsl(var(--gold) / 0.5);
          animation: ai-ring 2.4s ease-out infinite;
        }
        @keyframes ai-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes ai-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ai-orb-glow, .ai-orb-ring { animation: none !important; }
        }
      `}</style>
    </>
  );
};

export default SafariChatbot;
