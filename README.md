# CAV Costa degli Etruschi - Sito Web

Refactoring completo del sito web "CAV Costa degli Etruschi" per appartamenti vacanze a San Vincenzo, Toscana.

## 🚀 Tecnologie Utilizzate

- **Framework**: [Astro](https://astro.build/) 4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.x
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (adattato per React)
- **Linguaggio**: TypeScript
- **Deployment**: Static Site Generation (SSG)

## 📋 Caratteristiche Principali

### 🎨 Design System
- Palette colori personalizzata con primary (blu/verde acqua) e accent (giallo/arancione)
- Tipografia moderna con font Google (Inter + Lato)
- Componenti UI consistenti e riutilizzabili
- Design responsive e mobile-first

### 🏠 Struttura del Sito
- **Homepage**: Hero, perché sceglierci, appartamenti, territorio (anteprima), testimonianze
- **Appartamenti**: Pagine dettaglio con galleria, caratteristiche, servizi, recensioni
- **Territorio**: Cultura & storia, enogastronomia, natura & attività, eventi locali
- **Contatti**: Modulo di contatto, informazioni di contatto, mappa
- **Chi Siamo**: Storia, team, valori

### 🔍 SEO e Performance
- Meta tag ottimizzati per ogni pagina
- Struttura URL semantica
- Dati strutturati JSON-LD (Schema.org)
- Ottimizzazione immagini con formati moderni
- Heading semantici e gerarchici

## 📁 Struttura del Progetto

```
cavcostanew/
├── public/                  # Asset statici
├── src/
│   ├── components/         # Componenti riutilizzabili
│   │   ├── ui/            # Componenti UI (Button, Card, etc.)
│   │   └── sections/      # Sezioni specifiche
│   ├── data/              # Dati e mock
│   │   ├── apartments.ts  # Dati appartamenti
│   │   ├── testimonials.ts # Recensioni clienti
│   │   └── territory.ts   # Informazioni territorio
│   ├── layouts/           # Layout principali
│   │   └── Layout.astro   # Layout base
│   ├── lib/               # Utility e helper
│   │   └── utils.ts       # Funzioni utility
│   ├── pages/             # Pagine del sito
│   │   ├── appartamenti/  # Pagine appartamenti
│   │   ├── index.astro    # Homepage
│   │   ├── territorio.astro
│   │   ├── contatti.astro
│   │   └── chi-siamo.astro
│   └── styles/            # Stili globali
│       └── globals.css    # CSS globale e Tailwind
├── astro.config.mjs       # Configurazione Astro
├── tailwind.config.mjs    # Configurazione Tailwind
├── tsconfig.json          # Configurazione TypeScript
└── package.json           # Dipendenze e script
```

## 🚀 Installazione e Sviluppo

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone <repository-url>
cd cavcostanew

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Script Disponibili
```bash
npm run dev          # Server di sviluppo
npm run build        # Build di produzione
npm run preview      # Anteprima build
npm run astro        # Comandi Astro CLI
```

## 📊 Dati e Contenuti

### Appartamenti
I dati degli appartamenti sono definiti in `src/data/apartments.ts`:
- Bilocale Vista Mare
- Trilocale Comfort  
- Monolocale Economico

### Testimonianze
Le recensioni clienti sono in `src/data/testimonials.ts` con funzioni helper per:
- Filtrare per tipo appartamento
- Ottenere recensioni recenti
- Calcolare rating medio

### Territorio
Informazioni su attrazioni e attività in `src/data/territory.ts`:
- Cultura & Storia (Parco Baratti, borghi medievali)
- Enogastronomia (Strada del Vino, prodotti tipici)
- Natura & Attività (parchi, sport, terme)

## 🎨 Sistema di Design

### Colori
```css
/* Primario - Blu/Verde acqua */
primary-500: #2c5282

/* Secondario - Giallo/Arancione */
accent-500: #f6ad55

/* Neutri */
neutral-50 to neutral-900
```

### Componenti UI
- Button (varianti: default, outline, accent, ghost)
- Card (con Header, Content, Footer)
- Badge (per categorie e tag)
- Input/Textarea (per form)
- Icon (wrapper per Lucide React)

### Utility CSS
```css
.btn-primary         /* Bottone primario */
.btn-outline         /* Bottone outline */
.card-hover          /* Card con hover effect */
.section-padding     /* Padding sezioni */
.container-custom    /* Container responsivo */
.text-gradient       /* Testo gradiente */
```

## 🔄 Prossimi Passi

### Implementazioni Mancanti
- [ ] Pagina contatti con modulo funzionante
- [ ] Pagina chi siamo
- [ ] Pagina index per appartamenti
- [ ] Sistema di prenotazione integrato
- [ ] Galleria immagini interattiva
- [ ] Mobile menu responsive

### Miglioramenti Futuri
- [ ] Animazioni scroll-triggered
- [ ] Lazy loading immagini
- [ ] Mappa interattiva territorio
- [ ] Calendario disponibilità
- [ ] Integrazione analytics
- [ ] Ottimizzazione Core Web Vitals

## 🖼️ Immagini

Attualmente il sito utilizza immagini placeholder da Unsplash:
- Immagini appartamenti: interni moderni e accoglienti
- Territorio: paesaggi toscani, borghi, vigneti
- Hero: panorama Costa degli Etruschi
- Logo: placeholder temporaneo

**Nota**: Sostituire con immagini ufficiali prima della pubblicazione.

## 🔍 SEO

### Meta Tag
Ogni pagina include:
- Title ottimizzato
- Description unica
- Keywords specifiche
- Open Graph per social media
- Twitter Cards

### Dati Strutturati
Schema.org JSON-LD per:
- LodgingBusiness (homepage)
- Apartment (pagine appartamenti)
- TouristDestination (territorio)
- Review/AggregateRating (recensioni)

## 📱 Responsività

Il sito è completamente responsive con breakpoint:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 Obiettivi di Business

- Aumentare prenotazioni dirette
- Migliorare visibilità online
- Comunicare qualità e ospitalità
- Promuovere territorio Costa degli Etruschi
- Ottimizzare conversioni

## 📄 License

Questo progetto è proprietario di CAV Costa degli Etruschi.

## 👥 Contatti

Per supporto tecnico o domande sul progetto:
- Email: [inserire email tecnico]
- Telefono: [inserire numero]

---

**Versione**: 1.0.0
**Ultimo aggiornamento**: Dicembre 2024
**Sviluppato con**: ❤️ per CAV Costa degli Etruschi 