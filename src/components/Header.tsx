import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cardápio", href: "/cardapio" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Horários", href: "/#horarios" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/70 backdrop-blur-xl shadow-lg py-3 border-b border-cream/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="group">
          <h1 className="font-serif text-xl md:text-2xl font-medium text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
            Furetti <span className="text-gold italic">Cucina</span> ZS
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-sans tracking-wider uppercase text-cream/80 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === link.href ? "text-gold after:scale-x-100" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+558137870278"
            className="btn-gold text-xs px-6 py-3"
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-cream transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-cream transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-cream transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-charcoal/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-sans tracking-wider uppercase text-cream/80 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+558137870278" className="btn-gold text-xs px-6 py-3">
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
