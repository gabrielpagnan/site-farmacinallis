import { Card } from "@/components/ui/card";
import { Clock, Award, Heart, Users } from "lucide-react";
import compoundingImage from "@/assets/compounding-lab.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Clock,
      title: "24 anos",
      description: "De experiência desde 2000"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Rigoroso controle em todas as etapas"
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento personalizado e acolhedor"
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Referência em Morro da Fumaça e região"
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pharmacy-green mb-6">
            Quem Somos — Nossa História
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de mais de duas décadas dedicada à sua saúde e bem-estar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-foreground leading-relaxed">
                <strong>Desde abril de 2000</strong>, a Farmacinallis faz parte da vida de Morro da Fumaça e região, 
                oferecendo medicamentos manipulados com qualidade, responsabilidade e cuidado personalizado.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Nossa história começou com o propósito de <strong>unir ciência, tecnologia e acolhimento</strong>, 
                sempre priorizando a saúde e o bem-estar de cada cliente. Com uma equipe capacitada, 
                estrutura moderna e rigoroso controle de qualidade, garantimos fórmulas manipuladas 
                sob medida, feitas com matérias-primas de procedência e segurança.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Ao longo dessas <strong>mais de duas décadas</strong>, nos tornamos referência em manipulação 
                farmacêutica na cidade, acompanhando de perto cada receita e necessidade individual. 
                Mais do que manipular medicamentos, <strong>cuidamos de histórias</strong>, respeitamos a 
                individualidade de cada tratamento e mantemos o compromisso com a ética, a inovação e a confiança.
              </p>
              
              <p className="text-primary font-semibold">
                📍 Estamos em Morro da Fumaça (SC), prontos para atender você com atenção, orientação e carinho.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={compoundingImage} 
                alt="Laboratório de manipulação da Farmacinallis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-pharmacy-green mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;