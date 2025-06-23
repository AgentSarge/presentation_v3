import React, { useState } from 'react';

const QuickActions: React.FC = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const actions = [
    { 
      id: 'create', 
      title: 'Create Component', 
      description: 'Generate a new React component',
      command: 'npm run create:component',
      icon: '🏗️',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      id: 'deploy', 
      title: 'Deploy App', 
      description: 'Build and deploy to production',
      command: 'npm run deploy',
      icon: '🚀',
      color: 'from-green-400 to-blue-400'
    },
    { 
      id: 'test', 
      title: 'Run Tests', 
      description: 'Execute test suite',
      command: 'npm run test',
      icon: '🧪',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      id: 'build', 
      title: 'Build Project', 
      description: 'Create production build',
      command: 'npm run build',
      icon: '📦',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <div className="card h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-4 text-text-primary tracking-tight flex-shrink-0">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3 flex-1 content-start">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => setActiveAction(action.id === activeAction ? null : action.id)}
            className={`p-3 rounded-lg border transition-all duration-200 text-left group ${
              activeAction === action.id 
                ? 'border-vercel-blue bg-vercel-blue/10' 
                : 'border-border-light hover:border-border'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{action.icon}</span>
              <span className="text-sm font-medium text-text-primary">{action.title}</span>
            </div>
            <p className="text-xs text-text-muted">{action.description}</p>
          </button>
        ))}
      </div>

      <div className="mt-4 flex-shrink-0">
        {/* Command Display */}
        {activeAction && (
          <div className="bg-background-tertiary border border-border-light rounded-lg p-3 font-mono text-xs animate-fade-in mb-4">
            <div className="text-text-muted mb-1"># Command to execute:</div>
            <div className="text-text-primary">
              <span className="syntax-keyword">
                {actions.find(a => a.id === activeAction)?.command}
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button className="btn-primary text-xs px-3 py-1">Execute</button>
          <button 
            onClick={() => setActiveAction(null)}
            className="btn-outline text-xs px-3 py-1"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions; 