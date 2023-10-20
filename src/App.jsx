import React, { useRef } from 'react'

import { Body, Footer } from './components'

export function App () {
  const contact = useRef(null)

  const scrollToSection = (data) => {
    if (data === 'contact') {
      console.log('holi')
      contact.current.scrollIntoView()
    }
  }

  return (
    <>
      <Body onSendMessage={scrollToSection} />
      <Footer reference={contact} />
    </>
  )
}
