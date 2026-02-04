import { Link } from "react-router-dom";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishBurrata from "@/assets/dish-burrata.jpg";

const dishes = [
  {
    name: "Carpaccio",
    description: "Finíssimas fatias de carne bovina crua, alcaparras, parmesão e azeite extra virgem",
    image: dishCarpaccio,
    price: "R$ 68",
  },
  {
    name: "Burrata e Crudo",
    description: "Cremosa burrata italiana com presunto cru, tomate confitado e manjericão fresco",
    image: dishBurrata,
    price: "R$ 78",
  },
];

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p
            className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans"
            data-aos="fade-up"
          >
            Especialidades da Casa
          </p>
          <h2
            className="heading-section text-charcoal mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Pratos em Destaque
          </h2>
          <div className="divider-gold" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="card-elegant group cursor-pointer"
              data-aos="zoom-in-elegant"
              data-aos-delay={index * 150}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-burgundy text-cream px-4 py-2 rounded-sm">
                  <span className="font-serif text-lg">{dish.price}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-burgundy transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-body text-sm">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link to="/cardapio" className="btn-primary">
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
