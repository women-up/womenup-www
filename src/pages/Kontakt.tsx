import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import DiamondDivider from "@/components/DiamondDivider";
import Layout from "@/components/Layout";
import { useState } from "react";
import { toast } from "sonner";

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Proszę wypełnić wszystkie wymagane pola.");
      return;
    }
    toast.success("Wiadomość została wysłana! Odpowiemy najszybciej jak to możliwe.");
    setForm({ name: "", email: "", topic: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-brand-h1 md:text-[3.5rem] text-[2.25rem] font-bold text-primary tracking-brand-subtle mb-4">
            Kontakt
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Masz pytania? Chcesz dołączyć? Napisz do nas!
          </p>
          <DiamondDivider className="max-w-xs mx-auto" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border rounded-sm p-6 md:p-8">
              <h3 className="font-heading text-brand-h3 font-bold text-primary mb-6">Napisz do nas</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Imię *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Twoje imię" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="twoj@email.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="topic">Temat</Label>
                  <select
                    id="topic"
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="mt-1 flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="dolacz">Chcę dołączyć</option>
                    <option value="pytanie">Mam pytanie</option>
                    <option value="inicjatywa">Chcę rozpocząć inicjatywę</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Wiadomość *</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Twoja wiadomość..." rows={5} className="mt-1" />
                </div>
                <Button type="submit" className="uppercase tracking-brand-wide text-xs font-semibold px-8 py-3 h-auto w-full sm:w-auto inline-flex items-center gap-2">
                  <Send size={14} /> Wyślij
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "kontakt@womenup.com", href: "mailto:kontakt@womenup.com" },
                { icon: Phone, title: "Telefon", value: "+48 123 456 789" },
                { icon: MapPin, title: "Adres", value: "Podlasie, Polska" },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-sm p-5 flex items-start gap-4 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-card border border-border rounded-sm p-5">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Media społecznościowe</h4>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={20} /> Facebook
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={20} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 bg-secondary border border-border rounded-sm h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm text-muted-foreground">Podlasie, Polska</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
