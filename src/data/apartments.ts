export interface Apartment {
  id: string
  slug: string
  name: string
  type: string
  description: string
  shortDescription: string
  price: {
    low: number
    high: number
    currency: string
  }
  capacity: {
    guests: number
    bedrooms: number
    bathrooms: number
  }
  size: number
  amenities: string[]
  images: {
    main: string
    gallery: string[]
  }
  features: {
    icon: string
    title: string
    description: string
  }[]
  seoKeywords: string[]
}

export const apartments: Apartment[] = [
  {
    id: 'monolocale',
    slug: 'appartamento-monolocale',
    name: 'Appartamento Monolocale',
    type: 'Monolocale',
    description: 'Accogliente monolocale adatto a due persone, perfetto per coppie in cerca di intimità e comfort. Dotato di tutti i servizi essenziali e arredato con gusto moderno. La soluzione ideale per una vacanza romantica sulla Costa degli Etruschi.',
    shortDescription: 'Monolocale accogliente per due persone',
    price: {
      low: 50,
      high: 120,
      currency: 'EUR'
    },
    capacity: {
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    size: 30,
    amenities: [
      'Cucina attrezzata',
      'Aria condizionata',
      'Wi-Fi gratuito',
      'Televisione',
      'Parcheggio',
      'Lavatrice',
      'Asciugacapelli',
      'Biancheria da letto',
      'Asciugamani'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded1228ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ]
    },
    features: [
      {
        icon: 'heart',
        title: 'Intimo e Romantico',
        description: 'Perfetto per coppie in cerca di intimità'
      },
      {
        icon: 'home',
        title: 'Tutto il Necessario',
        description: 'Dotato di tutti i servizi essenziali'
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi Veloce',
        description: 'Connessione internet gratuita ad alta velocità'
      },
      {
        icon: 'thermometer',
        title: 'Aria Condizionata',
        description: 'Climatizzazione per il massimo comfort'
      }
    ],
    seoKeywords: [
      'monolocale san vincenzo',
      'appartamento due persone',
      'monolocale costa etruschi',
      'vacanze coppia',
      'appartamento romantico'
    ]
  },
  {
    id: 'bilocali',
    slug: 'appartamenti-bilocali',
    name: 'Appartamenti Bilocali',
    type: 'Bilocale',
    description: 'Appartamenti bilocali adatti a quattro persone, perfetti per piccole famiglie o gruppi di amici. Spazi confortevoli con camera da letto separata e soggiorno con angolo cottura. La soluzione ideale per una vacanza in compagnia sulla Costa degli Etruschi.',
    shortDescription: 'Bilocali confortevoli per quattro persone',
    price: {
      low: 80,
      high: 160,
      currency: 'EUR'
    },
    capacity: {
      guests: 4,
      bedrooms: 1,
      bathrooms: 1
    },
    size: 45,
    amenities: [
      'Cucina attrezzata',
      'Aria condizionata',
      'Wi-Fi gratuito',
      'Balcone',
      'Televisione',
      'Parcheggio',
      'Lavatrice',
      'Asciugacapelli',
      'Biancheria da letto',
      'Asciugamani'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ]
    },
    features: [
      {
        icon: 'users',
        title: 'Spazio per Quattro',
        description: 'Ideale per piccole famiglie o gruppi di amici'
      },
      {
        icon: 'home',
        title: 'Camera Separata',
        description: 'Camera da letto separata dal soggiorno'
      },
      {
        icon: 'utensils',
        title: 'Cucina Attrezzata',
        description: 'Angolo cottura completamente attrezzato'
      },
      {
        icon: 'car',
        title: 'Parcheggio',
        description: 'Posto auto disponibile'
      }
    ],
    seoKeywords: [
      'bilocale san vincenzo',
      'appartamento quattro persone',
      'bilocale costa etruschi',
      'vacanze famiglia',
      'appartamento cucina attrezzata'
    ]
  },
  {
    id: 'bilo-tipo-c',
    slug: 'appartamento-bilo-tipo-c',
    name: 'Appartamento Bilo tipo C',
    type: 'Bilocale Tipo C',
    description: 'Appartamento bilocale Tipo C con caratteristiche uniche e layout ottimizzato. Perfetto per quattro persone che cercano comfort e funzionalità. Cucina completamente attrezzata e spazi ben organizzati per una vacanza perfetta.',
    shortDescription: 'Bilocale Tipo C con layout ottimizzato',
    price: {
      low: 85,
      high: 165,
      currency: 'EUR'
    },
    capacity: {
      guests: 4,
      bedrooms: 1,
      bathrooms: 1
    },
    size: 48,
    amenities: [
      'Cucina completamente attrezzata',
      'Aria condizionata',
      'Wi-Fi gratuito',
      'Balcone',
      'Televisione',
      'Parcheggio',
      'Lavatrice',
      'Lavastoviglie',
      'Asciugacapelli',
      'Biancheria da letto',
      'Asciugamani'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ]
    },
    features: [
      {
        icon: 'layout',
        title: 'Layout Ottimizzato',
        description: 'Spazi organizzati per massimizzare comfort'
      },
      {
        icon: 'utensils',
        title: 'Cucina Completa',
        description: 'Cucina completamente attrezzata con lavastoviglie'
      },
      {
        icon: 'star',
        title: 'Tipo C Premium',
        description: 'Caratteristiche uniche e servizi premium'
      },
      {
        icon: 'thermometer',
        title: 'Clima Perfetto',
        description: 'Aria condizionata in tutti gli ambienti'
      }
    ],
    seoKeywords: [
      'bilocale tipo c san vincenzo',
      'appartamento premium',
      'bilocale attrezzato',
      'vacanze comfort',
      'appartamento tipo c'
    ]
  },
  {
    id: 'trilocali',
    slug: 'appartamenti-trilocali',
    name: 'Appartamenti Trilocali',
    type: 'Trilocale',
    description: 'Appartamenti trilocali adatti a sei persone, perfetti per famiglie numerose o gruppi di amici. Due camere da letto separate, soggiorno spazioso e cucina completamente attrezzata. La soluzione ideale per chi cerca spazio e comfort durante le vacanze.',
    shortDescription: 'Trilocali spaziosi per sei persone',
    price: {
      low: 120,
      high: 220,
      currency: 'EUR'
    },
    capacity: {
      guests: 6,
      bedrooms: 2,
      bathrooms: 2
    },
    size: 70,
    amenities: [
      'Cucina completamente attrezzata',
      'Aria condizionata',
      'Wi-Fi gratuito',
      'Balcone',
      'Televisione satellitare',
      'Parcheggio privato',
      'Lavatrice',
      'Lavastoviglie',
      'Asciugacapelli',
      'Biancheria da letto',
      'Asciugamani',
      'Ferro da stiro'
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ]
    },
    features: [
      {
        icon: 'home',
        title: 'Due Camere',
        description: 'Due camere da letto separate per massima privacy'
      },
      {
        icon: 'users',
        title: 'Spazio per Sei',
        description: 'Perfetto per famiglie numerose o gruppi'
      },
      {
        icon: 'utensils',
        title: 'Cucina Completa',
        description: 'Cucina completamente attrezzata con lavastoviglie'
      },
      {
        icon: 'car',
        title: 'Parcheggio Privato',
        description: 'Posto auto privato incluso'
      }
    ],
    seoKeywords: [
      'trilocale san vincenzo',
      'appartamento sei persone',
      'trilocale costa etruschi',
      'vacanze famiglia numerosa',
      'appartamento due camere'
    ]
  }
]

// Funzione helper per ottenere un appartamento per slug
export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find(apartment => apartment.slug === slug)
}

// Funzione helper per ottenere appartamenti per tipo
export function getApartmentsByType(type: string): Apartment[] {
  return apartments.filter(apartment => apartment.type === type)
}

// Funzione helper per ottenere tutti i tipi di appartamento
export function getApartmentTypes(): string[] {
  return [...new Set(apartments.map(apartment => apartment.type))]
} 