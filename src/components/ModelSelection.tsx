import { CAR_MODELS, type CarModel } from '@/data/carData';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface ModelSelectionProps {
  selectedModel: CarModel;
  onSelect: (model: CarModel) => void;
}

// Brand logos as SVG paths
const brandLogos: Record<string, ReactNode> = {
  'Bugatti': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <ellipse cx="50" cy="30" rx="48" ry="28" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="50" y="36" textAnchor="middle" fontSize="16" fontWeight="bold">EB</text>
    </svg>
  ),
  'Lamborghini': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <polygon points="50,5 95,55 5,55" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 25 L55 35 L50 30 L45 35 Z" fill="currentColor"/>
    </svg>
  ),
  'Ferrari': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <rect x="10" y="10" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 15 L55 25 L50 50 L45 25 Z" fill="currentColor"/>
    </svg>
  ),
  'McLaren': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <path d="M10 45 Q50 10 90 45" fill="none" stroke="currentColor" strokeWidth="3"/>
    </svg>
  ),
  'Porsche': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <rect x="15" y="10" width="70" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="50" y="36" textAnchor="middle" fontSize="12" fontWeight="bold">P</text>
    </svg>
  ),
  'Mercedes-AMG': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <circle cx="50" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 8 L35 45 L50 30 L65 45 Z" fill="currentColor"/>
    </svg>
  ),
  'Aston Martin': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <path d="M5 30 L30 15 L50 10 L70 15 L95 30 L70 35 L50 30 L30 35 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  'Koenigsegg': (
    <svg viewBox="0 0 100 60" className="w-12 h-8" fill="currentColor">
      <path d="M50 5 L90 30 L50 55 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="30" r="8" fill="currentColor"/>
    </svg>
  ),
};

export function ModelSelection({ selectedModel, onSelect }: ModelSelectionProps) {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Select Your <span className="gradient-text font-medium">Hypercar</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose from the world's most exclusive hypercars, 
          each representing the ultimate in automotive engineering and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {CAR_MODELS.map((model, index) => (
          <button
            key={model.id}
            onClick={() => onSelect(model)}
            className={cn(
              'group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500',
              'border border-white/10 hover:border-gold-500/50',
              selectedModel.id === model.id
                ? 'bg-gradient-to-br from-gold-900/30 to-gold-800/10 border-gold-500/50 ring-1 ring-gold-500/30'
                : 'bg-white/5 hover:bg-white/10'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Selection indicator */}
            {selectedModel.id === model.id && (
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}

            {/* Brand logo */}
            <div className={cn(
              "mb-4 text-gray-500 transition-colors",
              selectedModel.id === model.id ? "text-gold-500" : "group-hover:text-gold-400"
            )}>
              {brandLogos[model.series] || (
                <div className="w-12 h-8 flex items-center">
                  <span className="text-xs uppercase tracking-widest">{model.series}</span>
                </div>
              )}
            </div>

            {/* Series badge */}
            <div className="inline-block px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-wider mb-2">
              {model.series}
            </div>

            {/* Model name */}
            <h3 className="font-display text-xl text-white mb-1 group-hover:text-gold-400 transition-colors">
              {model.name}
            </h3>

            {/* Tagline */}
            <p className="text-xs text-gold-500/70 italic mb-3 line-clamp-1">
              "{model.tagline}"
            </p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="bg-black/30 rounded-lg p-2">
                <p className="text-gray-500 uppercase tracking-wider text-[10px]">Power</p>
                <p className="text-white font-medium">{model.specs.power}</p>
              </div>
              <div className="bg-black/30 rounded-lg p-2">
                <p className="text-gray-500 uppercase tracking-wider text-[10px]">0-60</p>
                <p className="text-white font-medium">{model.specs.acceleration}</p>
              </div>
            </div>

            {/* Top speed & Range */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>Top: {model.specs.topSpeed}</span>
              {model.specs.range && (
                <span className="text-green-400">EV: {model.specs.range}</span>
              )}
            </div>

            {/* Price */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">From</p>
                  <p className="text-lg font-light text-white">
                    ${model.basePrice.toLocaleString()}
                  </p>
                </div>
                <div className={cn(
                  'text-xs transition-all transform',
                  selectedModel.id === model.id 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                )}>
                  <span className="text-gold-400">Configure →</span>
                </div>
              </div>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
          </button>
        ))}
      </div>

      {/* Selected model highlight */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-white/5 via-gold-500/10 to-white/5 rounded-2xl p-8 border border-gold-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Brand logo large */}
            <div className="text-gold-500 transform scale-150">
              {brandLogos[selectedModel.series]}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold-500/60 text-sm uppercase tracking-widest mb-1">
                {selectedModel.series}
              </p>
              <h3 className="font-display text-3xl text-white mb-2">
                {selectedModel.name}
              </h3>
              <p className="text-gray-400 text-sm max-w-xl">
                {selectedModel.description}
              </p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-black/30 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Power</p>
                <p className="text-white font-bold">{selectedModel.specs.power}</p>
              </div>
              <div className="bg-black/30 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">0-60</p>
                <p className="text-white font-bold">{selectedModel.specs.acceleration}</p>
              </div>
              <div className="bg-black/30 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Top Speed</p>
                <p className="text-white font-bold">{selectedModel.specs.topSpeed}</p>
              </div>
              <div className="bg-black/30 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Base Price</p>
                <p className="text-gold-400 font-bold">${(selectedModel.basePrice / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
