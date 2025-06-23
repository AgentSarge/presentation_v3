import React from 'react';

const SalesTagMarketOpportunity: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-text-primary">Market Opportunity</h3>
        
        <div className="mb-12">
          <p className="text-2xl lg:text-3xl text-text-muted leading-relaxed mb-4">
            Starting with a 
          </p>
          <div className="text-5xl lg:text-6xl text-green-400 font-bold mb-4">
            $72.6M wedge
          </div>
          <p className="text-2xl lg:text-3xl text-text-muted">
            in field sales enablement
          </p>
        </div>
        
        <div className="border-t border-border-light pt-8">
          <h4 className="text-2xl font-semibold mb-4 text-text-primary">AI Intelligence</h4>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Smart conversation insights from every field sales interaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesTagMarketOpportunity; 