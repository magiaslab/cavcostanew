import { 
  Heart, 
  Home, 
  Wifi, 
  Thermometer, 
  Eye, 
  Car, 
  Check, 
  ChefHat, 
  Tv, 
  ParkingCircle, 
  Shirt, 
  Wind, 
  Bed, 
  Utensils,
  Shield,
  Coffee,
  Refrigerator,
  Microwave,
  Armchair,
  Bath,
  Sun,
  Waves,
  MapPin,
  Phone,
  Clock,
  Users,
  Building,
  AirVent,
  Camera,
  Snowflake,
  type LucideIcon 
} from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  // Features principali
  'heart': Heart,
  'home': Home,
  'wifi': Wifi,
  'thermometer': Thermometer,
  'eye': Eye,
  'car': Car,
  'check': Check,
  
  // Amenities cucina
  'cucina': ChefHat,
  'cucina attrezzata': ChefHat,
  'microonde': Microwave,
  'frigorifero': Refrigerator,
  'utensili': Utensils,
  'caffè': Coffee,
  
  // Amenities comfort
  'aria condizionata': AirVent,
  'climatizzazione': Snowflake,
  'riscaldamento': Thermometer,
  'ventilatore': Wind,
  
  // Amenities tecnologia
  'wi-fi gratuito': Wifi,
  'televisione': Tv,
  'tv': Tv,
  
  // Amenities servizi
  'parcheggio': ParkingCircle,
  'auto': Car,
  'lavatrice': Shirt,
  'asciugacapelli': Wind,
  
  // Amenities biancheria
  'biancheria da letto': Bed,
  'lenzuola': Bed,
  'asciugamani': Shirt,
  'accappatoi': Shirt,
  
  // Amenities bagno
  'bagno': Bath,
  'doccia': Bath,
  'vasca': Bath,
  
  // Amenities area living
  'soggiorno': Armchair,
  'divano': Armchair,
  'area relax': Armchair,
  
  // Amenities esterni
  'terrazzo': Sun,
  'balcone': Sun,
  'vista mare': Waves,
  'giardino': Sun,
  
  // Servizi generali
  'pulizia': Shield,
  'sicurezza': Shield,
  'assistenza': Phone,
  'reception': Building,
  'concierge': Users,
  'check-in': Clock,
  'localizzazione': MapPin,
  'posizione': MapPin,
  'foto': Camera,
  
  // Default
  'default': Check
}

export function Icon({ name, size = 20, color = 'currentColor', className = '' }: IconProps) {
  // Normalizza il nome dell'icona (minuscolo e trim)
  const normalizedName = name.toLowerCase().trim()
  
  // Cerca l'icona nella mappa, usa 'check' come fallback
  const IconComponent = iconMap[normalizedName] || iconMap['default']
  
  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={className}
    />
  )
}

// Funzione helper per ottenere l'icona giusta per un amenity
export function getAmenityIcon(amenity: string): string {
  const normalizedAmenity = amenity.toLowerCase().trim()
  
  // Mappatura più specifica per gli amenities
  const amenityIconMap: Record<string, string> = {
    'cucina attrezzata': 'cucina',
    'aria condizionata': 'aria condizionata',
    'wi-fi gratuito': 'wifi',
    'televisione': 'tv',
    'parcheggio': 'parcheggio',
    'lavatrice': 'lavatrice',
    'asciugacapelli': 'asciugacapelli',
    'biancheria da letto': 'biancheria da letto',
    'asciugamani': 'asciugamani',
    'microonde': 'microonde',
    'frigorifero': 'frigorifero',
    'caffè': 'caffè',
    'balcone': 'balcone',
    'terrazzo': 'terrazzo',
    'vista mare': 'vista mare',
    'bagno privato': 'bagno',
    'doccia': 'doccia',
    'vasca da bagno': 'vasca',
    'soggiorno': 'soggiorno',
    'divano letto': 'divano',
    'area relax': 'area relax',
    'pulizia inclusa': 'pulizia',
    'sicurezza': 'sicurezza',
    'assistenza 24/7': 'assistenza',
    'reception': 'reception',
    'check-in flessibile': 'check-in',
    'posizione centrale': 'posizione',
    'vicino al mare': 'vista mare',
    'climatizzazione': 'climatizzazione',
    'riscaldamento': 'riscaldamento',
    'ventilatore': 'ventilatore'
  }
  
  return amenityIconMap[normalizedAmenity] || 'check'
} 