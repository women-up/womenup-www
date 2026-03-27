import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
{ to: "/o-nas", label: "O nas" },
{ to: "/inicjatywy", label: "Inicjatywy" },
{ to: "/kontakt", label: "Kontakt" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Women Up! logo" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold text-primary tracking-brand-wide leading-none">
              WOMEN UP!
            </span>
            


          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-medium transition-colors hover:text-primary ${
            location.pathname === link.to ? "text-primary" : "text-foreground"}`
            }>

              {link.label}
            </Link>
          )}
        </nav>

        {/* Desktop CTA */}
        <Link to="/dolacz" className="hidden md:block">
          <Button className="uppercase tracking-brand-wide text-xs font-semibold px-6">
            Dołącz do nas
          </Button>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu">

          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`text-base font-medium py-2 transition-colors hover:text-primary ${
            location.pathname === link.to ? "text-primary" : "text-foreground"}`
            }>

                {link.label}
              </Link>
          )}
            <Link to="/dolacz" onClick={() => setOpen(false)}>
              <Button className="w-full uppercase tracking-brand-wide text-xs font-semibold mt-2">
                Dołącz do nas
              </Button>
            </Link>
          </nav>
        </div>
      }
    </header>);

};

export default Navbar;