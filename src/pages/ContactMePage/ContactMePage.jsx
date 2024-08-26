import React from "react";
import { WaveFooter } from "../../components";
import './ContactMePage.css'
import emailLogo from '../../assets/email-icon.svg'
import linkedinLogo from '../../assets/linkedin-icon.svg'
import behanceLogo from '../../assets/behance-icon.svg'
import githubLogo from '../../assets/github-icon.svg'
import spanishCvLogo from '../../assets/spanish-cv-icon.svg'
import englishCvLogo from '../../assets/english-cv-icon.svg'
import richiImg from '../../assets/richi-img.png'

export function ContactMePage() {
    return (
        <main className="contact-me-bg flex flex-col items-center">
            <section className="flex flex-col md:flex-row items-center justify-center pt-[29%] md:pt-[9.3%] pb-[25%] md:pb-[4.8%] gap-[13vw] md:gap-[8%]">
                <div className="relative flex justify-center items-center w-[70%] md:w-[34.5%]">
                    <div className="logos-container">
                        <a href="mailto:richardelgado145@gmail.com" target="_blank">
                            <img src={emailLogo} alt="email icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/richard-delgado-garz%C3%B3n-b4961b1b6/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="linkedin icon" />
                        </a>
                        <a href="https://www.behance.net/richarddelgado1" target="_blank" rel="noopener noreferrer">
                            <img src={behanceLogo} alt="behance icon" />
                        </a>
                        <a href="https://github.com/richarddg10" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="github icon" />
                        </a>
                        <a href="https://drive.google.com/file/d/16cIi7a4APQumZtULnLznOOt-R5CLf4Lh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src={spanishCvLogo} alt="spanish cv icon" />
                        </a>
                        <a href="https://drive.google.com/file/d/14pwFJ_HDG6f8CxuLl8DFJS5MjTx-Mtg9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src={englishCvLogo} alt="english cv icon" />
                        </a>
                    </div>
                    <img className="w-[100%] drop-shadow-richi-img" src={richiImg} alt="richi-img" />
                </div>
                <div className="flex flex-col items-center md:items-start gap-[2.3vw]">
                    <h2 className="my-work-title text-[26px] sm:text-[30px] text-white font-black m-[0px]">Contact me</h2>
                    <p className="text-[16px] md:text-[18.8px] text-white m-[0px]">
                        Hey, thanks for seeing my work.
                        <br />
                        <span className=" text-primary-green">
                            I will be waiting for your message,
                        </span>
                        <br />
                        don't wait too long to contact me.
                    </p>
                    <p className="w-[58.5vw] md:w-[33vw] px-[5px] mt-[2.2vw] md:mt-0 text-[18px] md:text-[22px] font-medium text-primary-green text-center bg-third-gray rounded-[5px]">
                        Click on the social network you prefer to talk to me
                    </p>
                </div>
            </section>
            <div className="w-[100vw] -mx-[7%] sm:-mx-[4.6%] -my-[8%] sm:-my-[2.4%]">
                <WaveFooter />
            </div>
        </main>
    )
}