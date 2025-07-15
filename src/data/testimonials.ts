export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  date: string
  text: string
  apartmentType?: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Marco e Giulia',
    location: 'Milano',
    rating: 5,
    date: '2024-08-15',
    text: 'Abbiamo trascorso una settimana meravigliosa nell\'appartamento bilocale. La posizione è fantastica, si arriva alla spiaggia in 2 minuti a piedi. L\'appartamento è pulitissimo e dotato di tutti i comfort. I proprietari sono stati gentilissimi e sempre disponibili. Torneremo sicuramente!',
    apartmentType: 'Appartamenti Bilocali',
    avatar: '/images/testimonials/marco-giulia.webp'
  },
  {
    id: 'testimonial-2',
    name: 'Famiglia Rossi',
    location: 'Roma',
    rating: 5,
    date: '2024-07-22',
    text: 'Vacanza perfetta con i nostri due bambini! Il trilocale è spazioso e accogliente, la cucina completamente attrezzata ci ha permesso di preparare i pasti senza problemi. I bambini hanno adorato il balcone e la vicinanza al mare. Ospitalità eccellente, consigliatissimo!',
    apartmentType: 'Appartamenti Trilocali',
    avatar: '/images/testimonials/famiglia-rossi.webp'
  },
  {
    id: 'testimonial-3',
    name: 'Laura',
    location: 'Firenze',
    rating: 5,
    date: '2024-09-03',
    text: 'Il monolocale è piccolo ma perfetto per due persone. Tutto molto pulito e funzionale. La posizione è comoda per raggiungere sia il centro che la spiaggia. Rapporto qualità-prezzo ottimo. I proprietari molto cortesi e disponibili per qualsiasi necessità.',
    apartmentType: 'Appartamento Monolocale',
    avatar: '/images/testimonials/laura.webp'
  },
  {
    id: 'testimonial-4',
    name: 'Giuseppe e Anna',
    location: 'Napoli',
    rating: 5,
    date: '2024-06-10',
    text: 'Siamo tornati per la terza volta e non ci delude mai! Gli appartamenti sono sempre impeccabili, la pulizia è maniacale e l\'accoglienza calorosa. San Vincenzo è un posto magico e questi appartamenti sono la base perfetta per esplorare la Costa degli Etruschi.',
    apartmentType: 'Appartamenti Bilocali',
    avatar: '/images/testimonials/giuseppe-anna.webp'
  },
  {
    id: 'testimonial-5',
    name: 'Elena',
    location: 'Torino',
    rating: 5,
    date: '2024-08-28',
    text: 'Appartamento bellissimo e modernamente arredato. La vista sul mare dal balcone è spettacolare, soprattutto al tramonto. Tutto funziona perfettamente, dall\'aria condizionata al Wi-Fi. Posizione strategica per visitare i borghi medievali della zona.',
    apartmentType: 'Appartamenti Bilocali',
    avatar: '/images/testimonials/elena.webp'
  },
  {
    id: 'testimonial-6',
    name: 'Luca e Sara',
    location: 'Bologna',
    rating: 5,
    date: '2024-07-05',
    text: 'Weekend romantico perfetto! Il monolocale è arredato con gusto e ha tutto quello che serve. La spiaggia è vicinissima e il centro di San Vincenzo offre ottimi ristoranti. I proprietari ci hanno dato consigli preziosi sui posti da visitare.',
    apartmentType: 'Appartamento Monolocale',
    avatar: '/images/testimonials/luca-sara.webp'
  },
  {
    id: 'testimonial-7',
    name: 'Famiglia Bianchi',
    location: 'Genova',
    rating: 5,
    date: '2024-08-01',
    text: 'Due settimane fantastiche nel trilocale! I nostri tre figli hanno avuto spazio per giocare e noi genitori abbiamo potuto rilassarci. La cucina attrezzata è stata perfetta per cucinare pesce fresco. Parcheggio privato comodissimo.',
    apartmentType: 'Appartamenti Trilocali',
    avatar: '/images/testimonials/famiglia-bianchi.webp'
  },
  {
    id: 'testimonial-8',
    name: 'Matteo',
    location: 'Venezia',
    rating: 5,
    date: '2024-09-15',
    text: 'Vacanza di lavoro e relax combinati perfettamente. Il Wi-Fi funziona benissimo per lo smart working e la sera potevo godermi il mare. Appartamento silenzioso e confortevole. Servizio di pulizia impeccabile.',
    apartmentType: 'Appartamenti Bilocali',
    avatar: '/images/testimonials/matteo.webp'
  },
  {
    id: 'testimonial-9',
    name: 'Chiara e Roberto',
    location: 'Palermo',
    rating: 5,
    date: '2024-09-10',
    text: 'Il bilocale tipo C è stata una piacevole sorpresa! Gli spazi sono organizzati in modo intelligente e la cucina è completamente attrezzata. Lavastoviglie inclusa che ci ha fatto comodo. Layout ottimizzato e servizi premium. Esperienza eccellente!',
    apartmentType: 'Appartamento Bilo tipo C',
    avatar: '/images/testimonials/chiara-roberto.webp'
  }
]

export function getTestimonialsByApartment(apartmentType: string): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.apartmentType === apartmentType)
}

export function getRecentTestimonials(limit: number = 6): Testimonial[] {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getAverageRating(): number {
  const totalRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
  return Math.round((totalRating / testimonials.length) * 10) / 10
}

export function getTotalReviews(): number {
  return testimonials.length
} 