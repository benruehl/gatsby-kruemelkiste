import React from 'react'
import Link from 'gatsby-link'
import TitleScreen from '../components/TitleScreenAlternate'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Service from '../components/Service'
import Voices from '../components/Voices'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import {primaryGradientColor1, primaryGradientColor2} from '../styles/colors'

const IndexAlternatePage = () =>
  <div
    css={{
      position: 'relative',
    }}>

    <div
      css={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}>

      <div
        css={{
          width: '100%',
          height: '100%',
          background: primaryGradientColor1,
          background: '-moz-linear-gradient(-45deg, #ff9547 0%, #df5353 100%)',
          background: '-webkit-linear-gradient(-45deg, #ff9547 0%, #df5353 100%)',
          background: 'linear-gradient(135deg, #ff9547 0%, #df5353 100%)',
          filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff9547", endColorstr="#df5353", GradientType=1)',
          position: 'fixed',
      }}>

    </div>

    <div
      css={{
        position: 'relative',
      }}>

      <TitleScreen/>
      <NavBar/>

      <div 
        css={{
          position: 'relative',
          background: 'transparent',
        }}>

        <About/>
        <Service/>
        <Voices/>
        <Footer/>

    </div>
    
    </div>
  </div>
  </div>

export default IndexAlternatePage
