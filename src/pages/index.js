import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Maps from '../components/Maps'
import Service from '../components/ServiceTeaser'
import ImageBar from '../components/ImageBar'
import Voices from '../components/Voices'
import Footer from '../components/Footer'
import strings from '../../data/strings'

const IndexPage = () =>
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
        className='primaryBackground'
        css={{
          width: '100%',
          height: '100%',
          position: 'fixed',
      }}>

      </div>

      <div
        css={{
          position: 'relative',
        }}>

        <Header/>
        <NavBar/>

        <div 
          css={{
            position: 'relative',
            background: 'transparent',
          }}>

          <About/>
          <Maps/>
          <Service/>
          <ImageBar/>
          <Voices/>
          <Footer/>

        </div>
      
      </div>
    </div>
  </div>

export default IndexPage
