import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const PolitykaPrywatnosci = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Polityka prywatności
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Strona internetowa Women Up! Inicjatywa Społeczna
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm md:prose-base text-foreground space-y-8">

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">1. Informacje ogólne</h2>
              <ul className="space-y-2 ml-4 list-disc text-foreground/80">
                <li>Administratorem danych osobowych jest Stowarzyszenie Women Up! Inicjatywa Społeczna (dalej: „Administrator").</li>
                <li>Kontakt z Administratorem: e-mail: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a></li>
                <li>Dane osobowe są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">2. Zakres i sposób zbierania danych</h2>
              <p className="text-foreground/80 mb-3">Dane mogą być zbierane poprzez:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>formularze kontaktowe</li>
                <li>formularze zapisów na wydarzenia / warsztaty</li>
                <li>zapis do newslettera</li>
                <li>kontakt mailowy</li>
              </ul>
              <p className="text-foreground/80 mt-3 mb-3">Administrator może przetwarzać następujące dane:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>imię i nazwisko</li>
                <li>adres e-mail</li>
                <li>numer telefonu (jeśli podany)</li>
                <li>inne dane przekazane dobrowolnie</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">3. Cele przetwarzania danych</h2>
              <p className="text-foreground/80 mb-3">Dane są przetwarzane w celu:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>odpowiedzi na zapytania przesłane przez formularz</li>
                <li>organizacji wydarzeń i obsługi zapisów</li>
                <li>komunikacji z uczestnikami inicjatyw</li>
                <li>wysyłki newslettera (za zgodą użytkownika)</li>
                <li>prowadzenia działań statutowych Stowarzyszenia</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">4. Podstawy prawne przetwarzania</h2>
              <p className="text-foreground/80 mb-3">Dane przetwarzane są na podstawie:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>zgody użytkownika (art. 6 ust. 1 lit. a RODO)</li>
                <li>niezbędności do podjęcia działań na żądanie osoby (lit. b)</li>
                <li>uzasadnionego interesu Administratora (lit. f)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">5. Pliki cookies i technologie śledzące</h2>
              <p className="text-foreground/80 mb-3">Strona może wykorzystywać pliki cookies w celu:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>zapewnienia prawidłowego działania strony</li>
                <li>analizy ruchu na stronie (np. statystyki odwiedzin)</li>
                <li>poprawy funkcjonalności i bezpieczeństwa</li>
              </ul>
              <p className="text-foreground/80 mt-3 mb-3">Cookies mogą być wykorzystywane przez narzędzia zewnętrzne, np.:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>Google Analytics (analiza ruchu)</li>
                <li>narzędzia do obsługi formularzy</li>
              </ul>
              <p className="text-foreground/80 mt-3">Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">6. Odbiorcy danych</h2>
              <p className="text-foreground/80 mb-3">Dane mogą być przekazywane podmiotom wspierającym Administratora, takim jak:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>dostawcy hostingu strony</li>
                <li>dostawcy narzędzi do obsługi formularzy i newsletterów</li>
                <li>podmioty IT</li>
              </ul>
              <p className="text-foreground/80 mt-3">Dane nie są sprzedawane ani udostępniane podmiotom nieuprawnionym.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">7. Okres przechowywania danych</h2>
              <p className="text-foreground/80 mb-3">Dane przechowywane są:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>przez czas niezbędny do realizacji celu</li>
                <li>do momentu wycofania zgody (jeśli dotyczy)</li>
                <li>przez okres wymagany przepisami prawa</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">8. Prawa użytkownika</h2>
              <p className="text-foreground/80 mb-3">Użytkownik ma prawo do:</p>
              <ul className="space-y-1 ml-4 list-disc text-foreground/80">
                <li>dostępu do danych</li>
                <li>sprostowania danych</li>
                <li>usunięcia danych</li>
                <li>ograniczenia przetwarzania</li>
                <li>wniesienia sprzeciwu</li>
                <li>przenoszenia danych</li>
                <li>cofnięcia zgody w dowolnym momencie</li>
              </ul>
              <p className="text-foreground/80 mt-3">W celu realizacji praw należy skontaktować się mailowo: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a></p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">9. Zabezpieczenia danych</h2>
              <p className="text-foreground/80">Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">10. Zmiany polityki prywatności</h2>
              <p className="text-foreground/80">Polityka może być aktualizowana. Aktualna wersja zawsze będzie dostępna na stronie internetowej.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">11. Data obowiązywania</h2>
              <p className="text-foreground/80">Polityka obowiązuje od dnia 10.04.2026 r.</p>
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

export default PolitykaPrywatnosci;
