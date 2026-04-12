import { Users, Award } from "lucide-react";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const ambassadors = [
  "Piotr Kupicha",
  "Hotel Mercure",
  "Forum Monopauzy",
  "Kancelaria M. Soczyńska",
  "4OpenMind PharmaMarketing sp. z o.o.",
];

const Partnerzy = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Zostań Ambasadorem lub Mecenasem Kobiecej Siły
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Wierzymy, że Wasza wiedza i wsparcie mogą stać się kluczowym elementem naszej inicjatywy. Zapraszamy do rozmowy o indywidualnym dopasowaniu świadczeń do Waszych celów biznesowych.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      {/* Ambasadorzy */}
      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="text-primary" size={28} />
            <h2 className="font-heading text-brand-h2 font-bold text-primary">
              Ambasadorzy Kobiecej Siły
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ambassadors.map((name) => (
              <div
                key={name}
                className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={28} />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">{name}</h4>
              </div>
            ))}
          </div>

          {/* Mecenasi */}
          <div className="text-center mt-16">
            <h3 className="font-heading text-brand-h3 font-semibold text-primary">
              Mecenasi Kobiecej Siły
            </h3>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Partnerzy;
