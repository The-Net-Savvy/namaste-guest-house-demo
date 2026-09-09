import { MessageCircle } from "lucide-react";

// Demo placeholder number — replace with the guest house's real WhatsApp line.
const WHATSAPP_NUMBER = "2348000000000";
const MESSAGE = encodeURIComponent(
  "Hello Namaste Guest House, I would like to enquire about a stay.",
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (demo placeholder number)"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-lg transition-colors duration-500 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
      <span className="hidden text-[0.65rem] uppercase tracking-[0.2em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
