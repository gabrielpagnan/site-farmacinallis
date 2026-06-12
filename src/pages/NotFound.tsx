import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import LeafMotif from "@/components/LeafMotif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente acessada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero text-white px-6">
      <LeafMotif className="absolute -top-24 -right-20 w-96 h-96 text-leaf/10 rotate-[160deg]" />
      <div className="relative text-center max-w-md">
        <p className="font-display font-bold text-7xl md:text-8xl text-leaf-bright mb-4">404</p>
        <h1 className="font-display font-semibold text-2xl md:text-3xl mb-3">
          Página não encontrada
        </h1>
        <p className="text-white/75 mb-8">
          O endereço que você procurou não existe. Volte para o início e encontre o que
          precisa.
        </p>
        <Button
          size="lg"
          className="rounded-full px-7 bg-leaf text-forest-deep hover:bg-leaf-bright font-semibold"
          asChild
        >
          <Link to="/">Voltar ao início</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
