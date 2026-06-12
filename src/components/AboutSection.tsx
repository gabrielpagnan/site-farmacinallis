import { MapPin, Leaf, FlaskConical, HeartHandshake, Landmark } from "lucide-react";
import Reveal from "@/components/Reveal";
import compoundingImage from "@/assets/compounding-lab.jpg";

const facts = [
  {
    icon: Landmark,
    title: "Desde abril de 2000",
    description: "Mais de 25 anos de história ao lado da comunidade.",
  },
  {
    icon: FlaskConical,
    title: "Rigor em cada fórmula",
    description: "Controle de qualidade em todas as etapas da manipulação.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento próximo",
    description: "Acolhedor, personalizado e de quem conhece você pelo nome.",
  },
  {
    icon: Leaf,
    title: "Referência na região",
    description: "Confiança construída em Morro da Fumaça e cidades vizinhas.",
  },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Imagem do laboratório */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-medium">
              <img
                src={compoundingImage}
                alt="Farmacêutico preparando fórmulas no laboratório de manipulação da FarmaCinallis"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -right-4 bg-forest text-white rounded-2xl shadow-strong px-5 py-3">
              <span className="font-display italic text-leaf-bright">Desde 2000</span>
            </div>
          </Reveal>

          {/* Narrativa */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight text-forest mb-6">
                Uma história que começou em 2000 — e continua em cada receita
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-muted-foreground max-w-[65ch]">
                <p>
                  Desde abril de 2000, a FarmaCinallis faz parte da vida de Morro da Fumaça
                  e região, oferecendo medicamentos manipulados com qualidade,
                  responsabilidade e cuidado personalizado.
                </p>
                <p>
                  Nossa história nasceu do propósito de{" "}
                  <strong className="text-foreground">unir ciência, tecnologia e acolhimento</strong>.
                  Com equipe capacitada, estrutura moderna e rigoroso controle de qualidade,
                  garantimos fórmulas sob medida, feitas com matérias-primas de procedência
                  comprovada.
                </p>
                <p>
                  Mais do que manipular medicamentos,{" "}
                  <strong className="text-foreground">cuidamos de histórias</strong>: acompanhamos
                  de perto cada receita, respeitamos a individualidade de cada tratamento e
                  mantemos o compromisso com a ética e a confiança.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="flex items-center gap-2 mt-7 font-medium text-forest">
                <MapPin className="w-5 h-5 text-leaf-dark shrink-0" />
                Morro da Fumaça — Santa Catarina
              </p>
            </Reveal>
          </div>
        </div>

        {/* Faixa de fatos */}
        <Reveal delay={100}>
          <dl className="mt-16 md:mt-24 pt-10 border-t border-border grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
            {facts.map((fact) => (
              <div key={fact.title} className="flex gap-4">
                <fact.icon className="w-6 h-6 text-leaf-dark shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <dt className="font-display font-semibold text-lg text-forest mb-1">
                    {fact.title}
                  </dt>
                  <dd className="text-[0.95rem] text-muted-foreground leading-relaxed">
                    {fact.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
