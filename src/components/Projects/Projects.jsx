import React from 'react'

export function Projects ({ borderColor, imgRut, projectRut }) {
  const projectsStyle = {
    border: borderColor,
    borderRadius: '21px',
    width: '314.81px',
    height: '266.67px',
    cursor: 'pointer'
  }

  return (
    <>
      <a href={projectRut} target='_blank' rel='noreferrer'>
        <img className='projectsStyle' style={projectsStyle} src={imgRut} />
      </a>
    </>
  )
}
