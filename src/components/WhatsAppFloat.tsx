import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[var(--z-float)]">
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 motion-safe:animate-ping pointer-events-none"
        aria-hidden="true"
      />
      <a
        href={waLink("Olá! Vim pelo site da FarmaCinallis.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a FarmaCinallis pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-strong transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
