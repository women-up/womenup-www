import { MessageCircle, Search, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const steps = [
  { icon: MessageCircle, title: "Skontaktuj się z nami", desc: "Napisz do nas przez formularz kontaktowy lub media społecznościowe. Opowiedz o sobie i swoich zainteresowaniach." },
  { icon: Search, title: "Poznaj nasze inicjatywy", desc: "Dowiedz się, jakie projekty prowadzimy i znajdź ten, który jest Ci najbliższy — lub zaproponuj swój własny." },
  { icon: Rocket, title: "Działaj z nami!", desc: "Dołącz do istniejącej inicjatywy lub rozpocznij własną. Zapewniamy wsparcie, przestrzeń i wspólnotę." },
];

const Dolacz = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Dołącz do Women Up!
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Otwartość na wszystkie kobiety — niezależnie od statusu społecznego. Razem tworzymy zmianę.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      {/* 3 Steps */}
      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-bold text-primary text-center mb-12">Jak to działa?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-card border border-border rounded-sm p-8 text-center relative hover:border-primary transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <step.icon className="text-primary mx-auto mb-4 mt-2" size={36} />
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Rozpocznij inicjatywę */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-brand-h2 font-bold text-primary mb-6">Rozpocznij własną inicjatywę</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>Każda członkini Women Up! może zaproponować i poprowadzić własną inicjatywę społeczną. Nie musisz mieć doświadczenia w prowadzeniu projektów — zapewniamy wsparcie organizacyjne, mentoring i dostęp do naszej społeczności.</p>
            <p>Twoja inicjatywa może dotyczyć czegokolwiek, co jest ważne dla Ciebie i Twojej społeczności: pomocy zwierzętom, edukacji, kultury, ekologii, wsparcia kobiet — możliwości są nieograniczone.</p>
            <p>Skontaktuj się z nami, opowiedz o swoim pomyśle, a my pomożemy Ci go zrealizować!</p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-h2 md:text-[2.5rem] text-[2rem] font-bold mb-4">
            Gotowa, by działać?
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-8">
            Skontaktuj się z nami i dołącz do wspólnoty kobiet, które zmieniają Podlasie.
          </p>
          <Link to="/kontakt">
            <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 inline-flex items-center gap-2">
              Skontaktuj się <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Dolacz;
