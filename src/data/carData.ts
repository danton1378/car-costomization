export interface CarModel {
  id: string;
  name: string;
  series: string;
  basePrice: number;
  description: string;
  tagline: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    range?: string;
  };
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  type: 'solid' | 'metallic' | 'special';
  price: number;
}

export interface WheelOption {
  id: string;
  name: string;
  size: string;
  style: string;
  price: number;
  color: string;
}

export interface InteriorOption {
  id: string;
  name: string;
  material: string;
  color: string;
  accent: string;
  price: number;
}

export interface AccessoryOption {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
}

export const CAR_MODELS: CarModel[] = [
  {
    id: 'bugatti-chiron',
    name: 'Chiron Super Sport',
    series: 'Bugatti',
    basePrice: 3900000,
    description: 'The ultimate grand tourer. 1,600 horsepower of pure engineering perfection.',
    tagline: 'Beyond Imagination',
    specs: {
      power: '1,600 HP',
      acceleration: '2.3s 0-60',
      topSpeed: '304 mph',
    },
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador SVJ',
    series: 'Lamborghini',
    basePrice: 573966,
    description: 'The pinnacle of Lamborghini V12 super sports cars. Aggressive, powerful, unmistakable.',
    tagline: 'Real Emotions Shape The Future',
    specs: {
      power: '770 HP',
      acceleration: '2.8s 0-60',
      topSpeed: '217 mph',
    },
  },
  {
    id: 'ferrari-sf90',
    name: 'SF90 Stradale',
    series: 'Ferrari',
    basePrice: 625000,
    description: 'Ferrari\'s first plug-in hybrid. Extreme performance meets cutting-edge technology.',
    tagline: 'Redefining the Supercar',
    specs: {
      power: '986 HP',
      acceleration: '2.5s 0-60',
      topSpeed: '211 mph',
      range: '16 miles EV',
    },
  },
  {
    id: 'mclaren-720s',
    name: '720S Spider',
    series: 'McLaren',
    basePrice: 315000,
    description: 'Breathtaking performance meets open-air exhilaration. Pure driving pleasure.',
    tagline: 'Raise Your Limits',
    specs: {
      power: '710 HP',
      acceleration: '2.8s 0-60',
      topSpeed: '212 mph',
    },
  },
  {
    id: 'porsche-911-gt3',
    name: '911 GT3 RS',
    series: 'Porsche',
    basePrice: 223800,
    description: 'Born on the racetrack. The most powerful naturally aspirated 911 ever.',
    tagline: 'Racing DNA for the Road',
    specs: {
      power: '518 HP',
      acceleration: '3.0s 0-60',
      topSpeed: '184 mph',
    },
  },
  {
    id: 'mercedes-amg-one',
    name: 'AMG ONE',
    series: 'Mercedes-AMG',
    basePrice: 2720000,
    description: 'Formula 1 technology for the road. The world\'s first true F1 hypercar.',
    tagline: 'Born in Formula 1',
    specs: {
      power: '1,063 HP',
      acceleration: '2.9s 0-60',
      topSpeed: '219 mph',
      range: '11 miles EV',
    },
  },
  {
    id: 'aston-martin-valkyrie',
    name: 'Valkyrie',
    series: 'Aston Martin',
    basePrice: 3500000,
    description: 'The ultimate hypercar. A collaboration with Red Bull Racing. Art in motion.',
    tagline: 'Where Beauty Meets Pure Performance',
    specs: {
      power: '1,160 HP',
      acceleration: '2.5s 0-60',
      topSpeed: '250 mph',
    },
  },
  {
    id: 'koenigsegg-jesko',
    name: 'Jesko Absolut',
    series: 'Koenigsegg',
    basePrice: 3400000,
    description: 'The fastest Koenigsegg ever. Swedish hypercar excellence without compromise.',
    tagline: 'The Pursuit of the Absolute',
    specs: {
      power: '1,600 HP',
      acceleration: '2.5s 0-60',
      topSpeed: '330 mph',
    },
  },
];

export const EXTERIOR_COLORS: ColorOption[] = [
  { id: 'black-diamond', name: 'Black Diamond', hex: '#0a0a0a', type: 'metallic', price: 0 },
  { id: 'arctic-white', name: 'Arctic White', hex: '#f5f5f5', type: 'solid', price: 0 },
  { id: 'midnight-sapphire', name: 'Midnight Sapphire', hex: '#1a237e', type: 'metallic', price: 5500 },
  { id: 'english-green', name: 'English Green', hex: '#1b4332', type: 'metallic', price: 5500 },
  { id: 'burnt-orange', name: 'Burnt Orange', hex: '#bf360c', type: 'metallic', price: 5500 },
  { id: 'twilight-purple', name: 'Twilight Purple', hex: '#311b92', type: 'metallic', price: 7500 },
  { id: 'champagne-rose', name: 'Champagne Rosé', hex: '#d4a574', type: 'special', price: 12000 },
  { id: 'bespoke-blue', name: 'Bespoke Blue', hex: '#0d47a1', type: 'special', price: 15000 },
  { id: 'peacock-blue', name: 'Peacock Blue', hex: '#006064', type: 'special', price: 15000 },
  { id: 'gunmetal-grey', name: 'Gunmetal Grey', hex: '#37474f', type: 'metallic', price: 5500 },
  { id: 'burgundy', name: 'Burgundy', hex: '#4a1c2a', type: 'metallic', price: 7500 },
  { id: 'silver-sands', name: 'Silver Sands', hex: '#c0c0c0', type: 'metallic', price: 5500 },
];

export const WHEEL_OPTIONS: WheelOption[] = [
  { id: 'standard-22', name: 'Standard', size: '22"', style: 'Multi-Spoke', price: 0, color: '#9ca3af' },
  { id: 'sport-22', name: 'Sport', size: '22"', style: 'Y-Spoke Gloss Black', price: 4500, color: '#1f2937' },
  { id: 'forged-23', name: 'Forged', size: '23"', style: 'Fully Forged Polished', price: 8500, color: '#e5e7eb' },
  { id: 'black-23', name: 'Black Badge', size: '23"', style: 'Composite Carbon', price: 12000, color: '#111827' },
  { id: 'bespoke-24', name: 'Bespoke', size: '24"', style: 'Diamond Cut Two-Tone', price: 18000, color: '#fbbf24' },
];

export const INTERIOR_OPTIONS: InteriorOption[] = [
  { id: 'obsidian', name: 'Obsidian Black', material: 'Nappa Leather', color: '#1a1a1a', accent: '#d4a574', price: 0 },
  { id: 'seashell', name: 'Seashell White', material: 'Nappa Leather', color: '#f5f5f0', accent: '#1a1a1a', price: 3500 },
  { id: 'cognac', name: 'Cognac', material: 'Semi-Aniline Leather', color: '#8b4513', accent: '#2d1810', price: 7500 },
  { id: 'navy', name: 'Navy Blue', material: 'Full Aniline Leather', color: '#1a237e', accent: '#c0c0c0', price: 9500 },
  { id: 'hermes', name: 'Hermès Orange', material: 'Exclusive Leather', color: '#ff6b35', accent: '#1a1a1a', price: 15000 },
  { id: 'bespoke-two-tone', name: 'Bespoke Two-Tone', material: 'Custom Leather', color: '#2d2d2d', accent: '#c8830a', price: 25000 },
];

export const ACCESSORIES: AccessoryOption[] = [
  { id: 'carbon-aero', name: 'Full Carbon Aero Package', description: 'Front splitter, side skirts, rear diffuser & wing in exposed carbon fiber', category: 'Aerodynamics', price: 45000 },
  { id: 'titanium-exhaust', name: 'Titanium Exhaust System', description: 'Lightweight titanium exhaust with valve control for aggressive sound', category: 'Performance', price: 28000 },
  { id: 'track-telemetry', name: 'Track Telemetry System', description: 'Professional lap timing, data logging & real-time performance analytics', category: 'Technology', price: 18500 },
  { id: 'ceramic-brakes', name: 'Carbon Ceramic Brakes', description: 'Race-spec carbon ceramic brake system with colored calipers', category: 'Performance', price: 35000 },
  { id: 'alcantara-interior', name: 'Full Alcantara Interior', description: 'Complete interior wrapped in premium Italian Alcantara', category: 'Interior', price: 22000 },
  { id: 'racing-harness', name: '6-Point Racing Harness', description: 'FIA-approved 6-point harness with custom color stitching', category: 'Safety', price: 8500 },
  { id: 'lightweight-wheels', name: 'Forged Magnesium Wheels', description: 'Ultra-lightweight forged magnesium wheels with center-lock', category: 'Performance', price: 38000 },
  { id: 'paint-protection', name: 'PPF & Ceramic Coating', description: 'Full body paint protection film with ceramic coating', category: 'Protection', price: 15000 },
  { id: 'bespoke-luggage', name: 'Bespoke Luggage Set', description: 'Custom-fitted carbon fiber luggage set matching interior', category: 'Lifestyle', price: 12500 },
  { id: 'car-cover', name: 'Indoor/Outdoor Car Cover', description: 'Custom-fit breathable cover with brand embroidery', category: 'Protection', price: 4500 },
  { id: 'fire-system', name: 'Fire Suppression System', description: 'FIA-compliant automatic fire suppression for track use', category: 'Safety', price: 9500 },
  { id: 'lift-system', name: 'Front Axle Lift System', description: 'Hydraulic front lift for speed bumps and steep driveways', category: 'Convenience', price: 12000 },
];

export const CONFIGURATION_STEPS = [
  { id: 'model', label: 'Model', description: 'Select your vehicle' },
  { id: 'exterior', label: 'Exterior', description: 'Choose your color' },
  { id: 'wheels', label: 'Wheels', description: 'Select wheel design' },
  { id: 'interior', label: 'Interior', description: 'Personalize inside' },
  { id: 'accessories', label: 'Bespoke', description: 'Add finishing touches' },
  { id: 'summary', label: 'Summary', description: 'Review your creation' },
];
