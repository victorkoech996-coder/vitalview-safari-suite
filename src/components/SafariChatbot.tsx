import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MESSAGES = [
  "Ask me anything about tours 👋",
  "Where do you want to go on safari?",
  "Masai Mara? Amboseli? Ask me!",
  "Need a custom itinerary? Let's chat",
];

const WHATSAPP_URL =
  "https://wa.me/254742006589?text=Hi%20VitalView%20Safari%20Bot";

const SafariChatbot = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

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

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBubbleVisible(false);
    setDismissed(true);
    sessionStorage.setItem("safari-chat-dismissed", "1");
  };

  return (
    <>
      <div
        className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2"
        style={{ maxWidth: "calc(100vw - 32px)" }}
      >
        {bubbleVisible && !dismissed && (
          <div
            className="relative bg-white rounded-2xl shadow-lg px-4 py-3 pr-8 text-sm text-earth font-medium animate-fade-in cursor-pointer"
            style={{ maxWidth: "220px" }}
            onClick={() => setModalOpen(true)}
          >
            {MESSAGES[msgIndex]}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss chat bubble"
              className="absolute top-1 right-1 p-1 rounded-full hover:bg-muted transition"
            >
              <X size={12} />
            </button>
            {/* Tail */}
            <span
              className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white rotate-45 shadow-lg"
              style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
            />
          </div>
        )}

        <button
          onClick={() => setModalOpen(true)}
          aria-label="Open Safari Assistant chat"
          className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--safari-green))] to-[hsl(var(--safari-green-light))] shadow-xl flex items-center justify-center hover:scale-110 transition-transform overflow-hidden border-2 border-white"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Hat */}
            <ellipse cx="32" cy="20" rx="20" ry="3" fill="#5a3e1f" />
            <path d="M20 20 Q20 8 32 8 Q44 8 44 20 Z" fill="#7a5530" />
            <rect x="22" y="18" width="20" height="2" fill="#3d2810" />
            {/* Face */}
            <circle cx="32" cy="32" r="12" fill="#8b5a3c" />
            {/* Eyes */}
            <circle cx="28" cy="31" r="1.5" fill="#1a1a1a" />
            <circle cx="36" cy="31" r="1.5" fill="#1a1a1a" />
            {/* Smile */}
            <path
              d="M27 36 Q32 40 37 36"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Body / shirt */}
            <path d="M16 56 Q16 46 32 46 Q48 46 48 56 Z" fill="#2E8B57" />
            {/* Waving hand */}
            <g className="waving-hand" style={{ transformOrigin: "48px 44px" }}>
              <circle cx="50" cy="38" r="4" fill="#8b5a3c" />
              <rect
                x="46"
                y="38"
                width="3"
                height="8"
                rx="1.5"
                fill="#2E8B57"
              />
            </g>
          </svg>
        </button>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-earth">
              Safari Assistant
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-muted rounded-xl p-4 text-sm text-foreground">
              I'll connect you to our team on WhatsApp for instant answers.
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                disabled
              />
              <button
                disabled
                className="p-2.5 rounded-full bg-muted text-muted-foreground"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .waving-hand {
          animation: wave 4s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          70% { transform: rotate(-20deg); }
          80% { transform: rotate(15deg); }
          90% { transform: rotate(-10deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .waving-hand { animation: none !important; }
        }
      `}</style>
    </>
  );
};

export default SafariChatbot;
