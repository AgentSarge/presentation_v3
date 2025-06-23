import React from 'react';

const TechStack: React.FC = () => {
  const phase1Data = [
    { vertical: 'Solar', reps: '28,000', tam: '$33.6M', percentage: '46%', lowCapture: '$336K', highCapture: '$3.36M' },
    { vertical: 'Roofing', reps: '14,600', tam: '$17.5M', percentage: '24%', lowCapture: '$175K', highCapture: '$1.75M' },
    { vertical: 'Alarms', reps: '9,000', tam: '$10.8M', percentage: '15%', lowCapture: '$108K', highCapture: '$1.08M' },
    { vertical: 'Pest Control', reps: '8,900', tam: '$10.7M', percentage: '15%', lowCapture: '$107K', highCapture: '$1.07M' },
  ];

  return (
    <div className="h-full flex flex-col justify-center p-6">
      <h3 className="text-xl font-bold mb-6 text-text-primary">Phase 1: Core Wedge</h3>
      
      <div className="space-y-8">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 pb-4 border-b border-border-light">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide">Vertical</div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide text-center">TAM</div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide text-center">Share</div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide text-center">1% ARR</div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide text-center">10% ARR</div>
        </div>
        
        {/* Data Rows */}
        {phase1Data.map((item, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 py-4 hover:bg-background-secondary/30 rounded-lg transition-colors">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-text-primary">{item.vertical}</span>
            </div>
            <div className="text-sm text-green-400 font-mono font-semibold text-center">{item.tam}</div>
            <div className="text-sm text-text-muted font-mono text-center">{item.percentage}</div>
            <div className="text-sm text-blue-400 font-mono text-center">{item.lowCapture}</div>
            <div className="text-sm text-purple-400 font-mono font-semibold text-center">{item.highCapture}</div>
          </div>
        ))}
        
        {/* Total Row */}
        <div className="grid grid-cols-5 gap-4 py-5 mt-8 border-t-2 border-green-400/20 bg-background-secondary/50 rounded-lg">
          <div className="text-sm font-bold text-text-primary">Total Opportunity</div>
          <div className="text-sm font-bold text-green-400 font-mono text-center">$72.6M</div>
          <div className="text-sm font-semibold text-text-primary font-mono text-center">100%</div>
          <div className="text-sm font-bold text-blue-400 font-mono text-center">$726K</div>
          <div className="text-sm font-bold text-purple-400 font-mono text-center">$7.26M</div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 pt-8 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>1% Market Capture</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>10% Market Capture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack; 