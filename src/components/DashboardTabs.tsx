import { useState } from 'react';

interface DashboardFeature {
  id: string;
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  description: string;
  details: string[];
  benefits: string[];
  imagePlaceholder: string;
}

const dashboardFeatures: DashboardFeature[] = [
  {
    id: 'coaching',
    title: 'Real-Time Coaching Intelligence',
    icon: '🔎',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    description: 'Each call is auto-transcribed, analyzed, and scored — highlighting what was said, how it was said, and what was missed.',
    details: [
      'Automatic call transcription',
      'AI-powered conversation analysis',
      'Performance scoring algorithms',
      'Real-time coaching insights'
    ],
    benefits: [
      'Immediate feedback on conversations',
      'Objective performance evaluation',
      'Actionable coaching recommendations'
    ],
    imagePlaceholder: 'Dashboard showing real-time conversation analysis with transcript, sentiment scores, and coaching suggestions'
  },
  {
    id: 'performance',
    title: 'Rep Performance at a Glance',
    icon: '📈',
    color: 'text-green-400',
    borderColor: 'border-green-400/30',
    description: 'Track rep trends across time — talk ratio, question frequency, objection handling, close language, and more.',
    details: [
      'Talk-time ratio tracking',
      'Question frequency analysis',
      'Objection handling metrics',
      'Close language detection'
    ],
    benefits: [
      'Comprehensive performance overview',
      'Trend identification over time',
      'Data-driven coaching priorities'
    ],
    imagePlaceholder: 'Performance analytics dashboard with charts, graphs, and rep scorecards showing trends over time'
  },
  {
    id: 'precision',
    title: 'Precision Coaching',
    icon: '🎯',
    color: 'text-purple-400',
    borderColor: 'border-purple-400/30',
    description: 'Managers don\'t have to listen to hours of audio. The system flags what matters — and suggests where to coach next.',
    details: [
      'Automated issue flagging',
      'Priority coaching suggestions',
      'Key moment identification',
      'Efficient manager workflows'
    ],
    benefits: [
      'No more hours of audio review',
      'Focus on high-impact coaching',
      'Streamlined management processes'
    ],
    imagePlaceholder: 'Coaching interface with flagged conversation moments, priority alerts, and suggested actions for managers'
  },
  {
    id: 'sharing',
    title: 'Best Practice Sharing',
    icon: '🧠',
    color: 'text-pink-400',
    borderColor: 'border-pink-400/30',
    description: '"Best of" clips auto-saved and shared. New reps ramp faster by learning from top performers in the field.',
    details: [
      'Automatic best practice identification',
      'Clip sharing and library',
      'Top performer insights',
      'Accelerated onboarding'
    ],
    benefits: [
      'Faster new rep ramp-up',
      'Knowledge sharing at scale',
      'Continuous team improvement'
    ],
    imagePlaceholder: 'Best practices library with audio clips, successful conversation examples, and knowledge sharing interface'
  },
  {
    id: 'integration',
    title: 'CRM Integration',
    icon: '📬',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    description: 'All insights tie back to customer records — no lost data, no manual entry, no guesswork on who said what.',
    details: [
      'Automatic CRM sync',
      'Customer record linking',
      'Zero manual data entry',
      'Complete conversation history'
    ],
    benefits: [
      'Seamless data integration',
      'Complete customer context',
      'Elimination of manual work'
    ],
    imagePlaceholder: 'CRM integration view showing customer records with linked conversation data and automatic sync status'
  }
];

export default function DashboardTabs() {
  const [activeFeature, setActiveFeature] = useState(dashboardFeatures[0]);

  return (
    <div className="grid grid-cols-12 gap-8 h-full">
      {/* Left Column - Dashboard Features */}
      <div className="col-span-4">
        <div className="sticky top-0">
          <h3 className="text-xl font-bold text-white mb-6">Dashboard Features</h3>
          <div className="space-y-8">
            {dashboardFeatures.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`w-full text-left transition-all duration-200 ${
                  activeFeature.id === feature.id ? feature.color : 'text-white hover:text-gray-300'
                }`}
              >
                <div className="text-xl font-semibold">
                  {index + 1}. {feature.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Card Layout */}
      <div className="col-span-8 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Main Feature Card */}
          <div className={`
            relative overflow-hidden rounded-3xl shadow-2xl
            bg-gradient-to-br from-black/90 to-gray-900/90 
            border border-gray-800
            transform transition-all duration-300 ease-out
            hover:scale-[1.01] hover:shadow-3xl
            backdrop-blur-sm
          `}>
            
            {/* Card Header - Simplified */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${activeFeature.color.replace('text-', 'bg-')}/20 border border-gray-700`}>
                  <span className="text-2xl">{activeFeature.icon}</span>
                </div>
                <div>
                  <h3 className={`text-3xl font-bold ${activeFeature.color} mb-2`}>
                    {activeFeature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {activeFeature.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard Preview - More Prominent */}
            <div className="px-8 pb-8">
              <div className={`
                relative rounded-3xl overflow-hidden
                bg-gradient-to-br from-gray-900 to-black
                border-2 border-gray-700
                aspect-[16/10]
                shadow-2xl
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4 opacity-40">{activeFeature.icon}</div>
                    <p className="text-text-muted italic leading-relaxed max-w-md">
                      {activeFeature.imagePlaceholder}
                    </p>
                  </div>
                </div>
                
                {/* Clean overlay indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 ${activeFeature.color.replace('text-', 'bg-')}/20 border border-gray-600 text-xs ${activeFeature.color}`}>
                    Dashboard Preview
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Bottom Section */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-2 gap-16">
                {/* Capabilities Column */}
                <div>
                  <h4 className={`${activeFeature.color} font-semibold text-lg mb-6`}>
                    Key Capabilities
                  </h4>
                  <div className="space-y-4">
                    {activeFeature.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 ${activeFeature.color.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                        <span className="text-white/90 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Column */}
                <div>
                  <h4 className="text-green-400 font-semibold text-lg mb-6">
                    Impact & Benefits
                  </h4>
                  <div className="space-y-4">
                    {activeFeature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-400 font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-white/90 text-sm leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Cards for Stack Effect */}
          <div className="absolute -z-10 inset-0 transform translate-x-3 translate-y-3 rounded-3xl bg-gray-800/15 blur-sm"></div>
          <div className="absolute -z-20 inset-0 transform translate-x-6 translate-y-6 rounded-3xl bg-gray-700/8 blur-md"></div>
        </div>
      </div>
    </div>
  );
} 