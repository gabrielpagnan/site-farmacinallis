import { Mail, Instagram, MapPin, Heart } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  waLink,
  WHATSAPP_SECONDARY,
  WHATSAPP_PRIMARY_DISPLAY,
  WHATSAPP_SECONDARY_DISPLAY,
} from "@/lib/whatsapp";
import logo from "@/assets/FarmaCinallis (2).png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#contato", label: "Contato" },
];

const serviceItems = [
  "Manipulação personalizada",
  "Fórmulas para emagrecimento",
  "Saúde mental e sono",
  "Atendimento farmacêutico",
  "Drogaria completa",
  "Parcerias profissionais",
];

const Footer = () => {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Marca */}
          <div>
            <img
              src={logo}
              alt="FarmaCinallis — Drogaria e Farmácia de Manipulação"
              className="h-12 w-auto brightness-0 invert opacity-95 mb-5"
            />
            <p className="font-display italic text-leaf-bright text-lg mb-3">
              Cuidar é a nossa essência
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-[40ch]">
              Há mais de 25 anos cuidando da sua saúde com medicamentos manipulados de
              qualidade, responsabilidade e atendimento personalizado.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="font-display font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {serviceItems.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-4 h-4 mt-0.5 text-leaf-bright shrink-0" />
                <span>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {WHATSAPP_PRIMARY_DISPLAY}
                  </a>
                  <a
                    href={waLink(undefined, WHATSAPP_SECONDARY)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {WHATSAPP_SECONDARY_DISPLAY}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-leaf-bright shrink-0" aria-hidden="true" />
                <a
                  href="mailto:farmacinallis@hotmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  farmacinallis@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-leaf-bright shrink-0" aria-hidden="true" />
                <a
                  href="https://instagram.com/farmacinallis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  @farmacinallis
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-leaf-bright shrink-0" aria-hidden="true" />
                <span className="text-white/80">Morro da Fumaça — SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} FarmaCinallis. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com
            <Heart className="w-4 h-4 text-leaf-bright fill-current" aria-hidden="true" />
            para cuidar da sua saúde
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
