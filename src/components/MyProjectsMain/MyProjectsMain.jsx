import React from 'react'
import { Projects } from '../../components'
import HospitalPadrinoProject from '../../../assets/HospitalPadrinoProject.png'
import OnCheckProject from '../../../assets/OnCheckProject.png'
import richiProject from '../../../assets/richiProject.png'
import RA10Project from '../../../assets/RA10Project.png'
import SpotifyProject from '../../../assets/SpotifyProject.png'
import DiscoverMeProject from '../../../assets/DiscoverMeProject.png'
import projectsBackground1 from '../../../assets/projectsBackground1.jpeg'
import projectsBackground2 from '../../../assets/projectsBackground2.jpeg'

import './MyProjectsMain.css'

export function MyProjectsMain (props) {
  return (
    <>
      <div className='projectsDiv' ref={props.reference}>
        <h1 className='projectsTittle'>My projects</h1>
        <div className='navBar'>
          <div className='circleInLine' />
          <div className='verticalLine' />
        </div>
        <div className='projectsContainer'>

          <Projects borderColor='4px solid #FEB300' imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' />
          <Projects borderColor='4px solid #6400FF' imgRut={OnCheckProject} projectRut='https://www.behance.net/gallery/155688981/UIUX-Design-OnCheck' />
          <Projects borderColor='3.7px solid #FEB300' imgRut={richiProject} projectRut='https://www.behance.net/gallery/182682603/My-personal-Brand-Richi' />
          <Projects borderColor='4px solid #FEB300' imgRut={RA10Project} projectRut='https://www.behance.net/gallery/131706729/Logotipo-marca-deportiva-RA10' />
          <Projects borderColor='4px solid #6400FF' imgRut={SpotifyProject} projectRut='https://www.behance.net/gallery/163450445/Spotify-OOH-Experience' />
          <Projects borderColor='4px solid #FEB300' imgRut={DiscoverMeProject} projectRut='https://www.behance.net/gallery/138562343/App-DiscoverMe' />
        </div>

        <img className='projectsBackground1' src={projectsBackground1} />
        <img className='projectsBackground2' src={projectsBackground2} />
      </div>
    </>
  )
}
