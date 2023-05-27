import './App.scss';
import Hero from './components/Hero';
import WhatIsUpgrade from './components/WhatIsUpgrade';
import Overview from './components/Overview';
import CentralThemes from './components/CentralThemes';
import WhyApply from './components/WhyApply';
import FAQ from './components/FAQ';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';

function App() {
  const heroRef = useRef();
  const whatIsUpgradeRef = useRef();
  const overviewRef = useRef();
  const themesRef = useRef();
  const whyApplyRef = useRef();
  const FAQRef = useRef();

  //https://stackoverflow.com/questions/47011055/smooth-vertical-scrolling-on-mouse-wheel-in-vanilla-javascript
  function init(){
    new SmoothScroll(document,150,19)
  }
  
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement 
                || document.documentElement 
                || document.body.parentNode 
                || document.body) // cross browser support for document scrolling
        
    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body 
                && document.documentElement 
                ? document.documentElement 
                : target // safari is the new IE
    
    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
  
    function scrolled(e) {
      e.preventDefault(); // disable default scrolling
  
      var delta = normalizeWheelDelta(e)
  
      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
  
      if (!moving) update()
    }
  
    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }
  
    function update() {
      moving = true
      
      var delta = (pos - target.scrollTop) / smooth
      
      target.scrollTop += delta
      
      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }
  
    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  const refs = {
    hero: heroRef,
    whatIsUpgrade: whatIsUpgradeRef,
    overview: overviewRef,
    themes: themesRef,
    whyApply: whyApplyRef,
    FAQ: FAQRef,
  };

  useEffect(() => {
    init();
  })
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
