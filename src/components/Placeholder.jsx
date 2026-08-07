import React from 'react';
import './Placeholder.scss';

/**
 * Generic Solid-Color Placeholder Component
 * Neutral background options: #D9D9D9, #CFCFCF, #BDBDBD, #AFAFAF
 * 
 * Replace this div with an <img> tag when your assets are ready.
 * Example: <img src="/path-to-your-asset.jpg" alt="Description" className="placeholder-image" />
 */
export const Placeholder = ({
  label = 'Project Image',
  bgColor = '#D9D9D9',
  aspectRatio = '16/9',
  height = 'auto',
  width = '100%',
  borderRadius = '16px',
  className = '',
  style = {},
  children
}) => {
  return (
    <div
      className={`placeholder-box ${className}`}
      style={{
        backgroundColor: bgColor,
        aspectRatio: aspectRatio !== 'auto' ? aspectRatio : undefined,
        height: height,
        width: width,
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px dashed rgba(7, 19, 38, 0.2)',
        color: '#071326',
        userSelect: 'none',
        ...style
      }}
    >
      {/* 
        ========================================================================
        ASSET REPLACEMENT POINT
        To use your own asset, replace the div wrapper or children below with:
        <img src="YOUR_IMAGE_PATH_HERE" alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ========================================================================
      */}
      <div className="placeholder-badge">
        <span className="placeholder-label">{label}</span>
        <span className="placeholder-sublabel">Replace with &lt;img /&gt;</span>
      </div>
      {children}
    </div>
  );
};

/* Specialized Placeholder Variants for Behance Presentation Layout */

// Portrait Placeholder (About Section)
export const PortraitPlaceholder = (props) => (
  // REPLACE WITH: <img src="/assets/portrait.jpg" alt="Portrait" className="about-portrait-img" />
  <Placeholder
    label="Portrait"
    bgColor="#CFCFCF"
    aspectRatio="3/4"
    borderRadius="24px"
    {...props}
  />
);

// Phone Mockup Placeholder (UI/UX Showcase)
export const PhoneMockupPlaceholder = ({ label = 'Phone Mockup', ...props }) => (
  // REPLACE WITH: <img src="/assets/phone-mockup.png" alt="Mobile App Screen" />
  <div className="phone-mockup-frame">
    <div className="phone-notch" />
    <Placeholder
      label={label}
      bgColor="#BDBDBD"
      aspectRatio="9/19.5"
      borderRadius="32px"
      {...props}
    />
  </div>
);

// Project Placeholder (UI / 3D Renders / General Projects)
export const ProjectPlaceholder = (props) => (
  // REPLACE WITH: <img src="/assets/project-render.png" alt="Project Render" />
  <Placeholder
    label={props.label || "Project Image"}
    bgColor="#D9D9D9"
    aspectRatio={props.aspectRatio || "16/10"}
    borderRadius="16px"
    {...props}
  />
);

// Poster Placeholder (Social Media Showcase)
export const PosterPlaceholder = (props) => (
  // REPLACE WITH: <img src="/assets/poster-design.jpg" alt="Social Media Poster" />
  <Placeholder
    label="Poster"
    bgColor="#AFAFAF"
    aspectRatio="4/5"
    borderRadius="20px"
    {...props}
  />
);

// Image Placeholder (General utility)
export const ImagePlaceholder = (props) => (
  // REPLACE WITH: <img src="/assets/image.jpg" alt="Image" />
  <Placeholder {...props} />
);

export default Placeholder;
