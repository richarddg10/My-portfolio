import React, { useRef, useEffect } from 'react';
import './SkillContainer.css'
import {initializeBrilloEffect} from './SkillContainer.js'
import greenArrow from '../../assets/green-arrow.svg'

export function SkillContainer({titleIcon, skillTitle, skill1, skill2, skill3, icon1, icon2, icon3, icon4, icon5, icon6}) {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const cleanup = initializeBrilloEffect(container);

        return () => cleanup();
    }, []);

    return (
        <div className="border-skill-container">
            <div className="skill-container flex flex-col items-center p-[11vw] sm:p-[3.2vw] gap-[5vw] md:gap-[1.5vw] bg-black text-white rounded-[10px]" ref={containerRef}>
                <img className="h-[9vw] md:h-[3.5vw]" src={titleIcon} alt={skillTitle} />
                <h3 className="my-[0px] text-[1em] sm:text-[1.3em] font-black text-center">{skillTitle}</h3>
                <div>
                    <p className="flex flex-row w-auto gap-[8px] text-[0.7em] sm:text-[1em]"><img className="w-[1vw] md:w-[0.4vw]" src={greenArrow} alt={skill1}/>{skill1}</p>
                    <p className="flex flex-row w-auto gap-[8px] text-[0.7em] sm:text-[1em]"><img className="w-[1vw] md:w-[0.4vw]" src={greenArrow} alt={skill2}/>{skill2}</p>
                    <p className="flex flex-row w-auto gap-[8px] text-[0.7em] sm:text-[1em]"><img className="w-[1vw] md:w-[0.4vw]" src={greenArrow} alt={skill3}/>{skill3}</p>
                </div>
                <div className="icons-container flex flex-col items-center gap-[8vw] md:gap-[3.2vw] mt-[1.8vw] md:mt-[1.1vw]">
                    <div className="flex flex-row gap-[8vw] md:gap-[3.2vw]">
                        {icon1 !== 'none' && <img src={icon1} alt={icon1} />}
                        {icon2 !== 'none' && <img src={icon2} alt={icon2} />}
                        {icon3 !== 'none' && <img src={icon3} alt={icon3} />}
                    </div>
                    <div className="flex flex-row gap-[8vw] md:gap-[3.2vw]">
                        {icon4 !== 'none' && <img src={icon4} alt={icon4} />}
                        {icon5 !== 'none' && <img src={icon5} alt={icon5} />}
                        {icon6 !== 'none' && <img src={icon6} alt={icon6} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
