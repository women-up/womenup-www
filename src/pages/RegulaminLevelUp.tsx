import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const RegulaminLevelUp = () => {
  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Regulamin wydarzenia
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            „LEVEL UP: Kobieta" — 26 lipca 2026 r., Białystok
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-foreground/80 leading-relaxed">

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§1. Postanowienia wstępne</h2>
              <div className="space-y-3">
                <p>1.1. Niniejszy Regulamin określa prawa i obowiązki uczestniczek wydarzenia „LEVEL UP: Kobieta", zwanego dalej „Wydarzeniem".</p>
                <p>1.2. Wydarzenie odbędzie się w dniu 26 lipca 2026 r. w hotelu Mercure Białystok, ul. Hetmańska 46, 15-727 Białystok.</p>
                <p>1.3. Organizatorem Wydarzenia jest WOMEN UP! INICJATYWA SPOŁECZNA, wpisana do Rejestru Stowarzyszeń Krajowego Rejestru Sądowego pod numerem KRS 0001248710, NIP 5423516357, REGON 54504233800000, z siedzibą przy ul. Mickiewicza 83 lok. U1, 15-527 Białystok, zwana dalej „Organizatorem".</p>
                <p>1.4. Organizator powierzył obsługę logistyczną Wydarzenia, w tym w szczególności obsługę procesu rejestracji, sprzedaży miejsc, poboru opłat za uczestnictwo oraz bieżącej koordynacji organizacyjnej, spółce PRESTIGE EVENT HOUSE spółka z ograniczoną odpowiedzialnością z siedzibą przy Al. 1000-Lecia Państwa Polskiego 10/55, 15-111 Białystok, wpisanej do Krajowego Rejestru Sądowego pod numerem KRS 0001215251, NIP 5423509908, REGON 543691140, zwanej dalej „Podwykonawcą".</p>
                <p>1.5. Oficjalny serwis internetowy Organizatora znajduje się pod adresem womenup.com.pl. Informacje o inicjatywach realizowanych przez Organizatora, w tym o wydarzeniu LEVEL UP: Kobieta, publikowane są w szczególności na stronie internetowej Organizatora oraz w jego kanałach komunikacji.</p>
                <p>1.6. Niniejszy Regulamin stanowi regulamin szczególny wydarzenia „LEVEL UP: Kobieta" względem ogólnego regulaminu korzystania ze strony internetowej oraz uczestnictwa w wydarzeniach publikowanego na stronie womenup.com.pl. W zakresie nieuregulowanym niniejszym Regulaminem zastosowanie znajduje regulamin ogólny Organizatora oraz powszechnie obowiązujące przepisy prawa.</p>
                <p>1.7. Uczestniczkami Wydarzenia mogą być osoby pełnoletnie zainteresowane tematyką rozwoju osobistego, zawodowego, przedsiębiorczości, networkingu, dobrostanu, relacji oraz aktywności społecznej kobiet, zwane dalej „Uczestniczkami".</p>
                <p>1.8. Przepisy niniejszego Regulaminu stanowią integralną część zgłoszenia uczestnictwa w Wydarzeniu i obowiązują wszystkie Uczestniczki.</p>
                <p>1.9. W ramach Wydarzenia mogą odbywać się prelekcje, wystąpienia, panele, rozmowy, warsztaty, spotkania networkingowe, sesje inspiracyjne oraz aktywności realizowane z udziałem partnerów i sponsorów Wydarzenia.</p>
                <p>1.10. Organizator zastrzega, że nie ponosi odpowiedzialności za formę i treść tez, opinii, poglądów oraz wypowiedzi prezentowanych przez prelegentki, partnerów, sponsorów lub inne osoby występujące podczas Wydarzenia, z zastrzeżeniem bezwzględnie obowiązujących przepisów prawa.</p>
                <p>1.11. Kontakt z Organizatorem w sprawach związanych z Wydarzeniem, w tym w sprawach dotyczących zapisów, płatności, rezygnacji, reklamacji oraz organizacji udziału, odbywa się za pośrednictwem poczty elektronicznej pod adresem: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a>. Organizator może dodatkowo udostępniać kontakt telefoniczny o charakterze pomocniczym.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§2. Zasady uczestnictwa i rejestracji</h2>
              <div className="space-y-3">
                <p>2.1. Uczestniczką Wydarzenia jest osoba, która:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>zgłosiła swój udział poprzez formularz rejestracyjny lub system zapisów udostępniony przez Organizatora lub Podwykonawcę, oraz</li>
                  <li>dokonała opłaty za udział w Wydarzeniu w wysokości i terminie wskazanych przez Organizatora.</li>
                </ul>
                <p>2.2. Rejestracja na Wydarzenie prowadzona jest do dnia 23 lipca 2026 r. lub do wyczerpania liczby miejsc, chyba że Organizator postanowi inaczej i poinformuje o tym w kanałach komunikacji dotyczących Wydarzenia.</p>
                <p>2.3. Liczba miejsc na Wydarzenie jest ograniczona. O udziale w Wydarzeniu decyduje kolejność zgłoszeń oraz skuteczne dokonanie opłaty.</p>
                <p>2.4. Organizator oraz Podwykonawca nie ponoszą odpowiedzialności za podanie przez Uczestniczkę w trakcie rejestracji danych błędnych, nieprawdziwych lub niepełnych.</p>
                <p>2.5. Organizator ma prawo odmówić dopuszczenia do udziału w Wydarzeniu osobie, która:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>nie dokonała skutecznej rejestracji,</li>
                  <li>nie uiściła opłaty za udział w Wydarzeniu w terminie,</li>
                  <li>narusza postanowienia niniejszego Regulaminu lub zasady bezpieczeństwa obowiązujące podczas Wydarzenia.</li>
                </ul>
                <p>2.6. Uczestniczka zobowiązana jest do udziału w Wydarzeniu w sposób zgodny z prawem, dobrymi obyczajami oraz z poszanowaniem praw i komfortu innych uczestniczek, prelegentek, partnerów, sponsorów i obsługi wydarzenia.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§3. Opłata za udział i warunki płatności</h2>
              <div className="space-y-3">
                <p>3.1. Udział w Wydarzeniu jest odpłatny.</p>
                <p>3.2. Opłata za udział w Wydarzeniu wynosi 250,00 zł brutto od jednej Uczestniczki.</p>
                <p>3.3. Płatności za udział w Wydarzeniu należy dokonać najpóźniej do dnia 23 lipca 2026 r.</p>
                <p>3.4. Płatność za udział w Wydarzeniu realizowana jest wyłącznie przelewem na rachunek bankowy Podwykonawcy: PRESTIGE EVENT HOUSE sp. z o.o., nr rachunku 88 1020 1332 0000 1102 1689 1500, prowadzony w PKO Bank Polski, wskazany również w procesie rejestracji lub w komunikacji dotyczącej Wydarzenia. Podwykonawca działa w tym zakresie na rzecz Organizatora i w jego imieniu, jako podmiot odpowiedzialny za techniczną i organizacyjną obsługę procesu rejestracji oraz poboru opłat za uczestnictwo w Wydarzeniu.</p>
                <p>3.5. Dokonanie płatności przelewem na rachunek bankowy Podwykonawcy stanowi zapłatę na rzecz Organizatora za udział w Wydarzeniu.</p>
                <p>3.6. Za moment dokonania płatności uznaje się moment uznania rachunku bankowego Podwykonawcy kwotą należną za udział w Wydarzeniu.</p>
                <p>3.7. W przypadku braku uiszczenia opłaty w terminie Organizator ma prawo anulować zgłoszenie uczestnictwa bez ponoszenia odpowiedzialności z tego tytułu.</p>
                <p>3.8. Na życzenie Uczestniczki dokument sprzedaży / fakturę za udział w Wydarzeniu wystawia WOMEN UP! INICJATYWA SPOŁECZNA jako Organizator Wydarzenia, po przekazaniu danych niezbędnych do jej wystawienia.</p>
                <p>3.9. Przesłanie formularza zgłoszeniowego nie jest równoznaczne z potwierdzeniem miejsca na Wydarzeniu. Potwierdzenie uczestnictwa następuje po zaksięgowaniu pełnej opłaty za udział.</p>
                <p>3.10. W tytule przelewu Uczestniczka zobowiązana jest wskazać co najmniej nazwę Wydarzenia oraz swoje imię i nazwisko, według formatu: „LEVEL UP KOBIETA – imię i nazwisko Uczestniczki".</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§4. Rezygnacja z uczestnictwa i odwołanie uczestnictwa</h2>
              <div className="space-y-3">
                <p>4.1. Uczestniczka może zrezygnować z udziału w Wydarzeniu poprzez przesłanie informacji o rezygnacji na adres e-mail: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a>.</p>
                <p>4.2. Rezygnacja z udziału w Wydarzeniu nie uprawnia Uczestniczki do zwrotu opłaty za udział w Wydarzeniu, z zastrzeżeniem przypadków wynikających z bezwzględnie obowiązujących przepisów prawa oraz postanowień niniejszego Regulaminu.</p>
                <p>4.3. W przypadku rezygnacji Uczestniczki z udziału w Wydarzeniu po dokonaniu opłaty, opłata nie podlega zwrotowi, w szczególności w przypadku:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>rezygnacji z przyczyn osobistych, zdrowotnych, zawodowych lub rodzinnych,</li>
                  <li>niestawienia się na Wydarzeniu,</li>
                  <li>spóźnienia lub wcześniejszego opuszczenia Wydarzenia,</li>
                  <li>niewykorzystania udziału z przyczyn leżących po stronie Uczestniczki.</li>
                </ul>
                <p>4.4. Organizator może – według własnego uznania – dopuścić możliwość przeniesienia uczestnictwa na inną osobę wskazaną przez Uczestniczkę, pod warunkiem uprzedniego poinformowania Organizatora lub Podwykonawcy najpóźniej do dnia 23 lipca 2026 r. i uzyskania akceptacji tej zmiany.</p>
                <p>4.5. W przypadku odwołania Wydarzenia przez Organizatora z przyczyn leżących po jego stronie, Organizator zwróci Uczestniczkom uiszczone opłaty za udział w Wydarzeniu w terminie 14 dni od dnia poinformowania o odwołaniu Wydarzenia.</p>
                <p>4.6. Organizator nie pokrywa kosztów dodatkowych poniesionych przez Uczestniczkę w związku z planowanym udziałem w Wydarzeniu, w szczególności kosztów dojazdu, noclegu, parkingu, wyżywienia lub innych kosztów organizowanych we własnym zakresie.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§5. Zmiany programu i organizacji Wydarzenia</h2>
              <div className="space-y-3">
                <p>5.1. Organizator zastrzega sobie prawo do zmian w programie Wydarzenia, harmonogramie, miejscu poszczególnych aktywności, kolejności wystąpień, prelegentkach, partnerach i sponsorach, a także do wprowadzenia zmian organizacyjnych wynikających z przyczyn merytorycznych, technicznych, prawnych, losowych lub niezależnych od Organizatora.</p>
                <p>5.2. Zmiany, o których mowa w ust. 5.1, nie stanowią podstawy do żądania zwrotu opłaty ani dochodzenia odszkodowania przez Uczestniczkę.</p>
                <p>5.3. Organizator zobowiązuje się do publikowania aktualnych informacji dotyczących Wydarzenia w kanałach komunikacji Women Up! lub przekazywania ich Uczestniczkom drogą elektroniczną.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§6. Partnerzy i sponsorzy Wydarzenia</h2>
              <div className="space-y-3">
                <p>6.1. W ramach Wydarzenia mogą być obecni partnerzy i sponsorzy współpracujący z Organizatorem.</p>
                <p>6.2. Partnerzy i sponsorzy mogą prezentować swoją działalność, usługi, produkty lub materiały w zakresie uzgodnionym z Organizatorem, w szczególności w wyznaczonej strefie partnerów lub sponsorów, w materiałach wydarzenia lub podczas aktywności towarzyszących.</p>
                <p>6.3. Organizator nie ponosi odpowiedzialności za formę i treść przekazu marketingowego kierowanego przez partnerów lub sponsorów do Uczestniczek, o ile pozostaje on zgodny z prawem oraz zakresem współpracy ustalonym z Organizatorem.</p>
                <p>6.4. Korzystanie z ofert, materiałów i usług partnerów lub sponsorów jest dobrowolne.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§7. Zasady porządkowe i odpowiedzialność uczestniczek</h2>
              <div className="space-y-3">
                <p>7.1. Uczestniczki zobowiązane są do przestrzegania porządku obowiązującego w miejscu Wydarzenia, zasad bezpieczeństwa oraz poleceń Organizatora, Podwykonawcy, obsługi wydarzenia i personelu obiektu.</p>
                <p>7.2. Zabronione jest:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>zakłócanie przebiegu Wydarzenia,</li>
                  <li>zachowanie agresywne, obraźliwe, naruszające godność innych osób lub porządek Wydarzenia,</li>
                  <li>prowadzenie bez zgody Organizatora własnych działań promocyjnych, sprzedażowych, agitacyjnych lub rekrutacyjnych,</li>
                  <li>nagrywanie, filmowanie lub fotografowanie całości prelekcji, warsztatów lub innych części Wydarzenia w sposób naruszający prawa Organizatora, prelegentek, partnerów lub innych Uczestniczek.</li>
                </ul>
                <p>7.3. Organizator ma prawo odmówić wstępu na Wydarzenie lub usunąć z terenu Wydarzenia osobę naruszającą Regulamin, zasady bezpieczeństwa lub porządek wydarzenia, bez prawa do zwrotu opłaty.</p>
                <p>7.4. Uczestniczka ponosi odpowiedzialność materialną za szkody wyrządzone przez siebie Organizatorowi, Podwykonawcy, obiektowi, w którym odbywa się Wydarzenie, lub osobom trzecim.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§8. Wizerunek i materiały foto-video</h2>
              <div className="space-y-3">
                <p>8.1. Wydarzenie będzie fotografowane oraz filmowane przez Organizatora lub osoby działające na jego zlecenie.</p>
                <p>8.2. Udział w Wydarzeniu jest równoznaczny z wyrażeniem zgody na nieodpłatne utrwalanie, powielanie i rozpowszechnianie wizerunku Uczestniczki utrwalonego podczas Wydarzenia, w całości lub we fragmentach, w celach dokumentacyjnych, informacyjnych, promocyjnych i marketingowych związanych z działalnością Organizatora, Women Up! oraz samym Wydarzeniem.</p>
                <p>8.3. Wizerunek Uczestniczki może być wykorzystywany w szczególności:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>na stronie internetowej Organizatora,</li>
                  <li>w mediach społecznościowych Organizatora,</li>
                  <li>w relacjach z Wydarzenia, materiałach promocyjnych, informacyjnych i marketingowych,</li>
                  <li>w materiałach partnerów i sponsorów związanych z promocją lub relacjonowaniem Wydarzenia.</li>
                </ul>
                <p>8.4. Zgoda, o której mowa powyżej, obejmuje rozpowszechnianie wizerunku bez ograniczeń terytorialnych i czasowych, w zakresie zgodnym z celem dokumentowania i promowania działalności Organizatora oraz Wydarzenia.</p>
                <p>8.5. W przypadku braku zgody na wykorzystanie wizerunku Uczestniczka zobowiązana jest poinformować o tym Organizatora przed rozpoczęciem Wydarzenia.</p>
                <p>8.6. Jeżeli Organizator planuje indywidualne wypowiedzi do kamery, wywiady lub sesje zdjęciowe, może odebrać od Uczestniczki dodatkową zgodę w odrębnej formie.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§9. Reklamacje</h2>
              <div className="space-y-3">
                <p>9.1. Wszelkie reklamacje Uczestniczek wobec Organizatora, związane z organizacją Wydarzenia, powinny być zgłaszane w formie mailowej na adres: <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a> lub pisemnie na adres siedziby Organizatora.</p>
                <p>9.2. Reklamacje mogą być zgłaszane nie później niż w terminie 14 dni od dnia zakończenia Wydarzenia.</p>
                <p>9.3. Reklamacja powinna zawierać co najmniej imię i nazwisko Uczestniczki, dane kontaktowe oraz opis zastrzeżeń i okoliczności uzasadniających reklamację.</p>
                <p>9.4. Organizator rozpatrzy reklamację w terminie 14 dni od dnia jej otrzymania.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§10. Dane osobowe</h2>
              <div className="space-y-3">
                <p>10.1. Administratorem danych osobowych Uczestniczek jest WOMEN UP! INICJATYWA SPOŁECZNA, wpisana do Rejestru Stowarzyszeń Krajowego Rejestru Sądowego pod numerem KRS 0001248710.</p>
                <p>10.2. Dane osobowe Uczestniczek przetwarzane są w celu:</p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>rejestracji i organizacji udziału w Wydarzeniu,</li>
                  <li>kontaktu związanego z uczestnictwem w Wydarzeniu,</li>
                  <li>obsługi płatności i rozliczeń,</li>
                  <li>realizacji obowiązków prawnych ciążących na Organizatorze,</li>
                  <li>rozpatrywania reklamacji i dochodzenia ewentualnych roszczeń,</li>
                  <li>dokumentowania i promowania działalności Organizatora oraz Wydarzenia, zgodnie z zasadami określonymi w §8 Regulaminu.</li>
                </ul>
                <p>10.3. W zakresie niezbędnym do obsługi rejestracji, płatności i logistyki Wydarzenia dane osobowe Uczestniczek mogą zostać powierzone Podwykonawcy, o którym mowa w §1 ust. 1.4, na podstawie stosownej umowy powierzenia przetwarzania danych osobowych lub innej właściwej podstawy prawnej.</p>
                <p>10.4. Dane osobowe przetwarzane są zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).</p>
                <p>10.5. Uczestniczce przysługuje prawo dostępu do treści swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz inne prawa wynikające z przepisów prawa.</p>
                <p>10.6. Szczegółowe zasady przetwarzania danych osobowych określa Polityka prywatności dostępna na stronie internetowej Organizatora. Uczestniczka, dokonując zapisu na Wydarzenie, potwierdza zapoznanie się z zasadami przetwarzania danych osobowych.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§11. Prawa autorskie</h2>
              <div className="space-y-3">
                <p>11.1. Materiały udostępniane podczas Wydarzenia, a także treści publikowane przez Organizatora w związku z Wydarzeniem, podlegają ochronie prawnej, w tym ochronie wynikającej z przepisów o prawie autorskim i prawach pokrewnych.</p>
                <p>11.2. Zabrania się kopiowania, nagrywania, utrwalania, udostępniania, rozpowszechniania lub wykorzystywania materiałów udostępnianych podczas Wydarzenia bez uprzedniej zgody Organizatora, chyba że co innego wynika z bezwzględnie obowiązujących przepisów prawa lub odrębnej zgody uprawnionego podmiotu.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-primary mb-4">§12. Postanowienia końcowe</h2>
              <div className="space-y-3">
                <p>12.1. W przypadku, gdy Wydarzenie nie odbędzie się z przyczyn zależnych od Organizatora, Organizator niezwłocznie poinformuje o tym Uczestniczki i zwróci uiszczone opłaty za udział, zgodnie z §4 ust. 4.5 Regulaminu.</p>
                <p>12.2. W przypadku, gdy Wydarzenie nie odbędzie się z przyczyn niezależnych od Organizatora, w tym z powodu działania siły wyższej, decyzji administracyjnych, zagrożenia dla bezpieczeństwa uczestniczek, awarii technicznych lub innych okoliczności, którym Organizator mimo zachowania należytej staranności nie mógł zapobiec, odpowiedzialność Organizatora ogranicza się do zakresu wynikającego z bezwzględnie obowiązujących przepisów prawa.</p>
                <p>12.3. Organizator nie ponosi odpowiedzialności za rzeczy Uczestniczek zgubione, zniszczone lub skradzione podczas Wydarzenia.</p>
                <p>12.4. Organizator ma prawo zmiany postanowień niniejszego Regulaminu. Zmiany wchodzą w życie z dniem ich opublikowania w miejscu udostępnienia Regulaminu, przy czym wobec Uczestniczek, które dokonały już zgłoszenia uczestnictwa, Organizator może dodatkowo przekazać informację o zmianie drogą elektroniczną.</p>
                <p>12.5. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o prawach konsumenta oraz przepisy dotyczące ochrony danych osobowych.</p>
                <p>12.6. Regulamin obowiązuje od dnia 24.06.2026 r.</p>
              </div>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                WOMEN UP! INICJATYWA SPOŁECZNA · KRS 0001248710 · NIP 5423516357<br />
                Mickiewicza 83 lok. U1, 15-527 Białystok<br />
                +48 533 874 086 · <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default RegulaminLevelUp;
