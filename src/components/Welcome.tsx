import React, { useState } from 'react';

interface WelcomeProps {
  title?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ title = "Welcome to Astro + React!" }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="viewport-container">
      {/* Hero Section - Compact */}
      <div className="text-center section-spacing-compact animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="status-dot"></div>
          <span className="text-xs font-mono text-text-muted">
            System operational
          </span>
        </div>
        
        <h1 className="text-gradient text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tighter">
          {title}
        </h1>
        
        <p className="text-lg text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
          Your Astro project is now configured with React, Tailwind CSS, and a beautiful 
          <span className="text-text-primary font-medium"> Vercel-inspired dark theme</span> system.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-outline">
            View Documentation
          </button>
        </div>
      </div>

      {/* Main Content Area - Scrollable if needed */}
      <div className="scrollable-section">
        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 section-spacing-compact">
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-vercel-blue to-vercel-pink rounded-lg flex items-center justify-center mb-3">
              <span className="text-black text-lg font-bold">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">Lightning Fast</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Built with Astro's island architecture for <code className="syntax-keyword">optimal performance</code> and minimal JavaScript bundle size.
            </p>
          </div>
          
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-vercel-green to-vercel-blue rounded-lg flex items-center justify-center mb-3">
              <span className="text-black text-lg font-bold">⚛️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">React Ready</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Full React support with <code className="syntax-variable">TypeScript</code> integration for type-safe interactive components.
            </p>
          </div>
          
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-vercel-pink to-vercel-green rounded-lg flex items-center justify-center mb-3">
              <span className="text-black text-lg font-bold">🎨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">Beautifully Styled</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Tailwind CSS with <code className="syntax-string">"custom theme variables"</code> and automatic dark mode support.
            </p>
          </div>
        </div>

        {/* Bottom Row - Counter and Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Interactive Counter Section */}
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4 text-text-primary">Interactive Counter</h3>
            <div className="text-3xl font-bold text-text-primary mb-4 font-mono tracking-tight">
              {count.toString().padStart(3, '0')}
            </div>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setCount(Math.max(0, count - 1))}
                className="px-4 py-2 bg-transparent border border-border-light text-text-primary rounded-lg hover:border-text-primary hover:bg-white/5 transition-all duration-200 font-mono text-sm"
              >
                --
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-transparent border border-border-light text-text-muted rounded-lg hover:border-text-secondary hover:bg-white/5 transition-all duration-200 font-mono text-sm"
              >
                reset
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-transparent border border-border-light text-text-primary rounded-lg hover:border-text-primary hover:bg-white/5 transition-all duration-200 font-mono text-sm"
              >
                ++
              </button>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-text-primary tracking-tight">Built With Modern Tools</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Astro', color: 'from-orange-400 to-red-400' },
                { name: 'React', color: 'from-blue-400 to-cyan-400' },
                { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
                { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
                { name: 'Geist Font', color: 'from-gray-400 to-gray-600' },
                { name: 'Vite', color: 'from-purple-400 to-pink-400' }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-medium text-xs border border-border-light rounded-full hover:border-border backdrop-blur-sm transition-all duration-200`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            {/* Quick Start Code */}
            <div className="mt-4">
              <div className="bg-background-tertiary border border-border-light rounded-lg p-3 font-mono text-xs overflow-x-auto">
                <div className="text-text-muted mb-1"># Start development server</div>
                <div className="text-text-primary">
                  <span className="syntax-keyword">npm</span> <span className="syntax-variable">run</span> <span className="syntax-string">dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 