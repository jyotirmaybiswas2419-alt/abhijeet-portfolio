import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

export const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const circleLeftRef = useRef(null);
  const circleRightRef = useRef(null);
  const subheadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title & Subhead GSAP Reveal
      tl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.2 }
      )
      .fromTo(
        titleRef.current.children,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
        "-=0.6"
      )
      .fromTo(
        [circleLeftRef.current, circleRightRef.current],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.9, duration: 1.5, stagger: 0.2 },
        "-=1.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Oversized Green Circle - Left */}
      <div 
        className="hero-circle hero-circle--left floating-circle-left" 
        ref={circleLeftRef}
        aria-hidden="true"
      />

      {/* Oversized Green Circle - Right */}
      <div 
        className="hero-circle hero-circle--right floating-circle-right" 
        ref={circleRightRef}
        aria-hidden="true"
      />

      <div className="hero-content">
        <p className="hero-subhead" ref={subheadRef}>
          ABHIJEET &bull; CREATIVE DIRECTOR & UI/UX DESIGNER
        </p>

        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-line">PORT 20</span>
          <span className="hero-line">FOLIO 26</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
