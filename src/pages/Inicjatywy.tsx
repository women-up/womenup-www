import { useState } from "react";
import { Heart, MapPin, Users, Lightbulb, Palette, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const allInitiatives = [
  { icon: Heart, title: "Dla Psiaków", desc: "Pomoc bezdomnym zwierzętom w regionie. Organizujemy zbiórki, spacery wolontariackie i współpracujemy ze schroniskami.", status: "Aktywne", full: "Inicjatywa Dla Psiaków powstała z miłości do zwierząt. Regularnie organizujemy zbiórki karmy, koców i zabawek. Współpracujemy z lokalnymi schroniskami, organizujemy spacery wolontariackie i kampanie adopcyjne." },
  { icon: MapPin, title: "Moc Podlasia", desc: "Wzmacnianie lokalnej tożsamości i promocja kultury Podlasia.", status: "Aktywne", full: "Moc Podlasia to inicjatywa kulturalna promująca tradycje regionu. Organizujemy warsztaty haftu krzyżykowego, spotkania z lokalnymi artystkami i wydarzenia popularyzujące kulturę Podlasia." },
  { icon: Users, title: "Kobiety Razem", desc: "Program mentoringowy i grupa wsparcia dla kobiet w trudnych sytuacjach życiowych.", status: "Aktywne", full: "Program mentoringowy łączący doświadczone kobiety z tymi, które potrzebują wsparcia. Prowadzimy regularne spotkania grupowe, indywidualne sesje mentoringowe i warsztaty rozwojowe." },
  { icon: Lightbulb, title: "Startup Kobiet", desc: "Wsparcie kobiet w zakładaniu własnych działalności gospodarczych.", status: "Planowane", full: "Planowana inicjatywa wspierająca kobiety przedsiębiorcze z Podlasia. Warsztaty z zakresu biznesu, networkingu i finansów." },
  { icon: Palette, title: "Sztuka Wspólna", desc: "Warsztaty artystyczne i wystawy lokalnych artystek.", status: "Planowane", full: "Inicjatywa łącząca kobiety przez sztukę. Planujemy warsztaty malarstwa, ceramiki i rękodzieła." },
  { icon: BookOpen, title: "Czytelnia Kobiet", desc: "Klub książkowy i spotkania autorskie dla kobiet z regionu.", status: "Planowane", full: "Literacka inicjatywa dla kobiet lubiących czytać i dyskutować o książkach." },
];

const Inicjatywy = () => {
  const [filter, setFilter] = useState("Wszystkie");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "Wszystkie" ? allInitiatives : allInitiatives.filter((i) => i.status === filter);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Nasze Inicjatywy
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Członkinie Women Up! prowadzą własne projekty społeczne na rzecz lokalnej społeczności.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {["Wszystkie", "Aktywne", "Planowane"].map((tab) => (
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
      </section>
    </Layout>
  );
};

export default Inicjatywy;
