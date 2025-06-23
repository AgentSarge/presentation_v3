import { useState } from 'react';

interface PipelineStep {
  id: string;
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  description: string;
  details: string[];
  benefits: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'capture',
    title: 'Capture',
    icon: '🎤',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    description: 'Voice-activated badge records only when reps speak',
    details: [
      'No phone or app required',
      'Automatic voice activation',
      'No distractions during calls',
      'Hands-free operation'
    ],
    benefits: [
      'Reps focus on selling, not technology',
      'Never miss important conversations',
      'Seamless integration into workflow'
    ]
  },
  {
    id: 'upload',
    title: 'Upload',
    icon: '📤',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    description: 'Audio chunked and auto-uploaded to cloud',
    details: [
      '10-15 second audio clips',
      'Automatic cloud upload',
      'Wi-Fi or BLE connectivity',
      'Real-time processing'
    ],
    benefits: [
      'Fast, efficient data transfer',
      'No manual intervention needed',
      'Instant availability for processing'
    ]
  },
  {
    id: 'transcribe',
    title: 'Transcribe',
    icon: '🔤',
    color: 'text-purple-400',
    borderColor: 'border-purple-400/30',
    description: 'Multi-STT Fusion for maximum accuracy',
    details: [
      'Multiple transcription engines',
      'Cross-validation for accuracy',
      'Industry-specific language models',
      'Real-time processing'
    ],
    benefits: [
      'Higher accuracy than single engines',
      'Better handling of sales terminology',
      'Improved training data quality'
    ]
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: '🧠',
    color: 'text-green-400',
    borderColor: 'border-green-400/30',
    description: 'Transcripts scored and structured',
    details: [
      'AI-powered conversation analysis',
      'Performance scoring algorithms',
      'Objection detection and categorization',
      'Talk-time ratio calculation'
    ],
    benefits: [
      'Actionable insights for coaching',
      'Objective performance metrics',
      'Identify improvement opportunities'
    ]
  },
  {
    id: 'sync',
    title: 'Sync to Dashboard',
    icon: '📊',
    color: 'text-pink-400',
    borderColor: 'border-pink-400/30',
    description: 'Results flow into searchable dashboard',
    details: [
      'Real-time dashboard updates',
      'CRM integration capabilities',
      'Manager review interface',
      'Performance tracking'
    ],
    benefits: [
      'Complete pipeline visibility',
      'Streamlined coaching workflows',
      'Data-driven decision making'
    ]
  }
];

export default function PipelineTabs() {
  const [activeStep, setActiveStep] = useState(pipelineSteps[0]);

  return (
    <div className="grid grid-cols-12 gap-8 h-full">
      {/* Left Column - Pipeline Steps */}
      <div className="col-span-4">
        <div className="sticky top-0">
          <h3 className="text-xl font-bold text-white mb-6">Pipeline Overview</h3>
          <div className="space-y-8">
            {pipelineSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`w-full text-left transition-all duration-200 ${
                  activeStep.id === step.id ? step.color : 'text-white hover:text-gray-300'
                }`}
              >
                <div className="text-xl font-semibold">
                  {index + 1}. {step.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Step Details */}
      <div className="col-span-8">
        <div className="space-y-8">
          <div className="card p-6 bg-black/40 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">{activeStep.title}</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              {activeStep.description}
            </p>
            <div className="mt-6">
              <h4 className={`${activeStep.color} font-semibold mb-3`}>How It Works</h4>
              <p className="text-text-muted leading-relaxed">
                {activeStep.details.map((detail, index) => (
                  <span key={index}>
                    <span className={`${activeStep.color} font-medium`}>{detail}</span>
                    {index < activeStep.details.length - 1 ? ', ' : '. '}
                  </span>
                ))}
                <span className="text-green-400 font-medium">
                  {activeStep.benefits.join(', ')}.
                </span>
              </p>
            </div>
          </div>

          <div className="card p-6 bg-black/40 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 ${activeStep.color.replace('text-', 'bg-')} rounded-full`}></div>
              <h3 className="text-xl font-bold text-white">Key Benefits</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              {activeStep.benefits.map((benefit, index) => (
                <span key={index}>
                  {benefit}
                  {index < activeStep.benefits.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 