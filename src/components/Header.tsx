import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/FarmaCinallis (2).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pharmacy-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo Farmacinallis"
              className="h-16 w-auto max-w-[180px]"
              style={{ background: "transparent" }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#quem-somos" className="text-foreground hover:text-primary transition-colors">Quem Somos</a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://instagram.com/farmacinallis" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#quem-somos" className="text-foreground hover:text-primary transition-colors">Quem Somos</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://instagram.com/farmacinallis" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;