import React, { useRef } from 'react'

import { Body, Footer } from './components'

export function App () {
  const contact = useRef(null)

  const scrollToSection = (data) => {
    if (data === 'contact') {
      contact.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Body onSendMessage={scrollToSection} />
      <Footer reference={contact} />
    </>
  )
}
