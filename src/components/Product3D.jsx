import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Product3D.scss';

gsap.registerPlugin(ScrollTrigger);

export const Product3D = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1 Reveal
      gsap.fromTo(
        row1Ref.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row1Ref.current,
            start: 'top 75%',
          },
        }
      );

      // Row 2 Reveal
      gsap.fromTo(
        row2Ref.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row2Ref.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="product3d-section" ref={sectionRef} id="product3d">
      <div className="portfolio-container product3d-container">
        
        {/* Project 1: Mechanical Keyboard */}
        <div className="product-block-row" ref={row1Ref}>
          {/* Left: Project Details */}
          <div className="product-info-col">
            <span className="product-subhead">Portfolio - Product Visualization</span>
            <h2 className="product-title">Mechanical Keyboard Product Visualization</h2>
            <p className="product-desc">
              A realistic 65% mechanical keyboard created in Blender as a product visualization study. The focus of this project was achieving accurate proportions, believable materials, and clean studio lighting. Each keycap was modeled with consistent spacing and alignment to replicate a real-world mechanical keyboard layout.
            </p>
            <p className="product-date">Date : 2026</p>
          </div>

          {/* Right: 3 Render Showcase (Top Hero + 2 Bottom Grid) */}
          <div className="product-renders-col product-renders-col--keyboard">
            <div className="render-hero-card image-zoom-container">
              <img src="/assets/3d/keynoard (1).png" alt="Mechanical Keyboard Full View" />
            </div>
            <div className="renders-bottom-grid">
              <div className="render-sub-card image-zoom-container">
                <img src="/assets/3d/keynoard (2).png" alt="Keyboard Keycap Detail Left" />
              </div>
              <div className="render-sub-card image-zoom-container">
                <img src="/assets/3d/keynoard (3).png" alt="Keyboard Keycap Detail Right" />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Hard-Surface Modeling (Headphones) */}
        <div className="product-block-row" ref={row2Ref}>
          {/* Left: Project Details */}
          <div className="product-info-col">
            <span className="product-subhead">Portfolio - Product Visualization</span>
            <h2 className="product-title">Hard-Surface Modeling</h2>
            <p className="product-desc">
              This project is a clean hard-surface exploration inspired by the design philosophy of Nothing's transparent aesthetic. I rebuilt the entire headset from scratch in Blender, focusing on accurate panel separation, clean bevels, and readable surface transitions. The earcups are built from controlled subdivision surfaces with support loops to keep the silhouette tight, and the hinge system uses simple mechanical geometry to stay believable while still stylized. The inner joints and connectors were modeled as functional parts—no lazy boolean shortcuts—so the edges hold up even under close-up renders
            </p>
            <p className="product-date">Date : 2026</p>
          </div>

          {/* Right: 3 Render Showcase (Top Hero + 2 Bottom Grid) */}
          <div className="product-renders-col product-renders-col--headphone">
            <div className="render-hero-card image-zoom-container">
              <img src="/assets/3d/headphone (1).png" alt="Headphones Full View" />
            </div>
            <div className="renders-bottom-grid">
              <div className="render-sub-card image-zoom-container">
                <img src="/assets/3d/headphone (2).png" alt="Headphone Detail Left" />
              </div>
              <div className="render-sub-card image-zoom-container">
                <img src="/assets/3d/headphone (3).png" alt="Headphone Detail Right" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product3D;
