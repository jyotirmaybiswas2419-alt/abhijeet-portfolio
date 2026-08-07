import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Entrance
      gsap.fromTo(
        leftColRef.current,
        { x: -120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Right Column Entrance
      gsap.fromTo(
        rightColRef.current.children,
        { x: 120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.12,
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
    <section className="about-section" ref={sectionRef} id="about">
      <div className="portfolio-container about-grid">
        
        {/* Left Column: Layered Portrait Graphic */}
        <div className="about-left" ref={leftColRef}>
          <div className="portrait-composite">
            <img 
              src="/assets/portrait-background.png" 
              alt="Green Abstract Background" 
              className="portrait-bg-shape"
            />
            <img 
              src="/assets/portrait.png" 
              alt="Abhijeet Portrait" 
              className="portrait-cutout"
            />
          </div>
        </div>

        {/* Right Column: Content from Reference */}
        <div className="about-right" ref={rightColRef}>
          <h2 className="about-title">About me</h2>

          <div className="about-description">
            <p>
              I am a designer who blends UI/UX thinking, modern web aesthetics, and 3D visual storytelling to create digital experiences that feel alive. My goal is not just to make websites look good, but to make them communicate, guide, and connect with users naturally.
            </p>
            <p>
              From wireframes to polished interfaces, I focus on visual balance, strong user flow, and immersive elements that give each project its own identity. I enjoy transforming simple ideas into premium, interactive, and memorable designs.
            </p>
            <p>
              For me, design is where creativity meets usability — and that balance is what drives every project I create.
            </p>
          </div>

          {/* Education & Certifications Two-Column Block */}
          <div className="about-columns-row">
            
            {/* Column 1: Education */}
            <div className="info-column">
              <h3 className="column-heading">Education</h3>

              <div className="timeline-item">
                <span className="item-date">2012-2024</span>
                <span className="item-title">High School</span>
                <span className="item-sub">Bengali Senior Secondary School - Delhi</span>
              </div>

              <div className="timeline-item">
                <span className="item-date">2024-Present</span>
                <span className="item-title">Ui &amp; UX Designer</span>
                <span className="item-sub">Maya academy of advanced creativity</span>
              </div>

              <div className="timeline-item">
                <span className="item-date">2025</span>
                <span className="item-title">Certificate in Generative AI (3 Months)</span>
              </div>
            </div>

            {/* Column 2: Certifications */}
            <div className="info-column">
              <h3 className="column-heading">Certifications</h3>

              <div className="timeline-item">
                <span className="item-date">01/2024</span>
                <span className="item-title">Hoonar (maac competition)</span>
                <span className="item-sub">matte painting</span>
              </div>

              <div className="timeline-item">
                <span className="item-date">06/2025</span>
                <span className="item-title">Star of the Quarter for 3d game asset</span>
              </div>

              <div className="timeline-item">
                <span className="item-date">08/2025</span>
                <span className="item-title">24Fps- single category</span>
              </div>

              <div className="timeline-item">
                <span className="item-date">04/2026</span>
                <span className="item-title">
                  100 hours competition (as a ui designer) <span className="winner-tag">WINNER</span>
                </span>
              </div>
            </div>

          </div>

          {/* Software Section */}
          <div className="software-section">
            <h3 className="column-heading">Software</h3>
            <div className="software-icons-row">
              <div className="software-icon-wrapper" title="Figma">
                <img src="/assets/Figma-icon.png" alt="Figma" />
              </div>
              <div className="software-icon-wrapper" title="Adobe Photoshop">
                <img src="/assets/Adobe photoshop-icon.png" alt="Photoshop" />
              </div>
              <div className="software-icon-wrapper" title="Adobe Illustrator">
                <img src="/assets/Adobe Illustrator-icon.png" alt="Illustrator" />
              </div>
              <div className="software-icon-wrapper" title="Blender">
                <img src="/assets/blender-icon.png" alt="Blender" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Dark Navy Horizontal Divider Line as requested */}
      <div className="about-bottom-underline" />
    </section>
  );
};

export default About;
