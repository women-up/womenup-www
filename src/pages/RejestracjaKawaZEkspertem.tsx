import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Turnstile, { type TurnstileHandle } from "@/components/Turnstile";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  acceptRegulamin: false,
  website: "", // honeypot — must stay empty
};

const RejestracjaKawaZEkspertem = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      toast.error("Proszę wypełnić imię i nazwisko, telefon oraz e-mail.");
      return;
    }
    if (!form.acceptRegulamin) {
      toast.error("Aby się zarejestrować, zaakceptuj Regulamin i Politykę Prywatności.");
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
          event: "kawa-z-ekspertem",
          elapsedMs: Date.now() - mountedAt.current,
          turnstileToken,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      toast.success("Zgłoszenie przyjęte! Sprawdź dane do płatności poniżej.");
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
                26.08.2026 | Białystok
              </p>
              <h1 className="font-heading text-brand-h1 md:text-[3rem] text-[2rem] font-bold text-primary tracking-brand-subtle mb-4">
                Dziękujemy za zgłoszenie!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Dziękujemy za przesłanie formularza zgłoszeniowego na pierwsze spotkanie z cyklu „Kawa z ekspertem:
                Sztuka bycia zrozumianym" organizowane w ramach inicjatywy społecznej WomenUP! Cieszymy się, że do nas
                dołączasz. Poniżej znajdziesz podsumowanie spotkania oraz dane do przelewu niezbędne do dokończenia
                rejestracji.
              </p>
              <DiamondDivider className="max-w-xs mx-auto" />
            </div>

            <div className="bg-card border border-border rounded-sm p-6 md:p-8 mt-6">
              <h2 className="font-heading text-brand-h3 font-bold text-primary mb-4">Szczegóły spotkania</h2>
              <dl className="space-y-2 text-foreground/90">
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Wydarzenie:</dt>
                  <dd>Spotkanie 1. Kawa z ekspertem: Sztuka bycia zrozumianym</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Prowadzący:</dt>
                  <dd>Piotr Szekowski</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Data:</dt>
                  <dd>26 sierpnia 2026 r., godz. 9:00</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Miejsce:</dt>
                  <dd>Hotel Mercure Białystok</dd>
                </div>
              </dl>
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
                  <dd>300,00 zł</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Tytuł przelewu:</dt>
                  <dd>KAWA Z EKSPERTEM – [Imię i Nazwisko Uczestnika]</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-medium text-foreground sm:w-44 shrink-0">Termin płatności:</dt>
                  <dd>do 23.08.2026 r.</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-foreground">Ważne:</strong> Ze względu na kameralny, warsztatowy charakter
                spotkania i limit miejsc (max. 20 osób), przesłanie formularza nie oznacza automatycznego
                zarezerwowania miejsca. Potwierdzenie udziału prześlemy osobnym mailem po zaksięgowaniu wpłaty.
              </p>
              <p>
                W razie pytań zapraszamy do kontaktu:{" "}
                <a href="mailto:womenup.inicjatywaspoleczna@gmail.com" className="text-primary hover:underline">
                  womenup.inicjatywaspoleczna@gmail.com
                </a>
              </p>
              <p className="font-medium text-foreground">Do zobaczenia przy kawie!</p>
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
            26.08.2026, godz. 9:00 | Hotel Mercure Białystok
          </p>
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Formularz zgłoszeniowy — Kawa z ekspertem
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Spotkanie 1: Sztuka bycia zrozumianym. Prowadzący: Piotr Szekowski. Liczba miejsc jest ściśle ograniczona
            (max. 20 osób) — decyduje kolejność zgłoszeń.
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            <fieldset className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-5">
              <legend className="font-heading text-brand-h3 font-bold text-primary px-2">
                Twoje dane
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
            </fieldset>

            <fieldset className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-5">
              <legend className="font-heading text-brand-h3 font-bold text-primary px-2">
                Zgody
              </legend>

              <div className="flex items-start gap-3">
                <Checkbox id="regulamin" checked={form.acceptRegulamin} onCheckedChange={(v) => setForm({ ...form, acceptRegulamin: v === true })} className="mt-0.5" />
                <Label htmlFor="regulamin" className="font-normal cursor-pointer leading-snug">
                  Akceptuję{" "}
                  <Link to="/regulamin" target="_blank" className="text-primary underline">Regulamin strony internetowej i wydarzeń Women Up! Inicjatywa Społeczna</Link>{" "}
                  i{" "}
                  <Link to="/polityka-prywatnosci" target="_blank" className="text-primary underline">Politykę Prywatności</Link>{" "}
                  stowarzyszenia Women Up! *
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
                <Send size={14} /> {sending ? "Wysyłanie..." : "Zarezerwuj swoje miejsce"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Pola oznaczone * są wymagane. Koszt udziału: 300,00 zł — dane do przelewu otrzymasz po wysłaniu zgłoszenia.
              </p>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default RejestracjaKawaZEkspertem;
