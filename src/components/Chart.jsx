import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';

ChartJS.register(
  LineElement,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Chart = () => {
  // Dummy Line Chart Data
  const lineData = {
    labels: [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
      '00:00',
      '01:00',
    ],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [2.75, 2.8, 2.61, 2.63, 2.68, 2.61, 2.78, 2.74, 2.79],
        borderColor: '#A259FF',
        backgroundColor: 'rgba(162, 89, 255, 0.1)',
        fill: true,
        pointBackgroundColor: '#A259FF',
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: '#aaa',
          callback: (val) => `$${val}M`,
        },
        grid: { color: '#1e2e2b' },
      },
      x: {
        ticks: { color: '#888' },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `$${ctx.raw}M`,
        },
      },
    },
  };

  // Donut Chart Data
  const donutData = {
    labels: ['ETH', 'TROG', 'TRUMP', 'USDC', 'GUA', 'TUA', 'RIO', 'Others'],
    datasets: [
      {
        data: [45.32, 42.47, 4.04, 1.4, 1.39, 1.33, 1.13, 2.92],
        backgroundColor: [
          '#7B61FF',
          '#F97316',
          '#E11D48',
          '#0EA5E9',
          '#10B981',
          '#8B5CF6',
          '#FACC15',
          '#444',
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw.toFixed(2)}%`,
        },
      },
    },
  };

  return (
    <div
      style={{
        background: '#101e1b',
        padding: '24px',
        borderRadius: '12px',
        color: 'white',
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      {/* Left: Line Chart */}
      <div style={{ flex: 1.5, minWidth: '360px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Charts</h2>
        <div style={{ height: '260px' }}>
          <Line data={lineData} options={lineOptions} />
        </div>

        {/* Time Range Selector */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          {['24H', '1W', '1M', '3M', '6M', '1Y', 'ALL'].map((label, i) => (
            <div
              key={i}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                background: label === '24H' ? '#262e2a' : '#181e1c',
                color: label === '24H' ? '#fff' : '#aaa',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Currency Toggle */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            alignItems: 'center',
          }}
        >
          {['USD', 'BTC', 'ETH'].map((currency, i) => (
            <label
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <input
                type="checkbox"
                checked={currency === 'USD'}
                style={{ accentColor: '#F97316' }}
              />
              <span style={{ fontSize: '14px' }}>{currency}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right: Donut Chart + Legend */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ fontSize: '20px' }}>&nbsp;</h2>
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
            See More Charts
          </button>
        </div>

        <div style={{ width: '100%', height: '220px', position: 'relative' }}>
          <Doughnut data={donutData} options={donutOptions} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '25%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              fontSize: '14px',
              color: '#fff',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>ETH</div>
            <div style={{ fontSize: '16px' }}>$1,259,370</div>
            <div style={{ color: '#aaa' }}>45.32%</div>
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '16px',
          }}
        >
          {donutData.labels.map((label, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                width: '50%',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: donutData.datasets[0].backgroundColor[i],
                }}
              />
              <span style={{ fontSize: '12px' }}>{label}</span>
              <span
                style={{ marginLeft: 'auto', fontSize: '12px', color: '#aaa' }}
              >
                {donutData.datasets[0].data[i].toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
