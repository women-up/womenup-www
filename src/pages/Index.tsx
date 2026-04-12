import { Link } from "react-router-dom";
import { Heart, Briefcase, Shield, BookOpen, Users, Scale, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/logo.svg";

const wisdom = [
  {
    icon: Heart,
    title: "Witalność",
    label: "Zdrowie to nasza Witalność",
    desc: "Jak dawne zielarki, dbamy o ciało z czułością i szacunkiem. Nie czekamy, aż zabraknie sił \u2013 profilaktyka to nasz rytuał, a medycyna to nasza tarcza. Nasze zdrowie jest święte, bo jest źródłem naszej energii.",
  },
  {
    icon: Briefcase,
    title: "Sprawczość",
    label: "Kariera to nasza Sprawczość",
    desc: "Budujemy firmy i karierę nie przez walkę, a przez mądrość i współpracę. Jesteśmy Przewodniczkami. Wiemy jak pomnażać dobrobyt, chronić swoje finanse i zarządzać \u201Eposagiem\u201D współczesności z godnością i sprytem.",
  },
  {
    icon: Shield,
    title: "Inicjacja",
    label: "Kryzys to nasza Inicjacja",
    desc: "Kiedy przychodzi \u201EZima Duszy\u201D \u2013 problemy w firmie, urzędach czy w domu \u2013 nie chowamy się w cieniu. Wtedy rozpalamy ogień. Prawo, psychologia i wsparcie sióstr to nasze pochodnie. Wyjdziemy z mroku silniejsze, bo znamy drogę.",
  },
];

const beliefs = [
  {
    icon: BookOpen,
    title: "W wiedzę, która daje wolność",
    desc: "Rozmawiamy o zdrowiu bez lęku i o seksie bez wstydu. Wiemy, że zrozumienie własnego ciała to nasz pierwszy krok do odzyskania mocy.",
  },
  {
    icon: Users,
    title: "W solidarność zamiast rywalizacji",
    desc: "Women Up! to nie sztywny klub, to nowoczesny krąg. Kiedy jedna z nas idzie w górę, podaje rękę kolejnej. Twoja kariera jest naszą wspólną radością.",
  },
  {
    icon: Scale,
    title: "W prawo od kryzysu",
    desc: "Nie uciekamy, gdy życie rzuca kłody pod nogi. Jesteśmy tu, by dać Ci \u201EZłotą Teczkę\u201D \u2013 konkretne narzędzia prawne, psychologiczne i biznesowe, gdy grunt usuwa się spod stóp. Problemy z urzędem, firmą czy bliskimi nie są Twoim wstydem \u2013 są wyzwaniem, przed którym nie stoisz sama.",
  },
  {
    icon: Sparkles,
    title: "W autentyczność",
    desc: "Ściągamy maski \u201Eidealnych kobiet\u201D. W Women Up! jest miejsce na Twój sukces, Twoje łzy, Twoją ambicję i Twój odpoczynek.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-12 md:py-32 overflow-hidden">
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

      {/* Manifest Women Up! */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-4">
            Manifest Women Up!
          </h2>
          <p className="text-center text-lg md:text-xl font-heading font-semibold text-foreground mb-8">
            Słowiańska krew. Współczesna moc.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-base md:text-lg text-foreground leading-relaxed text-center mb-4">
              Nie czekamy na zaproszenie do stołu. Same rozstawiamy krąg.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center">
              W Białymstoku, gdzie wiatr niesie szept przodkiń, a lasy pamiętają imiona bogiń, budzimy nową siłę. Jesteśmy Białostoczankami. Kobietami, które wiedzą, że korzenie dają moc, by sięgać gwiazd, a twarde stąpanie po ziemi pozwala przetrwać każdą burzę.
            </p>
          </div>

          <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary text-center mb-8">
            Nasza mądrość
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {wisdom.map((w) => (
              <div
                key={w.title}
                className="bg-background border border-border rounded-sm p-8 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <w.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{w.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Obietnica Kręgu */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-4">
            Obietnica Kręgu
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              Women Up! to Twoja bezpieczna przystań i Twój bastion. Tu nie musisz niczego udawać. Tu Twoja intuicja spotyka się z paragrafem, a słowiańska dusza z nowoczesnym biznesem.
            </p>
            <p className="text-base md:text-lg text-foreground font-semibold leading-relaxed">
              Podnieś głowę. Poczuj tę moc. Stań z nami w kręgu. Women Up! — Bo każda z nas jest Wiedzącą.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* W co wierzymy? */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold text-primary text-center mb-12">
            W co wierzymy?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="bg-background border border-border rounded-sm p-8 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <b.icon className="text-primary" size={28} />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{b.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Dolacz CTA */}
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
