import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    const navigate = useNavigate()

    const location = useLocation()

    const handleBtnActive = (path) => {
        const verified = location.pathname === path
        return verified ? 'active' : ''
    }

    return (
        <div className="nav-bar-bg fixed flex flex-row justify-center p-[2%] md:p-[0.7%] gap-[2vw] md:gap-[0.7vw] border-[0.2vw] md:border-[0.1vw] border-white rounded-[100px] backdrop-blur-[50px] z-10">
            <button className={`now-me-btn ${handleBtnActive('/now-me')}`} onClick={() => navigate('/My-portfolio')}>Now me</button>
            <button className={`my-work-btn ${handleBtnActive('/my-work')}`} onClick={() => navigate('/my-work')}>My work</button>
            <button className={`contact-me-btn ${handleBtnActive('/contact-me')}`} onClick={() => navigate('/contact-me')}>Contact me</button>
        </div>
    )
}
