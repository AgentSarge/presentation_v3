import React from 'react'

const LayoutDemoStatsPlain: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 32,
          color: '#fff'
        }}
      >
        The Market Signal
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          justifyContent: 'center',
          marginBottom: 48
        }}
      >
        <div
          style={{
            border: '1px solid #444',
            padding: 32,
            textAlign: 'center',
            flex: 1
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 16
            }}
          >
            $659M
          </div>
          <p style={{ fontSize: 18, color: '#fff' }}>Total Raised</p>
        </div>
        <div
          style={{
            border: '1px solid #444',
            padding: 32,
            textAlign: 'center',
            flex: 1
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 16
            }}
          >
            $7.25B
          </div>
          <p style={{ fontSize: 18, color: '#fff' }}>Peak Valuation</p>
        </div>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <blockquote
          style={{
            fontSize: 22,
            fontStyle: 'italic',
            color: '#fff',
            fontWeight: 500
          }}
        >
          "The market for sales intelligence is proven. The field is wide open."
        </blockquote>
      </div>
    </div>
  )
}

export default LayoutDemoStatsPlain
