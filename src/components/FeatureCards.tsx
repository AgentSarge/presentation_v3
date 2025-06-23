import React from 'react';

const FeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-stretch">
      {/* Phase 1 */}
      <div className="card h-full flex flex-col justify-between text-center p-6">
        <div>
          <div className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">Phase 1</div>
          <h3 className="text-lg font-bold mb-3 text-text-primary">Core Wedge</h3>
          <div className="text-3xl font-bold text-green-400 mb-4">$72.6M</div>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          Solar, alarms, roofing, pest control. High-touch door-to-door field sales.
        </p>
      </div>

      {/* Phase 2 */}
      <div className="card h-full flex flex-col justify-between text-center p-6">
        <div>
          <div className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">Phase 2</div>
          <h3 className="text-lg font-bold mb-3 text-text-primary">Expansion</h3>
          <div className="text-3xl font-bold text-blue-400 mb-4">$142.1M</div>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          HVAC, home services, retail enablement, telecom field sales.
        </p>
      </div>

      {/* Total */}
      <div className="card h-full flex flex-col justify-between text-center p-6 border-2 border-purple-400/30 bg-purple-400/5">
        <div>
          <div className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">Total</div>
          <h3 className="text-lg font-bold mb-3 text-text-primary">Opportunity</h3>
          <div className="text-3xl font-bold text-purple-400 mb-4">$215M</div>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          Repeatable playbook path to <span className="text-pink-400 font-semibold">$25M–$50M ARR</span> potential.
        </p>
      </div>
    </div>
  );
};

export default FeatureCards; 