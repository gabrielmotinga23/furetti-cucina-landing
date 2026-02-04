import { Phone, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-burgundy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-cream/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-cream/5 rounded-full" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto">
          <p
            className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans"
            data-aos="fade-up"
          >
            Reserve sua Mesa
          </p>
          <h2
            className="heading-section text-cream mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Faça seu Pedido ou Reserva
          </h2>
          <div className="w-20 h-0.5 mx-auto mb-8 bg-gold" data-aos="fade-up" data-aos-delay="200" />
          <p
            className="text-cream/80 font-sans text-lg mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Entre em contato conosco para garantir a melhor experiência. 
            Estamos prontos para recebê-lo com todo o carinho italiano.
          </p>

          <div
            className="grid sm:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="tel:+558137870278"
              className="group bg-cream/10 backdrop-blur-sm rounded-sm p-6 hover:bg-cream/20 transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-cream font-serif text-lg mb-1">Ligar</p>
              <p className="text-cream/60 font-sans text-sm">(81) 3787-0278</p>
            </a>

            <a
              href="https://wa.me/558137870278"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream/10 backdrop-blur-sm rounded-sm p-6 hover:bg-cream/20 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-cream font-serif text-lg mb-1">WhatsApp</p>
              <p className="text-cream/60 font-sans text-sm">Enviar Mensagem</p>
            </a>

            <a
              href="https://maps.google.com/?q=Rua+Carlos+Pereira+Falcão,+184,+Boa+Viagem,+Recife+-+PE"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream/10 backdrop-blur-sm rounded-sm p-6 hover:bg-cream/20 transition-all duration-300"
            >
              <Navigation className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-cream font-serif text-lg mb-1">Rotas</p>
              <p className="text-cream/60 font-sans text-sm">Ver no Google Maps</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
