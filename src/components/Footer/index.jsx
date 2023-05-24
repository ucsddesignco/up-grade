import './styles.scss'

import Heart from '../../assets/footer/heart.svg';
import DesignCo from '../../assets/footer/DesignCo.svg';


const Footer = () => {
    return (
        <div className='footer-container'>
          <div className="left">
            <p>Made with</p>
            <img src={Heart} className='heart'/>
            <img src={DesignCo} className='design-co'/>
          </div>
          <div className='right'>
            <a href="mailto:hello@ucsddesign.cohello@ucsddesign.co">hello@ucsddesign.co</a>
          </div>
        </div>
    )
}

export default Footer;