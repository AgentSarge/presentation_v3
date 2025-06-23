import React from 'react';

const StatsDisplay: React.FC = () => {
  const stats = [
    { label: 'Components', value: '25+', icon: '🧩' },
    { label: 'Load Time', value: '<1s', icon: '⚡' },
    { label: 'Bundle Size', value: '~50kb', icon: '📦' },
    { label: 'TypeScript', value: '100%', icon: '🔷' }
  ];

  return (
    <div className="card h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-6 text-text-primary text-center flex-shrink-0">Performance Metrics</h3>
      
      <div className="grid grid-cols-2 gap-4 flex-1 content-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-vercel-blue/20 to-vercel-pink/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-lg">{stat.icon}</span>
            </div>
            <div className="text-2xl font-bold text-text-primary font-mono tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-text-muted uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border-light flex-shrink-0">
        <p className="text-center text-xs text-text-muted">
          Optimized for production • Real-time metrics
        </p>
      </div>
    </div>
  );
};

export default StatsDisplay; 