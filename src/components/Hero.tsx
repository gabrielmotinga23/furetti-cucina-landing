import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        );

      // Parallax effect on scroll
      gsap.to(heroRef.current?.querySelector(".hero-bg"), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay - gradient suave de baixo para cima */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-gold/30 rotate-45 animate-float opacity-20" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-6 opacity-90">
            Ristorante Italiano
          </p>
          <h1
            ref={titleRef}
            className="heading-display text-cream mb-6"
          >
            Furetti{" "}
            <span className="italic text-gold">Cucina</span>{" "}
            ZS
          </h1>
          <div className="divider-gold mb-8" />
          <p
            ref={subtitleRef}
            className="font-serif text-xl md:text-2xl text-cream/90 italic mb-10"
          >
            Um pedacinho da Itália em Recife
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+558137870278" className="btn-gold">
              Fazer Reserva
            </a>
            <a href="/cardapio" className="btn-outline border-cream/50 text-cream hover:bg-cream hover:text-charcoal">
              Ver Cardápio
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
