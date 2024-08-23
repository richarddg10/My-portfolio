import React from "react";
import { useNavigate } from "react-router-dom";
import { LogosHeader, SkillContainer, WaveFooter } from "../../components";
import './NowMePage.css'

export function NowMePage() {

    const navigate = useNavigate()

    return (
        <main className="now-me-page-bg flex flex-col">
            <LogosHeader />
            <section className="my-info-section grid grid-fils-[auto_auto] md:grid-cols-[auto_auto] mt-[16%] md:mt-[4%] gap-[11vw] md:gap-0">
                <div className="flex flex-col justify-center items-center order-2 md:order-1">
                    <div className="flex flex-col items-start order-2 md:order-1">
                        <p className="text-white text-[26px] md:text-[28.85px] w-auto mt-[0px] mb-[10%] leading-[1.3]">
                            Hi!, my name is
                            <br/>
                            <span className="font-bold text-primary-green">
                                RICHARD DELGADO GARZON
                            </span>
                        </p>
                        <div className="flex flex-col text-white text-[26px] md:text-[28.85px] w-auto mt-[0px] mb-[10%] gap-[0.4vw] md:gap-[0.1vw] leading-[1.3]">
                            <p className="flex flex-row gap-[1.2vw] md:gap-[0.4vw]">I’m a <span className="job-1 px-[0.8vw] md:px-[0.3vw] text-primary-green bg-third-gray rounded-[6px]">Front-end Developer</span></p>
                            <p className="flex flex-row gap-[1.2vw] md:gap-[0.4vw]">&amp; <span className="job-2 px-[0.8vw] md:px-[0.3vw] text-primary-green bg-third-gray rounded-[6px]">UX/UI Designer</span></p>
                        </div>
                        <p className="text-[19.3px] md:text-[21.5px] w-auto mb-[0.02%] text-fourth-gray">Professional Interactive Media Designer</p>
                        <p className="text-[19.3px] md:text-[21.5px] w-auto text-primary-green">Web/App Designer &amp; Interface Designer</p>
                        <div className="inline-flex flex-row gap-[25.2px] w-auto m-[14%_0_0_0] md:m-[14%_0_14%_0]">
                            <button
                                className="contact-me-btn-2 relative px-[30.6px] md:px-[36.5px] py-[2.5%] bg-primary-green text-[1.4rem] md:text-[1.5rem] text-black border-[1.5px] border-primary-green rounded-[100px]"
                                onClick={() => navigate('/contact-me')}
                            >
                                Contact me
                            </button>
                            <button 
                                className="my-cv-btn relative px-[30.6px] md:px-[36.5px] py-[2.5%] bg-black text-[1.4rem] md:text-[1.5rem] text-primary-green border-[1.5px] border-primary-green rounded-[100px]"
                                onClick={() => navigate('')}
                            >
                                My CV
                            </button>
                        </div>
                    </div>
                    <img className="down-arrow-icon w-[5vw] md:w-[2vw] mb-[10%] md:mb-0 order-1 md:order-2" src="/down-arrow-icon.svg" alt="down-arrow-icon" />
                </div>
                <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
                    <img className="richi-img w-[90%] sm:w-[70%] drop-shadow-richi-img" src="/richi-img.png" alt="richi-img" />
                </div>
            </section>
            <div className="line-decoration w-[100%] h-[3px] my-[10%] bg-secondary-gray rounded-[100px]"></div>
            <section className="skills-section flex flex-col items-center pb-[9%] md:pb-[3%]">
                <h2 className="skills-title text-[26px] sm:text-[30px] text-white font-black -mt-[2.8%] mb-[4.2%]">My skills</h2>
                <div className="grid grid-fils-[auto_auto_auto] md:grid-cols-[auto_auto_auto] gap-[7vw] md:gap-[5vw]">
                    <SkillContainer
                        titleIcon='/front-end-icon.svg'
                        skillTitle='Front-end Development'
                        skill1='Web development'
                        skill2='Apps development'
                        skill3='Interface development'
                        icon1='/html-icon.svg'
                        icon2='/css-icon.svg'
                        icon3='/js-icon.svg'
                        icon4='/react-icon.svg'
                        icon5='/ts-icon.svg'
                        icon6='/python-icon.svg'
                    />
                    <SkillContainer
                        titleIcon='/ui-design-icon.svg'
                        skillTitle='UI Design'
                        skill1='Interface design'
                        skill2='Web design'
                        skill3='Apps design'
                        icon1='/figma-icon.svg'
                        icon2='/ilustrator-icon.svg'
                        icon3='/photoshop-icon.svg'
                        icon4='/after-effects-icon.svg'
                        icon5='/indesign-icon.svg'
                        icon6='none'
                    />
                    <SkillContainer
                        titleIcon='/interactive-media-design-icon.svg'
                        skillTitle='Interactive Media Design'
                        skill1='UX &amp; UI Design'
                        skill2='Experience design'
                        skill3='User research'
                        icon1='/maze-icon.svg'
                        icon2='/notion-icon.svg'
                        icon3='/miro-icon.svg'
                        icon4='none'
                        icon5='none'
                        icon6='none'
                    />
                </div>
            </section>
            <div className="-mx-[7%] sm:-mx-[4.6%] -my-[8%] sm:-my-[2.4%]">
                <WaveFooter />
            </div>
        </main>
    )
}