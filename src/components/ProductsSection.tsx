import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Zap, Moon, Shield, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const featuredProducts = [
  {
    name: "Morosil",
    category: "Emagrecimento",
    description: "Extrato natural que auxilia no controle de peso e na redução da gordura abdominal.",
    benefits: ["Redução da circunferência abdominal", "Controle do peso", "Ação antioxidante"],
    icon: Heart,
    popular: true,
  },
  {
    name: "Cactin",
    category: "Emagrecimento",
    description: "Extrato de cacto que promove saciedade e auxilia no emagrecimento saudável.",
    benefits: ["Aumento da saciedade", "Controle da glicemia", "Auxílio na queima de gordura"],
    icon: Heart,
    popular: true,
  },
  {
    name: "Clonapure",
    category: "Ansiedade",
    description: "Fórmula natural para o controle da ansiedade e melhora do bem-estar mental.",
    benefits: ["Redução da ansiedade", "Melhora do humor", "Relaxamento natural"],
    icon: Brain,
    popular: false,
  },
  {
    name: "Complexo para Sono",
    category: "Sono",
    description: "Combinação de ativos naturais para um sono reparador e de qualidade.",
    benefits: ["Indução natural do sono", "Melhora da qualidade do sono", "Relaxamento noturno"],
    icon: Moon,
    popular: true,
  },
  {
    name: "Liberação de Testosterona",
    category: "Performance",
    description: "Fórmula para otimização natural dos níveis hormonais e da performance.",
    benefits: ["Mais energia", "Melhora da performance", "Bem-estar masculino"],
    icon: Zap,
    popular: false,
  },
  {
    name: "Complexo Imunidade",
    category: "Imunidade",
    description: "Vitaminas e minerais essenciais para fortalecer o sistema imunológico.",
    benefits: ["Fortalecimento imunológico", "Prevenção de gripes", "Mais vitalidade"],
    icon: Shield,
    popular: true,
  },
];

const categories = ["Todos", "Emagrecimento", "Ansiedade", "Sono", "Performance", "Imunidade"];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === selectedCategory);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight text-forest mb-4">
              Fórmulas em destaque
            </h2>
            <p className="text-muted-foreground text-lg">
              Os manipulados mais procurados da FarmaCinallis. Não encontrou o que precisa?
              Preparamos qualquer fórmula a partir da sua receita.
            </p>
          </div>
        </Reveal>

        {/* Filtro por categoria */}
        <Reveal delay={100}>
          <div
            className="flex flex-wrap gap-2.5 mb-12"
            role="group"
            aria-label="Filtrar produtos por categoria"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={category === selectedCategory}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  category === selectedCategory
                    ? "bg-forest text-white"
                    : "bg-card border border-border text-muted-foreground hover:border-leaf/60 hover:text-forest"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grade de produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.name} delay={Math.min(index, 2) * 90}>
              <article className="relative h-full flex flex-col bg-card rounded-2xl border border-border/70 p-6 hover:shadow-medium hover:border-leaf/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-leaf-tint flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-leaf-dark" aria-hidden="true" />
                  </span>
                  {product.popular && (
                    <span className="text-xs font-semibold uppercase tracking-wide bg-leaf text-forest-deep rounded-full px-3 py-1">
                      Mais pedido
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl text-forest">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.category}</p>

                <p className="text-[0.95rem] text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Leaf className="w-4 h-4 text-leaf-dark shrink-0 mt-0.5" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="mt-auto w-full rounded-full" asChild>
                  <a
                    href={waLink(`Olá! Gostaria de saber mais sobre ${product.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Consultar pelo WhatsApp
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA de fórmula personalizada */}
        <Reveal>
          <div className="rounded-3xl bg-leaf-tint border border-leaf/25 p-8 md:p-12 text-center">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-forest mb-3">
              Tem uma receita em mãos?
            </h3>
            <p className="text-muted-foreground max-w-[60ch] mx-auto mb-7">
              Desenvolvemos fórmulas personalizadas de acordo com a sua prescrição médica ou
              necessidade específica. Envie uma foto da receita e receba o orçamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-7" asChild>
                <a
                  href={waLink("Olá! Tenho uma receita e gostaria de um orçamento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Enviar receita agora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-7 bg-transparent" asChild>
                <a href="#contato">Ver canais de atendimento</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductsSection;
