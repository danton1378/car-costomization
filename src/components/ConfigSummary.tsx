import { 
  type CarModel, 
  type ColorOption, 
  type WheelOption, 
  type InteriorOption,
  ACCESSORIES 
} from '@/data/carData';
import { LuxuryCar } from './LuxuryCar';

interface ConfigSummaryProps {
  model: CarModel;
  color: ColorOption;
  wheel: WheelOption;
  interior: InteriorOption;
  accessories: string[];
}

export function ConfigSummary({ model, color, wheel, interior, accessories }: ConfigSummaryProps) {
  const accessoryTotal = accessories.reduce((sum, id) => 
    sum + (ACCESSORIES.find(a => a.id === id)?.price || 0), 0
  );
  
  const totalPrice = model.basePrice + color.price + wheel.price + interior.price + accessoryTotal;

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Your <span className="gradient-text font-medium">Creation</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Review your bespoke configuration. Every detail has been 
          carefully selected to create your perfect automobile.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Car Preview */}
        <div className="glass rounded-3xl p-8 mb-8 overflow-hidden">
          <div className="relative h-64 md:h-80">
            <LuxuryCar
              colorId={color.id}
              wheelId={wheel.id}
              modelId={model.id}
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-gold-500 text-sm uppercase tracking-wider mb-2">
              {model.series} Collection
            </p>
            <h3 className="font-display text-4xl text-white mb-2">
              {model.name}
            </h3>
            <p className="text-gray-400 italic">"{model.tagline}"</p>
          </div>
        </div>

        {/* Configuration Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Specifications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Exterior */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm text-gold-500 uppercase tracking-wider mb-4">
                Exterior
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full ring-2 ring-white/20"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1">
                  <p className="text-white font-medium">{color.name}</p>
                  <p className="text-sm text-gray-400 capitalize">{color.type} finish</p>
                </div>
                <p className="text-gold-500">
                  {color.price === 0 ? 'Included' : `+$${color.price.toLocaleString()}`}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <WheelIcon color={wheel.color} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{wheel.size} {wheel.name}</p>
                  <p className="text-sm text-gray-400">{wheel.style}</p>
                </div>
                <p className="text-gold-500">
                  {wheel.price === 0 ? 'Included' : `+$${wheel.price.toLocaleString()}`}
                </p>
              </div>
            </div>

            {/* Interior */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm text-gold-500 uppercase tracking-wider mb-4">
                Interior
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <div 
                    className="w-8 h-12 rounded-l-lg ring-1 ring-white/20"
                    style={{ backgroundColor: interior.color }}
                  />
                  <div 
                    className="w-4 h-12 rounded-r-lg ring-1 ring-white/20"
                    style={{ backgroundColor: interior.accent }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{interior.name}</p>
                  <p className="text-sm text-gray-400">{interior.material}</p>
                </div>
                <p className="text-gold-500">
                  {interior.price === 0 ? 'Included' : `+$${interior.price.toLocaleString()}`}
                </p>
              </div>
            </div>

            {/* Accessories */}
            {accessories.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <h4 className="text-sm text-gold-500 uppercase tracking-wider mb-4">
                Performance Upgrades
              </h4>
                <div className="space-y-3">
                  {accessories.map((id) => {
                    const accessory = ACCESSORIES.find(a => a.id === id);
                    if (!accessory) return null;
                    return (
                      <div key={id} className="flex items-center justify-between">
                        <div>
                          <p className="text-white">{accessory.name}</p>
                          <p className="text-sm text-gray-400">{accessory.description}</p>
                        </div>
                        <p className="text-gold-500 ml-4">
                          +${accessory.price.toLocaleString()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Performance */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm text-gold-500 uppercase tracking-wider mb-4">
                Performance
              </h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-light text-white">{model.specs.power}</p>
                  <p className="text-sm text-gray-400 mt-1">Power Output</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-white">{model.specs.acceleration}</p>
                  <p className="text-sm text-gray-400 mt-1">0-60 mph</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-white">{model.specs.topSpeed}</p>
                  <p className="text-sm text-gray-400 mt-1">Top Speed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h4 className="text-sm text-gold-500 uppercase tracking-wider mb-6">
                Price Summary
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Price</span>
                  <span className="text-white">${model.basePrice.toLocaleString()}</span>
                </div>
                
                {color.price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{color.name}</span>
                    <span className="text-gray-300">+${color.price.toLocaleString()}</span>
                  </div>
                )}
                
                {wheel.price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{wheel.name} Wheels</span>
                    <span className="text-gray-300">+${wheel.price.toLocaleString()}</span>
                  </div>
                )}
                
                {interior.price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{interior.name} Interior</span>
                    <span className="text-gray-300">+${interior.price.toLocaleString()}</span>
                  </div>
                )}
                
                {accessories.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Accessories ({accessories.length})</span>
                    <span className="text-gray-300">+${accessoryTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Price</span>
                  <span className="text-3xl font-display text-white">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  *Excluding taxes and delivery
                </p>
              </div>

              <button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-black font-medium py-4 rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all duration-300 animate-pulse-gold mb-4">
                Request a Consultation
              </button>

              <button className="w-full border border-white/20 text-white font-medium py-4 rounded-xl hover:bg-white/5 transition-colors mb-4">
                Save Configuration
              </button>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 text-gray-400 py-3 rounded-xl hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 text-gray-400 py-3 rounded-xl hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 mt-6">
                Estimated delivery: 12-16 weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WheelIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#1a1a1a" />
      <circle cx="12" cy="12" r="8" fill={color} />
      <circle cx="12" cy="12" r="6" fill="#2d2d2d" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
}
