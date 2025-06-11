import React from 'react';
import chartVideo from '../assets/walletExcanges.png';
import profitLoosImg from '../assets/profit&loss.png';
import portfolioIcon from '../assets/icon/Group.png';
import vaultIcon from '../assets/icon/group (1).png';
import earoImg from '../assets/icon/erro.png';
import mobileIcon from '../assets/icon/group (2).png';

const coins = [
  {
    title: 'Highest volume',
    name: 'Bitcoin',
    price: '693475 USD',
    icon: 'bitcoin.png',
  },
  {
    title: 'Top gainer',
    name: 'Ethereum',
    price: '333729 USD',
    icon: 'bitcoin.png',
  },
  {
    title: 'New listing',
    name: 'Litecoin',
    price: '105000 USD',
    icon: 'bitcoin.png',
  },
  {
    title: 'Most traded',
    name: 'Polkadot',
    price: '68423 USD',
    icon: 'bitcoin.png',
  },
  {
    title: 'Biggest gainers',
    name: 'Solana',
    price: '19863 USD',
    icon: 'bitcoin.png',
  },
  {
    title: 'Trending',
    name: 'Chainlink',
    price: '11291 USD',
    icon: 'bitcoin.png',
  },
];

export default function CryptoOverviewSection() {
  return (
    <section
      style={{
        width: '100%',
        background: '#0a1e19',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 62%)', // Adjust opacity as needed
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Top Crypto Section */}
      <div
        style={{
          position: 'relative',
          padding: '0.9rem 1rem',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <p style={{ color: 'white', fontSize: '2rem', fontWeight: 500 }}>
          All-In-One Crypto & Bitcoin Tracker to Manage <br /> Your Portfolio
          More Efficiently{' '}
        </p>
        <h2
          style={{
            color: 'rgb(255 255 255 / 53%)',
            fontSize: '1rem',
            fontWeight: '200',
            margin: '0.5rem 0 2rem',
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          We’re the only platform on the market that supports all major crypto
          platforms <br /> and DeFi protocols.
        </h2>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '3rem 6.5rem',
            alignItems: 'center',
            gap: '2rem',
            zIndex: 1,
            // maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Left - Text Content */}
          <div
            style={{
              flex: 1,
              color: '#fff',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '0.2rem',
              width: '80vw',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '1.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                {
                  text: '300+ Wallets/Exchanges',
                  icon: portfolioIcon,
                  subtext:
                    'Track everything wherever you keep it: Binance, TrustWallet, and others.',
                },
                {
                  text: '1,000+ DeFi Protocols',
                  icon: vaultIcon,
                  subtext:
                    'Track and manage all your DeFi on 1000+ protocolsand 10+ chains.',
                },
                {
                  text: '20,000+ Cryptocurrencies',
                  icon: mobileIcon,
                  subtext:
                    'Research, track, and manage any coin, set customcrypto alerts and more.',
                },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.3rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.3rem',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span
                      style={{
                        background: '#1f2937',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '3rem',
                        height: '3rem',
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        style={{ width: '3rem', height: '3rem' }}
                      />
                    </span>
                    <span
                      style={{
                        fontSize: '1.6rem',
                        fontFamily: `"DM Sans", sans-serif' `,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '1rem',
                      fontFamily: `"DM Sans", sans-serif' `,
                      color: 'rgb(209 213 219 / 60%)',
                    }}
                  >
                    {item.subtext}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right - Chart Video */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img
              src={chartVideo} // Replace with your image import if needed
              alt="Chart Preview"
              style={{
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        {/* line */}
        <div
          style={{
            width: '80%',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            marginTop: '0.2rem',
          }}
        />
        {/* Protfolio Section */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '3rem 6rem',
            alignItems: 'center',
            gap: '2rem',
            zIndex: 1,
            // maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* left - Chart Video */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img
              src={profitLoosImg} // Replace with your image import if needed
              alt="Chart Preview"
              style={{
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover',
              }}
            />
          </div>
          {/* Right - Text Content */}
          <div
            style={{
              flex: 1,
              color: '#fff',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '0.2rem',
            }}
          >
            <img
              src={earoImg} // Replace with your image import if needed
              alt="Chart Preview"
              style={{
                width: '10%',
                borderRadius: '1rem',
                objectFit: 'cover',
              }}
            />
            <h2
              style={{
                fontSize: '3.0rem',
                fontWeight: 'bold',
                fontFamily: `"DM Sans"`,
              }}
            >
              Get In-Depth Profit & Loss Analysis{' '}
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgb(209 213 219 / 60%)' }}>
              Connect your wallet to get 24h, daily, weekly and cumulative
              Profit & Loss analysis. Level up your crypto investing strategy.
            </p>

            <button
              style={{
                marginTop: '1.2rem',
                width: '40%',
                background: '#92f5ad',
                border: 'none',
                borderRadius: '30px',
                padding: '0.8rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#000',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(146, 245, 173, 0.5)',
              }}
            >
              Connect Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
