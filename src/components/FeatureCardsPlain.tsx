import React from 'react'

const FeatureCardsPlain: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Phase 1 */}
      <div
        style={{ border: '1px solid #ddd', padding: 16, textAlign: 'center' }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#fff'
          }}
        >
          Phase 1
        </div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 12,
            color: '#fff'
          }}
        >
          Core Wedge
        </h3>
        <div
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          $72.6M
        </div>
        <p style={{ fontSize: 14, color: '#fff' }}>
          Solar, alarms, roofing, pest control. High-touch door-to-door field
          sales.
        </p>
      </div>
      {/* Phase 2 */}
      <div
        style={{ border: '1px solid #ddd', padding: 16, textAlign: 'center' }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#fff'
          }}
        >
          Phase 2
        </div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 12,
            color: '#fff'
          }}
        >
          Expansion
        </h3>
        <div
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          $142.1M
        </div>
        <p style={{ fontSize: 14, color: '#fff' }}>
          HVAC, home services, retail enablement, telecom field sales.
        </p>
      </div>
      {/* Total */}
      <div
        style={{ border: '1px solid #ddd', padding: 16, textAlign: 'center' }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#fff'
          }}
        >
          Total
        </div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 12,
            color: '#fff'
          }}
        >
          Opportunity
        </h3>
        <div
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          $215M
        </div>
        <p style={{ fontSize: 14, color: '#fff' }}>
          Repeatable playbook path to $25M–$50M ARR potential.
        </p>
      </div>
    </div>
  )
}

export default FeatureCardsPlain
