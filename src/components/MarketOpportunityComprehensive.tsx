import React from 'react';

const MarketOpportunityComprehensive: React.FC = () => {
  const phase1Data = [
    { vertical: 'Solar', tam: '$33.6M', share: '46%', lowCapture: '$336K', highCapture: '$3.36M' },
    { vertical: 'Roofing', tam: '$17.5M', share: '24%', lowCapture: '$175K', highCapture: '$1.75M' },
    { vertical: 'Alarms', tam: '$10.8M', share: '15%', lowCapture: '$108K', highCapture: '$1.08M' },
    { vertical: 'Pest Control', tam: '$10.7M', share: '15%', lowCapture: '$107K', highCapture: '$1.07M' },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      color: '#fff',
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '24px', flexShrink: 0 }}>
        <div style={{ fontSize: '12px', fontFamily: 'monospace', marginBottom: '8px' }}>
          Market Analysis
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>
          How We Expand the Wedge
        </h1>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '16px', 
          fontSize: '24px', 
          fontWeight: 'bold',
          marginBottom: '8px'
        }}>
          <span>$72M</span>
          <span style={{ fontSize: '18px' }}>→</span>
          <span>$215M</span>
        </div>
        <p style={{ fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
          Start narrow and deep, then expand with a repeatable playbook
        </p>
      </div>

      {/* Phases Section */}
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        marginBottom: '24px',
        flexShrink: 0
      }}>
        {/* Phase 1 */}
        <div style={{ 
          flex: 1, 
          border: '1px solid #333', 
          padding: '16px', 
          textAlign: 'center',
          backgroundColor: '#000'
        }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>
            PHASE 1
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Core Wedge
          </h3>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            $72.6M
          </div>
          <p style={{ fontSize: '12px' }}>
            Solar, alarms, roofing, pest control. High-touch door-to-door field sales.
          </p>
        </div>

        {/* Phase 2 */}
        <div style={{ 
          flex: 1, 
          border: '1px solid #333', 
          padding: '16px', 
          textAlign: 'center',
          backgroundColor: '#000'
        }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>
            PHASE 2
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Expansion
          </h3>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            $142.1M
          </div>
          <p style={{ fontSize: '12px' }}>
            HVAC, home services, retail enablement, telecom field sales.
          </p>
        </div>

        {/* Total */}
        <div style={{ 
          flex: 1, 
          border: '1px solid #333', 
          padding: '16px', 
          textAlign: 'center',
          backgroundColor: '#000'
        }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>
            TOTAL
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Opportunity
          </h3>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            $215M
          </div>
          <p style={{ fontSize: '12px' }}>
            Repeatable playbook path to $25M–$50M ARR potential.
          </p>
        </div>
      </div>

      {/* Bottom Section with Problem and Table */}
      <div style={{ 
        display: 'flex', 
        gap: '24px',
        flex: 1,
        minHeight: 0
      }}>
        {/* Left: The Problem */}
        <div style={{ 
          flex: 1, 
          border: '1px solid #333', 
          padding: '20px',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            The Problem
          </h3>
          <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
            <p style={{ marginBottom: '16px' }}>
              In every field-based industry—solar, alarms, roofing, pest control—sales reps rely on real-world 
              conversations to close deals.
            </p>
            <p>
              But those conversations vanish. Managers can't coach what they can't hear. Compliance is guesswork. 
              CRMs stay empty.
            </p>
          </div>
        </div>

        {/* Right: Phase 1 Table */}
        <div style={{ 
          flex: 1, 
          border: '1px solid #333', 
          padding: '20px',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            Phase 1: Core Wedge
          </h3>
          
          <div style={{ flex: 1, minHeight: 0 }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th style={{ padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Vertical</th>
                  <th style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>TAM</th>
                  <th style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Share</th>
                  <th style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>1% ARR</th>
                  <th style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>10% ARR</th>
                </tr>
              </thead>
              <tbody>
                {phase1Data.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #222' }}>
                    <td style={{ padding: '8px', border: '1px solid #333' }}>{item.vertical}</td>
                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>{item.tam}</td>
                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>{item.share}</td>
                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>{item.lowCapture}</td>
                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>{item.highCapture}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid #444', fontWeight: 'bold' }}>
                  <td style={{ padding: '8px', border: '1px solid #333' }}>Total Opportunity</td>
                  <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>$72.6M</td>
                  <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>100%</td>
                  <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>$726K</td>
                  <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #333' }}>$7.26M</td>
                </tr>
              </tbody>
            </table>
            
            <div style={{ 
              fontSize: '10px', 
              textAlign: 'center', 
              marginTop: '12px',
              color: '#888'
            }}>
              1% Market Capture | 10% Market Capture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunityComprehensive; 