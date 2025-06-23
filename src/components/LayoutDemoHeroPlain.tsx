import React from 'react'

const LayoutDemoHeroPlain: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: 32,
          color: '#fff'
        }}
      >
        Market Validation
      </h1>
      <p
        style={{
          fontSize: 20,
          marginBottom: 16,
          color: '#fff',
          maxWidth: 800,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        Investors have already bet $659M+ on sales conversation intelligence
      </p>
      <p
        style={{
          fontSize: 18,
          color: '#fff',
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        But existing solutions require manual interaction during conversations
      </p>
    </div>
  )
}

export default LayoutDemoHeroPlain
