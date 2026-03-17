import Layout from "@/components/Layout";
import DiamondDivider from "@/components/DiamondDivider";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Users, Image, Download } from "lucide-react";
import businessCardFront from "@/assets/Bcard_landscape.png";
import businessCardBack from "@/assets/BcardPort.png";
import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logo-white.svg";
import diamondPattern from "@/assets/womenup_diamond_pattern.svg";
import concentricDiamonds from "@/assets/womenup_concentric_diamonds.svg";
import concentricWhite from "@/assets/womenup_concentric_white.svg";
import concentricInverted from "@/assets/womenup_concentric_inverted.svg";
import patternOnly from "@/assets/womenup_pattern_only.svg";

const colors = [
  { name: "Czerwień Podlaska", hex: "#C41A2C", token: "--primary", label: "Kolor główny · CTA · Logo", className: "bg-primary" },
  { name: "Czerwień Ciemna", hex: "#8B1A2C", token: "--primary-dark", label: "Hover · Gradient", className: "bg-primary-dark" },
  { name: "Czerwień Jasna", hex: "#E8505B", token: "--primary-light", label: "Linki · Akcenty", className: "bg-primary-light" },
  { name: "Kremowe Płótno", hex: "#F5F0E8", token: "--background", label: "Tło główne", className: "bg-background" },
  { name: "Ciepły Beż", hex: "#E8DFD0", token: "--secondary", label: "Tło alternujące", className: "bg-secondary" },
  { name: "Antracyt", hex: "#2D2926", token: "--foreground", label: "Tekst · Footer", className: "bg-foreground" },
  { name: "Szarość Ciepła", hex: "#8B8178", token: "--muted-foreground", label: "Tekst drugorzędny", className: "bg-muted-foreground" },
  { name: "Złoto Podlasia", hex: "#C9972A", token: "--gold", label: "Akcenty dekoracyjne", className: "bg-gold" },
  { name: "Zieleń Łąk", hex: "#4A7C59", token: "--success", label: "Sukces · Statusy", className: "bg-success" },
];

const DesignSystem = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2' y='2' width='7' height='7' fill='white' opacity='0.5'/%3E%3Crect x='11' y='11' width='7' height='7' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-brand-h1 md:text-[3rem] text-[2rem] font-bold tracking-[4px] mb-3">
            WOMEN UP!
          </h1>
          <p className="text-sm uppercase tracking-[3px] opacity-85">
            Design System · Brand Guide
          </p>
        </div>
      </section>

      {/* Logo & Warianty */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Logo & Warianty
          </h2>

          {/* Main logo showcase */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-sm p-8 flex flex-col items-center">
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-4">Logo główne · na jasnym tle</p>
              <img src={logo} alt="Women Up! logo" className="h-24 w-auto mb-4" />
              <p className="text-xs font-mono text-muted-foreground">logo.svg · 249×249 · #C41A2C</p>
            </div>
            <div className="rounded-sm p-8 flex flex-col items-center" style={{ background: '#2D2926' }}>
              <p className="text-[11px] uppercase tracking-[2px] text-white/50 mb-4">Logo białe · na ciemnym tle</p>
              <img src={logoWhite} alt="Women Up! logo white" className="h-24 w-auto mb-4" />
              <p className="text-xs font-mono text-white/50">logo-white.svg · 249×249 · #FFFFFF</p>
            </div>
          </div>

          {/* Size variations */}
          <div className="bg-card border border-border rounded-sm p-6 mb-8">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-6">Rozmiary · skalowalność</p>
            <div className="flex items-end gap-8 flex-wrap">
              {[
                { size: "h-6", label: "24px · Favicon" },
                { size: "h-8", label: "32px · Footer" },
                { size: "h-10", label: "40px · Navbar mobile" },
                { size: "h-12", label: "48px · Navbar desktop" },
                { size: "h-20", label: "80px · Hero mobile" },
                { size: "h-28", label: "112px · Hero desktop" },
              ].map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <img src={logo} alt="" className={`${v.size} w-auto`} />
                  <p className="text-[10px] text-muted-foreground text-center whitespace-nowrap">{v.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo + Text lockup */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-sm p-6">
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-4">Lockup · Navbar</p>
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-10 w-auto" />
                <span className="font-heading text-xl font-bold text-primary tracking-brand-wide leading-none">WOMEN UP!</span>
              </div>
            </div>
            <div className="rounded-sm p-6" style={{ background: '#2D2926' }}>
              <p className="text-[11px] uppercase tracking-[2px] text-white/50 mb-4">Lockup · Footer</p>
              <div className="flex items-center gap-3">
                <img src={logoWhite} alt="" className="h-8 w-auto" />
                <span className="font-heading text-xl font-bold text-primary tracking-brand-wide leading-none">WOMEN UP!</span>
              </div>
            </div>
          </div>

          {/* Icon assets grid */}
          <div className="bg-card border border-border rounded-sm p-6">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-4">Zasoby ikonowe · /public</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { file: "favicon.ico", desc: "Favicon · 256×256", bg: "bg-background" },
                { file: "logo.svg", desc: "SVG Favicon · wektorowy", bg: "bg-background" },
                { file: "apple-touch-icon.png", desc: "Apple Touch · 180×180", bg: "bg-background" },
                { file: "logo-192.png", desc: "PWA Icon · 192×192", bg: "bg-background" },
              ].map((asset) => (
                <div key={asset.file} className={`${asset.bg} border border-border rounded-sm p-4 flex flex-col items-center`}>
                  <div className="h-12 w-12 flex items-center justify-center mb-2">
                    <img src={logo} alt="" className="h-10 w-auto" />
                  </div>
                  <p className="text-xs font-mono text-foreground text-center">{asset.file}</p>
                  <p className="text-[10px] text-muted-foreground text-center">{asset.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Paleta Kolorów */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Paleta Kolorów
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="bg-card rounded-sm shadow-brand-sm overflow-hidden">
                <div className="h-20" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className="font-semibold text-sm text-foreground">{c.name}</p>
                  <p className="text-xs font-mono text-muted-foreground">{c.hex}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Typografia */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Typografia
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">H1 · Cormorant Garamond 700 · 56px</p>
              <h1 className="font-heading text-brand-h1 font-bold text-foreground">Waleczne · Sprawcze · Niezależne</h1>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">H2 · Cormorant Garamond 600 · 40px</p>
              <h2 className="font-heading text-brand-h2 font-semibold text-foreground">Nasze Inicjatywy</h2>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">H3 · Cormorant Garamond 600 · 28px</p>
              <h3 className="font-heading text-brand-h3 font-semibold text-foreground">Kobiety Razem</h3>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">Body · Inter 400 · 16px</p>
              <p className="font-body text-brand-body text-foreground">
                Women Up! to stowarzyszenie, które daje kobietom przestrzeń do tworzenia własnych inicjatyw społecznych. Od pomocy zwierzętom po wsparcie lokalnych społeczności — każda z nas może zacząć coś, co zmieni świat wokół niej.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">Body Small · Inter 400 · 14px</p>
              <p className="font-body text-brand-small text-muted-foreground">
                Stowarzyszenie inicjatyw społecznych kobiet z Podlasia. Otwarte na wszystkie kobiety, niezależnie od statusu społecznego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Wzory Dekoracyjne */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Wzory Dekoracyjne
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-2">Wzór krzyżykowy (cross-stitch)</p>
              <div className="h-28 rounded-sm border border-border bg-background pattern-cross-stitch flex items-center justify-center text-sm text-muted-foreground">
                Tło sekcji · opacity 0.07
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-2">Wzór diamentowy</p>
              <div className="h-28 rounded-sm border border-border bg-background pattern-diamond flex items-center justify-center text-sm text-muted-foreground">
                Dekoracja · opacity 0.06
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-2">Separator sekcji (Diamond Divider)</p>
            <DiamondDivider className="max-w-[240px]" />
          </div>
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-2">Pasek krzyżykowy (Cross-Stitch Border)</p>
            <div className="h-[3px] pattern-stitch-border rounded-sm" />
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Przyciski */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Przyciski
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Na jasnym tle</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto">
                  Dołącz do nas
                </Button>
                <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Dowiedz się więcej
                </Button>
                <button className="text-sm font-medium text-primary hover:underline">
                  Link tekstowy →
                </button>
              </div>
            </div>

            <div className="bg-primary rounded-sm p-8 mt-6">
              <p className="text-[11px] uppercase tracking-[2px] text-primary-foreground/60 mb-3">Na ciemnym / czerwonym tle</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
                  Napisz do nas
                </Button>
                <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10">
                  Poznaj nas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Karty */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Karty Inicjatyw
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Heart, title: "Dla Psiaków", text: "Pomagamy bezdomnym zwierzętom na Podlasiu. Organizujemy zbiórki, spacery i adopcje." },
              { Icon: MapPin, title: "Moc Podlasia", text: "Rozwijamy lokalne społeczności i wspieramy oddolne inicjatywy w regionie." },
              { Icon: Users, title: "Kobiety Razem", text: "Mentoring i wsparcie między kobietami. Razem jesteśmy silniejsze." },
            ].map((card) => (
              <div key={card.title} className="card-initiative p-6 md:p-7">
                <card.Icon className="text-primary mb-3" size={32} />
                <h4 className="font-heading text-brand-h4 font-semibold text-foreground mb-2">{card.title}</h4>
                <p className="text-brand-small text-muted-foreground leading-relaxed">{card.text}</p>
                <a href="#" className="inline-block mt-4 text-sm font-semibold uppercase tracking-[0.5px] text-primary hover:text-primary-dark transition-colors">
                  Dowiedz się więcej →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Karty Bloga */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Karty Bloga
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "Inicjatywy", date: "14 lutego 2026", title: "Nowa inicjatywa: Ogrody Społeczne", text: "Startujemy z nowym projektem! Wspólne ogrody dla mieszkanek Białegostoku..." },
              { tag: "Wydarzenie", date: "10 lutego 2026", title: "Spotkanie integracyjne — podsumowanie", text: "Nasze pierwsze spotkanie w nowym roku przyciągnęło 30 uczestniczek..." },
              { tag: "Warsztaty", date: "5 lutego 2026", title: "Warsztaty krzyżykowe — Moc Podlasia", text: "Zapraszamy na warsztaty haftu krzyżykowego inspirowanego tradycyjnymi wzorami..." },
            ].map((post) => (
              <div key={post.title} className="bg-card rounded-sm shadow-brand-sm overflow-hidden hover:shadow-brand-md hover:-translate-y-0.5 transition-all">
                <div className="h-44 bg-gradient-to-br from-secondary to-primary-light/30 flex items-center justify-center">
                  <Image className="text-primary/50" size={40} />
                </div>
                <div className="p-5">
                  <span className="inline-block text-[11px] uppercase tracking-[1.5px] text-primary font-semibold mb-1">{post.tag}</span>
                  <p className="text-brand-caption text-muted-foreground mb-2">{post.date}</p>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-2">{post.title}</h4>
                  <p className="text-brand-small text-muted-foreground leading-relaxed">{post.text}</p>
                  <a href="#" className="inline-block mt-3 text-sm font-semibold uppercase tracking-[0.5px] text-primary hover:text-primary-dark transition-colors">
                    Czytaj dalej →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Nawigacja */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Nawigacja
          </h2>
          <div className="bg-background border border-border rounded-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Women Up! logo" className="h-10 w-auto" />
              <span className="font-heading text-2xl font-bold text-primary tracking-[3px]">WOMEN UP!</span>
            </div>
            <div className="hidden md:flex gap-7">
              {["Strona Główna", "O Nas", "Inicjatywy", "Blog", "Kontakt"].map((link, i) => (
                <span
                  key={link}
                  className={`text-sm font-semibold cursor-pointer pb-1 ${
                    i === 0 ? "border-b-2 border-primary text-primary" : "text-foreground hover:text-primary"
                  } transition-colors`}
                >
                  {link}
                </span>
              ))}
              <span className="text-sm font-semibold text-primary cursor-pointer">Dołącz</span>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Footer Preview */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Stopka
          </h2>
          <div className="rounded-sm overflow-hidden relative" style={{ background: '#2D2926' }}>
            <div className="h-[3px] pattern-stitch-border" />
            <div className="p-8 md:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <img src={logoWhite} alt="" className="h-6 w-auto" />
                    <h4 className="font-heading text-lg font-semibold text-white">WOMEN UP!</h4>
                  </div>
                  <p className="text-sm text-white/60">Oddolna inicjatywa społeczna z Podlasia.</p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-3">Nawigacja</h4>
                  <div className="flex flex-col gap-1">
                    {["O nas", "Inicjatywy", "Aktualności", "Kontakt"].map((l) => (
                      <span key={l} className="text-sm text-white/60 hover:text-white cursor-pointer transition-colors">{l}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-3">Inicjatywy</h4>
                  <div className="flex flex-col gap-1">
                    {["Dla Psiaków", "Moc Podlasia", "Kobiety Razem"].map((l) => (
                      <span key={l} className="text-sm text-white/60">{l}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-3">Kontakt</h4>
                  <p className="text-sm text-white/60">kontakt@womenup.com</p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-white/40">
                © 2026 Women Up! Stowarzyszenie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Preview */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Hero CTA
          </h2>
          <div className="relative rounded-sm overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[hsl(348,68%,26%)] p-10 md:p-16 text-center">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2' y='2' width='7' height='7' fill='white' opacity='0.5'/%3E%3Crect x='11' y='11' width='7' height='7' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <h2 className="font-heading text-[2.75rem] md:text-[2.75rem] font-bold text-white tracking-[2px] mb-4">
                Dołącz do Women Up!
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-7 leading-relaxed">
                Masz pomysł na inicjatywę? Chcesz działać z nami? Jesteśmy otwarte na każdą kobietę.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
                  Napisz do nas
                </Button>
                <Button variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10">
                  Poznaj nas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wizytówka / Business Card */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-3">
            Wizytówka
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Business Card · 3.5" × 2" · 300 DPI
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="bg-card rounded-sm shadow-brand-md overflow-hidden">
              <img
                src={businessCardFront}
                alt="Women Up! business card — front"
                className="w-full max-w-[480px] h-auto"
              />
              <p className="text-center text-xs text-muted-foreground py-2">Przód</p>
            </div>
            <div className="bg-card rounded-sm shadow-brand-md overflow-hidden">
              <img
                src={businessCardBack}
                alt="Women Up! business card — back"
                className="w-full max-w-[480px] h-auto"
              />
              <p className="text-center text-xs text-muted-foreground py-2">Tył</p>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* OG Tags & Meta */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-3">
            Open Graph & Meta
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Tagi meta dla wyszukiwarek i udostępniania w mediach społecznościowych
          </p>

          {/* OG Image Preview */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">OG Image · 1200×640</p>
            <div className="bg-card border border-border rounded-sm overflow-hidden shadow-brand-sm">
              <img src="/og-image.png" alt="OG Image preview" className="w-full h-auto" />
              <div className="p-4 border-t border-border">
                <p className="text-xs font-mono text-muted-foreground">og-image.png · 1200×640px · JPEG</p>
                <p className="text-xs text-muted-foreground mt-1">Używany w: og:image, twitter:image</p>
              </div>
            </div>
          </div>

          {/* Meta Tags Table */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Meta tagi · index.html</p>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tag</th>
                      <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Wartość</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { tag: "og:title", value: "Women Up! — Waleczne · Sprawcze · Niezależne" },
                      { tag: "og:description", value: "Oddolna inicjatywa społeczna z Podlasia. Łączymy kobiety różnych statusów społecznych." },
                      { tag: "og:image", value: "https://womenup.com/og-image.png" },
                      { tag: "og:image:width", value: "1200" },
                      { tag: "og:image:height", value: "640" },
                      { tag: "og:locale", value: "pl_PL" },
                      { tag: "og:type", value: "website" },
                      { tag: "twitter:card", value: "summary_large_image" },
                      { tag: "theme-color", value: "#C41A2C" },
                    ].map((meta) => (
                      <tr key={meta.tag}>
                        <td className="p-3 font-mono text-xs text-primary whitespace-nowrap">{meta.tag}</td>
                        <td className="p-3 text-xs text-foreground break-all">{meta.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Favicon & Icons */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Favicon & Ikony</p>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Link tag</th>
                      <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Plik</th>
                      <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Opis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { rel: 'rel="icon" sizes="any"', file: "/favicon.ico", desc: "Fallback favicon · 256×256" },
                      { rel: 'rel="icon" type="image/svg+xml"', file: "/logo.svg", desc: "SVG favicon · wektorowy, skalowalny" },
                      { rel: 'rel="apple-touch-icon"', file: "/apple-touch-icon.png", desc: "iOS home screen · 180×180 · kremowe tło" },
                    ].map((link) => (
                      <tr key={link.file}>
                        <td className="p-3 font-mono text-xs text-primary whitespace-nowrap">{link.rel}</td>
                        <td className="p-3 font-mono text-xs text-foreground">{link.file}</td>
                        <td className="p-3 text-xs text-muted-foreground">{link.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Social Media Posts */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-3">
            Social Media
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Przykłady postów i udostępnień na platformach społecznościowych
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook Share Preview */}
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Facebook · Udostępnienie linku</p>
              <div className="bg-white rounded-lg shadow-brand-sm overflow-hidden border border-gray-200">
                {/* FB header */}
                <div className="p-3 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <img src={logo} alt="" className="h-6 w-auto brightness-0 invert" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Women Up!</p>
                    <p className="text-xs text-gray-500">Właśnie · 🌍</p>
                  </div>
                </div>
                <p className="px-3 pb-2 text-sm text-gray-800">
                  Dołącz do nas! 💪 Razem zmieniamy Podlasie — jedna inicjatywa na raz. #WomenUp #Podlasie #KobietyRazem
                </p>
                {/* Link preview card */}
                <div className="border-t border-gray-200">
                  <img src="/og-image.png" alt="" className="w-full h-auto" />
                  <div className="p-3 bg-gray-50">
                    <p className="text-[11px] uppercase text-gray-500">womenup.com</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">Women Up! — Waleczne · Sprawcze · Niezależne</p>
                    <p className="text-xs text-gray-500 mt-0.5">Oddolna inicjatywa społeczna z Podlasia. Łączymy kobiety różnych statusów społecznych.</p>
                  </div>
                </div>
                {/* FB actions */}
                <div className="px-3 py-2 border-t border-gray-200 flex gap-6">
                  <span className="text-xs text-gray-500 font-semibold">👍 Lubię to!</span>
                  <span className="text-xs text-gray-500 font-semibold">💬 Komentarz</span>
                  <span className="text-xs text-gray-500 font-semibold">↗ Udostępnij</span>
                </div>
              </div>
            </div>

            {/* Instagram Post Preview */}
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Instagram · Post</p>
              <div className="bg-white rounded-lg shadow-brand-sm overflow-hidden border border-gray-200">
                {/* IG header */}
                <div className="p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <img src={logo} alt="" className="h-5 w-auto brightness-0 invert" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">womenup_podlasie</p>
                </div>
                {/* IG image — brand styled */}
                <div className="aspect-square bg-primary relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2' y='2' width='7' height='7' fill='white' opacity='0.5'/%3E%3Crect x='11' y='11' width='7' height='7' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="relative z-10 text-center px-8">
                    <img src={logo} alt="" className="h-16 w-auto mx-auto mb-4 brightness-0 invert" />
                    <p className="font-heading text-2xl font-bold text-white tracking-brand-wide mb-2">KOBIETY RAZEM</p>
                    <div className="w-12 h-px bg-white/40 mx-auto mb-2" />
                    <p className="text-sm text-white/80">Spotkanie integracyjne</p>
                    <p className="text-xs text-white/60 mt-1">22 lutego · Białystok</p>
                  </div>
                </div>
                {/* IG actions + caption */}
                <div className="p-3">
                  <div className="flex gap-3 mb-2">
                    <span className="text-lg">♡</span>
                    <span className="text-lg">💬</span>
                    <span className="text-lg">↗</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">womenup_podlasie</span>{" "}
                    Zapraszamy na spotkanie integracyjne Kobiety Razem! 🤝 Dołącz do nas i poznaj inne kobiety z Podlasia.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">#WomenUp #KobietyRazem #Podlasie #Białystok</p>
                </div>
              </div>
            </div>

            {/* Twitter / X Share Preview */}
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">X (Twitter) · Udostępnienie</p>
              <div className="bg-white rounded-lg shadow-brand-sm overflow-hidden border border-gray-200">
                <div className="p-3 flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <img src={logo} alt="" className="h-6 w-auto brightness-0 invert" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold text-gray-900">Women Up!</p>
                      <p className="text-sm text-gray-500">@womenup_pl · 2g</p>
                    </div>
                    <p className="text-sm text-gray-800 mt-1">
                      Nowa inicjatywa „Ogrody Społeczne" startuje w marcu! 🌱 Wspólne ogrody dla mieszkanek Białegostoku. Chcesz dołączyć? Link w bio.
                    </p>
                    {/* Link preview */}
                    <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                      <img src="/og-image.png" alt="" className="w-full h-auto" />
                      <div className="p-2">
                        <p className="text-[11px] text-gray-500">womenup.com</p>
                        <p className="text-sm font-semibold text-gray-900">Women Up! — Waleczne · Sprawcze · Niezależne</p>
                      </div>
                    </div>
                    <div className="flex gap-8 mt-2">
                      <span className="text-xs text-gray-500">💬 12</span>
                      <span className="text-xs text-gray-500">🔁 24</span>
                      <span className="text-xs text-gray-500">♡ 89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Story Preview */}
            <div>
              <p className="text-[11px] uppercase tracking-[2px] text-muted-foreground mb-3">Instagram · Story</p>
              <div className="bg-white rounded-lg shadow-brand-sm overflow-hidden border border-gray-200 max-w-[280px] mx-auto">
                <div className="aspect-[9/16] bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden flex flex-col items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2' y='2' width='7' height='7' fill='white' opacity='0.5'/%3E%3Crect x='11' y='11' width='7' height='7' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
                    }}
                  />
                  {/* Story header */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-2 z-10">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <img src={logo} alt="" className="h-4 w-auto brightness-0 invert" />
                    </div>
                    <p className="text-xs font-semibold text-white">womenup_podlasie</p>
                  </div>
                  <div className="relative z-10 text-center px-6">
                    <img src={logo} alt="" className="h-20 w-auto mx-auto mb-6 brightness-0 invert" />
                    <p className="font-heading text-3xl font-bold text-white tracking-brand-wide mb-3">DLA PSIAKÓW</p>
                    <div className="w-16 h-px bg-white/40 mx-auto mb-3" />
                    <p className="text-base text-white/90 leading-relaxed">Zbiórka karmy dla schroniska</p>
                    <p className="text-sm text-white/60 mt-2">📍 Białystok · 1-15 marca</p>
                  </div>
                  {/* Swipe up */}
                  <div className="absolute bottom-6 left-0 right-0 text-center z-10">
                    <p className="text-xs text-white/60 uppercase tracking-wider">Więcej ↑</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiamondDivider className="max-w-[240px] mx-auto" />

      {/* Formularze */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-brand-h2 font-semibold text-primary text-center mb-10">
            Formularz
          </h2>
          <div className="max-w-md mx-auto bg-card border border-border rounded-sm p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Imię</label>
                <input type="text" placeholder="Twoje imię" className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
                <input type="email" placeholder="twoj@email.com" className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Wiadomość</label>
                <textarea rows={4} placeholder="Twoja wiadomość..." className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-vertical" />
              </div>
              <Button className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto w-full">
                Wyślij wiadomość
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DesignSystem;
