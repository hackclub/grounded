
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
            <span className="text-green-400 drop-shadow-[0_0_20px_#4ade80]">
              GROUNDED
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-green-300 font-mono">
            &gt; Turn hardware dreams into reality
          </p>
          <p className="text-lg md:text-xl text-green-500 max-w-3xl mx-auto leading-relaxed">
            A Hack Club program that gives teens the tools, funding, and community 
            to build the hardware projects they've always dreamed of. No experience required.
          </p>
        </div>

        {/* Animated PCB Visual */}
        <div className="my-16 relative">
          <svg 
            width="400" 
            height="300" 
            viewBox="0 0 400 300" 
            className="mx-auto"
          >
            {/* PCB Board */}
            <rect 
              x="50" 
              y="50" 
              width="300" 
              height="200" 
              fill="#1a1a1a" 
              stroke="#4ade80" 
              strokeWidth="2"
              rx="10"
            />
            
            {/* Circuit Traces - Animated */}
            <g className="animate-pulse">
              <path 
                d="M 80 100 L 150 100 L 150 150 L 220 150" 
                stroke="#4ade80" 
                strokeWidth="3" 
                fill="none"
                style={{
                  filter: `drop-shadow(0 0 ${5 + glowIntensity * 0.1}px #4ade80)`
                }}
              />
              <path 
                d="M 80 180 L 180 180 L 180 120 L 280 120" 
                stroke="#22d3ee" 
                strokeWidth="3" 
                fill="none"
                style={{
                  filter: `drop-shadow(0 0 ${3 + glowIntensity * 0.08}px #22d3ee)`
                }}
              />
            </g>
            
            {/* Components */}
            <rect x="140" y="90" width="20" height="20" fill="#4ade80" className="animate-pulse" />
            <circle cx="200" cy="160" r="8" fill="#22d3ee" className="animate-pulse" />
            <rect x="270" y="110" width="15" height="20" fill="#facc15" className="animate-pulse" />
            
            {/* Connection Points */}
            <circle cx="80" cy="100" r="4" fill="#4ade80" />
            <circle cx="80" cy="180" r="4" fill="#22d3ee" />
            <circle cx="320" cy="120" r="4" fill="#4ade80" />
            <circle cx="220" cy="150" r="4" fill="#22d3ee" />
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-green-400 text-black hover:bg-green-300 font-bold text-xl px-8 py-4 shadow-lg shadow-green-400/25"
          >
            Start Building Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold text-xl px-8 py-4"
          >
            Join Community
          </Button>
        </div>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="mx-auto w-8 h-8 text-green-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
