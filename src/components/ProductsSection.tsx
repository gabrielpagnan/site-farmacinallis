import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Zap, Moon, Shield, Sparkles } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const ProductsSection = () => {
  const featuredProducts = [
    {
      name: "Morosil",
      category: "Emagrecimento",
      description: "Extrato natural que auxilia no controle de peso e redução da gordura abdominal.",
      benefits: ["Redução da circunferência abdominal", "Controle do peso", "Antioxidante natural"],
      icon: Heart,
      popular: true
    },
    {
      name: "Cactin",
      category: "Emagrecimento",
      description: "Extrato de cacto que promove saciedade e auxilia no emagrecimento saudável.",
      benefits: ["Aumento da saciedade", "Controle da glicemia", "Queima de gordura"],
      icon: Heart,
      popular: true
    },
    {
      name: "Clonapure",
      category: "Ansiedade",
      description: "Fórmula natural para controle da ansiedade e melhora do bem-estar mental.",
      benefits: ["Redução da ansiedade", "Melhora do humor", "Relaxamento natural"],
      icon: Brain,
      popular: false
    },
    {
      name: "Complexo para Sono",
      category: "Sono",
      description: "Combinação de ativos naturais para promover um sono reparador e de qualidade.",
      benefits: ["Indução natural do sono", "Melhora da qualidade do sono", "Relaxamento noturno"],
      icon: Moon,
      popular: true
    },
    {
      name: "Liberação de Testosterona",
      category: "Performance",
      description: "Fórmula para otimização natural dos níveis hormonais e performance.",
      benefits: ["Aumento da energia", "Melhora da performance", "Bem-estar masculino"],
      icon: Zap,
      popular: false
    },
    {
      name: "Complexo Imunidade",
      category: "Imunidade",
      description: "Vitaminas e minerais essenciais para fortalecer o sistema imunológico.",
      benefits: ["Fortalecimento imunológico", "Prevenção de gripes", "Aumento da vitalidade"],
      icon: Shield,
      popular: true
    }
  ];

  const categories = ["Todos", "Emagrecimento", "Ansiedade", "Sono", "Performance", "Imunidade"];

  return (
    <section id="produtos" className="py-20 bg-pharmacy-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pharmacy-green mb-6">
            Catálogo / Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa seleção de produtos manipulados com qualidade farmacêutica
          </p>
        </div>

        {/* Product Image Hero */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
          <img 
            src={productsImage} 
            alt="Produtos Farmacinallis" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-lg">Produtos manipulados com rigor científico</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "Todos" ? "default" : "outline"} 
              className="px-4 py-2 cursor-pointer hover:shadow-soft transition-shadow"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 relative">
              {product.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-white">
                  Popular
                </Badge>
              )}
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pharmacy-green mb-1">{product.name}</h3>
                  <Badge variant="outline" className="text-xs">{product.category}</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Benefícios:</h4>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-foreground flex items-center">
                      <Sparkles className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" className="w-full" asChild>
                <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                  Consultar Preço
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-8 rounded-2xl shadow-medium">
          <h3 className="text-2xl font-bold text-pharmacy-green mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe pode desenvolver fórmulas personalizadas de acordo com sua receita médica ou necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-medium" asChild>
              <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                Solicitar Fórmula Personalizada
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contato">
                Falar com Farmacêutico
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;