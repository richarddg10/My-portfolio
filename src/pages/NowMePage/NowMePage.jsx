import React from "react";
import { useNavigate } from "react-router-dom";
import { LogosHeader, SkillContainer, WaveFooter } from "../../components";
import './NowMePage.css'
import richiImg from '../../assets/richi-img.png'
import downArrowIcon from '../../assets/down-arrow-icon.svg'
import frontEndIcon from '../../assets/front-end-icon.svg'
import uiDesignIcon from '../../assets//ui-design-icon.svg'
import interactiveMediaDesignIcon from '../../assets/interactive-media-design-icon.svg'
import htmlIcon from '../../assets/html-icon.svg'
import cssIcon from '../../assets/html-icon.svg'
import jsIcon from '../../assets/js-icon.svg'
import reactIcon from '../../assets/react-icon.svg'
import tsIcon from '../../assets/ts-icon.svg'
import pythonIcon from '../../assets/python-icon.svg'
import figmaIcon from '../../assets/figma-icon.svg'
import ilustratorIcon from '../../assets/ilustrator-icon.svg'
import photoshopIcon from '../../assets/photoshop-icon.svg'
import afterEffectsIcon from '../../assets/after-effects-icon.svg'
import indesignIcon from '../../assets/indesign-icon.svg'
import mazeIcon from '../../assets/maze-icon.svg'
import notionIcon from '../../assets/notion-icon.svg'
import miroIcon from '../../assets/miro-icon.svg'

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
                                onClick={() => navigate('/My-portfolio/contact-me')}
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
                    <img className="down-arrow-icon w-[5vw] md:w-[2vw] mb-[10%] md:mb-0 order-1 md:order-2" src={downArrowIcon} alt="down-arrow-icon" />
                </div>
                <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
                    <img className="richi-img w-[90%] sm:w-[70%] drop-shadow-richi-img" src={richiImg} alt="richi-img" />
                </div>
            </section>
            <div className="line-decoration w-[100%] h-[3px] my-[10%] bg-secondary-gray rounded-[100px]"></div>
            <section className="skills-section flex flex-col items-center pb-[9%] md:pb-[3%]">
                <h2 className="skills-title text-[26px] sm:text-[30px] text-white font-black -mt-[2.8%] mb-[4.2%]">My skills</h2>
                <div className="grid grid-fils-[auto_auto_auto] md:grid-cols-[auto_auto_auto] gap-[7vw] md:gap-[5vw]">
                    <SkillContainer
                        titleIcon={frontEndIcon}
                        skillTitle='Front-end Development'
                        skill1='Web development'
                        skill2='Apps development'
                        skill3='Interface development'
                        icon1={htmlIcon}
                        icon2={cssIcon}
                        icon3={jsIcon}
                        icon4={reactIcon}
                        icon5={tsIcon}
                        icon6={pythonIcon}
                    />
                    <SkillContainer
                        titleIcon={uiDesignIcon}
                        skillTitle='UI Design'
                        skill1='Interface design'
                        skill2='Web design'
                        skill3='Apps design'
                        icon1={figmaIcon}
                        icon2={ilustratorIcon}
                        icon3={photoshopIcon}
                        icon4={afterEffectsIcon}
                        icon5={indesignIcon}
                        icon6='none'
                    />
                    <SkillContainer
                        titleIcon={interactiveMediaDesignIcon}
                        skillTitle='Interactive Media Design'
                        skill1='UX &amp; UI Design'
                        skill2='Experience design'
                        skill3='User research'
                        icon1={mazeIcon}
                        icon2={notionIcon}
                        icon3={miroIcon}
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