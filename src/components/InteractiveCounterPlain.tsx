import React from 'react'

const InteractiveCounterPlain: React.FC = () => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 24,
          color: '#fff'
        }}
      >
        The Problem
      </h3>
      <div>
        <p style={{ fontSize: 15, color: '#fff', marginBottom: 16 }}>
          In every field-based industry—solar, alarms, roofing, pest
          control—sales reps rely on real-world conversations to close deals.
        </p>
        <p style={{ fontSize: 15, color: '#fff' }}>
          But those conversations vanish. Managers can't coach what they can't
          hear. Compliance is guesswork. CRMs stay empty.
        </p>
      </div>
    </div>
  )
}

export default InteractiveCounterPlain
