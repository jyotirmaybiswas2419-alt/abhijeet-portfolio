import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SectionBanner.scss';

gsap.registerPlugin(ScrollTrigger);

export const SectionBanner = ({
  titleLine1 = "UI - UX",
  titleLine2 = "DESIGN",
  title,
  bgImage = "/assets/ui ux folio.png",
  showUnderline = true,
  id
}) => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale background slightly & fade heading upward on viewport enter
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0.9, scale: 0.99 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 80%',
          },
        }
      );

      if (underlineRef.current) {
        gsap.fromTo(
          underlineRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.0,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const line1 = titleLine1 || title || "SECTION";
  const line2 = titleLine2 || "";

  return (
    <div
      className="section-banner"
      ref={bannerRef}
      id={id}
      style={{
        backgroundImage: bgImage ? `url("${bgImage}")` : undefined,
      }}
    >
      <div className="banner-texture-overlay" />

      <h2 className="banner-title" ref={textRef}>
        <span className="banner-title-line">{line1}</span>
        {line2 && <span className="banner-title-line">{line2}</span>}
      </h2>

      {showUnderline && (
        <div className="banner-bottom-underline" ref={underlineRef} />
      )}
    </div>
  );
};

export default SectionBanner;
