import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    name: "Antipasti",
    description: "Entradas para abrir o apetite",
    items: [
      { name: "Carpaccio di Manzo", description: "Finas fatias de carne crua, rúcula, alcaparras e lascas de parmesão", price: "R$ 68" },
      { name: "Burrata e Crudo", description: "Burrata cremosa com presunto San Daniele e tomate confitado", price: "R$ 78" },
      { name: "Bruschetta Mista", description: "Trio de bruschettas: tomate, funghi e gorgonzola", price: "R$ 42" },
      { name: "Polpo alla Griglia", description: "Polvo grelhado com batatas ao murro e aioli de limão siciliano", price: "R$ 89" },
      { name: "Vitello Tonnato", description: "Finas fatias de vitela com molho de atum e alcaparras", price: "R$ 72" },
    ],
  },
  {
    name: "Paste",
    description: "Massas artesanais frescas",
    items: [
      { name: "Tagliatelle al Tartufo", description: "Massa fresca com creme de trufas negras e parmesão", price: "R$ 98" },
      { name: "Spaghetti alla Carbonara", description: "Receita tradicional com guanciale, ovo e pecorino", price: "R$ 72" },
      { name: "Pappardelle al Ragù", description: "Massa larga com ragù de carne cozido lentamente por 8 horas", price: "R$ 78" },
      { name: "Ravioli di Zucca", description: "Ravióli de abóbora com manteiga de sálvia e amaretti", price: "R$ 82" },
      { name: "Linguine allo Scoglio", description: "Linguine com frutos do mar: camarão, vôngole e mexilhões", price: "R$ 118" },
      { name: "Cacio e Pepe", description: "Clássico romano com pecorino e pimenta preta", price: "R$ 62" },
    ],
  },
  {
    name: "Gnocchi",
    description: "Nhoque artesanal da casa",
    items: [
      { name: "Gnocchi alla Sorrentina", description: "Nhoque gratinado com molho de tomate e muçarela de búfala", price: "R$ 68" },
      { name: "Gnocchi al Gorgonzola", description: "Nhoque ao creme de gorgonzola e nozes caramelizadas", price: "R$ 72" },
      { name: "Gnocchi alla Bolognese", description: "Nhoque com tradicional ragù bolonhesa", price: "R$ 68" },
    ],
  },
  {
    name: "Risotti",
    description: "Risotos cremosos preparados na hora",
    items: [
      { name: "Risotto ai Funghi Porcini", description: "Risoto de cogumelos porcini com óleo trufado", price: "R$ 88" },
      { name: "Risotto alla Milanese", description: "Tradicional risoto de açafrão italiano", price: "R$ 78" },
      { name: "Risotto al Nero di Seppia", description: "Risoto negro com lula e frutos do mar", price: "R$ 98" },
      { name: "Risotto ai Gamberi", description: "Risoto de camarões rosa com toque de limão siciliano", price: "R$ 108" },
    ],
  },
  {
    name: "Secondi",
    description: "Pratos principais",
    items: [
      { name: "Ossobuco alla Milanese", description: "Ossobuco de vitela cozido lentamente com gremolata", price: "R$ 128" },
      { name: "Filetto al Pepe Verde", description: "Filé mignon ao molho de pimenta verde", price: "R$ 118" },
      { name: "Saltimbocca alla Romana", description: "Escalope de vitela com presunto e sálvia", price: "R$ 98" },
      { name: "Salmone in Crosta", description: "Salmão em crosta de ervas com risoto de limão", price: "R$ 108" },
      { name: "Pollo alla Parmigiana", description: "Peito de frango empanado com molho de tomate e muçarela", price: "R$ 78" },
    ],
  },
  {
    name: "Dolci",
    description: "Sobremesas para adoçar",
    items: [
      { name: "Tiramisù", description: "Clássico italiano com mascarpone e café espresso", price: "R$ 38" },
      { name: "Panna Cotta", description: "Creme de baunilha com calda de frutas vermelhas", price: "R$ 32" },
      { name: "Cannoli Siciliani", description: "Crocante massa recheada com ricota e pistache", price: "R$ 36" },
      { name: "Affogato", description: "Sorvete de creme afogado em espresso", price: "R$ 28" },
      { name: "Torta della Nonna", description: "Torta de creme com pinoli e açúcar de confeiteiro", price: "R$ 34" },
    ],
  },
  {
    name: "Vini",
    description: "Seleção da nossa carta de vinhos",
    items: [
      { name: "Chianti Classico DOCG", description: "Toscana, Itália - Taça", price: "R$ 38" },
      { name: "Barolo DOCG", description: "Piemonte, Itália - Taça", price: "R$ 58" },
      { name: "Prosecco DOC", description: "Vêneto, Itália - Taça", price: "R$ 32" },
      { name: "Amarone della Valpolicella", description: "Vêneto, Itália - Garrafa", price: "R$ 420" },
      { name: "Brunello di Montalcino", description: "Toscana, Itália - Garrafa", price: "R$ 380" },
    ],
  },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-charcoal">
        <div className="container-custom text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm">Voltar ao Início</span>
          </Link>
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans">
            Il Nostro Menu
          </p>
          <h1 className="heading-display text-cream mb-6">Cardápio</h1>
          <div className="divider-gold mb-6" />
          <p className="text-cream/70 font-serif text-lg italic max-w-2xl mx-auto">
            Pratos preparados com ingredientes selecionados e todo o amor da cozinha italiana
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          {menuCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="mb-16 last:mb-0"
              data-aos="fade-up"
              data-aos-delay={catIndex * 50}
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-2">
                  {category.name}
                </h2>
                <p className="text-warm-gray font-sans text-sm italic">
                  {category.description}
                </p>
                <div className="w-16 h-0.5 mx-auto mt-4 bg-gold/50" />
              </div>

              {/* Items */}
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group flex justify-between items-start gap-4 py-4 border-b border-charcoal/10 hover:border-gold/30 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-delay={itemIndex * 30}
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-charcoal group-hover:text-burgundy transition-colors duration-300 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-warm-gray font-sans text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="font-serif text-lg text-burgundy">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="text-center mt-16 pt-8 border-t border-charcoal/10">
            <p className="text-warm-gray font-sans text-sm italic">
              * Cardápio sujeito a alterações conforme disponibilidade de ingredientes
            </p>
            <p className="text-warm-gray font-sans text-xs mt-2">
              Informações sobre alergênicos disponíveis com nossos garçons
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="container-custom text-center">
          <div className="bg-burgundy rounded-sm p-10 md:p-16">
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Pronto para Saborear?
            </h3>
            <p className="text-cream/70 font-sans mb-8 max-w-xl mx-auto">
              Faça sua reserva e garanta a melhor experiência gastronômica italiana em Recife.
            </p>
            <a href="tel:+558137870278" className="btn-gold">
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
