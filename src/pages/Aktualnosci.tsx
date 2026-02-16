import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const posts = [
  { date: "15 lutego 2026", title: "Pierwsze spotkanie organizacyjne Women Up!", excerpt: "Zapraszamy na inauguracyjne spotkanie naszego stowarzyszenia. Poznaj nasze plany i dołącz do inicjatywy, która zmienia Podlasie.", category: "Wydarzenie" },
  { date: "10 lutego 2026", title: "Zbiórka dla schroniska — Dla Psiaków startuje!", excerpt: "Rusza nasza pierwsza akcja charytatywna. Zbieramy karmę, koce i zabawki dla bezdomnych zwierząt z regionu.", category: "Inicjatywa" },
  { date: "5 lutego 2026", title: "Warsztaty krzyżykowe — Moc Podlasia", excerpt: "Zapraszamy na warsztaty haftu krzyżykowego inspirowanego tradycyjnymi wzorami podlaskimi. Wszystkie poziomy zaawansowania.", category: "Warsztaty" },
  { date: "1 lutego 2026", title: "Women Up! oficjalnie zarejestrowane!", excerpt: "Z radością informujemy, że nasze stowarzyszenie zostało oficjalnie zarejestrowane. To dopiero początek naszej drogi.", category: "Ogłoszenie" },
  { date: "25 stycznia 2026", title: "Spotkanie założycielskie — relacja", excerpt: "Podsumowanie spotkania założycielskiego Women Up! Dziękujemy wszystkim, które przyszły i podzieliły się swoimi pomysłami.", category: "Wydarzenie" },
  { date: "20 stycznia 2026", title: "Dlaczego Podlasie potrzebuje Women Up?", excerpt: "O potrzebie oddolnych inicjatyw kobiecych w regionie — rozmowa z inicjatorkami stowarzyszenia.", category: "Artykuł" },
];

const categories = ["Wszystkie", "Wydarzenie", "Inicjatywa", "Warsztaty", "Ogłoszenie", "Artykuł"];

const Aktualnosci = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Aktualności
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Najnowsze wiadomości i wydarzenia ze świata Women Up!
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
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
      </section>
    </Layout>
  );
};

export default Aktualnosci;
