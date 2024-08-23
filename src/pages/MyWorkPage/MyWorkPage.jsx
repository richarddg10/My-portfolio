import React from "react";
import { LogosHeader, ProjectContainer, WaveFooter } from "../../components";
import { projectsData } from "../../projectsData";

export function MyWorkPage() {
    return (
        <main className="my-work-bg flex flex-col">
            <LogosHeader />
            <section className="flex flex-col items-center mt-[7%] md:mt-[5%] pb-[9%] md:pb-[3%]">
                <h2 className="my-work-title text-[26px] sm:text-[30px] text-white font-black mt-[0px] mb-[4.2%]">My work</h2>
                <div className="flex flex-col gap-[7vw] px-[10%]">
                    {projectsData.map((props) => (
                        <ProjectContainer
                            key={props.id}
                            projectImg={props.project_img}
                            projectName={props.project_name}
                            extraInfo={props.extra_info}
                            projectArea={props.project_area}
                            projectLink={props.project_link}
                        />
                    ))}
                </div>
            </section>
            <div className="-mx-[7%] sm:-mx-[4.6%] -my-[8%] sm:-my-[2.4%]">
                <WaveFooter />
            </div>
        </main>
    )
}