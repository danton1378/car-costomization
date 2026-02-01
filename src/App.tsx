import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import {
  CAR_MODELS,
  EXTERIOR_COLORS,
  WHEEL_OPTIONS,
  INTERIOR_OPTIONS,
  CONFIGURATION_STEPS,
  type CarModel,
  type ColorOption,
  type WheelOption,
  type InteriorOption,
} from '@/data/carData';
import { LuxuryCar } from '@/components/LuxuryCar';
import { ModelSelection } from '@/components/ModelSelection';
import { ExteriorSelection } from '@/components/ExteriorSelection';
import { WheelSelection } from '@/components/WheelSelection';
import { InteriorSelection } from '@/components/InteriorSelection';
import { AccessorySelection } from '@/components/AccessorySelection';
import { ConfigSummary } from '@/components/ConfigSummary';

type StepId = 'model' | 'exterior' | 'wheels' | 'interior' | 'accessories' | 'summary';

export function App() {
  const [currentStep, setCurrentStep] = useState<StepId>('model');
  const [selectedModel, setSelectedModel] = useState<CarModel>(CAR_MODELS[0]);
  const [selectedColor, setSelectedColor] = useState<ColorOption>(EXTERIOR_COLORS[0]);
  const [selectedWheel, setSelectedWheel] = useState<WheelOption>(WHEEL_OPTIONS[0]);
  const [selectedInterior, setSelectedInterior] = useState<InteriorOption>(INTERIOR_OPTIONS[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [carRotation, setCarRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const currentStepIndex = CONFIGURATION_STEPS.findIndex(s => s.id === currentStep);

  const goToNextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < CONFIGURATION_STEPS.length) {
      setCurrentStep(CONFIGURATION_STEPS[nextIndex].id as StepId);
    }
  };

  const goToPreviousStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(CONFIGURATION_STEPS[prevIndex].id as StepId);
    }
  };

  const toggleAccessory = (id: string) => {
    setSelectedAccessories(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const rotate360 = () => {
    if (isRotating) return;
    setIsRotating(true);
    let rotation = 0;
    const interval = setInterval(() => {
      rotation += 5;
      setCarRotation(rotation);
      if (rotation >= 360) {
        clearInterval(interval);
        setCarRotation(0);
        setIsRotating(false);
      }
    }, 30);
  };

  // Intro screen
  if (showIntro) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-gold-500" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5 L60 35 L95 35 L67 55 L77 90 L50 70 L23 90 L33 55 L5 35 L40 35 Z" />
            </svg>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-4">LUXURA</h1>
          <p className="text-gold-500 text-lg tracking-[0.3em] uppercase">Configure Your Bespoke Automobile</p>
          <div className="mt-12">
            <div className="w-48 h-0.5 bg-white/10 mx-auto overflow-hidden rounded-full">
              <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 animate-[shimmer_2s_ease-in-out_infinite]" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gold-500" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 5 L60 35 L95 35 L67 55 L77 90 L50 70 L23 90 L33 55 L5 35 L40 35 Z" />
              </svg>
              <div>
                <h1 className="font-display text-xl text-white tracking-wider">LUXURA</h1>
                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Bespoke Collection</p>
              </div>
            </div>

            {/* Progress Steps - Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {CONFIGURATION_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id as StepId)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300',
                    currentStep === step.id
                      ? 'bg-gold-500/10 text-gold-400'
                      : index <= currentStepIndex
                      ? 'text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-400'
                  )}
                >
                  <span className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium',
                    currentStep === step.id
                      ? 'bg-gold-500 text-black'
                      : index < currentStepIndex
                      ? 'bg-green-500 text-black'
                      : 'bg-white/10 text-gray-400'
                  )}>
                    {index < currentStepIndex ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className="text-sm">{step.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile step indicator */}
            <div className="lg:hidden text-center">
              <p className="text-gold-500 text-sm font-medium">
                Step {currentStepIndex + 1} of {CONFIGURATION_STEPS.length}
              </p>
              <p className="text-xs text-gray-400">{CONFIGURATION_STEPS[currentStepIndex].label}</p>
            </div>

            {/* Contact */}
            <button className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Progress Bar */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex">
          {CONFIGURATION_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                'flex-1 h-1 transition-colors',
                index <= currentStepIndex ? 'bg-gold-500' : 'bg-white/10'
              )}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-24 lg:pt-20">
        {/* Car Preview - Show on non-model and non-summary steps */}
        {currentStep !== 'model' && currentStep !== 'summary' && (
          <div className="relative bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] py-12">
            <div className="max-w-5xl mx-auto px-6">
              {/* Car display */}
              <div className="relative h-48 md:h-64 lg:h-80">
                <LuxuryCar
                  colorId={selectedColor.id}
                  wheelId={selectedWheel.id}
                  rotation={carRotation}
                  modelId={selectedModel.id}
                />
              </div>

              {/* Car info */}
              <div className="text-center mt-4">
                <p className="text-gold-500/60 text-xs uppercase tracking-widest mb-1">
                  {selectedModel.series}
                </p>
                <h2 className="font-display text-2xl text-white">{selectedModel.name}</h2>
              </div>

              {/* 360 View Button */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <button
                  onClick={rotate360}
                  disabled={isRotating}
                  className={cn(
                    'w-12 h-12 rounded-full glass flex items-center justify-center transition-all',
                    'hover:bg-white/10',
                    isRotating && 'animate-pulse'
                  )}
                  title="360° View"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {currentStep === 'model' && (
            <ModelSelection
              selectedModel={selectedModel}
              onSelect={setSelectedModel}
            />
          )}

          {currentStep === 'exterior' && (
            <ExteriorSelection
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
          )}

          {currentStep === 'wheels' && (
            <WheelSelection
              selectedWheel={selectedWheel}
              onSelect={setSelectedWheel}
            />
          )}

          {currentStep === 'interior' && (
            <InteriorSelection
              selectedInterior={selectedInterior}
              onSelect={setSelectedInterior}
            />
          )}

          {currentStep === 'accessories' && (
            <AccessorySelection
              selectedAccessories={selectedAccessories}
              onToggle={toggleAccessory}
            />
          )}

          {currentStep === 'summary' && (
            <ConfigSummary
              model={selectedModel}
              color={selectedColor}
              wheel={selectedWheel}
              interior={selectedInterior}
              accessories={selectedAccessories}
            />
          )}
        </div>

        {/* Navigation Footer */}
        <div className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Back button */}
              <button
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl transition-all',
                  currentStepIndex === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'text-white hover:bg-white/5'
                )}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </button>

              {/* Current configuration price */}
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Configuration Total</p>
                <p className="text-xl md:text-2xl font-display text-white">
                  ${(
                    selectedModel.basePrice +
                    selectedColor.price +
                    selectedWheel.price +
                    selectedInterior.price +
                    selectedAccessories.reduce((sum, id) => {
                      const acc = [
                        { id: 'carbon-aero', price: 45000 },
                        { id: 'titanium-exhaust', price: 28000 },
                        { id: 'track-telemetry', price: 18500 },
                        { id: 'ceramic-brakes', price: 35000 },
                        { id: 'alcantara-interior', price: 22000 },
                        { id: 'racing-harness', price: 8500 },
                        { id: 'lightweight-wheels', price: 38000 },
                        { id: 'paint-protection', price: 15000 },
                        { id: 'bespoke-luggage', price: 12500 },
                        { id: 'car-cover', price: 4500 },
                        { id: 'fire-system', price: 9500 },
                        { id: 'lift-system', price: 12000 },
                      ].find(a => a.id === id);
                      return sum + (acc?.price || 0);
                    }, 0)
                  ).toLocaleString()}
                </p>
              </div>

              {/* Next/Complete button */}
              <button
                onClick={goToNextStep}
                disabled={currentStepIndex === CONFIGURATION_STEPS.length - 1}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all',
                  currentStepIndex === CONFIGURATION_STEPS.length - 1
                    ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-black hover:from-gold-500 hover:to-gold-400'
                    : 'bg-white text-black hover:bg-gray-100'
                )}
              >
                <span>
                  {currentStepIndex === CONFIGURATION_STEPS.length - 1
                    ? 'Complete'
                    : 'Continue'}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer spacing for fixed navigation */}
      <div className="h-24" />

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/3 rounded-full blur-[80px]" />
      </div>
    </div>
  );
}
