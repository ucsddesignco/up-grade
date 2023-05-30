import ComputerSVG from '../ComputerSVG/ComputerSVG';
import './styles.scss';
import DesignCo from '../../../src/assets/design-co.svg'
import { useEffect, useState } from 'react';

const Hero = ({hoveringNav}) => {

  const [responsiveWidth, setResponsiveWidth] = useState("max(calc(38rem - 6vw), 45vw)")


  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 701) {
        setResponsiveWidth("min(calc(28rem - 5vw), 70vw)")
      } else {
        setResponsiveWidth("max(calc(38rem - 6vw), 45vw)");
      }
    })

    if (document.body.clientWidth < 701) {
      setResponsiveWidth("min(calc(28rem - 5vw), 70vw)")
    }
  }, [])

  return (
    <div className="hero-container">
      <div className="center-text-container">
        <img className='dco-logo' src={DesignCo} alt="Design Co Logo" />
        {/* <svg  width={responsiveWidth} className="upgrade-text">
          <text textLength={responsiveWidth} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="stroke-behind">UP-GRADE</text>
        </svg> */}
        <h1 className="upgrade-text">UP-GRADE</h1>
      </div>
      <ComputerSVG hoveringNav={hoveringNav}/>

     
    </div>
  );
};

export default Hero;
