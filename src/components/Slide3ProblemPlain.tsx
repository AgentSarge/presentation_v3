import React from 'react'

const Slide3ProblemPlain: React.FC = () => {
  return (
    <div>
      <div
        style={{
          padding: 40,
          border: '1px solid #444',
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: 32
        }}
      >
        <h3
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          The Blind Spot
        </h3>
        <p style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
          Millions of field reps knock doors, make calls, and have conversations
          that are{' '}
          <span style={{ fontWeight: 600, color: '#fff' }}>
            completely invisible to sales leaders
          </span>
          .
        </p>
        <p style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
          Coaching is impossible, best practices never scale, and missed
          opportunities go untracked.
        </p>
        <p style={{ fontSize: 18, color: '#fff' }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>
            No data. No feedback. No improvement.
          </span>
        </p>
      </div>
      <div
        style={{
          padding: 40,
          border: '1px solid #444',
          maxWidth: 600,
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h3
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          The Device Distraction
        </h3>
        <p style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
          Every other competitor in the market forces reps to use a device
          during or after conversations:
        </p>
        <p style={{ fontSize: 18, color: '#fff', marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>Gong:</span> Desktop
          and Zoom-based. Requires reps to be at a computer or on a video call.
        </p>
        <p style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>Siro AI:</span>{' '}
          Mobile phone-based. Reps must manually use their phone to log or
          interact.
        </p>
        <p style={{ fontSize: 18, color: '#fff' }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>
            No current option allows seamless integration into a rep's daily
            field routine—until now.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Slide3ProblemPlain
