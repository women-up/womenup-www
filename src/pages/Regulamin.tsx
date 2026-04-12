import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Regulamin = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Regulamin
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Regulamin strony internetowej i wydarzeń Women Up! Inicjatywa Społeczna
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm md:prose-base text-foreground space-y-8">

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§1. Postanowienia ogólne</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Niniejszy regulamin określa zasady: a) korzystania ze strony internetowej, b) uczestnictwa w wydarzeniach, programach i inicjatywach organizowanych przez Stowarzyszenie Women Up! Inicjatywa Społeczna (dalej: „Organizator").</li>
                <li>Kontakt z Organizatorem: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a></li>
                <li>Korzystanie ze strony oraz zapis na wydarzenie oznacza akceptację niniejszego regulaminu.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§2. Korzystanie ze strony</h2>
              <p className="text-foreground/80 mb-3">Strona ma charakter informacyjny i edukacyjny.</p>
              <p className="text-foreground/80 mb-3">Użytkownik zobowiązuje się do:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>korzystania ze strony zgodnie z prawem,</li>
                <li>niezakłócania jej działania,</li>
                <li>nieprzekazywania treści bezprawnych.</li>
              </ul>
              <p className="text-foreground/80 mt-3">Organizator zastrzega sobie prawo do czasowego ograniczenia dostępności strony (np. prace techniczne).</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§3. Zapisy na wydarzenia i programy</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Zapisy odbywają się poprzez formularze online lub inne wskazane kanały (np. e-mail, media społecznościowe).</li>
                <li>Podanie danych jest dobrowolne, lecz niezbędne do udziału.</li>
                <li>Uczestnik zobowiązuje się do podania prawdziwych danych.</li>
                <li>Organizator może wprowadzić ograniczoną liczbę miejsc.</li>
              </ul>
              <p className="text-foreground/80 mt-3 mb-3">Organizator zastrzega sobie prawo do:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>zamknięcia zapisów,</li>
                <li>prowadzenia listy rezerwowej,</li>
                <li>selekcji uczestników (np. przy programach rozwojowych).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§4. Zasady uczestnictwa</h2>
              <p className="text-foreground/80 mb-3">Uczestnik zobowiązuje się do:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>punktualnego udziału,</li>
                <li>przestrzegania zasad współżycia społecznego,</li>
                <li>szanowania innych uczestników i Organizatora.</li>
              </ul>
              <p className="text-foreground/80 mt-3 mb-3">Zabrania się:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>zachowań obraźliwych, dyskryminujących lub agresywnych,</li>
                <li>zakłócania przebiegu wydarzenia.</li>
              </ul>
              <p className="text-foreground/80 mt-3">Organizator ma prawo odmówić udziału lub usunąć uczestnika w przypadku naruszenia regulaminu — bez prawa do rekompensaty.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§5. Opłaty i rezygnacje</h2>
              <p className="text-foreground/80 mb-3">Informacja o odpłatności wydarzenia jest każdorazowo podawana w opisie wydarzenia.</p>
              <p className="text-foreground/80 mb-3">W przypadku wydarzeń bezpłatnych:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>uczestnik zobowiązuje się do poinformowania o rezygnacji, jeśli nie może wziąć udziału.</li>
              </ul>
              <p className="text-foreground/80 mt-3">W przypadku wydarzeń płatnych (jeśli będą organizowane): zasady płatności i ewentualnych zwrotów będą określone indywidualnie dla danego wydarzenia.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§6. Zmiany i odwołanie wydarzeń</h2>
              <p className="text-foreground/80 mb-3">Organizator zastrzega sobie prawo do:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>zmiany terminu, miejsca lub formy wydarzenia (np. online),</li>
                <li>zmiany programu,</li>
                <li>odwołania wydarzenia z przyczyn organizacyjnych lub niezależnych.</li>
              </ul>
              <p className="text-foreground/80 mt-3">Uczestnicy zostaną poinformowani o zmianach drogą mailową lub telefoniczną.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§7. Wizerunek uczestników</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Podczas wydarzeń mogą być wykonywane zdjęcia i nagrania.</li>
                <li>Uczestnik, biorąc udział w wydarzeniu, wyraża zgodę na nieodpłatne wykorzystanie swojego wizerunku przez Organizatora w celach: promocyjnych, informacyjnych, dokumentacyjnych (np. media społecznościowe, strona internetowa).</li>
                <li>W przypadku braku zgody uczestnik zobowiązany jest poinformować o tym Organizatora przed wydarzeniem.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§8. Odpowiedzialność</h2>
              <p className="text-foreground/80 mb-3">Uczestnictwo w wydarzeniach odbywa się dobrowolnie i na własną odpowiedzialność.</p>
              <p className="text-foreground/80 mb-3">Organizator nie ponosi odpowiedzialności za:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>rzeczy pozostawione bez nadzoru,</li>
                <li>szkody wynikające z działania uczestników,</li>
                <li>zdarzenia losowe niezależne od Organizatora.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§9. Dane osobowe</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Dane osobowe przetwarzane są zgodnie z Polityką prywatności.</li>
                <li>Uczestnik, dokonując zapisu, potwierdza zapoznanie się z Polityką prywatności.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§10. Prawa autorskie</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Materiały udostępniane podczas wydarzeń oraz na stronie są chronione prawem autorskim.</li>
                <li>Zabrania się ich kopiowania, nagrywania i rozpowszechniania bez zgody Organizatora.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§11. Postanowienia końcowe</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Regulamin może być aktualizowany.</li>
                <li>Aktualna wersja jest publikowana na stronie internetowej.</li>
                <li>W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§12. Data obowiązywania</h2>
              <p className="text-foreground/80">Regulamin obowiązuje od dnia: 10.04.2026 r.</p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Kontakt: +48 533 874 086 · <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a><br />
                Mickiewicza 83 lok. U1, 15-527 Białystok
              </p>
            </section>

          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Regulamin;
