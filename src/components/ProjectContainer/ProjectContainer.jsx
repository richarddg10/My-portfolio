import React from "react";
import './ProjectContainer.css'

export function ProjectContainer({projectLink, projectImg, projectName, extraInfo, projectArea}) {

    const handleProjectRedirect = () => {
        window.open(`${projectLink}`, ' _blank')
    }

    return (
        <div className="project-container relative">
            <div className="project-content flex flex-col items-center cursor-pointer" onClick={handleProjectRedirect}>
                <img className="project-img border-[0.06vw] border-white rounded-[1vw]" src={projectImg} alt={projectName} />
                <div className="project-info absolute w-[93%] md:w-[95%] bottom-[5%] flex flex-row items-center justify-between">
                    <div className="text-white">
                        <h1 className="text-[0.8rem] md:text-[1.3rem] font-bold">
                            {projectName}
                            <span className="text-[0.5rem] md:text-[1rem] italic font-regular"> {extraInfo}</span>
                        </h1>
                        <h2 className="text-[0.5rem] md:text-[1rem] italic font-regular">{projectArea}</h2>
                    </div>
                    <img className="w-[1.2vw] md:w-[0.8vw]" src="/white-arrow.svg" alt="Right arrow" />
                </div>
            </div>
        </div>
    )
}