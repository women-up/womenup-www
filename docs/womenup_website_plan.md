# WOMEN UP! — Plan Strony Internetowej

## 1. WIZJA PROJEKTU

**Domena:** womenUp.com  
**Charakter:** Informacyjno-społecznościowy portal stowarzyszenia  
**Region:** Podlasie, Polska  
**Cel startowy:** Informacja + kontakt — żeby ludzie wiedzieli z kim pogadać

---

## 2. ARCHITEKTURA STRONY

### Mapa stron (Sitemap)

```
womenup.com/
├── / (Strona główna)
│   ├── Hero z misją i CTA
│   ├── O nas — krótki opis
│   ├── Wyróżnione inicjatywy
│   └── Ostatnie posty / aktualności
│
├── /o-nas
│   ├── Misja i wartości
│   ├── Historia powstania
│   ├── Zespół / Członkinie
│   └── Jak dołączyć
│
├── /inicjatywy
│   ├── Lista wszystkich inicjatyw
│   ├── /inicjatywy/dla-psiakow
│   ├── /inicjatywy/moc-podlasia
│   ├── /inicjatywy/kobiety-razem
│   └── [każda członkini może dodać swoją]
│
├── /blog
│   ├── Lista postów (kafelki)
│   ├── /blog/[slug] (pojedynczy post)
│   ├── Kategorie / tagi
│   └── Integracja z FB + Instagram feed
│
├── /kontakt
│   ├── Formularz kontaktowy
│   ├── Dane kontaktowe
│   ├── Mapa (lokalizacja Podlasie)
│   └── Linki do social media
│
└── /dolacz
    ├── Informacje o członkostwie
    ├── Formularz zgłoszeniowy
    └── FAQ
```

### Funkcjonalności na start (MVP)

| Funkcja | Priorytet | Opis |
|---------|-----------|------|
| Strona główna | 🔴 Must | Hero, misja, wyróżnione inicjatywy |
| O nas | 🔴 Must | Misja, wartości, zespół |
| Lista inicjatyw | 🔴 Must | Karty z opisem każdej inicjatywy |
| Blog / Aktualności | 🔴 Must | Posty, statusy, wydarzenia |
| Kontakt | 🔴 Must | Formularz + dane + social media |
| Integracja Facebook | 🟡 Should | Embed feed FB na stronie |
| Integracja Instagram | 🟡 Should | Embed feed IG na stronie |
| Dołącz do nas | 🟡 Should | Formularz zgłoszeniowy |
| Newsletter | 🟢 Nice | Zbieranie emaili na aktualności |

---

## 3. DESIGN SYSTEM — "WOMEN UP!"

### 3.1 Filozofia designu

**Styl:** Współczesny folk — tradycja spotyka nowoczesność  
**Inspiracja:** Podlaskie hafty krzyżykowe, wzory ludowe, wspólnota kobiet  
**Ton:** Ciepły, silny, wspólnotowy, autentyczny  
**Energia:** Otwartość + moc + serdeczność

### 3.2 Kolory

```
PALETA GŁÓWNA:
──────────────────────────────────────
Czerwień Podlaska    #C41A2C  — kolor główny (akcent, CTA, logo)
Kremowe Płótno       #F5F0E8  — tło główne (ciepłe, naturalne)
Biel                 #FFFFFF  — tło kart, sekcji
Antracyt             #2D2926  — tekst główny

PALETA WSPIERAJĄCA:
──────────────────────────────────────
Ciepły Beż           #E8DFD0  — tło sekcji alternujących
Czerwień Jasna        #E8505B  — hover states, linki
Złoto Podlasia        #C9972A  — akcenty dekoracyjne
Zieleń Łąk            #4A7C59  — sukces, pozytywne statusy
Szarość Ciepła         #8B8178  — tekst drugorzędny
```

### 3.3 Typografia

```
DISPLAY: Cormorant Garamond (700, 600)  — nagłówki
BODY:    Source Sans 3 (400, 600)        — tekst, przyciski

H1: Cormorant Garamond 700, 56px
H2: Cormorant Garamond 600, 40px
H3: Cormorant Garamond 600, 28px
Body: Source Sans 3 400, 16px
Button: Source Sans 3 600, 16px, uppercase
```

### 3.4 Elementy dekoracyjne

- Wzór krzyżykowy jako tło (SVG pattern, low opacity)
- Diamond ◇ jako separator sekcji (linia + diament pośrodku)
- Chevron ↑ nawiązujący do "UP!"
- Border-left: 4px solid #C41A2C na kartach

### 3.5 Komponenty

- **Button Primary:** bg #C41A2C, white text, 2px radius, uppercase
- **Button Secondary:** outlined, border #C41A2C
- **Card:** white bg, left border red, subtle shadow
- **Navbar:** sticky, kremowe tło, logo + linki
- **Footer:** ciemny #2D2926, kolumny z linkami

---

## 4. INTEGRACJE

- **Facebook:** Page Plugin embed (wymaga FB App ID)
- **Instagram:** Embed lub Elfsight widget (wymaga IG Business)
- **Formularz:** Supabase backend lub Formspree
- **Newsletter:** Mailchimp / Supabase

---

## 5. PLAN REALIZACJI

```
Faza 1 (Tydzień 1-2): Fundament + Strona główna + O nas
Faza 2 (Tydzień 2-3): Inicjatywy + Blog + Kontakt
Faza 3 (Tydzień 3-4): Integracje social media + SEO
Faza 4 (Tydzień 4):   Domena + treści + launch 🚀
```
