import { EXTERIOR_COLORS, type ColorOption } from '@/data/carData';
import { cn } from '@/utils/cn';

interface ExteriorSelectionProps {
  selectedColor: ColorOption;
  onSelect: (color: ColorOption) => void;
}

export function ExteriorSelection({ selectedColor, onSelect }: ExteriorSelectionProps) {
  const colorsByType = {
    solid: EXTERIOR_COLORS.filter(c => c.type === 'solid'),
    metallic: EXTERIOR_COLORS.filter(c => c.type === 'metallic'),
    special: EXTERIOR_COLORS.filter(c => c.type === 'special'),
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Exterior <span className="gradient-text font-medium">Colour</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Each colour is meticulously crafted using traditional techniques, 
          with multiple layers applied by hand.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Solid Colors */}
        <ColorSection
          title="Solid"
          colors={colorsByType.solid}
          selectedColor={selectedColor}
          onSelect={onSelect}
        />

        {/* Metallic Colors */}
        <ColorSection
          title="Metallic"
          colors={colorsByType.metallic}
          selectedColor={selectedColor}
          onSelect={onSelect}
        />

        {/* Special Colors */}
        <ColorSection
          title="Bespoke"
          description="Hand-mixed exclusive finishes"
          colors={colorsByType.special}
          selectedColor={selectedColor}
          onSelect={onSelect}
        />
      </div>

      {/* Selected color details */}
      <div className="mt-12 glass rounded-2xl p-6 max-w-xl mx-auto">
        <div className="flex items-center gap-6">
          <div
            className="w-20 h-20 rounded-full shadow-xl ring-2 ring-white/20"
            style={{ backgroundColor: selectedColor.hex }}
          />
          <div className="flex-1">
            <p className="text-xs text-gold-500 uppercase tracking-wider mb-1">
              {selectedColor.type} finish
            </p>
            <h3 className="font-display text-2xl text-white mb-1">
              {selectedColor.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {selectedColor.price === 0 
                ? 'Included in base price' 
                : `+$${selectedColor.price.toLocaleString()}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorSection({ 
  title, 
  description, 
  colors, 
  selectedColor, 
  onSelect 
}: { 
  title: string;
  description?: string;
  colors: ColorOption[];
  selectedColor: ColorOption;
  onSelect: (color: ColorOption) => void;
}) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color)}
            className={cn(
              'group relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300',
              'hover:bg-white/5',
              selectedColor.id === color.id && 'bg-white/10'
            )}
          >
            <div
              className={cn(
                'w-14 h-14 rounded-full shadow-lg transition-all duration-300',
                'group-hover:scale-110 group-hover:shadow-xl',
                selectedColor.id === color.id && 'ring-2 ring-gold-500 ring-offset-2 ring-offset-black scale-110',
                color.hex === '#f5f5f5' && 'ring-1 ring-white/30'
              )}
              style={{ backgroundColor: color.hex }}
            />
            <div className="text-center">
              <p className={cn(
                'text-xs transition-colors',
                selectedColor.id === color.id ? 'text-gold-400' : 'text-gray-400'
              )}>
                {color.name}
              </p>
              {color.price > 0 && (
                <p className="text-[10px] text-gray-600">
                  +${color.price.toLocaleString()}
                </p>
              )}
            </div>
            
            {/* Selection dot */}
            {selectedColor.id === color.id && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
