import React from 'react'

const LayoutDemoCompaniesPlain: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        justifyContent: 'center'
      }}
    >
      {/* Gong */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <h3
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          Gong
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>
              Series E (2021)
            </p>
            <p
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 8
              }}
            >
              $250M
            </p>
            <p style={{ fontSize: 18, color: '#fff' }}>$7.25B valuation</p>
          </div>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>
              Series D (2020)
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 8
              }}
            >
              $200M
            </p>
            <p style={{ fontSize: 18, color: '#fff' }}>$2.2B valuation</p>
          </div>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 18, color: '#fff', marginBottom: 8 }}>
              Total Funding
            </p>
            <p style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              $584M
            </p>
          </div>
        </div>
      </div>
      {/* Siro AI */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <h3
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          Siro AI
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>
              Series B (2025)
            </p>
            <p
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 8
              }}
            >
              $50M
            </p>
            <p style={{ fontSize: 18, color: '#fff' }}>Latest Round</p>
          </div>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>
              Series A (2023)
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 8
              }}
            >
              $18M
            </p>
            <p style={{ fontSize: 18, color: '#fff' }}>Early Stage</p>
          </div>
          <div style={{ border: '1px solid #444', padding: 24 }}>
            <p style={{ fontSize: 18, color: '#fff', marginBottom: 8 }}>
              Total Funding
            </p>
            <p style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              $75M
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDemoCompaniesPlain
