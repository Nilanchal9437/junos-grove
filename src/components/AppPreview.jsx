import React from 'react';
import mobileVideo from '../assets/mobilePreview.mp4';
import mobileVideoBack from '../assets/img2.png';
import rightImg from '../assets/Right.png';
import groupImg from '../assets/Group.png';
import bitcoin from '../assets/icon/bitcoin.png';
import Ethereum from '../assets/icon/Ethereum.png';
import Uniswap from '../assets/icon/Litecoin.png';
import Polkadot from '../assets/icon/Polkadot.png';
import Features1 from '../assets/icon/Features1.png';
import Features2 from '../assets/icon/Features2.png';
import Features3 from '../assets/icon/Features3.png';

export default function AppPreview() {
  return (
    <section
      style={{
        width: '100%',
        background: 'rgba(10, 30, 25, 0.95)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 62%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Headings */}
      <h5
        style={{
          color: 'white',
          fontSize: '1rem',
          marginBottom: '1rem',
          textAlign: 'center',
          zIndex: 2,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        We Deliver{' '}
        <span style={{ color: 'rgba(153, 227, 158, 1)' }}>Best Solution</span>
      </h5>
      <h2
        style={{
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 500,
          marginBottom: '3rem',
          textAlign: 'center',
          maxWidth: '800px',
          zIndex: 2,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        One application with multiple options to give you freedom of buying &
        selling
      </h2>

      {/* App Preview Content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 520,
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        <img
          src={mobileVideoBack} // or any image you want
          alt="decor"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '87%',
            height: '116vh',
            zIndex: 1,
            opacity: 1.9, // adjust as needed
            pointerEvents: 'none', // optional: blur for effect
          }}
        />
        {/* Mobile Preview Video (Center) */}
        <div
          style={{
            position: 'relative',
            // width: 317,
            // height: 600,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
          }}
        >
          <video
            src={mobileVideo}
            autoPlay
            muted
            loop
            style={{
              width: '23vw',
              height: '106vh',
              borderRadius: '2rem',
              objectFit: 'cover',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
              backgroundColor: '#000',
              opacity: 10,
              // semi-transparent effect
            }}
          />
        </div>
      </div>
      {/* Bottom Features Section */}
      <div
        style={{
          position: 'relative',
          width: '99%',
          height: '100%',
          // maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '4rem 2rem',
          zIndex: 2,
        }}
      >
        {/* Left Text Column */}
        <div
          style={{ flex: 1, zIndex: 2, textAlign: 'start', marginTop: '5rem' }}
        >
          <h3
            style={{
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Why choose{' '}
            <span style={{ color: 'rgba(153, 227, 158, 1)' }}>Juno's</span>
          </h3>
          <h2
            style={{
              color: 'white',
              fontSize: '3.4rem',
              fontWeight: 700,
              marginBottom: '2rem',
              fontFamily: '"Sansation"',
            }}
          >
            Features of the crypto framer <br /> mobile application
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '3.2rem',
              width: '70%',
              marginTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.7rem',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
            >
              <img src={Features1} alt="" style={{ width: 42, height: 42 }} />
              Designed for crypto
              <br /> trading platforms
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
            >
              <img src={Features2} alt="" style={{ width: 42, height: 42 }} />
              Kickstart your crypto <br />
              website today
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 500,
              marginTop: '2.5rem',
            }}
          >
            <img src={Features3} alt="" style={{ width: 42, height: 42 }} />
            Launch your blockchain <br /> platform today
          </div>
        </div>

        {/* Right Portfolio Card */}
        <div
          style={{
            flex: 1,
            maxWidth: 395,
            backgroundColor: 'rgba(52,52,52,0.45)', // semi-transparent
            borderRadius: '1rem',
            padding: '3rem',
            color: 'white',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            zIndex: 2,
            backdropFilter: 'blur(12px)', // <-- blur effect
            WebkitBackdropFilter: 'blur(12px)', // for Safari
            position: 'relative',
            top: '5rem',
            left: '-2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <h4
            style={{
              fontSize: '1.6rem',
              marginBottom: '0.5rem',
              fontWeight: 500,
            }}
          >
            Your portfolio is up <span style={{ color: '#a7f3d0' }}>2.37%</span>
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            <li
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
              >
                <img style={{ height: '8vh' }} src={bitcoin} alt="Bitcoin" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span> Bitcoin</span>
                  <span style={{ fontSize: '0.5rem' }}> BTC/USD</span>
                </div>
              </div>
              <span style={{ color: 'rgba(153, 227, 158, 1)' }}>1.05% ↑</span>
            </li>
            <li
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
              >
                <img style={{ height: '8vh' }} src={Ethereum} alt="Bitcoin" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span> Ethereum</span>
                  <span style={{ fontSize: '0.5rem' }}> BTC/USD</span>
                </div>
              </div>
              <span style={{ color: 'rgba(153, 227, 158, 1)' }}>1.05% ↑</span>
            </li>
            <li
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
              >
                <img style={{ height: '8vh' }} src={Uniswap} alt="Bitcoin" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span> Litecoin</span>
                  <span style={{ fontSize: '0.5rem' }}> BTC/USD</span>
                </div>
              </div>
              <span style={{ color: 'rgba(153, 227, 158, 1)' }}>1.05% ↑</span>
            </li>
            <li
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
              >
                <img style={{ height: '8vh' }} src={Polkadot} alt="Bitcoin" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span> Polkadot</span>
                  <span style={{ fontSize: '0.5rem' }}> BTC/USD</span>
                </div>
              </div>
              <span style={{ color: 'rgba(153, 227, 158, 1)' }}>1.05% ↑</span>
            </li>
          </ul>
        </div>

        {/* Background Right PNG */}
        <img
          src={rightImg}
          alt="right decor"
          style={{
            position: 'absolute',
            right: 0,
            top: '-7%',
            height: '105vh',
            objectFit: 'cover',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.8,
          }}
        />
        <img
          src={groupImg}
          alt="group decor"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 20,
            height: '60%',
            objectFit: 'contain',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.8,
          }}
        />
      </div>
    </section>
  );
}
