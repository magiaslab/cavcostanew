export interface TerritorySection {
  id: string
  title: string
  description: string
  icon: string
  color: string
  items: TerritoryItem[]
}

export interface TerritoryItem {
  id: string
  name: string
  description: string
  distance: string
  category: string
  image: string
  link?: string
  highlights: string[]
}

export const territorySections: TerritorySection[] = [
  {
    id: 'cultura-storia',
    title: 'Cultura & Storia',
    description: 'Scopri i tesori archeologici e i borghi medievali della Costa degli Etruschi',
    icon: 'landmark',
    color: 'primary',
    items: [
      {
        id: 'parco-baratti',
        name: 'Parco Archeologico di Baratti e Populonia',
        description: 'Importante sito archeologico etrusco con necropoli e resti dell\'antica città di Populonia. Un viaggio nella storia antica immerso in un paesaggio naturale mozzafiato.',
        distance: '15 km',
        category: 'Archeologia',
        image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        link: 'https://www.parchivaldicornia.it',
        highlights: ['Necropoli etrusche', 'Museo archeologico', 'Vista panoramica', 'Sentieri naturalistici']
      },
      {
        id: 'campiglia-marittima',
        name: 'Campiglia Marittima',
        description: 'Borgo medievale perfettamente conservato con castello, mura e vicoli caratteristici. Un tuffo nel medioevo toscano con vista sulla costa.',
        distance: '20 km',
        category: 'Borgo medievale',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Castello medievale', 'Mura fortificate', 'Centro storico', 'Panorama costa']
      },
      {
        id: 'suvereto',
        name: 'Suvereto',
        description: 'Uno dei borghi più belli d\'Italia, con architettura medievale intatta e tradizioni enogastronomiche secolari.',
        distance: '25 km',
        category: 'Borgo medievale',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Borgo più bello d\'Italia', 'Architettura medievale', 'Prodotti tipici', 'Sagre tradizionali']
      },
      {
        id: 'castagneto-carducci',
        name: 'Castagneto Carducci',
        description: 'Borgo legato alla memoria del poeta Giosuè Carducci, circondato da cipressi e vigneti della famosa zona vinicola.',
        distance: '30 km',
        category: 'Borgo medievale',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Casa Carducci', 'Cipressi storici', 'Vigneti Bolgheri', 'Museo del territorio']
      }
    ]
  },
  {
    id: 'enogastronomia',
    title: 'Enogastronomia',
    description: 'Assapora i sapori autentici della tradizione toscana e i vini d\'eccellenza',
    icon: 'wine',
    color: 'accent',
    items: [
      {
        id: 'strada-vino-bolgheri',
        name: 'Strada del Vino di Bolgheri',
        description: 'Percorso enologico attraverso le prestigiose cantine di Bolgheri, famose per i Super Tuscan e i vini d\'eccellenza mondiale.',
        distance: '35 km',
        category: 'Enologia',
        image: 'https://images.unsplash.com/photo-1474919743851-c4df8b6ee140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        link: 'https://www.lastradadelvino.com',
        highlights: ['Vini Super Tuscan', 'Cantine storiche', 'Degustazioni', 'Paesaggi vinicoli']
      },
      {
        id: 'prodotti-tipici',
        name: 'Prodotti Tipici Locali',
        description: 'Olio extravergine d\'oliva DOP, miele, formaggi pecorini e salumi tradizionali della Val di Cornia.',
        distance: '0-30 km',
        category: 'Prodotti tipici',
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Olio EVO DOP', 'Miele locale', 'Formaggi pecorini', 'Salumi artigianali']
      },
      {
        id: 'san-vincenzo-fish-festival',
        name: 'San Vincenzo Fish Festival',
        description: 'Festival annuale dedicato al pesce e ai prodotti del mare, con degustazioni, cooking show e intrattenimento.',
        distance: '0 km',
        category: 'Eventi',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Pesce fresco', 'Cooking show', 'Degustazioni', 'Eventi musicali']
      },
      {
        id: 'sagre-locali',
        name: 'Sagre e Feste Tradizionali',
        description: 'Sagre paesane nei borghi vicini con specialità locali, musica tradizionale e atmosfera autentica.',
        distance: '10-30 km',
        category: 'Eventi',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Cucina tradizionale', 'Musica dal vivo', 'Artigianato', 'Tradizioni locali']
      }
    ]
  },
  {
    id: 'natura-attivita',
    title: 'Natura & Attività',
    description: 'Esplora la natura incontaminata e pratica sport all\'aria aperta',
    icon: 'mountain',
    color: 'success',
    items: [
      {
        id: 'parco-rimigliano',
        name: 'Parco Costiero di Rimigliano',
        description: 'Parco naturale con spiagge selvagge, pinete e sentieri per trekking e birdwatching. Ideale per chi ama la natura incontaminata.',
        distance: '5 km',
        category: 'Natura',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Spiagge selvagge', 'Pinete', 'Trekking', 'Birdwatching']
      },
      {
        id: 'cala-violina',
        name: 'Cala Violina',
        description: 'Una delle spiagge più belle della Toscana, raggiungibile attraverso un sentiero nel bosco. Sabbia finissima e acque cristalline.',
        distance: '45 km',
        category: 'Spiagge',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Sabbia finissima', 'Acque cristalline', 'Sentiero nel bosco', 'Natura incontaminata']
      },
      {
        id: 'sport-acquatici',
        name: 'Sport Acquatici',
        description: 'Windsurf, kitesurf, vela e paddle surf nelle acque della Costa degli Etruschi. Scuole e noleggio attrezzature.',
        distance: '0-10 km',
        category: 'Sport',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Windsurf', 'Kitesurf', 'Vela', 'Paddle surf']
      },
      {
        id: 'cicloturismo',
        name: 'Cicloturismo e Trekking',
        description: 'Rete di sentieri per mountain bike e trekking tra colline, boschi e costa. Percorsi per tutti i livelli di difficoltà.',
        distance: '0-20 km',
        category: 'Sport',
        image: 'https://images.unsplash.com/photo-1544191696-15693bd6c33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Mountain bike', 'Trekking', 'Sentieri panoramici', 'Diversi livelli']
      },
      {
        id: 'terme',
        name: 'Terme e Benessere',
        description: 'Terme del Calidario e altre località termali per relax e benessere. Acque termali naturali e centri benessere.',
        distance: '30-60 km',
        category: 'Benessere',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        highlights: ['Acque termali', 'Centri benessere', 'Relax', 'Trattamenti naturali']
      }
    ]
  }
]

export interface LocalEvent {
  id: string
  name: string
  description: string
  date: string
  location: string
  category: string
  image: string
  link?: string
}

export const localEvents: LocalEvent[] = [
  {
    id: 'fish-festival-2024',
    name: 'San Vincenzo Fish Festival',
    description: 'Festival dedicato al pesce e ai prodotti del mare con degustazioni, cooking show e intrattenimento musicale.',
    date: '2024-07-15',
    location: 'San Vincenzo',
    category: 'Gastronomia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.sanvincenzo.it'
  },
  {
    id: 'sagra-cinghiale',
    name: 'Sagra del Cinghiale',
    description: 'Tradizionale sagra con specialità a base di cinghiale, vino locale e musica tradizionale.',
    date: '2024-09-20',
    location: 'Suvereto',
    category: 'Gastronomia',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'calici-stelle',
    name: 'Calici di Stelle',
    description: 'Notte romantica con degustazioni di vino sotto le stelle nelle cantine di Bolgheri.',
    date: '2024-08-10',
    location: 'Bolgheri',
    category: 'Enologia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'palio-golfo',
    name: 'Palio del Golfo',
    description: 'Regata storica tra i borghi marinari del golfo con cortei storici e festeggiamenti.',
    date: '2024-06-02',
    location: 'La Spezia',
    category: 'Tradizioni',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

export function getTerritoryItemsByCategory(category: string): TerritoryItem[] {
  return territorySections
    .flatMap(section => section.items)
    .filter(item => item.category === category)
}

export function getUpcomingEvents(): LocalEvent[] {
  const now = new Date()
  return localEvents
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
} 