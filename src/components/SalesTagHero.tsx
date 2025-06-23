import React from 'react';

const SalesTagHero: React.FC = () => {
  return (
    <div className="text-center animate-fade-in h-full flex flex-col justify-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="status-dot"></div>
        <span className="text-xs font-mono text-text-muted">
          Confidential & Proprietary
        </span>
      </div>
      
      <h1 className="text-gradient text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tighter">
        SalesTag
      </h1>
      
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-secondary mb-8 tracking-tight">
        The AI Brain for Field Sales Conversations
      </h2>
      
      <div className="text-xl lg:text-2xl xl:text-3xl font-medium italic font-mono">
        "<span className="text-pink-400">The Gong</span> <span className="text-green-400">for Doorsteps,</span> <span className="text-purple-400">Rooftops, and Driveways.</span>"
      </div>
    </div>
  );
};

export default SalesTagHero; 