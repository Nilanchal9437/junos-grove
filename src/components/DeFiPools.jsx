import React from 'react';

// Example LP Data (replace with real values later)
const defiData = [
  {
    platform: 'Uniswap V2',
    totalValue: '$33,380.13',
    pools: [
      {
        pair: 'TRUMP + ETH',
        deposits: [
          { token: 'TRUMP', amount: '911.4316', icon: '🪙' },
          { token: 'ETH', amount: '0.3846', icon: 'Ξ' },
        ],
        usd: '$9,081.42',
      },
      {
        pair: 'MUSA + ETH',
        deposits: [
          { token: 'MUSA', amount: '99', icon: '🌿' },
          { token: 'ETH', amount: '0.2201', icon: 'Ξ' },
        ],
        usd: '$9.90',
      },
      {
        pair: 'ETH + TUMP',
        deposits: [
          { token: 'ETH', amount: '0.72', icon: 'Ξ' },
          { token: 'TUMP', amount: '52,789.27', icon: '🔥' },
        ],
        usd: '$10,641.13',
      },
    ],
  },
  {
    platform: 'Uniswap V3',
    totalValue: '$202.72',
    pools: [
      {
        pair: 'TRUMP2.0 + WETH',
        deposits: [
          { token: 'TRUMP2.0', amount: '80', icon: '🧱' },
          { token: 'WETH', amount: '0.51', icon: 'Ξ' },
        ],
        usd: '$202.72',
      },
    ],
  },
];

const DeFiPools = () => {
  return (
    <div
      style={{
        background: '#0f1a18',
        padding: '24px',
        borderRadius: '12px',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ fontSize: '20px' }}>
          DeFi <span style={{ color: '#aaa' }}>$33,582.85</span>
        </h2>
        <button
          style={{
            background: '#182825',
            color: '#aaa',
            border: '1px solid #2a3d38',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px',
          }}
        >
          See More DeFi
        </button>
      </div>

      {/* Platforms */}
      {defiData.map((platform, i) => (
        <div
          key={i}
          style={{
            background: '#121e1b',
            borderRadius: '10px',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          {/* Platform Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            <div>{platform.platform}</div>
            <div style={{ color: '#aaa', fontWeight: 'normal' }}>
              {platform.totalValue}
            </div>
          </div>

          {/* Liquidity Pools */}
          {platform.pools.map((pool, j) => (
            <div
              key={j}
              style={{
                background: '#1a1a1a',
                borderRadius: '8px',
                padding: '12px 16px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  marginBottom: '8px',
                  fontWeight: 500,
                }}
              >
                Pool: {pool.pair}
              </div>

              {/* Deposits */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#888',
                      marginBottom: '4px',
                    }}
                  >
                    Deposit
                  </div>
                  {pool.deposits.map((token, k) => (
                    <div
                      key={k}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{token.icon}</span>
                      <span>
                        {token.amount} {token.token}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#888',
                      marginBottom: '4px',
                    }}
                  >
                    USD Value
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#00ffb3',
                    }}
                  >
                    {pool.usd}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DeFiPools;
