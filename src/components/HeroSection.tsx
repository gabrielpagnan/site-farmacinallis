import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LeafMotif from "@/components/LeafMotif";
import { waLink } from "@/lib/whatsapp";
// Foto: gryffyn m / Unsplash (licença Unsplash) — frasco de botica com folhas verdes
import botanicalImage from "@/assets/botanical-bottle.jpg";

const facts = [
  "Desde abril de 2000",
  "Drogaria e manipulação",
  "Seg–Sex 8h às 19h · Sáb 8h às 12h",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Folhas decorativas ecoando o símbolo do logo */}
      <LeafMotif className="absolute -top-24 -right-20 w-[28rem] h-[28rem] text-leaf/10 rotate-[160deg] hero-enter-fade" />
      <LeafMotif className="absolute -bottom-32 -left-24 w-[22rem] h-[22rem] text-leaf/[0.07] rotate-12 hero-enter-fade" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center py-20 md:py-24 lg:py-32 lg:min-h-[calc(100svh-5rem)]">
          {/* Conteúdo */}
          <div>
            <p
              className="hero-enter font-display italic text-leaf-bright text-xl md:text-2xl mb-5"
              style={{ animationDelay: "100ms" }}
            >
              Cuidar é a nossa essência
            </p>

            <h1
              className="hero-enter font-display font-semibold text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.08] mb-6 max-w-[14ch]"
              style={{ animationDelay: "220ms" }}
            >
              Fórmulas feitas sob medida para a sua saúde
            </h1>

            <p
              className="hero-enter text-lg md:text-xl text-white/85 max-w-[52ch] mb-10 leading-relaxed"
              style={{ animationDelay: "340ms" }}
            >
              Há mais de 25 anos, a FarmaCinallis une ciência, qualidade e acolhimento em
              Morro da Fumaça — da receita médica à fórmula pronta, com atendimento de quem
              conhece você pelo nome.
            </p>

            <div
              className="hero-enter flex flex-col sm:flex-row gap-4 mb-12"
              style={{ animationDelay: "460ms" }}
            >
              <Button
                size="lg"
                className="rounded-full px-7 py-6 text-base font-semibold bg-leaf text-forest-deep hover:bg-leaf-bright shadow-strong"
                asChild
              >
                <a
                  href={waLink("Olá! Gostaria de enviar uma receita para orçamento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Enviar receita pelo WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7 py-6 text-base border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#servicos">Conhecer nossos serviços</a>
              </Button>
            </div>

            <ul
              className="hero-enter flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/75"
              style={{ animationDelay: "580ms" }}
            >
              {facts.map((fact, index) => (
                <li key={fact} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true" className="w-px h-4 bg-white/25" />}
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem em arco de botica */}
          <div className="hidden lg:block relative hero-enter" style={{ animationDelay: "400ms" }}>
            <div className="relative mx-auto max-w-md">
              <div className="rounded-t-[14rem] rounded-b-3xl overflow-hidden ring-1 ring-white/15 shadow-strong">
                <img
                  src={botanicalImage}
                  alt="Frasco de vidro de botica entre folhas verdes — a essência natural das fórmulas FarmaCinallis"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-8 bg-white text-forest rounded-2xl shadow-strong px-6 py-4 flex items-center gap-4">
                <span className="font-display font-bold text-4xl leading-none text-leaf-dark">25+</span>
                <span className="text-sm font-medium leading-snug text-muted-foreground">
                  anos cuidando
                  <br />
                  da sua saúde
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#quem-somos"
        aria-label="Rolar para a seção Quem Somos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors motion-safe:animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
