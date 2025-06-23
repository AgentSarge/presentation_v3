import React, { useState } from 'react'

const pipelineSteps = [
  {
    id: 'capture',
    title: 'Capture',
    icon: '🎤',
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
]

const PipelineTabsPlain: React.FC = () => {
  const [activeStep, setActiveStep] = useState(pipelineSteps[0])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 48 }}>
      {/* Step List */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          Pipeline Overview
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {pipelineSteps.map((step, idx) => (
            <li key={step.id} style={{ marginBottom: 16 }}>
              <button
                onClick={() => setActiveStep(step)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: activeStep.id === step.id ? 'bold' : 400,
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  outline: 'none',
                  marginBottom: 4
                }}
              >
                {idx + 1}. {step.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Step Details */}
      <div style={{ flex: 2 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          {activeStep.title} {activeStep.icon}
        </h3>
        <p style={{ color: '#fff', marginBottom: 16 }}>
          {activeStep.description}
        </p>
        <div style={{ marginBottom: 16 }}>
          <h4
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 8,
              color: '#fff'
            }}
          >
            How It Works
          </h4>
          <ul style={{ color: '#fff', paddingLeft: 20 }}>
            {activeStep.details.map((detail, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 8,
              color: '#fff'
            }}
          >
            Key Benefits
          </h4>
          <ul style={{ color: '#fff', paddingLeft: 20 }}>
            {activeStep.benefits.map((benefit, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PipelineTabsPlain
