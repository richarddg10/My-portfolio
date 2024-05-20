import React, { useRef } from 'react'

import { Body, Footer } from './components'

// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

export function App () {
  // const contact = useRef(null)

  // const scrollToSection = (data) => {
  //   if (data === 'contact') {
  //     contact.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <>
{/*       <div>
        <iframe src='./warning-updating.pdf' style={{ width: '100%', height: '100vh' }} title='PDF Viewer'></iframe>
      </div> */}
      <img src='./warning-updating.jpg' style={{ width: '100%', height: '100%' }} />
{/*       <Body onSendMessage={scrollToSection} />
      <Footer reference={contact} /> */}
    </>
  )
}
