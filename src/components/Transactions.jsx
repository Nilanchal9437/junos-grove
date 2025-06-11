import React from 'react';

const transactions = [
  {
    type: 'Received',
    iconColor: '#00ffb3',
    asset: '0',
    usdValue: '$0',
    contract: '0x20ec601b4c18832a2b603a0292bcec0b133af95c_ethereum',
    amount: '8,413,800,000',
    value: '$53,343.49',
    tokenPrice: '$0.00000634',
    pl: '-100%',
  },
  {
    type: 'Mint',
    iconColor: '#FFA500',
    asset: '0',
    usdValue: '$0',
    contract: '0xffc3ea0d87e2799e3bf1cd6f099bb215e0dc3706_ethereum',
    amount: '20,000,000',
    value: '$12,893.4',
    tokenPrice: '$0.00006447',
    pl: '-100%',
  },
  {
    type: 'Fill',
    iconColor: '#666',
    asset: '0',
    usdValue: '$0',
    contract: '0xffc3ea0d87e2799e3bf1cd6f099bb215e0dc3706_ethereum',
    amount: '-20,000,000',
    value: '$0',
    tokenPrice: '$0.00006447',
    pl: '0%',
    note: 'This is a fake transaction created to fill your balance, because...',
  },
  {
    type: 'Mint',
    iconColor: '#FFA500',
    asset: '0',
    usdValue: '$0',
    contract: '0x2118c553dc76ebae053fca886f6ad206889d8da8_ethereum',
    amount: '12,620,700,000',
    value: '$168,486.35',
    tokenPrice: '$0.00001335',
    pl: '-100%',
  },
  {
    type: 'Received',
    iconColor: '#00ffb3',
    asset: 'XEN',
    usdValue: '$0.1155',
    contract: 'XEN',
    amount: '1,000,000',
    value: '$0.1155',
    tokenPrice: '$0.0000001155',
    pl: '-51.57%',
  },
];

const Transactions = () => {
  return (
    <div
      style={{
        background: '#0f1a18',
        padding: '24px',
        borderRadius: '12px',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: '20px' }}>Transactions</h2>
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
          See More Activity
        </button>
      </div>

      {/* Date Section */}
      <div style={{ marginBottom: '12px', color: '#aaa', fontSize: '14px' }}>
        January 14, 2025
      </div>

      {/* Table Header */}
      <div
        style={{
          display: 'flex',
          padding: '8px 0',
          color: '#888',
          fontSize: '13px',
          borderBottom: '1px solid #1e2e2b',
        }}
      >
        <div style={{ width: '140px' }}>Type</div>
        <div style={{ flex: 1 }}>Asset(s)</div>
        <div style={{ width: '80px', textAlign: 'right' }}>P/L</div>
      </div>

      {/* Transaction Rows */}
      {transactions.map((tx, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            padding: '16px 0',
            borderBottom: '1px solid #1e2e2b',
            alignItems: 'flex-start',
          }}
        >
          {/* Type Icon + Label */}
          <div
            style={{
              width: '140px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: tx.iconColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#0f1a18',
              }}
            >
              {tx.type === 'Fill' ? '🧾' : tx.type === 'Mint' ? '🛠️' : '↓'}
            </div>
            <div style={{ fontSize: '14px' }}>{tx.type}</div>
          </div>

          {/* Asset Info */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: '14px',
                color: '#00ffb3',
                marginBottom: '4px',
              }}
            >
              {tx.amount} {tx.contract.split('_')[0]}
            </div>
            <div style={{ fontSize: '13px', color: '#aaa' }}>{tx.value}</div>
            <div
              style={{
                fontSize: '12px',
                color: '#666',
                wordBreak: 'break-word',
              }}
            >
              ({tx.contract} = {tx.tokenPrice})
            </div>
            {tx.note && (
              <div
                style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}
              >
                {tx.note}
              </div>
            )}
          </div>

          {/* P/L */}
          <div
            style={{
              width: '80px',
              textAlign: 'right',
              fontSize: '14px',
              color:
                tx.pl.startsWith('-') || tx.pl.includes('100%')
                  ? '#ff4d4f'
                  : '#00ffb3',
            }}
          >
            {tx.pl}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
