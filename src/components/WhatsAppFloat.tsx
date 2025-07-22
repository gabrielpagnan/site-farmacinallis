import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-110 bg-green-500 hover:bg-green-600"
        asChild
      >
        <a
          href="https://wa.me/5548998437993"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppFloat;