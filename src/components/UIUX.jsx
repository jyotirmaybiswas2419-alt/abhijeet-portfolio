import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './UIUX.scss';

gsap.registerPlugin(ScrollTrigger);

export const UIUX = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Info Entrance
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Right Content Entrance
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="uiux-section" ref={sectionRef} id="uiux">
      <div className="portfolio-container uiux-grid">
        
        {/* Left Column: Project Details */}
        <div className="uiux-left" ref={leftColRef}>
          <span className="uiux-subhead">Portfolio - UX / UI Design</span>
          
          <h2 className="echon-title">ECHON</h2>

          <div className="echon-description">
            <p>
              Built a futuristic music streaming app concept focused on immersive dark UI, cinematic purple lighting, and glassmorphism-inspired interactions.
            </p>
            <p>
              The goal was to create a modern entertainment experience that feels both premium and atmospheric while keeping the interface clean and intuitive.
            </p>
            <p className="sub-detail">
              Designed in Figma.<br />
              Available for UI/UX freelance projects.
            </p>
            <p className="echon-date">Date : 2026</p>
          </div>
        </div>

        {/* Right Column: Title Pill, Palette Cards, App Screens & Components Grid */}
        <div className="uiux-right" ref={rightColRef}>
          
          {/* Top Row: App Name Header + Color Swatches */}
          <div className="uiux-top-row">
            <div className="echon-header-card">
              <span className="echon-logo-text">ECHON</span>
            </div>
            <div className="echon-swatch swatch--dark" title="Dark Card" />
            <div className="echon-swatch swatch--purple" title="Primary Purple" />
            <div className="echon-swatch swatch--deep-purple" title="Deep Purple" />
          </div>

          {/* Main Content Area: App Screens Box + Right Components Stack */}
          <div className="uiux-main-content">
            
            {/* Left Box: Dark Rounded Container holding 3 App Screen Images */}
            <div className="app-screens-container">
              <div className="screens-inner-grid">
                <div className="app-screen-item image-zoom-container">
                  <img src="/assets/ui/app (1).png" alt="Echon App Screen 1" />
                </div>
                <div className="app-screen-item image-zoom-container">
                  <img src="/assets/ui/app (2).png" alt="Echon App Screen 2" />
                </div>
                <div className="app-screen-item image-zoom-container">
                  <img src="/assets/ui/app (3).png" alt="Echon App Screen 3" />
                </div>
              </div>
            </div>

            {/* Right Column: 4 UI Component Images Stack */}
            <div className="components-stack">
              <div className="component-card-item image-zoom-container">
                <img src="/assets/ui/component (1).png" alt="UI Component 1" />
              </div>
              <div className="component-card-item image-zoom-container">
                <img src="/assets/ui/component (2).png" alt="UI Component 2" />
              </div>
              <div className="component-card-item image-zoom-container">
                <img src="/assets/ui/component (3).png" alt="UI Component 3" />
              </div>
              <div className="component-card-item image-zoom-container">
                <img src="/assets/ui/component (4).png" alt="UI Component 4" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Know More Link */}
      <div className="know-more-container">
        <a href="#contact" className="know-more-btn">
          Know More
        </a>
      </div>
    </section>
  );
};

export default UIUX;
