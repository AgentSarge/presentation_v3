import React from 'react';

interface Step {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface ProductFlowProps {
  steps: Step[];
}

const ProductFlow: React.FC<ProductFlowProps> = ({ steps }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 max-w-sm flex flex-col items-center justify-center px-2">
              <div className="text-3xl mb-2">{step.icon}</div>
              <h3 className={`text-lg font-bold mb-1 text-${step.color} text-center`}>{step.title}</h3>
              <p className="text-xs text-text-muted leading-snug text-center">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center mx-2">
                <span className="text-lg text-text-muted opacity-60">→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductFlow; 