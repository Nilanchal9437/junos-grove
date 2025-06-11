import React from 'react';

const nftData = [
  {
    title: 'OKX Special Souvenir NFT',
    valueEth: 0,
    valueUsd: '$0',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvubcmQ3tlvL0_QNHkD7QnuDGJLH0sE-IWg&s',
    ],
  },
  {
    title: 'Blocky Doge',
    valueEth: 3.934,
    valueUsd: '$10,050.44',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMddmTfXo89jfP7j8K1rbn5uw5IHVgbHhKuA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqB5gEIdALNbZbAwSuEzAXYdtpa0F2hnH2A&s',
      'https://nftevening.com/wp-content/uploads/2023/05/Bitcoin-Frogs-1.png',
      '+3',
    ],
  },
  {
    title: 'TRUMP 2024',
    valueEth: 0,
    valueUsd: '$0',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKP7S97pvSrviCyzMmJhwPd3UKE0JiwdSLyg&s',
    ],
  },
  {
    title: 'Wall Street Dons',
    valueEth: 0,
    valueUsd: '$0',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMddmTfXo89jfP7j8K1rbn5uw5IHVgbHhKuA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqB5gEIdALNbZbAwSuEzAXYdtpa0F2hnH2A&s',
      'https://nftevening.com/wp-content/uploads/2023/05/Bitcoin-Frogs-1.png',
    ],
  },
];

const NftsUpdates = () => {
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
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: '20px' }}>
          NFTs <span style={{ color: '#aaa' }}>$177,564.13</span>
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
          See More NFTs
        </button>
      </div>

      {/* NFT Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {nftData.map((nft, i) => (
          <div
            key={i}
            style={{
              background: '#1a1a1a',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              minHeight: '240px',
            }}
          >
            {/* NFT Images */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  nft.images.length > 1 ? 'repeat(3, 1fr)' : '1fr',
                gap: '6px',
                marginBottom: '12px',
              }}
            >
              {nft.images.map((src, index) => (
                <div
                  key={index}
                  style={{
                    background: '#333',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {src.includes('+') ? (
                    <span style={{ color: '#aaa', fontSize: '14px' }}>
                      {src}
                    </span>
                  ) : (
                    <img
                      src={src}
                      alt="NFT"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* NFT Info */}
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '4px',
                }}
              >
                {nft.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#00ffb3',
                }}
              >
                <span style={{ fontSize: '16px', marginRight: '6px' }}>Ξ</span>
                {nft.valueEth}
              </div>
              <div style={{ fontSize: '12px', color: '#aaa' }}>
                {nft.valueUsd}
              </div>
            </div>

            {/* 3-dot Menu (⋮) */}
            <div
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                cursor: 'pointer',
                color: '#888',
              }}
              title="Options"
            >
              &#8942;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftsUpdates;
