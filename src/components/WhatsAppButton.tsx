import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254700000000?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20safari%20bookings."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce hover:animate-none"
  >
    <MessageCircle className="text-white" size={28} />
  </a>
);

export default WhatsAppButton;
