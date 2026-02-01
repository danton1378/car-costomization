import { WHEEL_OPTIONS, type WheelOption } from '@/data/carData';
import { cn } from '@/utils/cn';

interface WheelSelectionProps {
  selectedWheel: WheelOption;
  onSelect: (wheel: WheelOption) => void;
}

export function WheelSelection({ selectedWheel, onSelect }: WheelSelectionProps) {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Wheel <span className="gradient-text font-medium">Design</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Each wheel is precision-engineered to complement the vehicle's 
          aesthetic while delivering exceptional performance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHEEL_OPTIONS.map((wheel, index) => (
          <button
            key={wheel.id}
            onClick={() => onSelect(wheel)}
            className={cn(
              'group relative overflow-hidden rounded-2xl p-6 transition-all duration-500',
              'border border-white/10 hover:border-gold-500/30',
              selectedWheel.id === wheel.id
                ? 'bg-gradient-to-br from-gold-900/20 to-transparent border-gold-500/50'
                : 'bg-white/5 hover:bg-white/10'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Selection indicator */}
            {selectedWheel.id === wheel.id && (
              <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}

            {/* Wheel visualization */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <WheelSVG color={wheel.color} />
            </div>

            {/* Wheel info */}
            <div className="text-center">
              <h3 className={cn(
                'font-medium text-lg mb-1 transition-colors',
                selectedWheel.id === wheel.id ? 'text-gold-400' : 'text-white'
              )}>
                {wheel.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {wheel.size} {wheel.style}
              </p>
              <p className={cn(
                'text-sm font-medium',
                wheel.price === 0 ? 'text-gray-500' : 'text-gold-500'
              )}>
                {wheel.price === 0 
                  ? 'Included' 
                  : `+$${wheel.price.toLocaleString()}`}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Selected wheel details */}
      <div className="mt-12 glass rounded-2xl p-6 max-w-xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24">
            <WheelSVG color={selectedWheel.color} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gold-500 uppercase tracking-wider mb-1">
              Selected Wheel
            </p>
            <h3 className="font-display text-2xl text-white mb-1">
              {selectedWheel.size} {selectedWheel.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {selectedWheel.style}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WheelSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id={`wheelGrad-${color}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={adjustColor(color, 30)} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={adjustColor(color, -40)} />
        </radialGradient>
      </defs>
      
      {/* Tire */}
      <circle cx="50" cy="50" r="48" fill="#1a1a1a" />
      <circle cx="50" cy="50" r="46" fill="#2d2d2d" stroke="#1a1a1a" strokeWidth="2" />
      
      {/* Rim */}
      <circle cx="50" cy="50" r="38" fill={`url(#wheelGrad-${color})`} />
      <circle cx="50" cy="50" r="30" fill="#1f1f1f" />
      
      {/* Spokes */}
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
        <line
          key={i}
          x1={50 + Math.cos((angle * Math.PI) / 180) * 12}
          y1={50 + Math.sin((angle * Math.PI) / 180) * 12}
          x2={50 + Math.cos((angle * Math.PI) / 180) * 30}
          y2={50 + Math.sin((angle * Math.PI) / 180) * 30}
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      
      {/* Center cap */}
      <circle cx="50" cy="50" r="10" fill={adjustColor(color, 20)} />
      <circle cx="50" cy="50" r="5" fill="#1a1a1a" />
      
      {/* Highlight */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}

function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
