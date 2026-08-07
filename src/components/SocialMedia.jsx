import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PosterPlaceholder } from './Placeholder';
import './SocialMedia.scss';

gsap.registerPlugin(ScrollTrigger);

export const SocialMedia = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const posterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Description fade upward
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Poster scale 0.9 -> 1 & opacity reveal
      gsap.fromTo(
        posterRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.3,
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
    <section className="social-media-section" ref={sectionRef} id="social">
      <div className="portfolio-container social-grid">
        {/* Left Column: Editorial Brief */}
        <div className="social-left" ref={leftColRef}>
          <span className="section-label">CAMPAIGN & POSTER ART</span>
          <h2 className="social-title">SWISS MINIMALIST POSTER COLLECTION</h2>
          
          <p className="social-desc">
            A curated series of high-contrast typography posters and social brand identity campaigns. Focusing on brutalist layouts, bold grid architecture, and vibrant green accents designed to dominate digital feeds and billboard spaces.
          </p>

          <div className="campaign-metrics">
            <div className="metric-box">
              <span className="metric-num">500K+</span>
              <span className="metric-label">Social Impressions</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">12</span>
              <span className="metric-label">Global Exhibitions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Poster Placeholder */}
        <div className="social-right" ref={posterRef}>
          <div className="poster-wrapper image-zoom-container">
            {/* REPLACE WITH: <img src="/assets/poster-artwork.jpg" alt="Poster Artwork" /> */}
            <PosterPlaceholder label="Poster Artwork" />
          </div>
        </div>
      </div>

      {/* Large Whitespace Below as requested */}
      <div className="large-whitespace-block" />
    </section>
  );
};

export default SocialMedia;
