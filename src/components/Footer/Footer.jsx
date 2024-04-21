import React from 'react'
import contactBackground1 from '../../../assets/contactBackground1.jpeg'
import emailIcon from '../../../assets/emailIcon.png'
import behanceLogo from '../../../assets/behanceLogo.png'
import linkedinLogo from '../../../assets/linkedinLogo.png'
import CVspanishIcon from '../../../assets/CVspanishIcon.png'
import CVenglishIcon from '../../../assets/CVenglishIcon.png'
import myContactEmoji from '../../../assets/myContactEmoji.jpg'
import Logo2 from '../../../assets/Logo2.png'
import './Footer.css'

export function Footer (props) {
  return (
    <>
      <footer ref={props.reference}>
        <div className='navBarContact1'>
          <div className='verticalLineContact1' />
        </div>
        <div className='navBarContact2'>
          <div className='circleInLineContact2' />
          <div className='verticalLineContact2' />
        </div>
        <div className='tittleDiv'>
          <h1 className='contactTittle'>Contact me</h1>
          <img className='contactBackground1' src={contactBackground1} />
        </div>
        <div className='contactContainer'>
          <div className='myRedContainer'>
            <div className='emailDiv'>
              <img className='' src={emailIcon} />
              <a href=''>richardelgado145@gmail.com</a>
            </div>
            <div className='behanceDiv'>
              <img src={behanceLogo} />
              <a href='https://www.behance.net/richarddelgado1' target='_blank' rel='noreferrer'>See Behance</a>
            </div>
            <div className='linkedinDiv'>
              <img src={linkedinLogo} />
              <a href='https://www.linkedin.com/in/richard-delgado-garz%C3%B3n-b4961b1b6/' target='_blank' rel='noreferrer'>See LinkedIn</a>
            </div>
            <div className='CVspanishDiv'>
              <img src={CVspanishIcon} />
              <a href='https://drive.google.com/file/d/1IcEDTXT2Ur-MGyt5mCLpGXh6vy4dDsZn/view?usp=sharing' target='_blank' rel='noreferrer'>See CV (in spanish)</a>
            </div>
            <div className='CVenglishDiv'>
              <img src={CVenglishIcon} />
              <a href='https://drive.google.com/file/d/1zMp13yrduV-RKC1dvD58_GXcyU5m8LEp/view?usp=sharing' target='_blank' rel='noreferrer'>See CV (in english)</a>
            </div>
          </div>
          <img className='myContactEmoji' src={myContactEmoji} />
        </div>
        <div className='footerDiv'>
          <img className='logo2' src={Logo2} />
          <h1>Thank you for watching :) <span className='spanH1'>Richi’s design</span></h1>
          <img className='logo2' src={Logo2} />
        </div>
      </footer>
    </>
  )
}
