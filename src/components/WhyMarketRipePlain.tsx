import React from 'react'

const WhyMarketRipePlain: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 32 }}>
      {/* Why This Market Is Ripe */}
      <div style={{ flex: 1, border: '1px solid #444', padding: 24 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          Why This Market Is Ripe
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ color: '#fff' }}>
            These reps close millions of deals per year — yet fly blind
          </p>
          <p style={{ color: '#fff' }}>
            No Gong. No Chorus. No field intelligence layer exists
          </p>
          <p style={{ color: '#fff' }}>
            SalesTag turns every conversation into data — and every data point
            into coaching
          </p>
        </div>
      </div>
      {/* What This Means */}
      <div style={{ flex: 1, border: '1px solid #444', padding: 24 }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff'
          }}
        >
          What This Means
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
            $668M TAM is just the beginning.
          </p>
          <p style={{ color: '#fff' }}>
            These are just the known, structured field sales roles in the U.S.
          </p>
          <p style={{ color: '#fff', marginBottom: 12 }}>
            From there, we expand:
          </p>
          <ul style={{ color: '#fff', paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>🌍 Globally</li>
            <li style={{ marginBottom: 6 }}>🤖 Into tech-assisted reps</li>
            <li style={{ marginBottom: 6 }}>
              🧑‍🔧 Into blue-collar + hybrid frontline roles
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyMarketRipePlain
