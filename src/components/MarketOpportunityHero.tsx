import React from 'react';

const MarketOpportunityHero: React.FC = () => {
  return (
    <div className="text-center animate-fade-in h-full flex flex-col justify-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="status-dot"></div>
        <span className="text-xs font-mono text-text-muted">
          Market Analysis
        </span>
      </div>
      
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-text-primary">
        How We Expand the Wedge
      </h1>
      
      <div className="flex items-center justify-center gap-6 text-4xl lg:text-5xl font-bold mb-6">
        <span className="text-green-400">$72M</span>
        <span className="text-text-muted text-2xl">→</span>
        <span className="text-purple-400">$215M</span>
      </div>
      
      <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto">
        Start narrow and deep, then expand with a repeatable playbook
      </p>
    </div>
  );
};

export default MarketOpportunityHero; 