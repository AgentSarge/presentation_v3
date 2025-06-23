import React from 'react';

interface HeroSectionProps {
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title = "Welcome to Astro + React!" }) => {
  return (
    <div className="text-center animate-fade-in">
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
        <a href="/layout-demo" className="btn-outline">
          View Layout Demo
        </a>
      </div>
    </div>
  );
};

export default HeroSection; 