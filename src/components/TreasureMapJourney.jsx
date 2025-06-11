import React, { useEffect, useRef } from 'react';
import './TreasureMapJourney.css';
import jungleBgLeft from '../assets/Left.png';
import jungleBgRight from '../assets/Right.png';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const data = [
  { year: 2019, text: 'Sunt nostrud amet sint do', position: 'bottom' },
  { year: 2020, text: 'Exercitation veniam consequat', position: 'top' },
  { year: 2021, text: 'Velit officia consequat duis', position: 'bottom' },
  { year: 2022, text: 'Ullamco est sit aliqua dolor', position: 'top' },
  { year: 2023, text: 'Amet minim mollit non deserunt', position: 'bottom' },
];

export default function TreasureMapJourney() {
  const navigate = useNavigate();
  const containerRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Animate the line fill in segments and reveal checkpoints one by one
      data.forEach((_, index) => {
        // Calculate the scaleX for each checkpoint (from 0 to 1)
        const scaleX = (index + 1) / data.length;

        // Animate the line up to this checkpoint
        timeline.to(
          '.line-fill',
          {
            scaleX: scaleX,
            duration: 0.5,
            transformOrigin: 'left center',
          },
          index === 0 ? 0 : '+=0.2'
        );

        // Reveal the checkpoint and text
        timeline.to(
          `.checkpoint-${index}`,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        );
        timeline.to(
          `.text-${index}`,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          '-=0.3'
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <img src={jungleBgLeft} className="jungle-bg left" alt="" />
      <img src={jungleBgRight} className="jungle-bg right" alt="" />

      <div className="timeline-header">
        <p>
          Featured <span style={{ color: 'green' }}>crypto coins</span>
        </p>
        <h2>Treasure Map Journey</h2>
      </div>

      <div className="timeline-wrapper">
        <div className="line-base"></div>
        <div className="line-fill"></div>

        <div className="checkpoints">
          {data.map((item, index) => (
            <div
              className="checkpoint-container"
              key={item.year}
              style={{ left: `${(index / (data.length - 1)) * 100}%` }}
            >
              <div className={`checkpoint checkpoint-${index}`}>
                <span className="year">{item.year}</span>
              </div>
              <div className={`checkpoint-text text-${index} ${item.position}`}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        style={{
          background: '#90ee90',
          color: '#000',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '37px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '1rem',
          marginTop: '4rem',
          height: '10vh',
          width: '20vw',
          fontSize: '1.5rem',
        }}
        onClick={() => navigate('/portfolio')}
      >
        View Portfolio
      </button>
    </section>
  );
}
