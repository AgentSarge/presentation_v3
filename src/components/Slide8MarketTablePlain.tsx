import React from 'react'

const marketData = [
  {
    vertical: 'Solar',
    reps: '33k',
    tam: '$39.6M',
    one: '$0.4M',
    oneReps: '330',
    five: '$2.0M',
    fiveReps: '1.7k',
    ten: '$4.0M',
    tenReps: '3.3k'
  },
  {
    vertical: 'HVAC & Plumbing',
    reps: '31k',
    tam: '$37.2M',
    one: '$0.37M',
    oneReps: '310',
    five: '$1.9M',
    fiveReps: '1.6k',
    ten: '$3.7M',
    tenReps: '3.1k'
  },
  {
    vertical: 'Home Services',
    reps: '30k',
    tam: '$36M',
    one: '$0.36M',
    oneReps: '300',
    five: '$1.8M',
    fiveReps: '1.5k',
    ten: '$3.6M',
    tenReps: '3.0k'
  },
  {
    vertical: 'Roofing',
    reps: '9.6k',
    tam: '$11.5M',
    one: '$0.12M',
    oneReps: '96',
    five: '$0.58M',
    fiveReps: '480',
    ten: '$1.15M',
    tenReps: '960'
  },
  {
    vertical: 'Pest Control',
    reps: '7.8k',
    tam: '$9.4M',
    one: '$0.09M',
    oneReps: '78',
    five: '$0.47M',
    fiveReps: '390',
    ten: '$0.94M',
    tenReps: '780'
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
              <th style={{ border: '1px solid #444', padding: 8 }}>1% ARR</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>1% Reps</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>5% ARR</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>5% Reps</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>10% ARR</th>
              <th style={{ border: '1px solid #444', padding: 8 }}>10% Reps</th>
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
                  {row.oneReps}
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
                  {row.fiveReps}
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
                <td
                  style={{
                    border: '1px solid #444',
                    padding: 8,
                    textAlign: 'right'
                  }}
                >
                  {row.tenReps}
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
                111k
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right'
                }}
              >
                $134M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                $1.34M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                1.1k
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
                5.6k
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                $13.4M
              </td>
              <td
                style={{
                  border: '1px solid #444',
                  padding: 8,
                  textAlign: 'right',
                  fontWeight: 'bold'
                }}
              >
                11.1k
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
          111,400
        </div>
        <div style={{ fontSize: 14, marginBottom: 8 }}>
          Field-based sales reps
        </div>
        <div style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>
          $1,200
        </div>
        <div style={{ fontSize: 14, marginBottom: 8 }}>ACV per rep</div>
        <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>
          $134M
        </div>
        <div style={{ fontSize: 14 }}>TAM across 5 targeted industries</div>
      </div>
    </div>
  )
}

export default Slide8MarketTablePlain
