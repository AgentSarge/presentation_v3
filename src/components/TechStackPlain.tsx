import React from 'react'

const TechStackPlain: React.FC = () => {
  const phase1Data = [
    {
      vertical: 'Solar',
      reps: '28,000',
      tam: '$33.6M',
      percentage: '46%',
      lowCapture: '$336K',
      highCapture: '$3.36M'
    },
    {
      vertical: 'Roofing',
      reps: '14,600',
      tam: '$17.5M',
      percentage: '24%',
      lowCapture: '$175K',
      highCapture: '$1.75M'
    },
    {
      vertical: 'Alarms',
      reps: '9,000',
      tam: '$10.8M',
      percentage: '15%',
      lowCapture: '$108K',
      highCapture: '$1.08M'
    },
    {
      vertical: 'Pest Control',
      reps: '8,900',
      tam: '$10.7M',
      percentage: '15%',
      lowCapture: '$107K',
      highCapture: '$1.07M'
    }
  ]

  return (
    <div style={{ padding: 16 }}>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 24,
          color: '#fff'
        }}
      >
        Phase 1: Core Wedge
      </h3>
      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 12,
                textAlign: 'left',
                color: '#fff'
              }}
            >
              Vertical
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 12,
                color: '#fff'
              }}
            >
              TAM
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 12,
                color: '#fff'
              }}
            >
              Share
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 12,
                color: '#fff'
              }}
            >
              1% ARR
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontSize: 12,
                color: '#fff'
              }}
            >
              10% ARR
            </th>
          </tr>
        </thead>
        <tbody>
          {phase1Data.map((item, index) => (
            <tr key={index}>
              <td
                style={{ border: '1px solid #ccc', padding: 8, color: '#fff' }}
              >
                {item.vertical}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: 8,
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                {item.tam}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: 8,
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                {item.percentage}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: 8,
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                {item.lowCapture}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: 8,
                  textAlign: 'center',
                  color: '#fff'
                }}
              >
                {item.highCapture}
              </td>
            </tr>
          ))}
          <tr>
            <td
              style={{
                border: '1px solid #ccc',
                padding: 8,
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              Total Opportunity
            </td>
            <td
              style={{
                border: '1px solid #ccc',
                padding: 8,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              $72.6M
            </td>
            <td
              style={{
                border: '1px solid #ccc',
                padding: 8,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              100%
            </td>
            <td
              style={{
                border: '1px solid #ccc',
                padding: 8,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              $726K
            </td>
            <td
              style={{
                border: '1px solid #ccc',
                padding: 8,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              $7.26M
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>
        1% Market Capture | 10% Market Capture
      </div>
    </div>
  )
}

export default TechStackPlain
