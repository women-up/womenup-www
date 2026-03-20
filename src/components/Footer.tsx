import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import CrossStitchBorder from "./CrossStitchBorder";
import logoWhite from "@/assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream" style={{ background: '#2D2926' }}>
      <CrossStitchBorder />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Logo */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={logoWhite} alt="Women Up! logo" className="h-8 w-auto" />
              <h3 className="font-heading text-2xl font-bold text-primary tracking-brand-wide">
                WOMEN UP!
              </h3>
            </div>
            <p className="text-xs uppercase tracking-brand-wide text-brand-cream/60 mb-4">
              Inicjatywa Społeczna
            </p>
            <p className="text-sm text-brand-cream/70 leading-relaxed">
              Oddolna inicjatywa społeczna z Podlasia. Łączymy kobiety różnych statusów społecznych.
            </p>
          </div>

          {/* Col 2: Nawigacja */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Nawigacja</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/o-nas", label: "O nas" },
                { to: "/inicjatywy", label: "Inicjatywy" },
                { to: "/aktualnosci", label: "Aktualności" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-brand-cream/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Inicjatywy */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Inicjatywy</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-brand-cream/70">Białostoczanka</span>
              <span className="text-sm text-brand-cream/70">LEVEL UP: Kobieta</span>
              <span className="text-sm text-brand-cream/70">#RatujPSA</span>
              <span className="text-sm text-brand-cream/70">Kawa z ekspertem</span>
              <span className="text-sm text-brand-cream/70">The Good Night</span>
            </nav>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="flex items-center gap-2 text-sm text-brand-cream/70 hover:text-primary transition-colors">
                <Mail size={16} /> womenup.inicjatywaspoleczna@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-brand-cream/70">
                <Phone size={16} /> +48 533 874 086
              </span>
              <span className="flex items-center gap-2 text-sm text-brand-cream/70">
                <MapPin size={16} /> Mickiewicza 83 lok. U1, 15-527 Białystok
              </span>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="Facebook" className="text-brand-cream/70 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-brand-cream/70 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-brand-cream/50">© 2026 Women Up! Stowarzyszenie. Wszelkie prawa zastrzeżone.</p>
          <Link to="#" className="text-xs text-brand-cream/50 hover:text-primary transition-colors">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
