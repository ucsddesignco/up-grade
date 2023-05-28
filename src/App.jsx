import './App.scss';
import Hero from './components/Hero';
import WhatIsUpgrade from './components/WhatIsUpgrade';
import Overview from './components/Overview';
import CentralThemes from './components/CentralThemes';
import WhyApply from './components/WhyApply';
import FAQ from './components/FAQ';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { initSmoothScroll } from './util/smoothScroll';

function App() {
  const heroRef = useRef();
  const whatIsUpgradeRef = useRef();
  const overviewRef = useRef();
  const themesRef = useRef();
  const whyApplyRef = useRef();
  const FAQRef = useRef();

  const [hoveringNav, setHoveringNav] = useState(false);

  const refs = {
    hero: heroRef,
    whatIsUpgrade: whatIsUpgradeRef,
    overview: overviewRef,
    themes: themesRef,
    whyApply: whyApplyRef,
    FAQ: FAQRef,
  };

  useEffect(() => {
    initSmoothScroll();
  })
  return (
    <>
      <Navbar setHoveringNav={setHoveringNav} refs={refs} />
      <div>
        <Hero hoveringNav={hoveringNav}/>
      </div>
      <div style={{ maxWidth: "100%", overflowX: "clip" }}>
        <div ref={whatIsUpgradeRef}>
          <WhatIsUpgrade />
        </div>
        <div ref={overviewRef}>
          <Overview />
        </div>
        <div ref={themesRef}>
          <CentralThemes />
        </div>
        <div>
          <WhyApply />
        </div>
      </div>
      <div ref={FAQRef}>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
