import React from 'react';
import { useLenisGSAP } from './hooks/useLenisGSAP';

// Presentation Components
import Hero from './components/Hero';
import MarqueeDivider from './components/MarqueeDivider';
import About from './components/About';
import SectionBanner from './components/SectionBanner';
import UIUX from './components/UIUX';
import Product3D from './components/Product3D';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

// Stylesheet
import './styles/global.scss';

export function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenisGSAP();

  return (
    <main className="portfolio-main-wrapper">
      {/* 1. Fullscreen Hero Section */}
      <Hero />

      {/* 2. Marquee Divider Ribbon */}
      <MarqueeDivider items={["PORTFOLIO", "ABHIJEET RAKSHIT", "2026", "ABHIJEET RAKSHIT", "PORTFOLIO", "2026"]} />

      {/* 3. About Me Section */}
      <About />

      {/* 4. Marquee Divider */}
      <MarqueeDivider items={["UI/UX DESIGN", "ABHIJEET RAKSHIT", "2026", "CASE STUDIES", "ABHIJEET RAKSHIT", "2026"]} />

      {/* 5. UI/UX Section Banner & Showcase */}
      <SectionBanner
        titleLine1="UI - UX"
        titleLine2="DESIGN"
        bgImage="/assets/ui ux folio.png"
        showUnderline={true}
        id="uiux-banner"
      />
      <UIUX />

      {/* 6. Marquee Divider */}
      <MarqueeDivider items={["3D PRODUCT", "ABHIJEET RAKSHIT", "2026", "OCTANE RENDERS", "ABHIJEET RAKSHIT", "2026"]} />

      {/* 7. 3D Product Section Banner & Showcase */}
      <SectionBanner
        titleLine1="3D"
        titleLine2="PRODUCT"
        bgImage="/assets/ui ux folio.png"
        showUnderline={true}
        id="product3d-banner"
      />
      <Product3D />

      {/* 8. Marquee Divider */}
      <MarqueeDivider items={["SOCIAL MEDIA", "ABHIJEET RAKSHIT", "2026", "POSTER ART", "ABHIJEET RAKSHIT", "2026"]} />

      {/* 9. Social Media Section Banner & Showcase */}
      <SectionBanner
        titleLine1="SOCIAL"
        titleLine2="MEDIA"
        bgImage="/assets/ui ux folio.png"
        showUnderline={true}
        id="social-banner"
      />
      <SocialMedia />

      {/* 10. Final Marquee Divider */}
      <MarqueeDivider items={["LET'S WORK TOGETHER", "ABHIJEET RAKSHIT", "2026", "GET IN TOUCH", "2026"]} />

      {/* 11. Dark Navy Footer */}
      <Footer />
    </main>
  );
}

export default App;
