import React from 'react';

const SalesTagKeyMetrics: React.FC = () => {
  const metrics = [
    { label: 'Market Size', value: '$1.5B' },
    { label: 'Field Teams', value: '10K+' },
    { label: 'AI Accuracy', value: '95%+' },
    { label: 'ROI Target', value: '3x' }
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-8 text-text-primary text-center">Key Metrics</h3>
      
      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-text-primary font-mono tracking-tight mb-2">
              {metric.value}
            </div>
            <div className="text-sm text-text-muted uppercase tracking-wide">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-text-muted">
          Targeting field sales transformation through data-driven insights
        </p>
      </div>
    </div>
  );
};

export default SalesTagKeyMetrics; 