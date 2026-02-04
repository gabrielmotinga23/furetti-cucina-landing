import { Clock, MapPin, Phone } from "lucide-react";

const schedule = [
  { day: "Segunda-feira", hours: "Fechado" },
  { day: "Terça-feira", hours: "Fechado" },
  { day: "Quarta-feira", hours: "12:00 – 15:00 | 18:00 – 22:00" },
  { day: "Quinta-feira", hours: "12:00 – 15:00 | 18:00 – 22:00" },
  { day: "Sexta-feira", hours: "12:00 – 15:00 | 18:00 – 23:00" },
  { day: "Sábado", hours: "12:00 – 16:00 | 18:00 – 23:00" },
  { day: "Domingo", hours: "12:00 – 16:00 | 18:00 – 21:00" },
];

const Hours = () => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1; // Convert to our array index

  return (
    <section id="horarios" className="section-padding bg-cream relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Hours */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gold" />
              <p className="text-gold tracking-[0.2em] uppercase text-sm font-sans">
                Horários de Funcionamento
              </p>
            </div>
            <h2 className="heading-section text-charcoal mb-8">
              Quando nos Visitar
            </h2>
            <div className="divider-gold mb-10 mx-0" />

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-3 border-b border-charcoal/10 ${
                    index === dayIndex ? "bg-gold/10 px-4 -mx-4 rounded-sm" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <span className={`font-sans ${index === dayIndex ? "font-semibold text-burgundy" : "text-charcoal"}`}>
                    {item.day}
                    {index === dayIndex && (
                      <span className="ml-2 text-xs bg-burgundy text-cream px-2 py-0.5 rounded-sm">
                        Hoje
                      </span>
                    )}
                  </span>
                  <span className={`font-sans text-sm ${item.hours === "Fechado" ? "text-burgundy" : "text-warm-gray"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="bg-charcoal rounded-sm p-8 md:p-12 h-full">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-sans">
                Localização
              </p>
              <h3 className="font-serif text-2xl text-cream mb-8">
                Venha nos Conhecer
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-cream font-sans mb-1">Endereço</p>
                    <p className="text-cream/70 font-sans text-sm leading-relaxed">
                      Rua Carlos Pereira Falcão, 184<br />
                      Boa Viagem, Recife - PE<br />
                      CEP: 51021-350
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-cream font-sans mb-1">Telefone</p>
                    <a
                      href="tel:+558137870278"
                      className="text-cream/70 font-sans text-sm hover:text-gold transition-colors duration-300"
                    >
                      (81) 3787-0278
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-cream/10">
                  <p className="text-cream/50 font-sans text-xs mb-4 uppercase tracking-wider">
                    Acessibilidade
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-cream/10 text-cream/80 px-3 py-1.5 rounded-sm text-xs font-sans">
                      ♿ Entrada Acessível
                    </span>
                    <span className="bg-cream/10 text-cream/80 px-3 py-1.5 rounded-sm text-xs font-sans">
                      🚻 Banheiro Acessível
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Rua+Carlos+Pereira+Falcão,+184,+Boa+Viagem,+Recife+-+PE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-block w-full text-center"
                >
                  Ver no Mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
