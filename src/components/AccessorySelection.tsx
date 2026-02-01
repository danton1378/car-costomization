import { ACCESSORIES } from '@/data/carData';
import { cn } from '@/utils/cn';

interface AccessorySelectionProps {
  selectedAccessories: string[];
  onToggle: (accessoryId: string) => void;
}

export function AccessorySelection({ selectedAccessories, onToggle }: AccessorySelectionProps) {
  const categories = [...new Set(ACCESSORIES.map(a => a.category))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Aerodynamics':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'Performance':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'Technology':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Interior':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'Safety':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'Protection':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'Lifestyle':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Convenience':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Performance <span className="gradient-text font-medium">Upgrades</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Enhance your hypercar with race-inspired upgrades, 
          cutting-edge technology, and exclusive accessories.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-medium text-white">{category}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gold-500/30 to-transparent ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACCESSORIES.filter(a => a.category === category).map((accessory) => {
                const isSelected = selectedAccessories.includes(accessory.id);
                return (
                  <button
                    key={accessory.id}
                    onClick={() => onToggle(accessory.id)}
                    className={cn(
                      'group relative flex items-start gap-4 p-5 rounded-xl transition-all duration-300 text-left',
                      'border',
                      isSelected
                        ? 'bg-gradient-to-br from-gold-500/15 to-gold-600/5 border-gold-500/50 shadow-lg shadow-gold-500/10'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    )}
                  >
                    {/* Checkbox */}
                    <div className={cn(
                      'w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all',
                      isSelected
                        ? 'bg-gold-500 border-gold-500'
                        : 'border-gray-500 group-hover:border-gray-400'
                    )}>
                      {isSelected && (
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className={cn(
                          'font-medium transition-colors',
                          isSelected ? 'text-gold-400' : 'text-white'
                        )}>
                          {accessory.name}
                        </h4>
                        <span className="text-gold-500 font-medium whitespace-nowrap">
                          +${accessory.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {accessory.description}
                      </p>
                    </div>

                    {/* Selected indicator glow */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-xl bg-gold-500/5 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected accessories summary */}
      {selectedAccessories.length > 0 && (
        <div className="mt-12 glass rounded-2xl p-6 max-w-3xl mx-auto border border-gold-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm text-gold-500 uppercase tracking-wider">
              Selected Upgrades ({selectedAccessories.length})
            </h4>
            <button
              onClick={() => selectedAccessories.forEach(id => onToggle(id))}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-3">
            {selectedAccessories.map((id) => {
              const accessory = ACCESSORIES.find(a => a.id === id);
              if (!accessory) return null;
              return (
                <div key={id} className="flex items-center justify-between text-sm group">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="text-gray-300">{accessory.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold-500">+${accessory.price.toLocaleString()}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggle(id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between">
              <span className="text-white font-medium">Total Upgrades</span>
              <span className="text-gold-400 font-bold text-lg">
                +${selectedAccessories
                  .reduce((sum, id) => sum + (ACCESSORIES.find(a => a.id === id)?.price || 0), 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
