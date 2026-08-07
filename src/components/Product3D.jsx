import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectPlaceholder } from './Placeholder';
import './Product3D.scss';

gsap.registerPlugin(ScrollTrigger);

export const Product3D = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row1RendersRef = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1 Text Reveal
      gsap.fromTo(
        row1Ref.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row1Ref.current,
            start: 'top 80%',
          },
        }
      );

      // Row 1 - Three 3D Render Placeholders Stagger Reveal
      gsap.fromTo(
        row1RendersRef.current.children,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row1RendersRef.current,
            start: 'top 75%',
          },
        }
      );

      // Row 2 Large Product Render Reveal
      gsap.fromTo(
        row2Ref.current,
        { opacity: 0, y: 80 },
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
      <div className="portfolio-container">
        
        {/* Project 1: Description on Left, 3 Render Grid on Right */}
        <div className="product-row product-row--one">
          <div className="product-info-col" ref={row1Ref}>
            <span className="project-category-tag">3D INDUSTRIAL & CONCEPT DESIGN</span>
            <h2 className="project-heading">CHRONO LUXURY SMARTWATCH & WEARABLES</h2>
            <p className="project-body">
              A high-precision 3D visualization project highlighting tactile metal textures, curved sapphire crystal reflections, and ergonomic industrial design. Rendered in Octane & Cinema 4D.
            </p>
            <div className="project-specs">
              <span>SOFTWARE: Cinema 4D, Octane, ZBrush</span>
              <span>YEAR: 2026</span>
            </div>
          </div>

          <div className="product-renders-grid" ref={row1RendersRef}>
            <div className="render-card image-zoom-container">
              {/* REPLACE WITH: <img src="/assets/3d-render-1.jpg" alt="3D Render Front View" /> */}
              <ProjectPlaceholder label="3D Render 1 (Front)" aspectRatio="4/3" bgColor="#D9D9D9" />
            </div>
            <div className="render-card image-zoom-container">
              {/* REPLACE WITH: <img src="/assets/3d-render-2.jpg" alt="3D Render Side Detail" /> */}
              <ProjectPlaceholder label="3D Render 2 (Detail)" aspectRatio="4/3" bgColor="#CFCFCF" />
            </div>
            <div className="render-card image-zoom-container">
              {/* REPLACE WITH: <img src="/assets/3d-render-3.jpg" alt="3D Render Explosion View" /> */}
              <ProjectPlaceholder label="3D Render 3 (Exploded)" aspectRatio="4/3" bgColor="#BDBDBD" />
            </div>
          </div>
        </div>

        {/* Project 2 Underneath: Large Product Placeholder Left/Main, Description Beside */}
        <div className="product-row product-row--two" ref={row2Ref}>
          <div className="large-render-col image-zoom-container">
            {/* REPLACE WITH: <img src="/assets/3d-render-hero.jpg" alt="3D Hero Render Product" /> */}
            <ProjectPlaceholder label="Large 3D Product Render" aspectRatio="16/9" bgColor="#AFAFAF" />
          </div>

          <div className="product-side-info">
            <span className="project-category-tag">KEYSHOT & BLENDER VISUALIZATION</span>
            <h3 className="project-subheading">AURA ERGONOMIC AUDIO HEADPHONES</h3>
            <p className="project-body">
              Exploration of acoustic architecture, acoustic foam dampening, and titanium hinge mechanics. Photorealistic materials tuned with sub-surface scattering and ambient studio lighting.
            </p>
            <div className="spec-badge-group">
              <span className="spec-badge">Photorealistic Lighting</span>
              <span className="spec-badge">Sub-Surface Material</span>
              <span className="spec-badge">4K Studio Renders</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product3D;
