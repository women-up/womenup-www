import { Link } from "react-router-dom";
import { HandHeart, Flame, Sprout, Users, DoorOpen, Scale, Star, Heart, ArrowRight, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/logo.svg";

const values = [
  { icon: HandHeart, title: "Kobiety Razem", desc: "Solidarność i wsparcie" },
  { icon: Flame, title: "Moc Podlasia", desc: "Siła regionalna" },
  { icon: Sprout, title: "Oddolne Inicjatywy", desc: "Od dołu do góry" },
  { icon: Users, title: "Wspólnie Razem", desc: "Kolektywne działanie" },
  { icon: DoorOpen, title: "Otwartość", desc: "Dla wszystkich kobiet" },
  { icon: Scale, title: "Równość", desc: "Bez barier społecznych" },
];

const initiatives = [
  {
    icon: Star,
    title: "Białostoczanka",
    desc: "Jednodniowe wydarzenie łączące warsztaty, kulturę, networking i zdrowie. Kobiety Podlasia spotykają się, uczą, inspirują i wzmacniają swoją lokalną tożsamość.",
  },
  {
    icon: Flame,
    title: "LEVEL UP: Kobieta",
    desc: "Cały dzień tylko dla kobiet! Warsztaty, inspiracje, aktywności dla zdrowia i dobrej energii — spotkania, które dodają pewności siebie i odkrywają pasje.",
  },
  {
    icon: Heart,
    title: "#RatujPSA",
    desc: "Akcja kobiet wspierających schroniskowe psy w przełamywaniu lęku i budowaniu zaufania. Pomagamy im odkryć świat i pewność siebie.",
  },
];


const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-12 md:py-32 overflow-hidden">
        {/* Diamond pattern background */}
        <div className="absolute inset-0 pattern-diamond" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(354 76% 44%) 20px, hsl(354 76% 44%) 21px),
              repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(354 76% 44%) 20px, hsl(354 76% 44%) 21px)`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <DiamondDivider className="max-w-xs mx-auto" />
          </motion.div>
          {/* Mobile logo */}
          <motion.img
            src={logo}
            alt="Women Up! logo"
            className="md:hidden h-20 w-auto mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.h1
            className="font-heading text-[1.75rem] md:text-[3.5rem] font-bold text-primary tracking-brand-subtle mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Waleczne · Sprawcze · Niezależne
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Stowarzyszenie Women Up! to oddolna inicjatywa społeczna z Podlasia. Łączymy kobiety różnych statusów społecznych — bo razem możemy więcej.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/o-nas">
              <Button className="w-full sm:w-auto uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto">
                Poznaj nas
              </Button>
            </Link>
            <Link to="/inicjatywy">
              <Button variant="outline" className="w-full sm:w-auto uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Nasze inicjatywy
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
            <DiamondDivider className="max-w-xs mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Kim Jesteśmy */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-12">
            Kim Jesteśmy
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Women Up! to przestrzeń dla kobiet, które chcą działać. Nasze członkinie mogą zakładać własne inicjatywy społeczne — od pomocy zwierzętom, przez wsparcie lokalne, po projekty kulturalne. Wierzymy w moc oddolnego działania i siłę kobiecej solidarności.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-background border border-border rounded-sm p-4 text-center hover:border-primary hover:shadow-sm transition-all"
                >
                  <v.icon className="mx-auto mb-2 text-primary" size={28} />
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{v.title}</h4>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Nasze Inicjatywy */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-4">
            Nasze Inicjatywy
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Członkinie Women Up! prowadzą własne projekty społeczne
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((init) => (
              <div
                key={init.title}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <init.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">{init.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{init.desc}</p>
                <Link to="/inicjatywy" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Dowiedz się więcej <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Masz pomysł na inicjatywę?</p>
            <Link to="/dolacz">
              <Button className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto">
                Rozpocznij swoją
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-12">
            Bądź na bieżąco
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Facebook */}
            <div className="bg-card border border-border rounded-sm p-8 text-center">
              <Facebook className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">Women Up! na Facebooku</h4>
              <p className="text-sm text-muted-foreground mb-6">Śledź nas na Facebooku po najnowsze informacje</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button className="uppercase tracking-brand-wide text-xs font-semibold px-6">
                  Odwiedź Facebook
                </Button>
              </a>
            </div>
            {/* Instagram */}
            <div className="bg-card border border-border rounded-sm p-8 text-center">
              <Instagram className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">Śledź nas na Instagramie</h4>
              <div className="grid grid-cols-3 gap-2 mb-6 max-w-xs mx-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-secondary rounded-sm flex items-center justify-center">
                    <span className="text-primary text-sm">◆</span>
                  </div>
                ))}
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button className="uppercase tracking-brand-wide text-xs font-semibold px-6">
                  Śledź na Instagramie
                </Button>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Dołącz CTA */}
      <AnimatedSection className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold mb-4">
            Dołącz do Women Up!
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-8">
            Otwartość na wszystkie kobiety — niezależnie od statusu społecznego. Razem tworzymy zmianę.
          </p>
          <Link to="/kontakt">
            <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
              Skontaktuj się z nami
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
