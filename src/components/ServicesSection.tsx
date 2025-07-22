import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pill, 
  Heart, 
  Brain, 
  Shield, 
  Moon, 
  Zap, 
  Sparkles, 
  UserCheck,
  Stethoscope,
  ShoppingBag,
  Handshake
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Pill,
      title: "Manipulação Personalizada",
      description: "Fórmulas exclusivas sob medida, desenvolvidas especificamente para suas necessidades de saúde.",
      features: ["Dosagens personalizadas", "Formas farmacêuticas variadas", "Matérias-primas de qualidade"]
    },
    {
      icon: Heart,
      title: "Fórmulas para Emagrecimento",
      description: "Composições especializadas para auxiliar no processo de perda de peso com segurança.",
      features: ["Morosil", "Cactin", "Clonapure", "Combinações personalizadas"]
    },
    {
      icon: Brain,
      title: "Saúde Mental",
      description: "Medicamentos manipulados para ansiedade, depressão e bem-estar mental.",
      features: ["Ansiolíticos naturais", "Antidepressivos", "Suplementos para foco"]
    },
    {
      icon: Shield,
      title: "Imunidade",
      description: "Fortalecimento do sistema imunológico com compostos naturais e vitaminas.",
      features: ["Vitamina D", "Complexos vitamínicos", "Imunomoduladores"]
    },
    {
      icon: Moon,
      title: "Fórmulas para Sono",
      description: "Soluções naturais para insônia e distúrbios do sono, promovendo descanso reparador.",
      features: ["Melatonina", "Fitoterápicos calmantes", "Complexos para relaxamento"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Suplementos para melhorar performance física e mental, energia e disposição.",
      features: ["Pré-treino", "Recuperação muscular", "Energia sustentada"]
    },
    {
      icon: Sparkles,
      title: "Estética",
      description: "Produtos para saúde da pele, cabelos e unhas, promovendo beleza de dentro para fora.",
      features: ["Antioxidantes", "Colágeno", "Vitaminas para pele"]
    },
    {
      icon: UserCheck,
      title: "Atendimento Farmacêutico",
      description: "Orientação profissional especializada para uso correto de medicamentos.",
      features: ["Atendimento farmacêutico", "Orientação sobre posologia", "Acompanhamento terapêutico"]
    },
    {
      icon: ShoppingBag,
      title: "Drogaria",
      description: "Produtos farmacêuticos de qualidade, medicamentos e itens de saúde.",
      features: ["Medicamentos convencionais", "Produtos de higiene", "Dermocosméticos"]
    },
    {
      icon: Handshake,
      title: "Parcerias Profissionais",
      description: "Trabalho conjunto com médicos, nutricionistas e outros profissionais da saúde.",
      features: ["Apoio a prescrições", "Desenvolvimento conjunto", "Capacitação profissional"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pharmacy-green mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em saúde, desde manipulação personalizada até atendimento especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pharmacy-green mb-2">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-foreground flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de uma solução específica? Nossa equipe está pronta para desenvolver a fórmula ideal para você.
          </p>
          <Button size="lg" className="shadow-medium" asChild>
            <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento Personalizado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;