import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de envio de emails
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp Principal",
      info: "(48) 99843-7993",
      link: "https://wa.me/5548998437993",
      description: "Atendimento rápido via WhatsApp"
    },
    {
      icon: Phone,
      title: "WhatsApp Secundário",
      info: "(48) 99818-3667",
      link: "https://wa.me/5548998183667",
      description: "Segunda opção de contato"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "farmacinallis@hotmail.com",
      link: "mailto:farmacinallis@hotmail.com",
      description: "Para dúvidas e informações"
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@farmacinallis",
      link: "https://instagram.com/farmacinallis",
      description: "Siga-nos para novidades"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Morro da Fumaça - SC",
      link: "#",
      description: "Santa Catarina, Brasil"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
      link: "#",
      description: "Sábado: 8h às 12h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pharmacy-green mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você com atenção, orientação e carinho
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pharmacy-green mb-8">
              Nossos Canais de Atendimento
            </h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-pharmacy-green mb-1">{contact.title}</h4>
                    {contact.link !== "#" ? (
                      <a 
                        href={contact.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium text-lg"
                      >
                        {contact.info}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-lg">{contact.info}</p>
                    )}
                    <p className="text-muted-foreground text-sm mt-1">{contact.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-pharmacy-green mb-8">
              Envie sua Mensagem
            </h3>
            
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp/Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(48) 99999-9999"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Como podemos ajudar você? Descreva sua necessidade ou dúvida..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full shadow-medium">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center bg-pharmacy-green p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de Atendimento Imediato?
          </h3>
          <p className="mb-6 text-white/90">
            Fale conosco agora mesmo pelo WhatsApp para esclarecimentos rápidos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: (48) 99843-7993
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/5548998183667" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: (48) 99818-3667
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;