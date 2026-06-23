import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Turnstile, { type TurnstileHandle } from "@/components/Turnstile";

const CAREER_OPTIONS = [
  { value: "firma", label: "Buduję własną firmę / Startup" },
  { value: "kariera", label: "Rozwijam karierę zawodową" },
  { value: "zmiana", label: "Szukam nowej ścieżki / Jestem w procesie zmiany" },
  { value: "inne", label: "Inne" },
];

const MODULE_OPTIONS = [
  { value: "blok1", label: "Blok I: Glow up & Smart wardrobe (makijaż i stylizacja)" },
  { value: "blok2", label: "Blok II: Psychologia – Spokój i pewność siebie (Natalia Maj)" },
  { value: "blok3", label: "Blok III: Biznes – Plan lotu (rozmowa z lokalnymi liderkami)" },
  { value: "blok4", label: "Blok IV: Social Media – Warsztat tworzenia rolek (Aleksandra Michałowska)" },
  { value: "blok6", label: "Blok VI: Relax & Ruch – Pilates z psami" },
];

const PILATES_OPTIONS = [
  { value: "mata", label: "Będę ćwiczyć na macie (Pamiętam o wygodnym stroju!)" },
  { value: "wlasny-pies", label: "Planuję zabrać własnego psa (Inicjatywa #RatujPSA)" },
  { value: "bez-psa", label: "Chcę ćwiczyć, ale nie będę mieć własnego czworonoga" },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  careerPath: "",
  careerOther: "",
  modules: [] as string[],
  socialSupport: "",
  pilates: "",
  promiseCircle: false,
  acceptRegulamin: false,
  imageConsent: false,
  website: "", // honeypot — must stay empty
};

const RejestracjaLevelUp = () => {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const mountedAt = useRef(Date.now());
  const turnstileRef = useRef<TurnstileHandle>(null);

  const resetTurnstile = () => {
    setTurnstileToken("");
    turnstileRef.current?.reset();
  };

  const toggleModule = (value: string) => {
    setForm((prev) => ({
      ...prev,
      modules: prev.modules.includes(value)
        ? prev.modules.filter((m) => m !== value)
        : [...prev.modules, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      toast.error("Proszę wypełnić imię i nazwisko, telefon oraz e-mail.");
      return;
    }
    if (!form.promiseCircle || !form.acceptRegulamin) {
      toast.error("Aby się zarejestrować, zaakceptuj Obietnicę Kręgu oraz Regulamin i Politykę Prywatności.");
      return;
    }
    if (!turnstileToken) {
      toast.error("Potwierdź, że nie jesteś robotem (weryfikacja antyspam).");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          elapsedMs: Date.now() - mountedAt.current,
          turnstileToken,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      toast.success("Rejestracja przyjęta! Sprawdź dane do płatności poniżej.");
      setSubmitted(true);
      setForm(initialForm);
      mountedAt.current = Date.now();
      resetTurnstile();
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Registration form error:", err);
      toast.error("Nie udało się wysłać zgłoszenia. Spróbuj ponownie lub napisz na womenup.inicjatywaspoleczna@gmail.com.");
      resetTurnstile();
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center">
              <p className="uppercase tracking-brand-wide text-xs font-semibold text-muted-foreground mb-3">
                26.07.2026 | Białystok
              </p>
              <h1 className="font-heading text-brand-h1 md:text-[3rem] text-[2rem] font-bold text-primary tracking-brand-subtle mb-4">
                Dziękujemy za zapis na wydarzenie „LEVEL UP: Kobieta"!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Aby potwierdzić udział, prosimy o dokonanie płatności za bilet przelewem tradycyjnym.
              </p>
              <DiamondDivider className="max-w-xs mx-auto" />
            </div>

            <div className="bg-card border border-border rounded-sm p-6 md:p-8 mt-6">
              <h2 className="font-heading text-brand-h3 font-bold text-primary mb-4">Dane do przelewu</h2>
              <dl className="space-y-2 text-foreground/90">
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Odbiorca:</dt>
                  <dd>Prestige Event House sp. z o.o.</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Bank:</dt>
                  <dd>PKO Bank Polski</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Numer rachunku:</dt>
                  <dd className="font-mono">88 1020 1332 0000 1102 1689 1500</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Kwota:</dt>
                  <dd>250,00 zł</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Tytuł przelewu:</dt>
                  <dd>LEVEL UP KOBIETA – [imię i nazwisko uczestniczki]</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Termin płatności:</dt>
                  <dd>do 23.07.2026 r.</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Przesłanie formularza zgłoszeniowego nie jest równoznaczne z potwierdzeniem miejsca na
                wydarzeniu. Miejsce zostaje potwierdzone po zaksięgowaniu pełnej opłaty za udział.
              </p>
              <p>Po zaksięgowaniu wpłaty prześlemy potwierdzenie uczestnictwa na podany adres e-mail.</p>
              <p>
                W razie pytań skontaktuj się z nami:{" "}
                <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">
                  womenup.inicjatywaspoleczna@gmail.com
                </a>
              </p>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto">
                <Link to="/">Wróć na stronę główną</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Layout>
    );
  }

  return (
    <Layout>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="uppercase tracking-brand-wide text-xs font-semibold text-muted-foreground mb-3">
            26.07.2026 | Białystok
          </p>
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Formularz rejestracyjny — LEVEL UP: Kobieta
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stań z nami w kręgu. Wypełnij poniższy formularz, aby dołączyć do społeczności kobiet
            walecznych, sprawczych i niezależnych.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* I. Informacje podstawowe */}
            <fieldset className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-5">
              <legend className="font-heading text-brand-h3 font-bold text-primary px-2">
                Informacje podstawowe
              </legend>
              <div>
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Twoje imię i nazwisko" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Numer telefonu *</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+48 ___ ___ ___" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Adres e-mail *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="twoj@email.com" className="mt-1" />
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-sm font-medium text-foreground">
                  Twoja droga zawodowa{" "}
                  <span className="text-muted-foreground font-normal">(pomóż nam lepiej dopasować networking)</span>
                </p>
                <RadioGroup value={form.careerPath} onValueChange={(value) => setForm({ ...form, careerPath: value })} className="gap-3">
                  {CAREER_OPTIONS.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-3">
                      <RadioGroupItem value={opt.value} id={`career-${opt.value}`} />
                      <Label htmlFor={`career-${opt.value}`} className="font-normal cursor-pointer">{opt.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {form.careerPath === "inne" && (
                  <Input value={form.careerOther} onChange={(e) => setForm({ ...form, careerOther: e.target.value })} placeholder="Napisz, czym się zajmujesz..." className="mt-1" />
                )}
              </div>
            </fieldset>

            {/* II. Twoja obecność w programie */}
            <fieldset className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-6">
              <legend className="font-heading text-brand-h3 font-bold text-primary px-2">
                Twoja obecność w programie
              </legend>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Które moduły interesują Cię najbardziej?</p>
                <div className="space-y-3">
                  {MODULE_OPTIONS.map((opt) => (
                    <div key={opt.value} className="flex items-start gap-3">
                      <Checkbox id={`mod-${opt.value}`} checked={form.modules.includes(opt.value)} onCheckedChange={() => toggleModule(opt.value)} className="mt-0.5" />
                      <Label htmlFor={`mod-${opt.value}`} className="font-normal cursor-pointer leading-snug">{opt.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">
                  Warsztat Social Media: chcesz skorzystać ze wsparcia zespołu przy tworzeniu Twojej autentycznej rolki na żywo?
                </p>
                <RadioGroup value={form.socialSupport} onValueChange={(value) => setForm({ ...form, socialSupport: value })} className="gap-3">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="tak" id="social-tak" />
                    <Label htmlFor="social-tak" className="font-normal cursor-pointer">Tak</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="nie" id="social-nie" />
                    <Label htmlFor="social-nie" className="font-normal cursor-pointer">Nie</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Stretching &amp; Pilates z psami:</p>
                <RadioGroup value={form.pilates} onValueChange={(value) => setForm({ ...form, pilates: value })} className="gap-3">
                  {PILATES_OPTIONS.map((opt) => (
                    <div key={opt.value} className="flex items-start gap-3">
                      <RadioGroupItem value={opt.value} id={`pilates-${opt.value}`} className="mt-0.5" />
                      <Label htmlFor={`pilates-${opt.value}`} className="font-normal cursor-pointer leading-snug">{opt.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </fieldset>

            {/* Akceptacja i zgody */}
            <fieldset className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-5">
              <legend className="font-heading text-brand-h3 font-bold text-primary px-2">
                Akceptacja i solidarność
              </legend>

              <div className="flex items-start gap-3">
                <Checkbox id="promise" checked={form.promiseCircle} onCheckedChange={(v) => setForm({ ...form, promiseCircle: v === true })} className="mt-0.5" />
                <Label htmlFor="promise" className="font-normal cursor-pointer leading-snug">
                  <span className="font-medium">Obietnica Kręgu *</span> — akceptuję zasadę solidarności zamiast rywalizacji i wzajemnego wspierania się w drodze na szczyt. Tak, staję w kręgu!
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="regulamin" checked={form.acceptRegulamin} onCheckedChange={(v) => setForm({ ...form, acceptRegulamin: v === true })} className="mt-0.5" />
                <Label htmlFor="regulamin" className="font-normal cursor-pointer leading-snug">
                  Akceptuję{" "}
                  <Link to="/regulamin-level-up" target="_blank" className="text-primary underline">Regulamin wydarzenia</Link>{" "}
                  i{" "}
                  <Link to="/polityka-prywatnosci" target="_blank" className="text-primary underline">Politykę Prywatności</Link>{" "}
                  stowarzyszenia Women Up! *
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="image" checked={form.imageConsent} onCheckedChange={(v) => setForm({ ...form, imageConsent: v === true })} className="mt-0.5" />
                <Label htmlFor="image" className="font-normal cursor-pointer leading-snug">
                  Wyrażam zgodę na wykorzystanie wizerunku (zdjęcia i rolki przy „Źródle Podlaskiej Mocy").
                </Label>
              </div>
            </fieldset>

            {/* Honeypot — ukryte pole-pułapka dla botów */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Nie wypełniaj tego pola</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
            </div>

            <div className="flex justify-center">
              <Turnstile ref={turnstileRef} onVerify={setTurnstileToken} onExpire={() => setTurnstileToken("")} />
            </div>

            <div className="text-center">
              <Button type="submit" disabled={sending} className="uppercase tracking-brand-wide text-xs font-semibold px-10 py-3 h-auto inline-flex items-center gap-2">
                <Send size={14} /> {sending ? "Wysyłanie..." : "Zarejestruj się"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Pola oznaczone * są wymagane. Zastrzegamy sobie możliwość zmian w programie wydarzenia.
              </p>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default RejestracjaLevelUp;
