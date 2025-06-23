import React from 'react'

const Slide9BusinessModelPlain: React.FC = () => {
  return (
    <>
      {/* Revenue Streams */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 40
        }}
      >
        {/* Hardware */}
        <div style={{ flex: 1, border: '1px solid #444', padding: 24 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔧</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 8,
                color: '#fff'
              }}
            >
              Hardware
            </h3>
            <div
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 12,
                color: '#fff'
              }}
            >
              $99
            </div>
            <div style={{ fontSize: 14, color: '#fff' }}>
              per device (one-time)
            </div>
          </div>
          <p style={{ color: '#fff', marginBottom: 16 }}>
            Lightweight, durable badge unit with embedded AI + BLE. Manufactured
            in small runs now; scalable via contract fulfillment.
          </p>
          <ul style={{ color: '#fff', paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>
              ~30–40% gross margin target @ scale
            </li>
            <li style={{ marginBottom: 6 }}>
              Enables data lock-in and usage-based upsell
            </li>
          </ul>
        </div>
        {/* Software (SaaS) */}
        <div style={{ flex: 1, border: '1px solid #444', padding: 24 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>💻</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 8,
                color: '#fff'
              }}
            >
              Software (SaaS)
            </h3>
            <div
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 12,
                color: '#fff'
              }}
            >
              $29–$79
            </div>
            <div style={{ fontSize: 14, color: '#fff' }}>per rep/month</div>
          </div>
          <p style={{ color: '#fff', marginBottom: 16 }}>
            Tiered by seat volume, data retention, coaching features
          </p>
          <ul style={{ color: '#fff', paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>Core MRR engine</li>
            <li style={{ marginBottom: 6 }}>~85–90% gross margin</li>
            <li style={{ marginBottom: 6 }}>
              Annual contracts preferred (3–12 month ramp cycles)
            </li>
          </ul>
        </div>
        {/* Enterprise Intelligence */}
        <div style={{ flex: 1, border: '1px solid #444', padding: 24 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏢</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 8,
                color: '#fff'
              }}
            >
              Enterprise Intelligence
            </h3>
            <div
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 12,
                color: '#fff'
              }}
            >
              Custom
            </div>
            <div style={{ fontSize: 14, color: '#fff' }}>contracts</div>
          </div>
          <p style={{ color: '#fff', marginBottom: 16 }}>
            API access, advanced analytics, teamwide rollout + CRM integrations
          </p>
          <ul style={{ color: '#fff', paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>
              $25k–$250k+ ACV depending on rep count
            </li>
            <li style={{ marginBottom: 6 }}>
              Growing % of pipeline via Solar, Insurance, Franchise orgs
            </li>
          </ul>
        </div>
      </div>
      {/* The Model */}
      <div style={{ border: '1px solid #444', padding: 32, marginTop: 24 }}>
        <h3
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 24,
            color: '#fff',
            textAlign: 'center'
          }}
        >
          The Model
        </h3>
        <p
          style={{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
            marginBottom: 32
          }}
        >
          "Hardware wedges adoption. SaaS drives margin. Data powers expansion."
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32 }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 12,
                color: '#fff'
              }}
            >
              Adoption
            </h4>
            <p style={{ color: '#fff' }}>
              Reps wear it once — we monetize every conversation after
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 12,
                color: '#fff'
              }}
            >
              Stickiness
            </h4>
            <p style={{ color: '#fff' }}>
              Annual SaaS + usage-based intelligence makes this sticky and
              scalable
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 12,
                color: '#fff'
              }}
            >
              Expansion
            </h4>
            <p style={{ color: '#fff' }}>
              Our roadmap unlocks LTV expansion (coaching, prediction,
              performance benchmarking)
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slide9BusinessModelPlain
