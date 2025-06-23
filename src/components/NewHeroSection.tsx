import React from 'react';

interface NewHeroSectionProps {
  title?: string;
  subtitle?: string;
}

const NewHeroSection: React.FC<NewHeroSectionProps> = ({ 
  title = "SalesTag", 
  subtitle = "The AI Brain for Field Sales Conversations"
}) => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="status-dot"></div>
        <span className="text-xs font-mono text-text-muted">
          Confidential & Proprietary
        </span>
      </div>
      
      <h1 className="text-gradient text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tighter">
        {title}
      </h1>
      
      <h2 className="text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 tracking-tight">
        {subtitle}
      </h2>
      
      <div className="text-xl lg:text-2xl text-text-primary mb-6 font-medium italic">
        "The Gong for Doorsteps, Rooftops, and Driveways."
      </div>
      
      <p className="text-lg text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
        Starting with a <span className="text-text-primary font-bold">$1.5B wedge</span> in field sales enablement
      </p>

      {/* Presenter Info */}
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="text-lg font-semibold text-text-primary">
          Will Sargent
        </div>
        <div className="text-sm text-text-secondary">
          Founder & CEO
        </div>
        <div className="text-xs text-text-muted font-mono">
          willsargent@self-labs.io
        </div>
      </div>
    </div>
  );
};

export default NewHeroSection; 