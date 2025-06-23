import React from 'react'

const MarketOpportunityHeroPlain: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 12, fontFamily: 'monospace', color: '#fff' }}>
          Market Analysis
        </span>
      </div>
      <h1
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 24,
          color: '#fff'
        }}
      >
        How We Expand the Wedge
      </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 24,
          color: '#fff'
        }}
      >
        <span>$72M</span>
        <span style={{ fontSize: 18, color: '#fff' }}>→</span>
        <span>$215M</span>
      </div>
      <p
        style={{ fontSize: 16, color: '#fff', maxWidth: 600, margin: '0 auto' }}
      >
        Start narrow and deep, then expand with a repeatable playbook
      </p>
    </div>
  )
}

export default MarketOpportunityHeroPlain
