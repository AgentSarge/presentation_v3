import React from 'react';

interface ValuePropCardProps {
  className?: string;
  children: React.ReactNode;
}

const ValuePropCard: React.FC<ValuePropCardProps> = ({ className = '', children }) => {
  return (
    <div className={`card text-left py-4 px-4 flex flex-col justify-start h-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ValuePropCard; 