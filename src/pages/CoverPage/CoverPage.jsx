import React from "react";
import { useNavigate } from "react-router-dom";
import './CoverPage.css'
import richiLogoBrand from '../../assets/richi-logo-brand.svg'

export function CoverPage() {
    const navigate = useNavigate()

    return (
        <main className="cover-page-bg flex flex-col md:grid md:grid-cols-[47%_53%] -mx-[6%] sm:-mx-[4.6%] -my-[7%] sm:-my-[2.4%]">
            <section className="flex flex-col items-center justify-center px-[22%] pt-[30%] md:pt-0">
                <img className="richi-logo-cover" src={richiLogoBrand} alt="richi-logo" />
            </section>
            <section className="flex flex-col items-center justify-center bg-img-patron bg-contain bg-center bg-no-repeat h-screen -mt-[52%] sm:mt-0">
                <div className="call-action-container inline-flex px-[40px] py-[10%] sm:px-[115px] sm:py-[7%] bg-black rounded-[4%]">
                    <button
                        className="call-action-btn relative px-[17.3vw] sm:px-[47px] py-[6%] bg-black text-[1.4rem] sm:text-[1.5rem] text-primary-green border-[0.4vw] sm:border-[0.13vw] border-primary-green rounded-[100px]"
                        onClick={() => navigate('/now-me')}
                    >
                        Now me
                    </button>
                </div>
            </section>
        </main>
    )
}