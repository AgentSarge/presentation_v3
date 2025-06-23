import React from 'react'

const marketData = [
  {
    vertical: 'Insurance',
    reps: '445k',
    tam: '$534M',
    one: '$5.3M',
    five: '$26.7M',
    ten: '$53.4M'
  },
  {
    vertical: 'Solar',
    reps: '33k',
    tam: '$39.6M',
    one: '$0.4M',
    five: '$2.0M',
    ten: '$4.0M'
  },
  {
    vertical: 'HVAC & Plumbing',
    reps: '31k',
    tam: '$37.2M',
    one: '$0.37M',
    five: '$1.9M',
    ten: '$3.7M'
  },
  {
    vertical: 'Home Services',
    reps: '30k',
    tam: '$36M',
    one: '$0.36M',
    five: '$1.8M',
    ten: '$3.6M'
  },
  {
    vertical: 'Roofing',
    reps: '9.6k',
    tam: '$11.5M',
    one: '$0.12M',
    five: '$0.58M',
    ten: '$1.15M'
  },
  {
    vertical: 'Pest Control',
    reps: '7.8k',
    tam: '$9.4M',
    one: '$0.09M',
    five: '$0.47M',
    ten: '$0.94M'
  }
]

const Slide8MarketTablePlain: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 32 }}>
      {/* Market Breakdown Table */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#fff'
          }}
        >
          Target Verticals
        </h3>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: '#fff',
            marginBottom: 24
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #444', padding: 8 }}>Vertical</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>Reps</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>TAM</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>1%</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>5%</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>10%</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((row, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid #444', padding: 8 }}>
                  {row.vertical}
                </td>
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.reps}
                </td>
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.tam}
                </td>
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.one}
                </td>
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.five}
                </td>
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.ten}
                </td>
              </tr>
            ))}
            <tr>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  fontWeight: 'bold'
                }}
              >
                Total ARR
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right'
                }}
              >
                556k
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right'
                }}
              >
                $668M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                $6.7M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                $33.4M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                $66.8M
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TAM Summary */}
      <div style={{ flex: 1, textAlign: 'center', color: '#fff' }}>
        <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
          Total Addressable Market
        </h3>
        <div style={{ fontSize: 32, marginBottom: 12 }}>📊</div>
        <div style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>
          556,400
        </div>
        <div style={{ fontSize: 14, marginBottom: 8 }}>
          Field-based sales reps
        </div>
        <div style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>
          $1,200
        </div>
        <div style={{ fontSize: 14, marginBottom: 8 }}>ACV per rep</div>
        <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>
          $668M
        </div>
        <div style={{ fontSize: 14 }}>TAM across 6 underserved industries</div>
      </div>
    </div>
  )
}

export default Slide8MarketTablePlain
