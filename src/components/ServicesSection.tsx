import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Shield,
  Moon,
  Zap,
  Sparkles,
  UserCheck,
  ShoppingBag,
  Handshake,
  Check,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LeafMotif from "@/components/LeafMotif";
import { waLink } from "@/lib/whatsapp";

const specialties = [
  {
    icon: Heart,
    title: "Emagrecimento",
    description: "Composições para perda de peso com segurança: Morosil, Cactin e combinações personalizadas.",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Fórmulas para ansiedade, humor e foco, sempre conforme a prescrição médica.",
  },
  {
    icon: Shield,
    title: "Imunidade",
    description: "Vitamina D, complexos vitamínicos e imunomoduladores para fortalecer suas defesas.",
  },
  {
    icon: Moon,
    title: "Sono",
    description: "Melatonina e fitoterápicos calmantes para noites de descanso reparador.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Suplementos para energia, disposição e recuperação muscular no dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Estética",
    description: "Colágeno, antioxidantes e vitaminas para a saúde da pele, cabelos e unhas.",
  },
];

const support = [
  {
    icon: UserCheck,
    title: "Atendimento farmacêutico",
    description: "Orientação profissional sobre posologia e acompanhamento do tratamento.",
  },
  {
    icon: ShoppingBag,
    title: "Drogaria completa",
    description: "Medicamentos convencionais, dermocosméticos e produtos de higiene.",
  },
  {
    icon: Handshake,
    title: "Parcerias profissionais",
    description: "Apoio a médicos e nutricionistas no desenvolvimento de prescrições.",
  },
];

const featureHighlights = [
  "Dosagens ajustadas à sua prescrição",
  "Cápsulas, cremes, soluções e outras formas farmacêuticas",
  "Matérias-primas com procedência e laudo de qualidade",
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary/60">
      <div className="container">
        {/* Cabeçalho da seção */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-12 md:mb-16">
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight text-forest">
              Nossos serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-[55ch]">
              Da manipulação personalizada ao balcão da drogaria: soluções completas em
              saúde, com orientação farmacêutica em cada etapa.
            </p>
          </div>
        </Reveal>

        {/* Painel de destaque: manipulação personalizada */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-8 md:p-12 lg:p-16 mb-14">
            <LeafMotif className="absolute -top-16 -right-12 w-80 h-80 text-leaf/10 rotate-[200deg]" />
            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <h3 className="font-display font-semibold text-3xl md:text-4xl mb-4">
                  Manipulação personalizada
                </h3>
                <p className="text-white/85 text-lg max-w-[58ch] mb-8">
                  Cada organismo é único — e a sua fórmula também deveria ser. Preparamos
                  medicamentos exclusivos, na dose exata da sua receita, com o rigor de um
                  laboratório moderno.
                </p>
                <ul className="space-y-3">
                  {featureHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-leaf/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-leaf-bright" aria-hidden="true" />
                      </span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:text-right">
                <Button
                  size="lg"
                  className="rounded-full px-7 py-6 text-base font-semibold bg-leaf text-forest-deep hover:bg-leaf-bright"
                  asChild
                >
                  <a
                    href={waLink("Olá! Gostaria de um orçamento para uma fórmula manipulada.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    Pedir orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Especialidades */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {specialties.map((specialty, index) => (
            <Reveal key={specialty.title} delay={Math.min(index, 2) * 90}>
              <div className="group h-full bg-card rounded-2xl p-6 border border-border/70 hover:border-leaf/50 hover:shadow-medium transition-all duration-300">
                <specialty.icon
                  className="w-7 h-7 text-leaf-dark mb-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h3 className="font-display font-semibold text-xl text-forest mb-2">
                  {specialty.title}
                </h3>
                <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Serviços de apoio */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 pt-10 border-t border-border">
            {support.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="w-6 h-6 text-leaf-dark shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-forest mb-1">{item.title}</h3>
                  <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
