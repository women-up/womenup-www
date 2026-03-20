import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const posts = [
  { date: "15 marca 2026", title: "Praca nad kalendarzem Women Up!", excerpt: "Trwają prace nad kalendarzem wydarzeń Women Up! Planujemy pełen rok inicjatyw, warsztatów i spotkań dla kobiet z Podlasia.", category: "Ogłoszenie" },
  { date: "25 stycznia 2026", title: "Spotkanie założycielskie Women Up!", excerpt: "Odbyło się spotkanie założycielskie Women Up! Inicjatywa Społeczna oficjalnie rozpoczyna swoją działalność na Podlasiu.", category: "Wydarzenie" },
  { date: "Nadchodzące", title: "Białostoczanka", excerpt: "Jednodniowe wydarzenie łączące warsztaty, kulturę, networking i zdrowie. Kobiety Podlasia spotykają się, uczą, inspirują i wzmacniają swoją lokalną tożsamość.", category: "Wydarzenie" },
  { date: "Nadchodzące", title: "LEVEL UP: Kobieta", excerpt: "Cały dzień tylko dla kobiet! Warsztaty, inspiracje, aktywności dla zdrowia i dobrej energii — spotkania, które dodają pewności siebie i odkrywają pasje.", category: "Wydarzenie" },
  { date: "Nadchodzące", title: "#RatujPSA — startuje!", excerpt: "Akcja kobiet wspierających schroniskowe psy w przełamywaniu lęku i budowaniu zaufania. Każdy gest zmienia ich życie na lepsze!", category: "Inicjatywa" },
  { date: "Nadchodzące", title: "Kawa z ekspertem", excerpt: "Kameralne spotkania z ekspertami przy filiżance kawy. Praktyczne wskazówki, pytania i wartościowe kontakty w przyjaznej atmosferze.", category: "Wydarzenie" },
];

const categories = ["Wszystkie", "Wydarzenie", "Inicjatywa", "Warsztaty", "Ogłoszenie", "Artykuł"];

const Aktualnosci = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Aktualności
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Najnowsze wiadomości i wydarzenia ze świata Women Up!
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.title} className="bg-card border border-border rounded-sm overflow-hidden hover:border-primary hover:shadow-md transition-all">
                  <div className="h-36 bg-secondary flex items-center justify-center">
                    <span className="text-primary text-3xl">◆</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-brand-caption text-muted-foreground">{post.date}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-sm">{post.category}</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{post.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                    <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Czytaj więcej <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card border border-border rounded-sm p-5">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Kategorie</h4>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button key={cat} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm p-5">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Ostatnie wpisy</h4>
                <div className="flex flex-col gap-3">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.title}>
                      <p className="text-brand-caption text-muted-foreground">{post.date}</p>
                      <p className="text-sm font-medium text-foreground hover:text-primary cursor-pointer transition-colors">{post.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm p-5">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Śledź nas</h4>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Aktualnosci;
