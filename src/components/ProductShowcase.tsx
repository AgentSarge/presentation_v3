import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Main Product Feature */}
      <div className="md:col-span-2 card group hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-vercel-blue to-vercel-pink rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-2xl font-bold">🚀</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-text-primary">Rapid Development</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Build production-ready applications with our pre-configured stack. 
              <code className="syntax-keyword">Zero setup time</code> means you can focus on what matters most - your product.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-vercel-blue/20 text-vercel-blue text-xs rounded-full">Hot Reload</span>
              <span className="px-2 py-1 bg-vercel-green/20 text-vercel-green text-xs rounded-full">TypeScript</span>
              <span className="px-2 py-1 bg-vercel-pink/20 text-vercel-pink text-xs rounded-full">Component Library</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side Features */}
      <div className="space-y-4">
        <div className="card hover:border-vercel-blue/50 transition-colors duration-300">
          <div className="w-10 h-10 bg-gradient-to-br from-vercel-green to-vercel-blue rounded-lg flex items-center justify-center mb-3">
            <span className="text-black text-lg font-bold">⚡</span>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-text-primary">Performance</h4>
          <p className="text-sm text-text-muted">
            Optimized for <code className="syntax-variable">speed</code> and efficiency
          </p>
        </div>
        
        <div className="card hover:border-vercel-pink/50 transition-colors duration-300">
          <div className="w-10 h-10 bg-gradient-to-br from-vercel-pink to-vercel-green rounded-lg flex items-center justify-center mb-3">
            <span className="text-black text-lg font-bold">🎨</span>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-text-primary">Design System</h4>
          <p className="text-sm text-text-muted">
            Beautiful <code className="syntax-string">components</code> out of the box
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase; 