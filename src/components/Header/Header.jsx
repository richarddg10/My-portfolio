import React, { useState } from 'react'
import '../Header/Header.css'
import Logo from '../../../assets/Logo1.png'

export function Header (props) {
  const [message, setMessage] = useState('')
  const onClickLink = (msg) => {
    setMessage(msg)
    props.onSendMessage(msg)
  }

  return (
    <>
      <header>
        <img className='logo1Img' src={Logo} />
        <div className='buttonsContainer'>
          <button className='btnNowMe' onClick={() => onClickLink('nowMe')}>Now me</button>
          <button className='btnProjects' onClick={() => onClickLink('project')}>Projects</button>
          <button className='btnContact' onClick={() => onClickLink('contact')}>Contact</button>
        </div>
      </header>
    </>
  )
}
