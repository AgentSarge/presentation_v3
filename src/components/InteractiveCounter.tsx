import React from 'react';

const InteractiveCounter: React.FC = () => {
  return (
    <div className="card h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold mb-6 text-text-primary flex-shrink-0">The Problem</h3>
      
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-text-muted leading-relaxed text-lg">
          In every field-based industry—<span className="text-text-primary font-medium">solar, alarms, roofing, pest control</span>—sales reps rely on real-world conversations to close deals.
        </p>
        
        <p className="text-text-muted leading-relaxed text-lg mt-4">
          But those conversations <span className="text-red-400 font-medium">vanish</span>. Managers can't coach what they can't hear. Compliance is guesswork. CRMs stay empty.
        </p>
      </div>
    </div>
  );
};

export default InteractiveCounter; 