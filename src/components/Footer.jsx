import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade in & subtle translate up on scroll
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer" ref={footerRef} id="contact">
      <div className="portfolio-container footer-content" ref={contentRef}>
        <div className="footer-top">
          <span className="footer-tag">GET IN TOUCH</span>
          <h2 className="footer-cta-title">LET'S CREATE SOMETHING EXTRAORDINARY</h2>
          
          <a href="mailto:hello@abhijeet-design.com" className="contact-email-btn">
            HELLO@ABHIJEET-DESIGN.COM
          </a>
        </div>

        <div className="footer-middle-grid">
          <div className="footer-col">
            <h4 className="footer-col-head">LOCATION</h4>
            <p>New Delhi &bull; Remote Worldwide</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-head">SOCIALS</h4>
            <div className="social-links">
              <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-head">NAVIGATION</h4>
            <div className="footer-nav">
              <a href="#about">About</a>
              <a href="#uiux">UI/UX</a>
              <a href="#product3d">3D Product</a>
              <a href="#social">Social Media</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 ABHIJEET. ALL RIGHTS RESERVED. BEHANCE PRESENTATION STYLE PORTFOLIO.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            BACK TO TOP &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
