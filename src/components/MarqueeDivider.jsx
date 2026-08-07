import React from 'react';
import './MarqueeDivider.scss';

export const MarqueeDivider = ({
  items = [
    "PORTFOLIO",
    "ABHIJEET RAKSHIT",
    "2026",
    "ABHIJEET RAKSHIT",
    "PORTFOLIO",
    "2026",
    "ABHIJEET RAKSHIT",
    "PORTFOLIO"
  ]
}) => {
  // Repeat items for endless loop scrolling
  const marqueeList = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-divider-ribbon">
      <div className="marquee-track animate-marquee">
        {marqueeList.map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="marquee-text-item">{text}</span>
            <span className="marquee-badge-icon">
              <span className="badge-letter">A</span>
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeDivider;
