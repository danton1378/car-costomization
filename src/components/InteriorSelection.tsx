import { INTERIOR_OPTIONS, type InteriorOption } from '@/data/carData';
import { cn } from '@/utils/cn';

interface InteriorSelectionProps {
  selectedInterior: InteriorOption;
  onSelect: (interior: InteriorOption) => void;
}

export function InteriorSelection({ selectedInterior, onSelect }: InteriorSelectionProps) {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Interior <span className="gradient-text font-medium">Sanctuary</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Immerse yourself in unparalleled luxury. Each interior is 
          hand-crafted using the finest materials from around the world.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERIOR_OPTIONS.map((interior, index) => (
          <button
            key={interior.id}
            onClick={() => onSelect(interior)}
            className={cn(
              'group relative overflow-hidden rounded-2xl transition-all duration-500 text-left',
              'border border-white/10 hover:border-gold-500/30',
              selectedInterior.id === interior.id
                ? 'border-gold-500/50'
                : 'hover:border-white/20'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Interior preview */}
            <div 
              className="h-40 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${interior.color} 0%, ${adjustColor(interior.color, -30)} 100%)` 
              }}
            >
              {/* Accent stripe */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{ backgroundColor: interior.accent }}
              />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <InteriorPattern />
              </div>

              {/* Selection indicator */}
              {selectedInterior.id === interior.id && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            {/* Interior info */}
            <div className="p-5 bg-white/5">
              <h3 className={cn(
                'font-medium text-lg mb-1 transition-colors',
                selectedInterior.id === interior.id ? 'text-gold-400' : 'text-white'
              )}>
                {interior.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {interior.material}
              </p>
              
              {/* Color swatches */}
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-6 h-6 rounded-full ring-1 ring-white/20"
                  style={{ backgroundColor: interior.color }}
                />
                <span className="text-xs text-gray-500">+</span>
                <div 
                  className="w-6 h-6 rounded-full ring-1 ring-white/20"
                  style={{ backgroundColor: interior.accent }}
                />
                <span className="text-xs text-gray-500 ml-2">Accent</span>
              </div>

              <p className={cn(
                'text-sm font-medium',
                interior.price === 0 ? 'text-gray-500' : 'text-gold-500'
              )}>
                {interior.price === 0 
                  ? 'Included' 
                  : `+$${interior.price.toLocaleString()}`}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Selected interior details */}
      <div className="mt-12 glass rounded-2xl overflow-hidden max-w-3xl mx-auto">
        <div 
          className="h-32 relative"
          style={{ 
            background: `linear-gradient(135deg, ${selectedInterior.color} 0%, ${adjustColor(selectedInterior.color, -30)} 100%)` 
          }}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 h-3"
            style={{ backgroundColor: selectedInterior.accent }}
          />
          <div className="absolute inset-0 opacity-20">
            <InteriorPattern />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gold-500 uppercase tracking-wider mb-1">
                Selected Interior
              </p>
              <h3 className="font-display text-2xl text-white mb-2">
                {selectedInterior.name}
              </h3>
              <p className="text-gray-400">
                {selectedInterior.material} with {selectedInterior.name.toLowerCase()} finish
              </p>
            </div>
            <div className="text-right">
              <p className={cn(
                'text-xl font-medium',
                selectedInterior.price === 0 ? 'text-gray-500' : 'text-gold-500'
              )}>
                {selectedInterior.price === 0 
                  ? 'Included' 
                  : `+$${selectedInterior.price.toLocaleString()}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InteriorPattern() {
  return (
    <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="leatherPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="transparent" />
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.3)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leatherPattern)" />
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
