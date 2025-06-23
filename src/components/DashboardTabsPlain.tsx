import React, { useState } from 'react'

const dashboardFeatures = [
  {
    id: 'coaching',
    title: 'Real-Time Coaching Intelligence',
    icon: '🔎',
    description:
      'Each call is auto-transcribed, analyzed, and scored — highlighting what was said, how it was said, and what was missed.',
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
    imagePlaceholder:
      'Dashboard showing real-time conversation analysis with transcript, sentiment scores, and coaching suggestions'
  },
  {
    id: 'performance',
    title: 'Rep Performance at a Glance',
    icon: '📈',
    description:
      'Track rep trends across time — talk ratio, question frequency, objection handling, close language, and more.',
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
    imagePlaceholder:
      'Performance analytics dashboard with charts, graphs, and rep scorecards showing trends over time'
  },
  {
    id: 'precision',
    title: 'Precision Coaching',
    icon: '🎯',
    description:
      "Managers don't have to listen to hours of audio. The system flags what matters — and suggests where to coach next.",
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
    imagePlaceholder:
      'Coaching interface with flagged conversation moments, priority alerts, and suggested actions for managers'
  },
  {
    id: 'sharing',
    title: 'Best Practice Sharing',
    icon: '🧠',
    description:
      '"Best of" clips auto-saved and shared. New reps ramp faster by learning from top performers in the field.',
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
    imagePlaceholder:
      'Best practices library with audio clips, successful conversation examples, and knowledge sharing interface'
  },
  {
    id: 'integration',
    title: 'CRM Integration',
    icon: '📬',
    description:
      'All insights tie back to customer records — no lost data, no manual entry, no guesswork on who said what.',
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
    imagePlaceholder:
      'CRM integration view showing customer records with linked conversation data and automatic sync status'
  }
]

const DashboardTabsPlain: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(dashboardFeatures[0])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 48 }}>
      {/* Feature List */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          Dashboard Features
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dashboardFeatures.map((feature, idx) => (
            <li key={feature.id} style={{ marginBottom: 16 }}>
              <button
                onClick={() => setActiveFeature(feature)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: activeFeature.id === feature.id ? 'bold' : 400,
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  outline: 'none',
                  marginBottom: 4
                }}
              >
                {idx + 1}. {feature.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Feature Details */}
      <div style={{ flex: 2 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          {activeFeature.title} {activeFeature.icon}
        </h3>
        <p style={{ color: '#fff', marginBottom: 16 }}>
          {activeFeature.description}
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
            {activeFeature.details.map((detail, i) => (
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
            {activeFeature.benefits.map((benefit, i) => (
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

export default DashboardTabsPlain
