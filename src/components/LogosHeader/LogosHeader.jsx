import React from "react";
import { useNavigate } from "react-router-dom";
import richiWhiteLogo from '../../assets/richi-white-logo.svg'
import linkedinLogo from '../../assets/linkedin-logo.svg'
import behanceLogo from '../../assets/behance-logo.svg'

export function LogosHeader() {

    const navigate = useNavigate()

    return (
        <section className="logos-section flex flex-row justify-between pt-[3.6%] sm:pt-[1.3%]">
            <div>
                <img className="richi-white-logo h-[7vw] md:h-[2.45vw] cursor-pointer"
                    onClick={() => navigate('/My-portfolio')}
                    src={richiWhiteLogo}
                    alt="richi-logo"
                />
            </div>
            <div className="flex flex-row gap-[15px]">
                <a href="https://www.linkedin.com/in/richard-delgado-garz%C3%B3n-b4961b1b6/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-logo h-[7vw] md:h-[2.45vw]" src={linkedinLogo} alt="linkedin-logo" />
                </a>
                <a className="hidden sm:block" href="https://www.behance.net/richarddelgado1" target="_blank" rel="noopener noreferrer">
                    <img className="behance-logo h-[7vw] md:h-[2.45vw]" src={behanceLogo} alt="behance-logo" />
                </a>
            </div>
        </section>
    )
}
