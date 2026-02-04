import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={aboutImage}
                alt="Interior do restaurante Furetti Cucina"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/30 rounded-sm -z-10" />
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-burgundy text-cream px-6 py-3 rounded-sm">
              <p className="font-serif text-lg italic">Desde 2015</p>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans">
              Nossa História
            </p>
            <h2 className="heading-section text-charcoal mb-6">
              Tradição e Sabor em Cada Prato
            </h2>
            <div className="divider-gold mb-8 mx-0" />
            <div className="space-y-4 text-body">
              <p>
                O Furetti Cucina ZS nasceu da paixão pela autêntica cozinha italiana. 
                Localizado no coração de Boa Viagem, nosso restaurante traz a alma da 
                Itália para Recife com receitas tradicionais passadas de geração em geração.
              </p>
              <p>
                Cada prato é preparado com ingredientes selecionados e o carinho 
                que só uma verdadeira cozinha italiana pode oferecer. Das nossas 
                massas artesanais aos risotos cremosos, cada mordida é uma viagem 
                à bella Italia.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "🍷", text: "Carta de Vinhos" },
                { icon: "☕", text: "Café Italiano" },
                { icon: "🍸", text: "Coquetéis" },
                { icon: "🍰", text: "Sobremesas" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-sans text-charcoal">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
