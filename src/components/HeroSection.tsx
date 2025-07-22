import { Button } from "@/components/ui/button";
import { Phone, Calendar, Pill } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Farmácia Farmacinallis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Farmacinallis
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Cuidar é a nossa essência!
              </p>
            </div>
            
            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Medicamentos manipulados com qualidade, 
                <br />
                responsabilidade e cuidado personalizado.
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Desde 2000, oferecendo fórmulas sob medida para sua saúde e bem-estar 
                em Morro da Fumaça e região.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-pharmacy-green hover:bg-pharmacy-green hover:text-white shadow-strong" asChild>
                <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Fale conosco no WhatsApp
                </a>
              </Button>
              
              <Button size="lg" className="bg-white text-pharmacy-green hover:bg-pharmacy-green hover:text-white shadow-strong" asChild>
                <a href="#produtos">
                  <Pill className="w-5 h-5 mr-2" />
                  Ver catálogos
                </a>
              </Button>
              
              <Button size="lg" className="bg-white text-pharmacy-green hover:bg-pharmacy-green hover:text-white shadow-strong" asChild>
                <a href="#contato">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar atendimento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;