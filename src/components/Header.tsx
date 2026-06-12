import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logo from "@/assets/FarmaCinallis (2).png";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] bg-background/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-soft" : "shadow-none"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#inicio" className="shrink-0" aria-label="FarmaCinallis — voltar ao início">
            <img src={logo} alt="FarmaCinallis — Drogaria e Farmácia de Manipulação" className="h-12 md:h-14 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-[0.95rem] font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://instagram.com/farmacinallis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da FarmaCinallis"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild className="rounded-full px-5">
              <a href={waLink("Olá! Vim pelo site da FarmaCinallis.")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 rounded-md text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="menu-mobile" className="lg:hidden pb-6 border-t border-border pt-4">
            <nav className="flex flex-col gap-1" aria-label="Navegação principal">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-medium text-foreground/85 hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 mt-4 px-3">
              <Button asChild className="flex-1 rounded-full">
                <a href={waLink("Olá! Vim pelo site da FarmaCinallis.")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full shrink-0" asChild>
                <a
                  href="https://instagram.com/farmacinallis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da FarmaCinallis"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
