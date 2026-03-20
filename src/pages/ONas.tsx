import { HandHeart, Flame, Sprout, Users, DoorOpen, Scale, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Marlena Soczyńska", role: "Prezeska" },
  { name: "Kinga Klepacka", role: "Wiceprezeska" },
  { name: "Julita Nos", role: "Członkini Zarządu" },
  { name: "", role: "Koordynatorka ds. Wydarzeń" },
  { name: "Ewelina Sienicka-Kupicha", role: "Koordynatorka ds. Komunikacji" },
  { name: "Diana Chwaszczewska", role: "Koordynatorka ds. Mediów" },
  { name: "Anna Dzienisowicz", role: "Koordynatorka ds. Inicjatyw Społecznych" },
];

const values = [
  { icon: HandHeart, title: "Solidarność", desc: "Wzajemne wsparcie i siła kobiecej wspólnoty w codziennych wyzwaniach." },
  { icon: Flame, title: "Odwaga", desc: "Śmiałość w podejmowaniu inicjatyw i przełamywaniu barier." },
  { icon: Sprout, title: "Rozwój", desc: "Ciągłe doskonalenie siebie i otoczenia poprzez działanie." },
  { icon: Users, title: "Wspólnota", desc: "Budowanie silnych relacji opartych na zaufaniu i szacunku." },
  { icon: DoorOpen, title: "Otwartość", desc: "Przestrzeń dla każdej kobiety, niezależnie od jej historii." },
  { icon: Scale, title: "Równość", desc: "Działanie na rzecz równych szans i sprawiedliwości społecznej." },
];

const ONas = () => {
  return (
    <Layout>
      {/* Hero */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            O nas
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Poznaj stowarzyszenie Women Up! — oddolną inicjatywę kobiet z Podlasia.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      {/* Historia */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-brand-h2 font-bold text-primary mb-8">Nasza Historia</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>Women Up! narodziło się z potrzeby — potrzeby wspólnoty, działania i wzajemnego wsparcia. W 2025 roku grupa kobiet z Podlasia postanowiła stworzyć przestrzeń, w której każda kobieta może realizować swoje pomysły na zmianę.</p>
            <p>Zaczęłyśmy od rozmów przy kawie, a dziś prowadzimy kilka aktywnych inicjatyw społecznych. Nasze stowarzyszenie łączy kobiety różnych pokoleń, zawodów i doświadczeń życiowych.</p>
            <p>Wierzymy, że oddolne działanie ma moc zmieniania rzeczywistości — krok po kroku, inicjatywa po inicjatywie.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Misja i Wartości */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-bold text-primary text-center mb-12">Misja i Wartości</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-sm p-6 hover:border-primary hover:shadow-sm transition-all">
                <v.icon className="text-primary mb-3" size={32} />
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Zespół */}
      <AnimatedSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-bold text-primary text-center mb-12">Nasz Zespół</h2>

          {/* Team photo */}
          <div className="max-w-3xl mx-auto mb-12">
            <img
              src="/assets/team-photo.jpg"
              alt="Zespół Women Up!"
              className="w-full rounded-sm border border-border shadow-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.role + i} className="bg-background border border-border rounded-sm p-6 text-center hover:border-primary transition-all">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-2xl font-heading font-bold">
                    {member.name ? member.name[0] : "?"}
                  </span>
                </div>
                {member.name && (
                  <h4 className="font-heading text-lg font-semibold text-foreground">{member.name}</h4>
                )}
                <p className="text-xs uppercase tracking-brand-wide text-primary mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Video */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-bold text-primary text-center mb-8">Nasza Historia</h2>
          <div className="max-w-3xl mx-auto">
            <video
              controls
              className="w-full rounded-sm border border-border shadow-sm"
              poster="/assets/team-photo.jpg"
            >
              <source src="/assets/story.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>
          </div>
        </div>
      </AnimatedSection>

      {/* Statut */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-h2 font-bold text-primary mb-4">Statut Stowarzyszenia</h2>
          <p className="text-muted-foreground mb-6">Pobierz statut naszego stowarzyszenia w formacie PDF.</p>
          <Button className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto inline-flex items-center gap-2">
            <FileDown size={16} /> Pobierz statut
          </Button>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ONas;
