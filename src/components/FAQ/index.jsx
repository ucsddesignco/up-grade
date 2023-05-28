import './styles.scss';

import { useState } from 'react';

import Message from "../../assets/faq/message.png";
import Star from "../../assets/faq/star.png";
import Window from "../../assets/faq/window.png";
import Squiggle from "../../assets/faq/squiggle.svg"





const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    const FAQQuestions = [
        {
            title: "WHO IS ELIGIBLE?",
            answer: "Registration is open to UCSD students and recent graduates of all levels and backgrounds. We encourage everyone to apply and share their own unique perspectives, knowledge, and skills!",
        },
        {
            title: "WHAT IS THE TIME COMMMITMENT?",
            answer: "Up-Grade will require a 12-15 hour commitment per week, for 10 weeks.",
        },
        {
            title: "HOW MANY PEOPLE WILL BE ACCEPTED?",
            answer: "Up-Grade will have around 6 student teams. Teams will have a minimum of 4 and a maximum of 6 members, so there will be a total of 24-36 participants",
        },
        {
            title: "HOW WILL UPGRADERS BE SELECTED?",
            answer: "We will be reviewing all the applications holistically and accepting students based on application responses, an interview process, past experience, and a desire to make an impact! (Interviews will take place a week after applications are closed).",
        },
        {
            title: "WHO WILL MY MENTORS BE?",
            answer: "More information about mentors will be released in the coming week(s). There will be 6-8 design mentors and 6-8 marketing mentors, with 2-3 mentors assigned to each team.",
        },
        {
            title: "CAN I REQUEST TEAMMATES?",
            answer: "Yes! We cannot guarantee you will be placed with everyone you request, but we will take this into consideration when organizing teams.",
        },
        {
            title: "WHAT ROLES ARE AVAILABLE?",
            answer: "Each team in Up-Grade may be comprised of a Web Builder/Developer, UX Designer, UX Researcher, Visual Designer, and Marketing + Content Strategist. Roles are flexible depending on the number of people working on the project, the deliverables, and the level of difficulty.",
        },
        {
            title: "WHEN IS THE APPLICATION DUE?",
            answer: "Friday, June 9 at 11:59PM PT. Decisions will be sent out around a week after the application deadline.",
        },
    ];

    

    return (
        <div className='faq-container'>
            <div className="section-one">
                <div className='left'>
                    <h1>FAQ</h1>

<svg className="desktop-squiggle" width="976" height="605" viewBox="0 0 976 605" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M791.483 30.0112C627.997 -55.7652 555.963 78.625 540.382 156.542C517.295 124.311 447.421 49.4251 352.619 7.73233C264.307 -31.1064 243.755 117.148 244.177 212.131C237.713 184.409 206.2 146.693 112.509 130.563C-36.8781 104.845 -24.4196 432.677 83.6422 508.308C170.092 568.814 220.93 464.76 235.543 405.171C258.726 474.039 330.78 609.929 433.534 602.541C536.288 595.153 515.137 478.397 491.717 420.943C545.018 482.339 671.91 592.702 753.071 542.98C830.293 495.67 739.816 394.476 677.289 343.072C705.359 362.145 772.568 385.514 880.175 366.183C1033.07 338.715 995.842 137.232 791.483 30.0112Z" fill="#F2F4F1"/>
<path d="M540.382 156.542C555.963 78.625 627.997 -55.7652 791.483 30.0112C995.842 137.232 1033.07 338.715 880.175 366.183C757.856 388.157 687.737 354.957 667.967 335.61C730.152 384.015 834.231 493.257 753.071 542.98C671.91 592.702 545.018 482.339 491.717 420.943C515.137 478.397 536.289 595.153 433.534 602.541C330.78 609.929 258.726 474.039 235.543 405.171C220.93 464.76 170.092 568.814 83.6422 508.308C-24.4196 432.677 -36.8781 104.845 112.509 130.563C232.018 151.138 250.359 206.835 244.591 232.112C241.1 139.947 257.818 -33.9604 352.619 7.73233C447.421 49.4251 517.295 124.311 540.382 156.542Z" stroke="#19B000" stroke-width="2.75789"/>
</svg>


                    <img src={Squiggle} className="mobile-squiggle" alt="background shape"/>
                </div>
                <div className='right'>
                    <div className='shape-one-cont'>
                        <img src={Star} className="shape-one" alt="background star"/>
                    </div>
                    <div className='shape-two-cont'>
                        <img src={Message} className="shape-two" alt="background message"/>
                    </div>
                    <img src={Window} className="shape-three" alt="background window"/>
                    <div className='shape-four-cont'>
                        <img src={Star} className="shape-four" alt="background star"/>
                    </div>
                </div>
                    
            </div>
            <div className='section-two-accordion'>
                <div className="accordion">
                    {FAQQuestions.map((item, index) => (
                        <div className='accordion-item'>
                            <div className='accordion-title' onClick={()=> handleClick(index)}>
                                <div className='title'>{item.title}</div>
                                <div className="symbol">{/*<img src={Plus}/>*/}
                                    <div className={`symbolvert ${index === activeIndex ? 'open' : ' '}`}></div>
                                    <div className={`symbolhori ${index === activeIndex ? 'open' : ' '}`}></div>
                                </div>
                               {/*<div className="symbol">{<img src={Plus}/>}</div>*/}
                            </div>
                            <div
                                className={`accordion-content ${index === activeIndex ? 'fade-in' : ''}`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ;