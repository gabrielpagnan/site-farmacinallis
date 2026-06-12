import { Button } from "@/components/ui/button";
import { Mail, Instagram, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LeafMotif from "@/components/LeafMotif";
import {
  waLink,
  WHATSAPP_SECONDARY,
  WHATSAPP_PRIMARY_DISPLAY,
  WHATSAPP_SECONDARY_DISPLAY,
} from "@/lib/whatsapp";

const channels = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: [
      { label: WHATSAPP_PRIMARY_DISPLAY, href: waLink() },
      { label: WHATSAPP_SECONDARY_DISPLAY, href: waLink(undefined, WHATSAPP_SECONDARY) },
    ],
    description: "Atendimento rápido para orçamentos e dúvidas",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: [{ label: "farmacinallis@hotmail.com", href: "mailto:farmacinallis@hotmail.com" }],
    description: "Para informações e parcerias",
  },
  {
    icon: Instagram,
    title: "Instagram",
    lines: [{ label: "@farmacinallis", href: "https://instagram.com/farmacinallis" }],
    description: "Novidades, dicas e bastidores",
  },
  {
    icon: MapPin,
    title: "Localização",
    lines: [{ label: "Morro da Fumaça — SC", href: null }],
    description: "Santa Catarina, Brasil",
  },
];

const steps = [
  {
    title: "Fotografe sua receita",
    description: "Uma foto legível da prescrição médica é tudo de que precisamos.",
  },
  {
    title: "Envie pelo WhatsApp",
    description: "Nossa equipe confirma a fórmula e retorna com o orçamento.",
  },
  {
    title: "Retire sua fórmula pronta",
    description: "Avisamos assim que o preparo estiver concluído, com toda orientação de uso.",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary/60">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight text-forest mb-4">
              Fale com a gente
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos prontos para atender você com atenção, orientação e carinho — do jeito
              que uma farmácia de verdade deve ser.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Canais de atendimento */}
          <Reveal>
            <ul className="space-y-2">
              {channels.map((channel) => (
                <li
                  key={channel.title}
                  className="flex gap-4 bg-card rounded-2xl border border-border/70 p-5"
                >
                  <span className="w-11 h-11 rounded-xl bg-leaf-tint flex items-center justify-center shrink-0">
                    <channel.icon className="w-5 h-5 text-leaf-dark" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest">{channel.title}</h3>
                    {channel.lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.label}
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block font-medium text-leaf-dark hover:underline underline-offset-4"
                        >
                          {line.label}
                        </a>
                      ) : (
                        <p key={line.label} className="font-medium text-foreground">
                          {line.label}
                        </p>
                      )
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{channel.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Horário de funcionamento */}
            <div className="mt-6 flex gap-4 rounded-2xl bg-forest text-white p-5">
              <Clock className="w-6 h-6 text-leaf-bright shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-semibold mb-1">Horário de funcionamento</h3>
                <p className="text-white/85 text-[0.95rem]">
                  Segunda a sexta, das 8h às 19h
                  <br />
                  Sábado, das 8h às 12h
                </p>
              </div>
            </div>
          </Reveal>

          {/* Envie sua receita: passo a passo */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-8 md:p-10">
              <LeafMotif className="absolute -bottom-20 -right-16 w-72 h-72 text-leaf/10 rotate-45" />
              <div className="relative">
                <h3 className="font-display font-semibold text-2xl md:text-3xl mb-3">
                  Envie sua receita sem sair de casa
                </h3>
                <p className="text-white/80 mb-8 max-w-[50ch]">
                  Em três passos simples, sua fórmula manipulada fica pronta com todo o
                  cuidado FarmaCinallis.
                </p>

                <ol className="space-y-6 mb-9">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span
                        className="w-9 h-9 rounded-full bg-leaf/20 text-leaf-bright font-display font-bold text-lg flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold mb-0.5">{step.title}</h4>
                        <p className="text-white/75 text-[0.95rem] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 py-6 text-base font-semibold bg-leaf text-forest-deep hover:bg-leaf-bright"
                  asChild
                >
                  <a
                    href={waLink("Olá! Gostaria de enviar uma receita para orçamento.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    Começar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
