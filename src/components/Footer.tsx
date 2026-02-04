import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 px-4">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <h3 className="font-serif text-2xl text-cream mb-4">
                Furetti <span className="text-gold italic">Cucina</span> ZS
              </h3>
            </Link>
            <p className="text-cream/60 font-sans text-sm leading-relaxed">
              Autêntica cozinha italiana no coração de Boa Viagem. 
              Sabores tradicionais em um ambiente acolhedor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-cream/60 font-sans text-sm hover:text-gold transition-colors duration-300">
                Início
              </Link>
              <Link to="/cardapio" className="text-cream/60 font-sans text-sm hover:text-gold transition-colors duration-300">
                Cardápio
              </Link>
              <a href="/#sobre" className="text-cream/60 font-sans text-sm hover:text-gold transition-colors duration-300">
                Sobre Nós
              </a>
              <a href="/#horarios" className="text-cream/60 font-sans text-sm hover:text-gold transition-colors duration-300">
                Horários
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Contato</h4>
            <div className="space-y-3 text-cream/60 font-sans text-sm">
              <p>Rua Carlos Pereira Falcão, 184</p>
              <p>Boa Viagem, Recife - PE</p>
              <p>
                <a href="tel:+558137870278" className="hover:text-gold transition-colors duration-300">
                  (81) 3787-0278
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 font-sans text-xs">
              © {new Date().getFullYear()} Furetti Cucina ZS. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-cream/40 font-sans text-xs">
                Aceitamos:
              </span>
              <div className="flex gap-2 text-cream/60 text-xs">
                <span>VISA</span>
                <span>•</span>
                <span>Master</span>
                <span>•</span>
                <span>Amex</span>
                <span>•</span>
                <span>Alelo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
