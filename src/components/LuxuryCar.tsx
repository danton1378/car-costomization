import { EXTERIOR_COLORS, WHEEL_OPTIONS } from '@/data/carData';

interface LuxuryCarProps {
  colorId: string;
  wheelId: string;
  rotation?: number;
  modelId: string;
}

export function LuxuryCar({ colorId, wheelId, rotation = 0, modelId }: LuxuryCarProps) {
  const color = EXTERIOR_COLORS.find(c => c.id === colorId) || EXTERIOR_COLORS[0];
  const wheel = WHEEL_OPTIONS.find(w => w.id === wheelId) || WHEEL_OPTIONS[0];

  const bodyColor = color.hex;
  const wheelColor = wheel.color;
  
  const shadowColor = adjustColor(bodyColor, -30);
  const highlightColor = adjustColor(bodyColor, 40);

  // Get car shape based on model
  const getCarShape = () => {
    switch (modelId) {
      case 'bugatti-chiron':
        return <BugattiChironShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'lamborghini-aventador':
        return <LamborghiniAventadorShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'ferrari-sf90':
        return <FerrariSF90Shape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'mclaren-720s':
        return <McLaren720SShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'porsche-911-gt3':
        return <Porsche911GT3Shape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'mercedes-amg-one':
        return <MercedesAMGOneShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'aston-martin-valkyrie':
        return <AstonMartinValkyrieShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      case 'koenigsegg-jesko':
        return <KoenigseggJeskoShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
      default:
        return <LamborghiniAventadorShape bodyColor={bodyColor} shadowColor={shadowColor} highlightColor={highlightColor} wheelColor={wheelColor} />;
    }
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center car-shadow transition-transform duration-700 ease-out"
      style={{ transform: `perspective(1000px) rotateY(${rotation}deg)` }}
    >
      <svg viewBox="0 0 600 280" className="w-full max-w-4xl">
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={highlightColor} />
            <stop offset="30%" stopColor={bodyColor} />
            <stop offset="70%" stopColor={bodyColor} />
            <stop offset="100%" stopColor={shadowColor} />
          </linearGradient>
          
          <linearGradient id="metallicSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
          
          <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a2a3a" />
            <stop offset="100%" stopColor="#0a1520" />
          </linearGradient>
          
          <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="50%" stopColor="#c0c0c0" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
          
          <radialGradient id="wheelGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={adjustColor(wheelColor, 20)} />
            <stop offset="60%" stopColor={wheelColor} />
            <stop offset="100%" stopColor={adjustColor(wheelColor, -30)} />
          </radialGradient>
          
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.7)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="carbonFiber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
        </defs>
        
        {/* Ground shadow */}
        <ellipse cx="300" cy="250" rx="230" ry="28" fill="url(#groundShadow)" />
        
        {getCarShape()}
      </svg>
    </div>
  );
}

// Bugatti Chiron - Hyper GT shape
function BugattiChironShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Main body - sleek hypercar */}
      <path
        d="M45 180 
           L65 175 
           L95 140 
           L130 105 
           L180 85 
           L250 75 
           L350 75 
           L420 85 
           L470 105 
           L510 140 
           L540 175 
           L555 180 
           L560 195 
           L560 215 
           L40 215 
           L40 195 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Iconic C-line */}
      <path
        d="M280 78 
           C 240 78, 200 130, 190 190
           L 200 190
           C 210 140, 245 95, 280 95
           C 315 95, 350 140, 360 190
           L 370 190
           C 360 130, 320 78, 280 78"
        fill={shadowColor}
        opacity="0.6"
      />
      
      {/* Roof section */}
      <path
        d="M195 85 
           L220 50 
           L380 50 
           L405 85 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Windshield */}
      <path
        d="M198 83 
           L222 52 
           L290 52 
           L290 83 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side window */}
      <path
        d="M295 52 
           L378 52 
           L402 83 
           L295 83 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Horseshoe grille */}
      <path
        d="M55 170 
           Q 60 145, 85 145 
           L 85 195 
           L 60 195 
           Q 55 195, 55 185 
           Z"
        fill="#1a1a1a"
        stroke="url(#chromeGradient)"
        strokeWidth="2"
      />
      
      {/* Headlights */}
      <g filter="url(#glow)">
        <rect x="90" y="125" width="35" height="8" rx="2" fill="#ffffff" opacity="0.95" />
        <line x1="90" y1="136" x2="125" y2="136" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
      </g>
      
      {/* Taillights */}
      <g filter="url(#glow)">
        <rect x="520" y="155" width="30" height="30" rx="3" fill="#dc2626" opacity="0.9" />
        <line x1="525" y1="170" x2="545" y2="170" stroke="#fca5a5" strokeWidth="3" />
      </g>
      
      {/* Side air intake */}
      <path d="M280 140 L380 140 L390 170 L280 170 Z" fill="#1a1a1a" opacity="0.8" />
      
      {/* Metallic overlay */}
      <path
        d="M45 180 L65 175 L95 140 L130 105 L180 85 L250 75 L350 75 L420 85 L470 105 L510 140 L540 175 L555 180"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      
      {/* Wheels */}
      <Wheel cx={145} cy={210} wheelColor={wheelColor} size={44} spokes={7} />
      <Wheel cx={455} cy={210} wheelColor={wheelColor} size={44} spokes={7} />
      
      {/* Side mirror */}
      <ellipse cx="185" cy="80" rx="15" ry="8" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Lamborghini Aventador - Aggressive wedge shape
function LamborghiniAventadorShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Ultra-low aggressive body */}
      <path
        d="M35 190 
           L50 185 
           L80 160 
           L110 125 
           L160 100 
           L220 85 
           L380 85 
           L440 100 
           L490 125 
           L520 160 
           L550 185 
           L565 190 
           L568 205 
           L568 218 
           L32 218 
           L32 205 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Sharp angular roof */}
      <path
        d="M185 100 
           L210 55 
           L395 55 
           L420 100 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Angular windshield */}
      <path
        d="M188 98 
           L212 58 
           L300 58 
           L300 98 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side window */}
      <path
        d="M305 58 
           L390 58 
           L415 98 
           L305 98 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Sharp character lines */}
      <path d="M45 175 L555 175" stroke={shadowColor} strokeWidth="2" opacity="0.6" />
      <path d="M120 130 L480 130" stroke={shadowColor} strokeWidth="1" opacity="0.4" />
      
      {/* Y-shaped headlights */}
      <g filter="url(#glow)">
        <path d="M60 170 L90 145 L95 165 L60 175 Z" fill="#ffffff" opacity="0.95" />
        <path d="M75 165 L105 140 L110 155 L80 170 Z" fill="#fef9c3" opacity="0.9" />
      </g>
      
      {/* Y-shaped taillights */}
      <g filter="url(#glow)">
        <path d="M540 170 L510 145 L505 165 L540 175 Z" fill="#dc2626" opacity="0.9" />
        <path d="M525 165 L495 140 L490 155 L520 170 Z" fill="#f87171" opacity="0.9" />
      </g>
      
      {/* Front intake hexagon */}
      <path
        d="M45 180 L65 155 L95 155 L110 180 L95 200 L65 200 Z"
        fill="#1a1a1a"
        opacity="0.9"
      />
      
      {/* Side scoops */}
      <path d="M250 105 L280 105 L270 140 L240 140 Z" fill="#1a1a1a" opacity="0.7" />
      <path d="M320 105 L350 105 L360 140 L330 140 Z" fill="#1a1a1a" opacity="0.7" />
      
      {/* Large rear diffuser */}
      <path d="M480 200 L520 180 L555 200 L555 218 L480 218 Z" fill="#1a1a1a" opacity="0.8" />
      
      {/* Wheels - larger */}
      <Wheel cx={145} cy={212} wheelColor={wheelColor} size={46} spokes={5} />
      <Wheel cx={455} cy={212} wheelColor={wheelColor} size={46} spokes={5} />
      
      {/* Sharp side mirror */}
      <polygon points="175,90 195,85 195,100 175,95" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Ferrari SF90 - Hybrid supercar
function FerrariSF90Shape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Flowing body */}
      <path
        d="M40 185 
           L55 180 
           L85 155 
           L115 120 
           L170 95 
           L240 80 
           L360 80 
           L430 95 
           L485 120 
           L515 155 
           L545 180 
           L560 185 
           L565 200 
           L565 218 
           L35 218 
           L35 200 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Curved roof */}
      <path
        d="M195 95 
           Q 210 50, 300 50 
           Q 390 50, 405 95 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Curved windshield */}
      <path
        d="M198 93 
           Q 212 52, 295 52 
           L 295 93 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side window */}
      <path
        d="M300 52 
           Q 388 52, 402 93 
           L 300 93 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Ferrari-style front vents */}
      <path d="M50 175 L80 150 L100 175 Z" fill="#1a1a1a" opacity="0.9" />
      <path d="M60 180 L90 160 L105 180 Z" fill="#1a1a1a" opacity="0.7" />
      
      {/* Signature headlights */}
      <g filter="url(#glow)">
        <path d="M90 140 L130 135 L130 155 L90 160 Z" fill="#ffffff" opacity="0.95" />
        <path d="M95 145 L125 142 L125 150 L95 152 Z" fill="#fef9c3" />
      </g>
      
      {/* Dual taillights */}
      <g filter="url(#glow)">
        <circle cx="525" cy="160" r="12" fill="#dc2626" opacity="0.9" />
        <circle cx="525" cy="160" r="7" fill="#f87171" />
        <circle cx="545" cy="170" r="10" fill="#dc2626" opacity="0.9" />
        <circle cx="545" cy="170" r="5" fill="#f87171" />
      </g>
      
      {/* Side air intakes */}
      <path d="M265 110 L290 110 L285 145 L260 145 Z" fill="#1a1a1a" opacity="0.7" />
      <path d="M310 110 L335 110 L340 145 L315 145 Z" fill="#1a1a1a" opacity="0.7" />
      
      {/* Character line */}
      <path d="M55 170 L545 170" stroke={shadowColor} strokeWidth="2" opacity="0.5" />
      
      {/* Rear diffuser with active aero */}
      <path d="M470 200 L510 175 L550 200 L550 218 L470 218 Z" fill="url(#carbonFiber)" />
      
      {/* Hybrid badge area */}
      <rect x="430" y="145" width="35" height="15" rx="3" fill={shadowColor} opacity="0.5" />
      
      {/* Wheels */}
      <Wheel cx={145} cy={212} wheelColor={wheelColor} size={45} spokes={5} />
      <Wheel cx={455} cy={212} wheelColor={wheelColor} size={45} spokes={5} />
      
      {/* Aerodynamic mirrors */}
      <path d="M175 90 Q 185 82, 200 88 L 198 98 Q 185 95, 175 95 Z" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// McLaren 720S - Dihedral doors shape
function McLaren720SShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Sculpted body with air channels */}
      <path
        d="M42 185 
           L58 178 
           L90 145 
           L130 110 
           L190 88 
           L260 78 
           L340 78 
           L410 88 
           L470 110 
           L510 145 
           L542 178 
           L558 185 
           L563 200 
           L563 218 
           L37 218 
           L37 200 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Teardrop cabin */}
      <path
        d="M210 88 
           Q 230 45, 300 45 
           Q 370 45, 390 88 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Wraparound windshield */}
      <path
        d="M213 86 
           Q 232 48, 295 48 
           L 295 86 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side glass */}
      <path
        d="M300 48 
           Q 368 48, 387 86 
           L 300 86 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Signature air channels through body */}
      <path d="M180 130 Q 200 155, 200 190 L 190 190 Q 190 160, 175 140 Z" fill="#1a1a1a" opacity="0.6" />
      <path d="M420 130 Q 400 155, 400 190 L 410 190 Q 410 160, 425 140 Z" fill="#1a1a1a" opacity="0.6" />
      
      {/* McLaren headlights - distinctive shape */}
      <g filter="url(#glow)">
        <path d="M95 135 L135 125 L140 145 L100 155 Z" fill="#ffffff" opacity="0.95" />
        <path d="M105 140 L130 133 L133 145 L108 150 Z" fill="#fef9c3" />
      </g>
      
      {/* Hammerhead taillights */}
      <g filter="url(#glow)">
        <path d="M505 150 L545 145 L550 175 L510 180 Z" fill="#dc2626" opacity="0.9" />
        <line x1="510" y1="160" x2="545" y2="157" stroke="#fca5a5" strokeWidth="3" />
      </g>
      
      {/* Front splitter */}
      <path d="M42 200 L130 190 L130 205 L42 215 Z" fill="url(#carbonFiber)" />
      
      {/* Dihedral door line */}
      <path d="M220 88 Q 250 150, 220 200" stroke={shadowColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M380 88 Q 350 150, 380 200" stroke={shadowColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Rear diffuser */}
      <path d="M470 200 L505 170 L555 200 L555 218 L470 218 Z" fill="url(#carbonFiber)" />
      
      {/* Wheels */}
      <Wheel cx={145} cy={212} wheelColor={wheelColor} size={45} spokes={10} />
      <Wheel cx={455} cy={212} wheelColor={wheelColor} size={45} spokes={10} />
      
      {/* Aero mirrors */}
      <ellipse cx="195" cy="85" rx="14" ry="7" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Porsche 911 GT3 RS
function Porsche911GT3Shape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Classic 911 silhouette */}
      <path
        d="M48 185 
           L65 180 
           L95 155 
           L130 130 
           L175 110 
           L230 95 
           L370 95 
           L430 110 
           L475 130 
           L505 155 
           L535 180 
           L552 185 
           L558 200 
           L558 218 
           L42 218 
           L42 200 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Iconic sloping rear */}
      <path
        d="M200 110 
           L220 65 
           L350 65 
           L410 110 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Sloping windshield */}
      <path
        d="M203 108 
           L222 67 
           L290 67 
           L290 108 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Rear quarter window */}
      <path
        d="M295 67 
           L345 67 
           L405 108 
           L295 108 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Giant GT3 RS rear wing */}
      <g>
        <rect x="400" y="25" width="120" height="8" rx="2" fill="url(#carbonFiber)" />
        <path d="M415 35 L415 75" stroke={shadowColor} strokeWidth="4" />
        <path d="M505 35 L505 75" stroke={shadowColor} strokeWidth="4" />
        {/* Wing endplates */}
        <path d="M395 20 L400 45 L420 45 L415 20 Z" fill="url(#carbonFiber)" />
        <path d="M500 20 L505 45 L525 45 L520 20 Z" fill="url(#carbonFiber)" />
      </g>
      
      {/* 911 round headlights */}
      <g filter="url(#glow)">
        <circle cx="95" cy="145" r="15" fill="#fef9c3" opacity="0.9" />
        <circle cx="95" cy="145" r="10" fill="#ffffff" />
        <circle cx="95" cy="145" r="4" fill="#fbbf24" />
      </g>
      
      {/* Full-width taillight */}
      <g filter="url(#glow)">
        <rect x="420" y="95" width="80" height="12" rx="2" fill="#dc2626" opacity="0.9" />
        <line x1="430" y1="101" x2="490" y2="101" stroke="#fca5a5" strokeWidth="3" />
      </g>
      
      {/* NACA ducts */}
      <path d="M280 130 L300 130 L295 155 L275 155 Z" fill="#1a1a1a" opacity="0.6" />
      <path d="M320 130 L340 130 L345 155 L325 155 Z" fill="#1a1a1a" opacity="0.6" />
      
      {/* Front splitter */}
      <path d="M48 200 L140 195 L140 210 L48 215 Z" fill="url(#carbonFiber)" />
      
      {/* Side graphics line */}
      <path d="M75 170 L525 170" stroke={shadowColor} strokeWidth="2" opacity="0.5" />
      
      {/* Wheels - center-lock style */}
      <Wheel cx={150} cy={212} wheelColor={wheelColor} size={44} spokes={5} centerLock />
      <Wheel cx={450} cy={212} wheelColor={wheelColor} size={44} spokes={5} centerLock />
      
      {/* Mirror with aero */}
      <polygon points="180,100 200,95 202,110 182,112" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Mercedes-AMG ONE
function MercedesAMGOneShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* F1-inspired low body */}
      <path
        d="M35 188 
           L50 182 
           L80 150 
           L120 115 
           L175 92 
           L250 80 
           L350 80 
           L425 92 
           L480 115 
           L520 150 
           L550 182 
           L565 188 
           L570 202 
           L570 218 
           L30 218 
           L30 202 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Shark fin */}
      <path
        d="M350 80 
           L360 30 
           L400 80 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* F1-style raised cockpit */}
      <path
        d="M200 92 
           L225 52 
           L380 52 
           L405 92 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Windshield */}
      <path
        d="M203 90 
           L227 54 
           L295 54 
           L295 90 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side window */}
      <path
        d="M300 54 
           L375 54 
           L400 90 
           L300 90 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Top air scoop - F1 style */}
      <path d="M290 54 L310 54 L305 35 L295 35 Z" fill="#1a1a1a" />
      
      {/* Arrow-shaped headlights */}
      <g filter="url(#glow)">
        <path d="M90 140 L130 130 L125 155 L85 160 Z" fill="#ffffff" opacity="0.95" />
        <path d="M95 145 L120 138 L117 150 L92 155 Z" fill="#fef9c3" />
      </g>
      
      {/* LED strip taillights */}
      <g filter="url(#glow)">
        <rect x="500" y="130" width="50" height="5" rx="2" fill="#dc2626" opacity="0.9" />
        <rect x="510" y="140" width="40" height="5" rx="2" fill="#dc2626" opacity="0.9" />
        <rect x="520" y="150" width="30" height="5" rx="2" fill="#dc2626" opacity="0.9" />
      </g>
      
      {/* Side pods - F1 inspired */}
      <path d="M220 115 L260 115 L250 160 L210 160 Z" fill="#1a1a1a" opacity="0.7" />
      <path d="M340 115 L380 115 L390 160 L350 160 Z" fill="#1a1a1a" opacity="0.7" />
      
      {/* Large rear diffuser */}
      <path d="M450 195 L500 165 L560 195 L560 218 L450 218 Z" fill="url(#carbonFiber)" />
      
      {/* Front splitter */}
      <path d="M35 200 L150 188 L150 205 L35 215 Z" fill="url(#carbonFiber)" />
      
      {/* T-wing */}
      <path d="M470 40 L530 40 L530 45 L470 45 Z" fill="url(#carbonFiber)" />
      <path d="M500 45 L500 80" stroke={shadowColor} strokeWidth="3" />
      
      {/* Wheels */}
      <Wheel cx={145} cy={212} wheelColor={wheelColor} size={45} spokes={10} />
      <Wheel cx={455} cy={212} wheelColor={wheelColor} size={45} spokes={10} />
      
      {/* Aero mirrors */}
      <path d="M180 88 Q 192 78, 205 85 L 203 95 Q 190 92, 180 95 Z" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Aston Martin Valkyrie
function AstonMartinValkyrieShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Extreme aero body - huge tunnels */}
      <path
        d="M40 185 
           L55 175 
           L85 140 
           L135 105 
           L200 88 
           L280 82 
           L380 82 
           L450 88 
           L515 105 
           L545 140 
           L555 175 
           L565 185 
           L568 200 
           L568 218 
           L32 218 
           L32 200 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Central spine/cockpit */}
      <path
        d="M230 88 
           L250 50 
           L350 50 
           L370 88 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Fighter jet canopy */}
      <path
        d="M235 86 
           Q 252 52, 300 52 
           Q 348 52, 365 86 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Massive venturi tunnels */}
      <path
        d="M100 165 
           Q 150 200, 200 200 
           L 200 218 
           L 50 218 
           L 50 200 
           Q 80 195, 100 165"
        fill="#0a0a0a"
        opacity="0.9"
      />
      <path
        d="M500 165 
           Q 450 200, 400 200 
           L 400 218 
           L 550 218 
           L 550 200 
           Q 520 195, 500 165"
        fill="#0a0a0a"
        opacity="0.9"
      />
      
      {/* Blade-like headlights */}
      <g filter="url(#glow)">
        <path d="M85 125 L125 118 L120 145 L80 148 Z" fill="#ffffff" opacity="0.95" />
      </g>
      
      {/* Continuous taillights */}
      <g filter="url(#glow)">
        <rect x="405" y="95" width="100" height="8" rx="2" fill="#dc2626" opacity="0.9" />
        <line x1="415" y1="99" x2="495" y2="99" stroke="#fca5a5" strokeWidth="2" />
      </g>
      
      {/* Front fenders */}
      <path d="M120 140 L180 120 L175 170 L115 180 Z" fill="url(#bodyGradient)" />
      <path d="M480 140 L420 120 L425 170 L485 180 Z" fill="url(#bodyGradient)" />
      
      {/* Rear wing with LMP-style mounts */}
      <g>
        <path d="M370 20 L530 20 L530 32 L370 32 Z" fill="url(#carbonFiber)" />
        <path d="M390 32 L395 85" stroke={shadowColor} strokeWidth="5" />
        <path d="M505 32 L500 85" stroke={shadowColor} strokeWidth="5" />
      </g>
      
      {/* Wheels - race spec */}
      <Wheel cx={155} cy={212} wheelColor={wheelColor} size={46} spokes={5} centerLock />
      <Wheel cx={445} cy={212} wheelColor={wheelColor} size={46} spokes={5} centerLock />
      
      {/* Tiny mirrors */}
      <ellipse cx="215" cy="82" rx="10" ry="5" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Koenigsegg Jesko
function KoenigseggJeskoShape({ bodyColor, shadowColor, wheelColor }: { bodyColor: string; shadowColor: string; highlightColor: string; wheelColor: string }) {
  return (
    <g>
      {/* Aerodynamic body */}
      <path
        d="M38 185 
           L55 178 
           L88 145 
           L135 108 
           L200 88 
           L280 78 
           L380 78 
           L445 88 
           L510 108 
           L545 145 
           L558 178 
           L565 185 
           L570 200 
           L570 218 
           L32 218 
           L32 200 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Dihedral synchro-helix doors roof */}
      <path
        d="M210 88 
           L235 48 
           L365 48 
           L390 88 
           Z"
        fill="url(#bodyGradient)"
      />
      
      {/* Curved windshield */}
      <path
        d="M213 86 
           L237 50 
           L295 50 
           L295 86 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Side window */}
      <path
        d="M300 50 
           L362 50 
           L387 86 
           L300 86 
           Z"
        fill="url(#windowGradient)"
        stroke={shadowColor}
        strokeWidth="2"
      />
      
      {/* Front intake */}
      <path d="M55 170 L100 145 L115 175 L65 190 Z" fill="#1a1a1a" opacity="0.9" />
      
      {/* Ghost headlights */}
      <g filter="url(#glow)">
        <ellipse cx="105" cy="132" rx="18" ry="8" fill="#ffffff" opacity="0.95" />
        <ellipse cx="105" cy="132" rx="10" ry="5" fill="#fef9c3" />
      </g>
      
      {/* Wraparound taillights */}
      <g filter="url(#glow)">
        <path d="M495 110 Q 540 110, 555 160 L 540 165 Q 528 125, 495 125 Z" fill="#dc2626" opacity="0.9" />
      </g>
      
      {/* Massive rear wing - Triplex */}
      <g>
        {/* Main element */}
        <path d="M360 15 L540 15 L540 25 L360 25 Z" fill="url(#carbonFiber)" />
        {/* Second element */}
        <path d="M370 30 L530 30 L530 38 L370 38 Z" fill="url(#carbonFiber)" />
        {/* Third element */}
        <path d="M380 43 L520 43 L520 50 L380 50 Z" fill="url(#carbonFiber)" />
        {/* Pylons */}
        <path d="M390 50 L395 85" stroke={shadowColor} strokeWidth="6" />
        <path d="M505 50 L500 85" stroke={shadowColor} strokeWidth="6" />
        {/* Endplates */}
        <path d="M355 10 L365 55 L385 55 L370 10 Z" fill="url(#carbonFiber)" />
        <path d="M535 10 L530 55 L510 55 L520 10 Z" fill="url(#carbonFiber)" />
      </g>
      
      {/* Top-mounted exhaust */}
      <circle cx="460" cy="78" r="12" fill="#1a1a1a" />
      <circle cx="460" cy="78" r="8" fill="#2a2a2a" />
      
      {/* Side air outlets */}
      <path d="M350 115 L400 115 L410 155 L360 155 Z" fill="#1a1a1a" opacity="0.6" />
      
      {/* Front splitter */}
      <path d="M38 200 L150 188 L155 205 L38 215 Z" fill="url(#carbonFiber)" />
      
      {/* Wheels - Koenigsegg hollow spoke */}
      <Wheel cx={150} cy={212} wheelColor={wheelColor} size={46} spokes={5} centerLock />
      <Wheel cx={450} cy={212} wheelColor={wheelColor} size={46} spokes={5} centerLock />
      
      {/* Synchro-helix door hinge line */}
      <path d="M240 88 Q 280 130, 240 195" stroke={shadowColor} strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M360 88 Q 320 130, 360 195" stroke={shadowColor} strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Aero mirrors on stalks */}
      <path d="M195 85 L210 70 L225 75 L215 92 Z" fill={bodyColor} stroke={shadowColor} strokeWidth="1" />
    </g>
  );
}

// Reusable Wheel component
function Wheel({ cx, cy, wheelColor, size, spokes, centerLock = false }: { cx: number; cy: number; wheelColor: string; size: number; spokes: number; centerLock?: boolean }) {
  const spokeAngles = Array.from({ length: spokes }, (_, i) => (360 / spokes) * i);
  
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      {/* Tire */}
      <circle r={size} fill="#1a1a1a" />
      <circle r={size - 3} fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1" />
      
      {/* Rim */}
      <circle r={size - 8} fill="url(#wheelGradient)" />
      <circle r={size - 14} fill="#1f1f1f" />
      
      {/* Spokes */}
      {spokeAngles.map((angle, i) => (
        <line
          key={i}
          x1={Math.cos((angle * Math.PI) / 180) * 12}
          y1={Math.sin((angle * Math.PI) / 180) * 12}
          x2={Math.cos((angle * Math.PI) / 180) * (size - 14)}
          y2={Math.sin((angle * Math.PI) / 180) * (size - 14)}
          stroke={wheelColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      
      {/* Center cap */}
      <circle r={centerLock ? 10 : 8} fill={adjustColor(wheelColor, 15)} />
      {centerLock ? (
        // Center lock nut
        <polygon 
          points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" 
          fill={wheelColor} 
          stroke="#1a1a1a" 
          strokeWidth="1"
        />
      ) : (
        <circle r={4} fill="#1a1a1a" />
      )}
    </g>
  );
}

// Helper function to adjust color brightness
function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
