import React from "react";

export function PopUp() {
    return (
        <div className="absolute bottom-[50%] z-1 flex flex-col px-[19%] sm:px-[21%] pt-[12%] pb-[32%] gap-[3vw] sm:gap-[0.6vw] rounded-[1vw] sm:rounded-[0.5vw] bg-fifth-gray">
            <button 
                className="text-[1rem] sm:text-[1.05rem] hover:text-white"
                onClick={() => window.open('https://drive.google.com/file/d/1rHNrbSXDzvSOxrkDavjvgVVaFBl2ebd8/view?usp=sharing', '_blank')}
            >
                Spanish CV
            </button>
            <div className="h-[0.03vw] bg-primary-gray rounded-[100px]"></div>
            <button 
                className="text-[1rem] sm:text-[1.05rem] hover:text-white"
                onClick={() => window.open('https://drive.google.com/file/d/14pwFJ_HDG6f8CxuLl8DFJS5MjTx-Mtg9/view?usp=sharing', '_blank')}
            >
                English CV
            </button>
        </div>
    )
}