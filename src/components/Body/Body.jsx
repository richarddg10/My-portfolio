import React, { useRef } from 'react'
import '../Body/Body.css'
import Me from '../../../assets/Me.png'
import Vector from '../../../assets/Vector.png'
import swapIcon from '../../../assets/swapIcon.png'

import { Header, MyProjectsMain } from '../../components'

export function Body (props) {
  const nowMe = useRef(null)
  const projects = useRef(null)

  const scrollToSection = (data) => {
    if (data === 'nowMe') {
      nowMe.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'project') {
      projects.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      props.onSendMessage(data)
    }
  }

  return (
    <>
      <main className='mainBackground'>
        <Header onSendMessage={scrollToSection} />
        <div className='mainDiv' ref={nowMe}>
          <img className='myImg' src={Me} />
          <div className='myInfoContainer'>
            <h1 className='myTittle'>WHO AM I?</h1>
            <p className='myInfo'>I'm Richard, Interactive Media Designer. I consider myself a person who wants to learn and acquire knowledge in my professional field with the intention of contributing to society. Additionally, I stand out for my creativity, communication and responsibility in my duties and passions.</p>
          </div>
          <img className='vectorImg' src={Vector} />
        </div>
        <img className='swapImg' src={swapIcon} />
      </main>
      <MyProjectsMain reference={projects} />
    </>
  )
}
