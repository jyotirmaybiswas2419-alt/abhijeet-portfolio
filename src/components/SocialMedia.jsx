import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SocialMedia.scss';

gsap.registerPlugin(ScrollTrigger);

export const SocialMedia = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const posterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Info entrance
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

      // Poster scale & reveal
      gsap.fromTo(
        posterRef.current,
        { opacity: 0, scale: 0.92 },
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
        {/* Left Column: Project Details */}
        <div className="social-left" ref={leftColRef}>
          <span className="social-subhead">Portfolio - Matte painting</span>
          
          <h2 className="social-title">Hard-Surface Modeling</h2>
          
          <p className="social-desc">
            This project is a clean hard-surface exploration inspired by the design philosophy of Nothing's transparent aesthetic. I rebuilt the entire headset from scratch in Blender, focusing on accurate panel separation, clean bevels, and readable surface transitions. The earcups are built from controlled subdivision surfaces with support loops to keep the silhouette tight, and the hinge system uses simple mechanical geometry to stay believable while still stylized. The inner joints and connectors were modeled as functional parts—no lazy boolean shortcuts—so the edges hold up even under close-up renders
          </p>

          <p className="social-date">Date : 2026</p>
        </div>

        {/* Right Column: Poster Image */}
        <div className="social-right" ref={posterRef}>
          <div className="poster-wrapper image-zoom-container">
            <img src="/assets/poster.png" alt="Perspective Poster Artwork" />
          </div>
        </div>
      </div>

      {/* Spacing Block */}
      <div className="large-whitespace-block" />
    </section>
  );
};

export default SocialMedia;
