import { Star, Flame, Heart, Coffee, Sparkles, Shield, Compass, Mountain, Bike } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Initiative {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  date?: string;
  desc: string;
  status: string;
  coordinator?: { name: string; email: string; phone?: string; photo?: string };
  detail: React.ReactNode;
}

export const allInitiatives: Initiative[] = [
  {
    slug: "bialostoczanka",
    icon: Star,
    title: "Białostoczanka",
    subtitle: "Zdrowie. Intymność. Kariera.",
    date: "18.09.2026",
    desc: "Intensywny, jednodniowy warsztat życia, który łączy profilaktykę zdrowotną, odważną edukację o intymności i konkretne narzędzia budowania kariery.",
    status: "Aktywne",
    coordinator: { name: "Izabella Sobiech", email: "izabellasobiech@gmail.com", phone: "692 407 009", photo: "/assets/team/izabella.jpeg" },
    detail: (
      <div className="space-y-8">
        <p className="text-lg font-medium italic">
          Twoje miejsce jest tutaj. Zainspiruj się, zadbaj o siebie i wróć do domu z nową energią do działania!
        </p>

        <div>
          <h3 className="font-heading text-xl font-bold text-primary mb-4">Program:</h3>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">9:00 – 10:00 | Otwarcie i Power Speech</h4>
              <p className="mt-2"><strong>Powitanie:</strong> Przedstawienie idei projektu.</p>
              <p className="mt-1"><strong>Wykład inauguracyjny:</strong> „Słowiańska krew, współczesna moc. Jak czerpać z dziedzictwa przodkiń w świecie Excela i AI?" (Motywacja połączona z lokalnym rynkiem pracy).</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">10:00 – 11:30 | BLOK I: ZDROWIE (Profilaktyka i Biohacking)</h4>
              <p className="mt-2"><strong>Panel Dyskusyjny:</strong> Przegląd techniczny kobiety. Rozmowa z ginekologiem, onkologiem i diagnostą o tym, jakie badania robić w wieku 20, 40 i 60 lat.</p>
              <p className="mt-1"><strong>Prelekcja:</strong> Fizjoterapia uroginekologiczna – temat, o którym milczymy. Dlaczego mięśnie dna miednicy to fundament Twojego zdrowia i... seksu.</p>
              <p className="mt-1 italic text-muted-foreground">Przerwa kawowa (Healthy Bar): Sokowe shoty, regionalne przekąski w wersji fit.</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">11:45 – 13:15 | BLOK II: Intymnosci (Seksuologia i Intymność)</h4>
              <p className="mt-2"><strong>Wykład Główny:</strong> Mapa przyjemności. Seksuolog o tym, jak stres i tryb życia wpływają na libido oraz jak odbudować bliskość w długoletnich relacjach.</p>
              <p className="mt-1"><strong>Warsztat:</strong> Komunikacja potrzeb. Jak mówić o tym, czego chcemy w sypialni, bez wstydu i lęku przed oceną.</p>
              <p className="mt-1"><strong>Q&A:</strong> Anonimowe pytania do seksuologa (wrzucane do boxu przy wejściu).</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">13:15 – 14:15 | Lunch & Networking</h4>
              <p className="mt-2">Czas na rozmowy, wymianę wizytówek i odwiedzenie stoisk partnerów (np. lokalne kliniki, marki modowe, doradcy finansowi).</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">14:15 – 15:45 | BLOK III: KARIERA (Rozwój i Sprawczość)</h4>
              <p className="mt-2"><strong>Debata Liderek:</strong> Białostocki biznes ma twarz kobiety. Sukcesy i porażki lokalnych przedsiębiorczyń.</p>
              <p className="mt-1"><strong>Masterclass:</strong> Finansowa niezależność. Inwestowanie, budowanie poduszki finansowej i zarządzanie budżetem – konkretne narzędzia dla kobiet.</p>
              <p className="mt-1"><strong>Prelekcja:</strong> Styl to narzędzie, nie próżność. Jak ubiór i makijaż wspiera budowanie autorytetu w pracy (power dressing).</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">15:45 – 16:30 | Finał i Losowanie Nagród</h4>
              <p className="mt-2">Podsumowanie, networking końcowy i upominki od partnerów (tzw. Goodie Bags z voucherami na badania czy warsztaty).</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "kawa-z-ekspertem",
    icon: Coffee,
    title: "Kawa z ekspertem",
    desc: "Kameralne spotkania z ekspertami przy filiżance kawy (do 25 osób).",
    status: "Aktywne",
    coordinator: { name: "Izabella Sobiech", email: "izabellasobiech@gmail.com", phone: "692 407 009", photo: "/assets/team/izabella.jpeg" },
    detail: (
      <div className="space-y-8">
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary mb-2">
            Cykl: Kawa z Ekspertem. Blisko. Konkretnie. Kobieco.
          </h3>
          <p className="italic text-muted-foreground">
            Kameralne poranki z wiedzą, która zmienia codzienność. Tylko 25 miejsc, filiżanka kawy i bezcenny czas na Twoje pytania.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg text-primary">Spotkanie 1: Cyfrowy Ślad Ekspertki</h4>
            <p className="italic mt-1">„Marka osobista z duszą. Jak budować pozycję na LinkedIn i w sieci, pozostając sobą."</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>O czym rozmawiamy:</strong> Jak odczarować „sprzedażowy" wizerunek LinkedIna? Jak pisać o swoich sukcesach bez poczucia chwalipięctwa i jak sprawić, by algorytmy pracowały na Twoje nazwisko.</li>
              <li><strong>Dla kogo:</strong> Dla kobiet chcących awansować, zmienić branżę lub rozwinąć własny biznes.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg text-primary">Spotkanie 2: Intymna Check-lista</h4>
            <p className="italic mt-1">„Ginekologiczna instrukcja obsługi – usłysz sygnały swojego ciała."</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Ekspert:</strong> Ginekolog-endokrynolog.</li>
              <li><strong>O czym rozmawiamy:</strong> Jak czytać wyniki cytologii (i dlaczego to nie wyrok?), o co pytać w gabinecie, by czuć się zaopiekowaną oraz dlaczego samobadanie piersi to najważniejszy „rytuał miłości", jaki możesz sobie podarować.</li>
              <li><strong>Dla kogo:</strong> Dla każdej kobiety, która chce przestać bać się wizyt u lekarza.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg text-primary">Spotkanie 3: Finanse po Białostocku</h4>
            <p className="italic mt-1">„Czy pieniądze mają płeć? Jak mądrze zarządzać swoim 'posagiem'."</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Ekspert:</strong> Doradczyni finansowa / Ekspertka inwestycyjna.</li>
              <li><strong>O czym rozmawiamy:</strong> O budowaniu niezależności finansowej w realiach regionu podlaskiego. Dlaczego „własne konto" to fundament wolności i jak skutecznie negocjować stawkę rynkową.</li>
              <li><strong>Dla kogo:</strong> Dla kobiet, które chcą przejąć stery nad domowym lub firmowym budżetem.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg text-primary">Spotkanie 4: Prawo w Spódnicy</h4>
            <p className="italic mt-1">„Słowiańska gospodyni czy partnerka biznesowa? Twoje bezpieczeństwo w związku i firmie."</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Ekspert:</strong> Adwokatka.</li>
              <li><strong>O czym rozmawiamy:</strong> Intercyza, dziedziczenie i zabezpieczenie dzieci – bez prawniczego żargonu. Jak czytać umowy B2B i kontrakty, by „w razie burzy" stać na twardym gruncie.</li>
              <li><strong>Dla kogo:</strong> Dla mężatek, partnerek i przedsiębiorczyń.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg text-primary">Spotkanie 5: Labirynt Ról</h4>
            <p className="italic mt-1">„Córka, Matka, Liderka – jak nie zgubić siebie w oczekiwaniach innych?"</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Ekspert:</strong> Psychoterapeutka.</li>
              <li><strong>O czym rozmawiamy:</strong> O presji tradycji i nowoczesności. Jak odróżnić cudze „musisz" od własnego „chcę" oraz jak stawiać granice rodzinie i współpracownikom, nie tracąc bliskości.</li>
              <li><strong>Dla kogo:</strong> Dla kobiet, które czują, że niosą na barkach zbyt wiele światów naraz.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "kryzys",
    icon: Shield,
    title: "Kryzys: Instrukcja Przetrwania i Wzrostu",
    desc: "Cykl warsztatów dla kobiet, które chcą zamienić życiowe trzęsienie ziemi w fundament pod nową przyszłość.",
    status: "Aktywne",
    coordinator: { name: "Izabella Sobiech", email: "izabellasobiech@gmail.com", phone: "692 407 009", photo: "/assets/team/izabella.jpeg" },
    detail: (
      <div className="space-y-8">
        <p className="italic text-lg">
          Kryzys to nie koniec – to moment, w którym stare mechanizmy przestają działać, by zrobić miejsce nowym. W ramach <strong>Women Up!</strong> przygotowaliśmy trzy filary wsparcia, które pomogą Ci przejść przez zmianę z godnością i bezpieczeństwem.
        </p>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">1. Spotkanie: Kryzys jako Brama (Psychologia)</h4>
            <p className="italic mt-1">Zamiast bać się kryzysu, nauczmy się go przechodzić.</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Temat:</strong> „Kiedy wszystko się sypie – jak przetrwać życiowe trzęsienie ziemi?"</li>
              <li><strong>Ekspert:</strong> Psychoterapeuta traumy / Interwent kryzysowy.</li>
            </ul>
            <div className="mt-3 text-sm space-y-1">
              <p><strong>W programie:</strong></p>
              <ul className="ml-4 space-y-1 list-disc">
                <li><strong>Nawigacja po emocjach:</strong> Zrozumienie etapów (szok, zaprzeczenie, złość, akceptacja).</li>
                <li><strong>Rezyliencja:</strong> Budowanie odporności psychicznej, gdy Twoje zasoby są na wyczerpaniu.</li>
                <li><strong>Macierzyństwo jako przełom:</strong> Dlaczego powrót do pracy bywa kryzysem tożsamości i jak uciszyć poczucie winy?</li>
                <li><strong>Słowiański Feniks:</strong> Metafora „spalenia słomianego chochoła" – rytualne pożegnanie starego, by zrobić miejsce na nowe.</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">2. Spotkanie: Bezpieczne Wyjście (Prawo i Finanse)</h4>
            <p className="italic mt-1">Twój Prawny Plan Ratunkowy.</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Eksperci:</strong> Adwokat (sprawy rodzinne/karne) & Doradca Podatkowy (biznes).</li>
            </ul>
            <div className="mt-3 text-sm space-y-1">
              <p><strong>W programie:</strong></p>
              <ul className="ml-4 space-y-1 list-disc">
                <li><strong>Firma na zakręcie:</strong> Jak oddzielić majątek osobisty od firmowego pola bitwy i co robić, gdy widmo bankructwa zagląda w oczy?</li>
                <li><strong>Skarbówka bez lęku:</strong> Procedury bezpieczeństwa i „czynny żal" – jak naprawiać błędy księgowe, zanim zrobi się poważnie.</li>
                <li><strong>Gdy bliski ma problemy:</strong> Twoje prawo do odmowy zeznań i pierwsze kroki po zatrzymaniu kogoś z rodziny.</li>
                <li><strong>Przemoc ekonomiczna:</strong> Jak prawnie odzyskać kontrolę nad własnymi zasobami, gdy ktoś blokuje Ci do nich dostęp.</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">3. Spotkanie: Zawodowy Reset (Kariera)</h4>
            <p className="italic mt-1">Jak przekuć zawodową klęskę w nowy początek?</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Ekspert:</strong> Coach kariery / Doradca zawodowy.</li>
            </ul>
            <div className="mt-3 text-sm space-y-1">
              <p><strong>W programie:</strong></p>
              <ul className="ml-4 space-y-1 list-disc">
                <li><strong>Feniks w biurze:</strong> Strategia wyjścia z wypalenia zawodowego i odwaga do pożegnania toksycznego środowiska.</li>
                <li><strong>Nowy start po 40-tce/50-tce:</strong> Przekwalifikowanie się jako atut, a nie porażka.</li>
                <li><strong>Luka w CV:</strong> Jak o niej mówić z pewnością siebie, by rekruter zobaczył w Tobie siłę, a nie słabość.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-sm p-6">
          <h4 className="font-heading font-bold text-xl text-primary mb-2">NARZĘDZIE: Złota Teczka Białostoczanki</h4>
          <p className="italic mb-4">Mądra słowiańska gospodyni wie, gdzie ma zapasy na zimę – mądra nowoczesna kobieta wie, gdzie ma akty własności.</p>
          <p className="text-sm mb-3">Każda uczestniczka otrzyma fizyczny lub cyfrowy organizer – <strong>Złotą Teczkę</strong>. To Twoje centrum dowodzenia w sytuacjach kryzysowych.</p>
          <ul className="text-sm space-y-1 list-disc ml-4">
            <li><strong>Fundament:</strong> Akty stanu cywilnego, umowy o rozdzielności majątkowej.</li>
            <li><strong>Biznes:</strong> Wydruki z CEIDG/KRS, umowy spółek, polisy ubezpieczeniowe.</li>
            <li><strong>Nieruchomości:</strong> Numery ksiąg wieczystych i akty notarialne.</li>
            <li><strong>Zobowiązania:</strong> Wykaz kredytów, poręczeń i leasingów.</li>
            <li><strong>Pełnomocnictwa:</strong> Dokumenty na wypadek, gdybyś nie mogła decydować o sobie.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    slug: "kierunek-dobrostan",
    icon: Compass,
    title: "Białostoczanka: Kierunek Dobrostan",
    desc: "Twój kompleksowy przewodnik po zdrowiu, intymności i sprawczości. Cykl warsztatów wzmacniających kobiety z Podlasia.",
    status: "Aktywne",
    coordinator: { name: "Izabella Sobiech", email: "izabellasobiech@gmail.com", phone: "692 407 009", photo: "/assets/team/izabella.jpeg" },
    detail: (
      <div className="space-y-8">
        <p className="italic text-lg">
          Misją projektu jest wzmacnianie kobiet z Podlasia poprzez dostarczanie rzetelnej wiedzy, budowanie lokalnej społeczności i odczarowywanie tematów, które zbyt długo pozostawały w sferze tabu.
        </p>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">FILAR I: Zdrowie (Profilaktyka z Miłością)</h4>
            <p className="italic mt-1">Dbanie o siebie to nie przykry obowiązek, to najwyższa forma self-love.</p>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li><strong>Akcja „Podlaska Cytologia":</strong> Mapa miejsc, gdzie badania wykonasz w atmosferze szacunku i empatii.</li>
              <li><strong>Hormonalny Balans:</strong> Od pierwszej miesiączki po menopauzę – uczymy, jak zaprzyjaźnić się z własnym organizmem.</li>
              <li><strong>Głowa też Ciało:</strong> Warsztaty z higieny cyfrowej i radzenia sobie z lękiem w świecie 24/7.</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">FILAR II: Intymność (Bliskość bez Cenzury)</h4>
            <p className="italic mt-1">Jakość życia zaczyna się tam, gdzie kończy się wstyd.</p>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li><strong>Seksualność bez tabu:</strong> O budowaniu libido, komunikacji potrzeb i akceptacji ciała na każdym etapie życia.</li>
              <li><strong>Bezpieczna Białostoczanka:</strong> Wiedza o antykoncepcji i fizjoterapii uroginekologicznej – bo zdrowie intymne to Twój fundament.</li>
              <li><strong>Warsztaty Relacji:</strong> Jak pielęgnować bliskość w długoletnich związkach i po narodzinach dzieci.</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">FILAR III: Kariera (Sprawczość w Działaniu)</h4>
            <p className="italic mt-1">Wsparcie dla kobiet, które idą po swoje – na własnych zasadach.</p>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li><strong>Networking po Białostocku:</strong> Budowanie sieci wsparcia przy śniadaniach biznesowych.</li>
              <li><strong>Marka Osobista z Duszą:</strong> Strategia na LinkedIn i w social mediach, która buduje autorytet, ale nie zabiera autentyczności.</li>
              <li><strong>Finansowa Niezależność:</strong> Konkretne narzędzia do zarządzania budżetem i negocjowania stawek.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "level-up-kobieta",
    icon: Flame,
    title: "LEVEL UP: Kobieta",
    subtitle: "Power Girl w Podlaskiej Odsłonie",
    date: "26.07.2026",
    desc: "Cykliczny projekt edukacyjno-inspiracyjny, który łączy biznes, zdrowie, styl i lokalną moc Podlasia w nowoczesnej, praktycznej formule. Projekt oferuje uczestniczkom praktyczne narzędzia, warsztaty i doświadczenia na żywo, pokazuje storytelling i glow jako elementy pewności siebie oraz umożliwia rozwój na własnych zasadach.",
    status: "Aktywne",
    coordinator: { name: "Marlena Soczyńska", email: "womenup.inicjatywaspoleczna@gmail.com", phone: "533 874 086", photo: "/assets/team/marlena.jpeg" },
    detail: (
      <div className="space-y-8">
        <p className="text-lg font-medium italic">„Rozwijaj się świadomie – na swoich zasadach"</p>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">09:00 – 09:45 | OTWARCIE I START DNIA</h4>
            <p className="text-sm italic mt-1">Good vibes & first energy</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Check–in i networking</li>
              <li>Powitanie i przedstawienie idei LEVEL UP: KOBIETA</li>
              <li>„Twoja kobiecość, Twój mindset, Twoja moc"</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">09:45 – 10:45 | BLOK I: GLOW UP & STYL</h4>
            <p className="text-sm italic mt-1">Glow up od środka – pewność siebie i moc regionu</p>
            <p className="text-sm font-semibold mt-2">Prowadzące: Aksana Makej, Anna Dzienisowicz</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Pokaz makijażu: szybkie triki „effortless glow"</li>
              <li>Jak wizerunek buduje pewność siebie w pracy i w życiu</li>
              <li>Mini tipy: moodboardy, stylizacje, Instagram-ready glow</li>
            </ul>
            <p className="text-sm font-semibold mt-3">Smart girl wardrobe & lokalna moc</p>
            <p className="text-sm font-semibold mt-1">Prowadząca: Stylistka</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Kapsułowa garderoba: 5 elementów, które działają zawsze</li>
              <li>Styl, który buduje autorytet i komfort w pracy</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">10:45 – 12:00 | BLOK II: SPOKÓJ I PEWNOŚĆ SIEBIE</h4>
            <p className="text-sm font-semibold mt-2">Wykład: <span className="font-normal italic">Życie z poziomu spokoju i pewności siebie</span></p>
            <p className="text-sm font-semibold mt-1">Prelegentka: Natalia Maj</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Dlaczego mimo wiedzy wciąż się zatrzymujesz i odkładasz decyzje</li>
              <li>Co naprawdę buduje pewność siebie i dlaczego nie zaczyna się ona od myślenia</li>
              <li>Jak odzyskać spokój w sytuacji presji i wątpliwości</li>
              <li>Jak budować zaufanie do siebie przez działanie</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">12:00 – 12:45 | PRZERWA KAWOWA & NETWORKING</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Zdrowe przekąski i shoty</li>
              <li>Produkty fit, bio, naturalne smaki Podlasia</li>
              <li>Networking, stories i zdjęcia przy źródle mocy</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">12:45 – 13:30 | BLOK III: BIZNES – PLAN LOTU</h4>
            <p className="text-sm italic mt-1">Od pomysłu do działania z lokalną mocą</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Rozmowa na kanapie – studium przypadków lokalnych liderek biznesu: Diana Chwaszczewska, Katarzyna Rokicka, Dorota Lange</li>
              <li><strong>Power hacks:</strong> praktyczne tipy od ekspertów i lokalnych bizneswoman</li>
            </ul>
            <p className="text-sm italic mt-2">„Biznes to Twoja wolność ubrana w działanie."</p>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">13:30 – 14:30 | BLOK IV: SOCIAL MEDIA</h4>
            <p className="text-sm italic mt-1">Marka osobista w praktyce – stwórz rolkę, która pokazuje Ciebie i Twoją markę</p>
            <p className="text-sm font-semibold mt-2">Prowadząca: Aleksandra Michałowska</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Budowanie spójnego obrazu w rolce – estetyka, przekaz i autentyczność</li>
              <li>Warsztat: Twoja marka w rolce – jak pokazać siebie w social media</li>
              <li>Wsparcie zespołu przy tworzeniu rolki na żywo podczas finału (live assistance)</li>
              <li><strong>Power hacks:</strong> techniczne wskazówki i triki</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">14:30 – 16:00 | BLOK VI: RELAX & RUCH</h4>
            <p className="text-sm italic mt-1">Stretching & Pilates z psami = total reset</p>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Rozgrzewka i ćwiczenia oddechowe</li>
              <li>Pilates z psami na macie</li>
              <li>Elementy zabawy i integracji</li>
            </ul>
            <p className="text-sm font-semibold mt-2">Praktyczne narzędzia:</p>
            <ul className="mt-1 space-y-1 text-sm list-disc ml-4">
              <li>ćwiczenia w domu z pupilem</li>
              <li>inspiracje do social media content</li>
              <li>relaks, endorfiny, chwile radości</li>
            </ul>
            <p className="text-sm italic mt-2">„Serotonin boost z futrzanym twistem"</p>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-lg">16:00 – 16:30 | FINAŁ I ZAKOŃCZENIE</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Podsumowanie dnia, networking końcowy</li>
              <li>Zdjęcia przy ściance i przy Źródle Podlaskiej Mocy</li>
              <li>Niespodzianki i upominki: karty zniżkowe, vouchery, lokalne produkty</li>
            </ul>
          </div>
        </div>

        <p className="text-sm italic text-muted-foreground">Zastrzegamy sobie możliwość zmian w programie wydarzenia.</p>

        <div className="bg-card border border-border rounded-sm p-5 mt-6">
          <p className="text-sm font-semibold text-primary mb-2">Ważne: komfort ma znaczenie.</p>
          <p className="text-sm text-muted-foreground">
            W trakcie wydarzenia najlepiej sprawdzi się strój wygodny i praktyczny, dopasowany do części warsztatowej oraz aktywności w ruchu. Polecamy swobodne stylizacje, takie jak legginsy, luźniejsze zestawy casualowe oraz komfortowe obuwie. To czas, w którym liczy się pełna swoboda – tak, aby nic nie ograniczało Twojego udziału w wydarzeniu.
          </p>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="bg-primary/5 border border-primary/30 rounded-sm p-6">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
              <h3 className="font-heading text-brand-h3 font-bold text-primary">Bilet: „Słowiańska Moc"</h3>
              <span className="font-heading text-2xl font-bold text-foreground whitespace-nowrap">250 zł</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pakiet podstawowy i przepustka do „Kręgu Women Up!", łączącego nowoczesną merytorykę biznesową z lokalną tożsamością regionu. Bilet na wydarzenie LEVEL UP: Kobieta – Power Girl w Podlaskiej Odsłonie (26.07.2026).
            </p>
          </div>

          <p className="text-sm font-medium mt-6 mb-4">Oto szczegółowy opis tego, co obejmuje ten bilet:</p>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">1. Pełny dostęp do programu merytorycznego</h4>
              <p className="text-sm text-muted-foreground mt-1">Bilet gwarantuje udział we wszystkich blokach tematycznych zaplanowanych na ten dzień:</p>
              <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
                <li><strong>Blok I (Wizerunek):</strong> Warsztaty makijażu „effortless glow" oraz budowanie garderoby kapsułowej budującej autorytet.</li>
                <li><strong>Blok II (Psychologia):</strong> Wykład Natalii Maj o budowaniu pewności siebie przez działanie i odzyskiwaniu spokoju pod presją.</li>
                <li><strong>Blok III (Biznes):</strong> Panel dyskusyjny z lokalnymi liderkami (m.in. Dianą Chwaszczewską i Katarzyną Rokicką) o przekuwaniu pomysłów w działanie.</li>
                <li><strong>Blok IV (Social Media):</strong> Warsztat tworzenia autentycznych rolek z pomocą zespołu (live assistance).</li>
                <li><strong>Blok VI (Relaks):</strong> Sesja Pilatesu z psami oraz ćwiczenia oddechowe („Serotonin boost").</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">2. Wyżywienie i catering</h4>
              <p className="text-sm text-muted-foreground mt-1">W ramach biletu uczestniczka otrzymuje pełną opiekę cateringową opartą na lokalnych produktach:</p>
              <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
                <li><strong>Przerwy kawowe:</strong> Zdrowe przekąski, shoty mocy oraz naturalne smaki Podlasia.</li>
                <li><strong>Lunch:</strong> Posiłek typu „fit & bio", wspierający energię do działania.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">3. „Power Box" i materiały edukacyjne</h4>
              <p className="text-sm text-muted-foreground mt-1">Każda posiadaczka biletu otrzymuje pudełko z upominkami, które jest fizyczną formą „Złotej Teczki" stowarzyszenia:</p>
              <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
                <li><strong>Podarunki:</strong> Produkty od lokalnych partnerów i marek wspierających inicjatywę.</li>
                <li><strong>Power Hacks:</strong> Praktyczne checklisty, techniczne wskazówki i narzędzia biznesowe gotowe do wdrożenia.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-heading font-bold text-lg">4. Wartości dodane (Manifest Women Up!)</h4>
              <p className="text-sm text-muted-foreground mt-1">Zakup biletu to coś więcej niż udział w konferencji – to realizacja „Obietnicy Kręgu":</p>
              <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
                <li><strong>Solidarność zamiast rywalizacji:</strong> Wejście do społeczności, w której kobiety podają sobie rękę w drodze na szczyt.</li>
                <li><strong>Autentyczność:</strong> Możliwość „ściągnięcia maski idealnej kobiety" w bezpiecznej przystani i zrobienia pamiątkowych zdjęć przy „Źródle Podlaskiej Mocy".</li>
                <li><strong>Wsparcie społeczne:</strong> Część inicjatywy wiąże się ze wsparciem akcji #RatujPSA (możliwość udziału w zajęciach z własnym psem).</li>
                <li><strong>Informacja organizacyjna:</strong> Po zakupie biletu uczestniczka proszona jest o wypełnienie formularza rejestracyjnego, aby dopasować networking oraz potrzeby dietetyczne do jej oczekiwań. Zalecany jest wygodny strój (np. legginsy, casual), ponieważ w programie kluczowe miejsce zajmuje komfort i ruch.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-heading font-bold text-lg mb-1">Jak kupić bilet?</h4>
            <p className="text-sm text-muted-foreground">Zakup biletu na wydarzenie LEVEL UP: Kobieta odbywa się w dwóch krokach:</p>
            <div className="mt-4 space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm font-medium text-foreground">Krok 1</p>
                <p className="text-sm text-muted-foreground mt-1">Wypełnij formularz zgłoszeniowy dostępny na stronie wydarzenia.</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm font-medium text-foreground">Krok 2</p>
                <p className="text-sm text-muted-foreground mt-1">Opłać udział przelewem tradycyjnym na rachunek wskazany po zapisaniu formularza oraz w wiadomości e-mail przesłanej po zgłoszeniu.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm">
              <p><strong className="text-foreground">Koszt udziału:</strong> <span className="text-muted-foreground">250,00 zł</span></p>
              <p><strong className="text-foreground">Termin płatności:</strong> <span className="text-muted-foreground">do 23.07.2026 r.</span></p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-sm p-5 mt-6">
            <p className="text-sm font-medium text-foreground mb-1">Ważne</p>
            <p className="text-sm text-muted-foreground">
              Przesłanie formularza zgłoszeniowego nie jest równoznaczne z potwierdzeniem miejsca na wydarzeniu. Miejsce zostaje potwierdzone po zaksięgowaniu pełnej opłaty za udział.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              W razie pytań skontaktuj się z nami:{" "}
              <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">womenup.inicjatywaspoleczna@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "podlasie-experience",
    icon: Bike,
    title: "LEVEL UP: Kobieta – Podlasie Experience",
    desc: "Łączymy networking, wellness i przygodę, odkrywamy magiczne miejsca Podlasia, poznajemy lokalne zioła i siłę regionu.",
    status: "Aktywne",
    coordinator: { name: "Marlena Soczyńska", email: "womenup.inicjatywaspoleczna@gmail.com", phone: "533 874 086", photo: "/assets/team/marlena.jpeg" },
    detail: (
      <div className="space-y-8">
        <p className="text-lg font-medium italic">
          „Czerp moc z Podlasia – zdrowie, energia i inspiracja w praktyce"
        </p>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">Rowerowe wycieczki po magicznych miejscach Podlasia</h4>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li>Trasy po lesie, polach, nad rzekami i jeziorami</li>
              <li>Instagramowe punkty do zdjęć: polne kwiaty, mchy, drewniane mostki, żubry w rezerwatach</li>
              <li>Viralowy twist: „Glow on the go" – lekki filtr / nakładka AR, która pokazuje energię Podlasia w Stories</li>
              <li>Cel: ruch + networking + storytelling w naturalnym otoczeniu</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">Poznawanie lokalnych ziół i superfoods</h4>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li>Warsztaty z lokalną zielarką / fit ekspertem</li>
              <li>Jak wykorzystać moc podlaskich ziół w kuchni, w wellness i dla urody</li>
              <li>Mini degustacja: napary, zdrowe przekąski, lokalne produkty</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-heading font-bold text-xl text-primary">Networking w naturalnym otoczeniu</h4>
            <ul className="mt-3 space-y-2 text-sm list-disc ml-4">
              <li>Spotkania i rozmowy w grupach – tematy: zdrowie, styl, biznes, social media</li>
              <li>Formuła casual + chill: rowery, piknik, ławki, hamaki</li>
              <li>Możliwość poznania lokalnych przedsiębiorczyń, specjalistek i ambasadorek zdrowego stylu życia</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "ratuj-psa",
    icon: Heart,
    title: "#RatujPSA",
    desc: "Wspieramy psy w potrzebie – zwłaszcza te w boksach – poprzez akcje ratunkowe, socjalizację, pomoc behawiorystyczną i edukację społeczną.",
    status: "Aktywne",
    coordinator: { name: "Marlena Soczyńska", email: "womenup.inicjatywaspoleczna@gmail.com", phone: "533 874 086", photo: "/assets/team/marlena.jpeg" },
    detail: (
      <div className="space-y-8">
        <h3 className="font-heading text-xl font-bold text-primary">Co robimy w ramach Projektu #RatujPSA</h3>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg">1. Wyciąganie psów z boksów</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Socjalizacja przez doświadczonych behawiorystów</li>
              <li>Nauka kontaktu z ludźmi i innymi zwierzętami</li>
              <li>Przygotowanie psów do adopcji</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg">2. Zbiórki i akcje charytatywne</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Karma, akcesoria, zabawki, legowiska</li>
              <li>Organizowanie akcji w społeczności lokalnej</li>
              <li>Współpraca z partnerami i sponsorami</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg">3. Szlachetna buda</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Tworzenie bezpiecznego miejsca dla psów</li>
              <li>Lokalne inicjatywy na rzecz zwierząt</li>
              <li>Edukacja społeczna – jak pomagać skutecznie</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-sm p-5">
            <h4 className="font-heading font-bold text-lg">4. Informowanie na bieżąco</h4>
            <ul className="mt-2 space-y-1 text-sm list-disc ml-4">
              <li>Media społecznościowe, stories, posty</li>
              <li>Raporty z akcji, sukcesy adopcyjne</li>
              <li>Możliwość zaangażowania się w dowolnym momencie</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-primary mb-3">Jak można wspierać projekt</h4>
          <ul className="space-y-2 text-sm list-disc ml-4">
            <li>Udział w zbiórkach i akcjach lokalnych</li>
            <li>Wsparcie finansowe lub rzeczowe</li>
            <li>Wolontariat: spacery, socjalizacja, pomoc behawiorystom</li>
            <li>Promowanie projektu w social media (#RatujPSA)</li>
          </ul>
          <p className="mt-4 font-medium">Chcesz pomóc? Zobaczyłeś problem? Zgłoś koordynatorce!</p>
        </div>
      </div>
    ),
  },
  {
    slug: "the-good-night",
    icon: Sparkles,
    title: "The Good Night — Wieczór z Misją",
    desc: "Elegancki bal charytatywny tworzony przez kobiety z inicjatywą, które łączą siłę działania z ideą dzielenia się dobrem.",
    status: "Aktywne",
    coordinator: { name: "Marlena Soczyńska", email: "womenup.inicjatywaspoleczna@gmail.com", photo: "/assets/team/marlena.jpeg" },
    detail: (
      <div className="space-y-4">
        <p>
          Elegancki bal charytatywny tworzony przez kobiety z inicjatywą, które łączą siłę działania z ideą dzielenia się dobrem i zapraszają mężczyzn do wspólnego współtworzenia zmiany. To wyjątkowe spotkanie, w którym styl, relacje i wartości tworzą jedną spójną całość.
        </p>
        <p>
          Podczas wieczoru odbywają się aukcje charytatywne oraz zbiórka środków na lokalne projekty społeczne. Całość dopełnia starannie zaplanowany program artystyczny, wyjątkowa oprawa i przestrzeń do budowania autentycznych relacji w atmosferze klasy i zaangażowania.
        </p>
      </div>
    ),
  },
];
