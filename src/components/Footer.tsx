import { Phone, Mail, Instagram, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pharmacy-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-pharmacy-green font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Farmacinallis</h3>
              </div>
            </div>
            <p className="text-white/90 mb-4 font-medium">
              Cuidar é a nossa essência
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Mais de 24 anos cuidando da sua saúde com medicamentos manipulados de qualidade, 
              responsabilidade e cuidado personalizado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-white/80 hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-white/80 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Manipulação Personalizada</li>
              <li className="text-white/80">Fórmulas para Emagrecimento</li>
              <li className="text-white/80">Saúde Mental</li>
              <li className="text-white/80">Atendimento Farmacêutico</li>
              <li className="text-white/80">Drogaria</li>
              <li className="text-white/80">Parcerias Profissionais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="https://wa.me/5548998437993" target="_blank" rel="noopener noreferrer" 
                     className="text-white/90 hover:text-white block">
                    (48) 99843-7993
                  </a>
                  <a href="https://wa.me/5548998183667" target="_blank" rel="noopener noreferrer" 
                     className="text-white/90 hover:text-white block">
                    (48) 99818-3667
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:farmacinallis@hotmail.com" 
                   className="text-white/90 hover:text-white text-sm">
                  farmacinallis@hotmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <a href="https://instagram.com/farmacinallis" target="_blank" rel="noopener noreferrer" 
                   className="text-white/90 hover:text-white text-sm">
                  @farmacinallis
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">
                  Morro da Fumaça - SC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Farmacinallis. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-white/90 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para cuidar da sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;