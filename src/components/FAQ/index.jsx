import './styles.scss';

import { useState } from 'react';
import Squiggle from "../../assets/faq/squiggle.svg"

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    const FAQQuestions = [
        {
            title: "Who is eligible?",
            answer: "Eligibility is offered to all UCSD students and recent graduates — of various backgrounds, experience levels, and majors! We encourage anyone interested to apply, to learn and offer their one-of-a-kind knowledge!",
        },
        {
            title: "What is the time commmitment?",
            answer: "UP-Grade requires a 12-15 hour commitment per week, for 10 weeks.",
        },
        {
            title: "How many people will be accepted?",
            answer: "UP-Grade will have 6 student teams, with 6 participants in each team — 36 participants total. For each topic, there will be 2 teams assigned.",
        },
        {
            title: "How will UP-Graders be selected?",
            answer: "We will be reviewing all the applications holistically and accepting students based on application responses, an interview process, past experience, and a desire to make an impact! (Interviews will take place a week after applications are closed).",
        },
        {
            title: "Who will my mentors be?",
            answer: "All UP-Grade participants will work closely with industry professionals, gaining valuable mentorship and insight. More information about mentors will be released in the coming week(s).",
        },
        {
            title: "Can I request teammates?",
            answer: "Yes! We cannot guarantee you will be placed with everyone you request, but we will take this into consideration when organizing teams.",
        },
        {
            title: "What roles are available?",
            answer: "Each team in Up-Grade may be comprised of a Web Builder/Developer, UX Designer, UX Researcher, Visual Designer, and Marketing + Content Strategist. Roles are flexible depending on the number of people working on the project, the deliverables, and the level of difficulty.",
        },
        {
            title: "When is the application due?",
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
                        <path d="M540.382 156.542C555.963 78.625 627.997 -55.7652 791.483 30.0112C995.842 137.232 1033.07 338.715 880.175 366.183C757.856 388.157 687.737 354.957 667.967 335.61C730.152 384.015 834.231 493.257 753.071 542.98C671.91 592.702 545.018 482.339 491.717 420.943C515.137 478.397 536.289 595.153 433.534 602.541C330.78 609.929 258.726 474.039 235.543 405.171C220.93 464.76 170.092 568.814 83.6422 508.308C-24.4196 432.677 -36.8781 104.845 112.509 130.563C232.018 151.138 250.359 206.835 244.591 232.112C241.1 139.947 257.818 -33.9604 352.619 7.73233C447.421 49.4251 517.295 124.311 540.382 156.542Z" stroke="#19B000" strokeWidth="2.75789"/>
                    </svg>
                    <img src={Squiggle} className="mobile-squiggle" alt="background shape"/>
                </div>
                <div className='right'>
                    <div className='shape-one-cont'>
                        <svg className="shape-one"  viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.4366 43.1208L53.8794 40.4915C47.8322 36.9813 43.3904 34.3622 40.2705 32.0068C37.1508 29.6515 35.578 27.7207 34.9816 25.6749C34.3853 23.6292 34.6741 21.1561 36.0399 17.494C37.4057 13.8317 39.7452 9.23672 42.9606 3.02765L40.3313 1.58492C36.8209 7.63328 34.2018 12.0756 31.8463 15.1957C29.4911 18.3155 27.5603 19.8881 25.5147 20.4842C23.4691 21.0804 20.9961 20.7912 17.3339 19.425C13.6715 18.0588 9.0766 15.7191 2.86749 12.5037L1.42495 15.1331C7.47346 18.6423 11.9159 21.2607 15.036 23.6156C18.1558 25.9703 19.7284 27.9007 20.3245 29.9463C20.9206 31.9919 20.6314 34.4652 19.2652 38.1279C17.8989 41.7909 15.559 46.3866 12.3435 52.5969L14.9728 54.0396C18.483 47.9923 21.1021 43.5505 23.4575 40.4307C25.8128 37.311 27.7435 35.7382 29.7893 35.1418C31.835 34.5454 34.3081 34.8343 37.9702 36.2C41.6326 37.5659 46.2275 39.9053 52.4366 43.1208Z" fill="#F2F4F1" stroke="#1EC6DE" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className='shape-two-cont'>
                        <svg className="shape-two" viewBox="0 0 139 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_534_7727" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.6856 14.5882C9.08807 17.1784 -0.645813 31.1119 1.94441 45.7095L8.40847 82.1386C10.9987 96.7362 24.9322 106.47 39.5297 103.88L103.235 92.5759C104.334 92.3809 105.455 92.7733 106.192 93.6111L111.867 100.059C115.118 103.752 121.148 102.542 122.721 97.8797L126.23 87.4816C126.232 87.4741 126.235 87.4666 126.237 87.4592C126.537 86.5607 127.005 85.6985 127.753 85.1186C135.391 79.2047 139.569 69.3563 137.764 59.1855L131.3 22.7563C128.71 8.15876 114.776 -1.57512 100.179 1.0151L23.6856 14.5882Z"/>
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.6856 14.5882C9.08807 17.1784 -0.645813 31.1119 1.94441 45.7095L8.40847 82.1386C10.9987 96.7362 24.9322 106.47 39.5297 103.88L103.235 92.5759C104.334 92.3809 105.455 92.7733 106.192 93.6111L111.867 100.059C115.118 103.752 121.148 102.542 122.721 97.8797L126.23 87.4816C126.232 87.4741 126.235 87.4666 126.237 87.4592C126.537 86.5607 127.005 85.6985 127.753 85.1186C135.391 79.2047 139.569 69.3563 137.764 59.1855L131.3 22.7563C128.71 8.15876 114.776 -1.57512 100.179 1.0151L23.6856 14.5882Z" fill="#19B000"/>
                            <path d="M1.94441 45.7095L-1.00945 46.2336L1.94441 45.7095ZM23.6856 14.5882L24.2098 17.5421L23.6856 14.5882ZM8.40847 82.1386L11.3623 81.6145L8.40847 82.1386ZM39.5297 103.88L40.0539 106.834L39.5297 103.88ZM111.867 100.059L114.119 98.077L111.867 100.059ZM122.721 97.8797L125.564 98.8389L125.564 98.8389L122.721 97.8797ZM126.23 87.4816L129.072 88.4407L129.072 88.4407L126.23 87.4816ZM137.764 59.1855L134.81 59.7097L137.764 59.1855ZM131.3 22.7563L128.346 23.2805L131.3 22.7563ZM100.179 1.0151L99.6548 -1.93876L100.179 1.0151ZM126.237 87.4592L123.392 86.5099L126.237 87.4592ZM127.753 85.1186L129.59 87.4907L127.753 85.1186ZM103.235 92.5759L102.711 89.6221L103.235 92.5759ZM106.192 93.6111L108.444 91.629L106.192 93.6111ZM4.89827 45.1853C2.59752 32.2191 11.2436 19.8428 24.2098 17.5421L23.1615 11.6344C6.93257 14.5141 -3.88915 30.0047 -1.00945 46.2336L4.89827 45.1853ZM11.3623 81.6145L4.89827 45.1853L-1.00945 46.2336L5.45462 82.6628L11.3623 81.6145ZM39.0056 100.926C26.0394 103.227 13.6631 94.5807 11.3623 81.6145L5.45462 82.6628C8.33431 98.8917 23.8249 109.713 40.0539 106.834L39.0056 100.926ZM102.711 89.6221L39.0056 100.926L40.0539 106.834L103.759 95.5298L102.711 89.6221ZM114.119 98.077L108.444 91.629L103.94 95.5932L109.615 102.041L114.119 98.077ZM119.879 96.9206C119.044 99.3943 115.844 100.037 114.119 98.077L109.615 102.041C114.392 107.468 123.252 105.689 125.564 98.8389L119.879 96.9206ZM123.387 86.5224L119.879 96.9206L125.564 98.8389L129.072 88.4407L123.387 86.5224ZM123.392 86.5099C123.39 86.514 123.389 86.5182 123.387 86.5224L129.072 88.4407C129.076 88.43 129.08 88.4192 129.083 88.4085L123.392 86.5099ZM134.81 59.7097C136.413 68.7397 132.707 77.4884 125.917 82.7466L129.59 87.4907C138.074 80.9211 142.725 69.973 140.718 58.6614L134.81 59.7097ZM128.346 23.2805L134.81 59.7097L140.718 58.6614L134.254 22.2322L128.346 23.2805ZM100.703 3.96896C113.669 1.66821 126.046 10.3143 128.346 23.2805L134.254 22.2322C131.374 6.00325 115.884 -4.81845 99.6548 -1.93876L100.703 3.96896ZM24.2098 17.5421L100.703 3.96896L99.6548 -1.93876L23.1615 11.6344L24.2098 17.5421ZM129.083 88.4085C129.286 87.8009 129.496 87.5634 129.59 87.4907L125.917 82.7466C124.513 83.8336 123.788 85.3205 123.392 86.5099L129.083 88.4085ZM103.759 95.5298C103.826 95.5178 103.895 95.5419 103.94 95.5932L108.444 91.629C107.014 90.0048 104.841 89.244 102.711 89.6221L103.759 95.5298Z" fill="#F2F4F1" mask="url(#path-1-inside-1_534_7727)"/>
                            <rect x="29.0303" y="49.1035" width="17.7826" height="17.7826" rx="5" transform="rotate(-8.57413 29.0303 49.1035)" fill="#F2F4F1"/>
                            <rect x="59.7334" y="43.2642" width="17.7826" height="17.7826" rx="5" transform="rotate(-8.57413 59.7334 43.2642)" fill="#F2F4F1"/>
                            <rect x="90.4443" y="36.5781" width="17.7826" height="17.7826" rx="5" transform="rotate(-8.57413 90.4443 36.5781)" fill="#F2F4F1"/>
                        </svg>

                    </div>
                    <svg className='shape-three'  viewBox="0 0 447 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="154.379" y="19.3806" width="298.802" height="23.9545" transform="rotate(25.2724 154.379 19.3806)" stroke="#1EC6DE" strokeWidth="3"/>
                        <path d="M402.504 144.428L406.925 155.829" stroke="#1EC6DE" strokeWidth="3"/>
                        <path d="M410.656 148.276L398.91 152.044" stroke="#1EC6DE" strokeWidth="3"/>
                        <rect x="375.794" y="131.842" width="7.78598" height="7.78598" transform="rotate(25.2724 375.794 131.842)" stroke="#1EC6DE" strokeWidth="3"/>
                        <path d="M344.426 121.747L355.582 127.014" stroke="#1EC6DE" strokeWidth="3"/>
                        <rect x="144.176" y="2.34887" width="331.796" height="331.796" transform="rotate(25.2724 144.176 2.34887)" stroke="#1EC6DE" strokeWidth="3"/>
                        <path d="M25.2031 292.927L135.75 58.77L138.8 52.3101L409.052 179.898L406.003 186.358L295.456 420.515L25.2031 292.927Z" stroke="#1EC6DE" strokeWidth="3"/>
                    </svg>

                    <div className='shape-four-cont'>
                        <svg className="shape-four" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.4366 43.1208L53.8794 40.4915C47.8322 36.9813 43.3904 34.3622 40.2705 32.0068C37.1508 29.6515 35.578 27.7207 34.9816 25.6749C34.3853 23.6292 34.6741 21.1561 36.0399 17.494C37.4057 13.8317 39.7452 9.23672 42.9606 3.02765L40.3313 1.58492C36.8209 7.63328 34.2018 12.0756 31.8463 15.1957C29.4911 18.3155 27.5603 19.8881 25.5147 20.4842C23.4691 21.0804 20.9961 20.7912 17.3339 19.425C13.6715 18.0588 9.0766 15.7191 2.86749 12.5037L1.42495 15.1331C7.47346 18.6423 11.9159 21.2607 15.036 23.6156C18.1558 25.9703 19.7284 27.9007 20.3245 29.9463C20.9206 31.9919 20.6314 34.4652 19.2652 38.1279C17.8989 41.7909 15.559 46.3866 12.3435 52.5969L14.9728 54.0396C18.483 47.9923 21.1021 43.5505 23.4575 40.4307C25.8128 37.311 27.7435 35.7382 29.7893 35.1418C31.835 34.5454 34.3081 34.8343 37.9702 36.2C41.6326 37.5659 46.2275 39.9053 52.4366 43.1208Z" fill="#F2F4F1" stroke="#1EC6DE" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                    
            </div>
            <div className='section-two-accordion'>
                <div className="accordion">
                    {FAQQuestions.map((item, index) => (
                        <div className='accordion-item' onClick={()=> handleClick(index)}>
                            <div className='accordion-title' >
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