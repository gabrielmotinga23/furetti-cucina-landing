import { Wine, Coffee, Users, Heart, Wifi, CreditCard } from "lucide-react";

const highlights = [
  {
    icon: Wine,
    title: "Carta de Vinhos",
    description: "Seleção exclusiva de vinhos italianos e internacionais",
  },
  {
    icon: Coffee,
    title: "Café Premium",
    description: "Grãos importados para um espresso autêntico",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Perfeito para grupos e momentos especiais",
  },
  {
    icon: Heart,
    title: "Romântico",
    description: "Ideal para jantares a dois com velas",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Conectado enquanto aprecia nossos pratos",
  },
  {
    icon: CreditCard,
    title: "Todas as Formas",
    description: "Aceitamos cartões, vale refeição e NFC",
  },
];

const Highlights = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <p
            className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans"
            data-aos="fade-up"
          >
            Por que nos escolher
          </p>
          <h2
            className="heading-section text-cream mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Uma Experiência Completa
          </h2>
          <div className="divider-gold" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-cream/10 rounded-sm hover:border-gold/30 transition-all duration-500 hover:bg-cream/5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl text-cream mb-3">{item.title}</h3>
              <p className="text-cream/60 font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
