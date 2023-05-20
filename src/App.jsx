import './App.scss';
import Hero from './components/Hero';
import WhatIsUpgrade from './components/WhatIsUpgrade';
import Overview from './components/Overview';
import CentralThemes from './components/CentralThemes';
import WhyApply from './components/WhyApply';
import FAQ from './components/FAQ';
import { useRef } from 'react';
import Navbar from './components/Navbar';

function App() {
  const heroRef = useRef();
  const whatIsUpgradeRef = useRef();
  const overviewRef = useRef();
  const themesRef = useRef();
  const whyApplyRef = useRef();
  const FAQRef = useRef();

  const refs = {
    hero: heroRef,
    whatIsUpgrade: whatIsUpgradeRef,
    overview: overviewRef,
    themes: themesRef,
    whyApply: whyApplyRef,
    FAQ: FAQRef,
  };
  return (
    <>
      <Navbar refs={refs} />
      <div>
        <Hero />
      </div>
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
      <div ref={FAQRef}>
        <FAQ />
      </div>
    </>
  );
}

export default App;
