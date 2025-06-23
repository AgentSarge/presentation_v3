import React from 'react'

const Slide5BadgePlain: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}
    >
      {/* Left Column */}
      <div style={{ flex: 1, minWidth: 220 }}>
        {/* The Blind Spot */}
        <div
          style={{ border: '1px solid #444', padding: 24, marginBottom: 32 }}
        >
          <h3
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 16,
              color: '#fff'
            }}
          >
            The Blind Spot
          </h3>
          <p style={{ color: '#fff', marginBottom: 16 }}>
            Millions of field reps knock doors—
            <span style={{ fontWeight: 600, color: '#fff' }}>
              completely invisible to sales leaders
            </span>
            . Coaching is impossible, and best practices never scale.
          </p>
          <div style={{ marginTop: 24 }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 12,
                color: '#fff'
              }}
            >
              Wear. Walk. Win.
            </h4>
            <p style={{ color: '#fff' }}>
              <span style={{ color: '#fff' }}>Simply wear the badge</span>—no
              app, no phone, no distractions. Every conversation is
              auto-recorded and transcribed, with objections and signals tagged
              automatically.{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>
                Offline-first
              </span>
              .
            </p>
          </div>
        </div>
        {/* Live Insight */}
        <div style={{ border: '1px solid #444', padding: 24 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 16,
              color: '#fff'
            }}
          >
            Live Insight. No Shadowing.
          </h3>
          <p style={{ color: '#fff' }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>
              Instant access
            </span>{' '}
            to real field conversations. Spot missed follow-ups and coachable
            moments—
            <span style={{ color: '#fff', fontWeight: 600 }}>
              AI flags risks
            </span>{' '}
            in one dashboard.
          </p>
        </div>
      </div>
      {/* Center Column: Badge */}
      <div
        style={{
          flex: 1,
          minWidth: 220,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{ border: '1px solid #444', padding: 32, textAlign: 'center' }}
        >
          {/* Simple placeholder for badge image */}
          <div
            style={{
              width: 180,
              height: 220,
              background: '#222',
              margin: '0 auto 12px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 16
            }}
          >
            [Badge Image]
          </div>
          <div style={{ color: '#fff', fontSize: 14 }}>Smart Badge</div>
        </div>
      </div>
      {/* Right Column */}
      <div
        style={{
          flex: 1,
          minWidth: 220,
          display: 'flex',
          flexDirection: 'column',
          gap: 32
        }}
      >
        {/* Offline Ready */}
        <div style={{ border: '1px solid #444', padding: 24 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 16,
              color: '#fff'
            }}
          >
            Offline Ready
          </h3>
          <p style={{ color: '#fff' }}>
            Works without internet, syncs when connection is available
          </p>
        </div>
        {/* Objection Memory Recall */}
        <div style={{ border: '1px solid #444', padding: 24 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 16,
              color: '#fff'
            }}
          >
            Objection Memory Recall
          </h3>
          <p style={{ color: '#fff' }}>
            Instantly surfaces past objections and responses for coaching
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slide5BadgePlain
