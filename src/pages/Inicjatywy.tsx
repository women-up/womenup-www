import { useState } from "react";
import { Heart, Star, Flame, Coffee, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const allInitiatives = [
  { icon: Star, title: "Białostoczanka", desc: "Jednodniowe wydarzenie łączące warsztaty, kulturę, networking i zdrowie.", status: "Aktywne", full: "Jednodniowe wydarzenie, które łączy warsztaty, kulturę, networking i zdrowie. Kobiety Podlasia spotykają się, uczą, inspirują i wzmacniają swoją lokalną tożsamość – razem tworząc społeczność pełną energii i możliwości." },
  { icon: Flame, title: "LEVEL UP: Kobieta", desc: "Rozwijaj się świadomie — na swoich zasadach. Cały dzień tylko dla kobiet!", status: "Aktywne", full: "To wyjątkowa okazja, by w jednym miejscu połączyć warsztaty, inspiracje, aktywności dla zdrowia i dobrej energii. Cały dzień wypełniony spotkaniami, które dodają pewności siebie, odkrywają pasje i pozwalają poczuć moc wspólnoty. Przyjdź, poczuj inspirację, zrelaksuj się i odkryj swoje szczęście w gronie kobiet, które tak jak Ty chcą rozwijać się, czerpać energię i celebrować życie!" },
  { icon: Heart, title: "#RatujPSA", desc: "Akcja kobiet wspierających schroniskowe psy w przełamywaniu lęku i budowaniu zaufania.", status: "Aktywne", full: "Women Up to akcja kobiet, które wspierają schroniskowe psy w przełamywaniu lęku i budowaniu zaufania. Pracujemy z tymi, które boją się wychodzić z boksów, pomagając im odkryć świat i pewność siebie. Każdy gest zmienia ich życie na lepsze!" },
  { icon: Coffee, title: "Kawa z ekspertem", desc: "Kameralne spotkania z ekspertami przy filiżance kawy (do 25 osób).", status: "Aktywne", full: "Kameralne spotkania, podczas których eksperci dzielą się swoją wiedzą i doświadczeniem przy filiżance kawy. To okazja, by zdobyć praktyczne wskazówki, zadawać pytania i nawiązać wartościowe kontakty w przyjaznej, kameralnej atmosferze (do 25 osób)." },
  { icon: Sparkles, title: "The Good Night — Wieczór z Misją", desc: "Elegancki bal charytatywny z licytacjami, organizowany przez kobiety.", status: "Aktywne", full: "Inicjatywa kobiet, które zapraszają mężczyzn na elegancki bal zmieniający rzeczywistość w ramach licytacji charytatywnych." },
];

const Inicjatywy = () => {
  const [filter, setFilter] = useState("Wszystkie");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "Wszystkie" ? allInitiatives : allInitiatives.filter((i) => i.status === filter);

  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Nasze Inicjatywy
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Członkinie Women Up! prowadzą własne projekty społeczne na rzecz lokalnej społeczności.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {["Wszystkie", "Aktywne"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-sm border transition-colors ${
                  filter === tab
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((init) => (
              <div
                key={init.title}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                onClick={() => setExpanded(expanded === init.title ? null : init.title)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <init.icon className="text-primary" size={24} />
                  </div>
                  <span className={`text-xs uppercase tracking-brand-wide px-2 py-1 rounded-sm ${
                    init.status === "Aktywne" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    {init.status}
                  </span>
                </div>
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">{init.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {expanded === init.title ? init.full : init.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 py-12 bg-card border border-border rounded-sm">
            <h3 className="font-heading text-brand-h3 font-bold text-primary mb-3">Rozpocznij własną inicjatywę</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Masz pomysł na projekt społeczny? Dołącz do Women Up! i zrealizuj go z naszym wsparciem.
            </p>
            <Link to="/dolacz">
              <Button className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto">
                Dowiedz się jak <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Inicjatywy;
