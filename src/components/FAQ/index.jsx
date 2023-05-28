import './styles.scss';

import React, { useState } from 'react';

import Shape from "../../assets/faq/shape.png";
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
                    <img src={Shape} className="desktop-squiggle" alt="background shape"/>
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