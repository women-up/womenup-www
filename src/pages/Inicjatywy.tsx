import { useState } from "react";
import { ArrowRight, X, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { allInitiatives, type Initiative } from "@/data/initiatives";

const Inicjatywy = () => {
  const [selected, setSelected] = useState<Initiative | null>(null);

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allInitiatives.map((init) => (
              <div
                key={init.slug}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelected(init)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <init.icon className="text-primary" size={24} />
                  </div>
                  <span className="text-xs uppercase tracking-brand-wide px-2 py-1 rounded-sm bg-primary/10 text-primary">
                    {init.status}
                  </span>
                </div>
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-1">{init.title}</h4>
                {init.subtitle && (
                  <p className="text-sm font-medium text-primary mb-1">{init.subtitle}</p>
                )}
                {init.date && (
                  <p className="text-xs text-muted-foreground mb-2">{init.date}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{init.desc}</p>
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

      {/* Detail overlay */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 md:p-8">
          <div className="bg-background border border-border rounded-sm w-full max-w-3xl my-8 relative">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <selected.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">{selected.title}</h2>
                  {selected.subtitle && (
                    <p className="text-sm text-primary font-medium">{selected.subtitle}</p>
                  )}
                  {selected.date && (
                    <p className="text-xs text-muted-foreground">{selected.date}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-secondary rounded-sm transition-colors flex-shrink-0"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 text-foreground leading-relaxed">
              {selected.detail}

              {selected.coordinator && (
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-brand-wide text-primary mb-3">
                    Koordynatorka projektu
                  </h4>
                  <div className="flex items-start gap-3 text-sm">
                    {selected.coordinator.photo && (
                      <img
                        src={selected.coordinator.photo}
                        alt={selected.coordinator.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 font-medium">
                      <User size={14} className="text-muted-foreground" />
                      {selected.coordinator.name}
                    </span>
                    <a href={`mailto:${selected.coordinator.email}`} className="flex items-center gap-2 text-primary hover:underline">
                      <Mail size={14} />
                      {selected.coordinator.email}
                    </a>
                    {selected.coordinator.phone && (
                      <span className="flex items-center gap-2">
                        <Phone size={14} className="text-muted-foreground" />
                        {selected.coordinator.phone}
                      </span>
                    )}
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Inicjatywy;
