import React from 'react';

const SalesTagFounderInfo: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center text-center">
      <h3 className="text-3xl font-bold mb-3 text-text-primary">Will Sargent</h3>
      <div className="text-xl text-text-secondary mb-6">Founder & CEO</div>
      
      <div className="bg-background-tertiary border border-border-light rounded-lg p-6 font-mono">
        <div className="text-text-muted mb-2">Contact:</div>
        <div className="text-text-primary text-lg">
          <a href="mailto:willsargent@self-labs.io" className="hover:text-blue-400 transition-colors">
            willsargent@self-labs.io
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-text-muted">
        Leading the future of field sales intelligence
      </div>
    </div>
  );
};

export default SalesTagFounderInfo; 