import React from 'react'
import Link from 'gatsby-link'
import TitleScreen from '../components/TitleScreen'
import About from '../components/About'
import Footer from '../components/Footer'
import strings from '../../data/strings'

const IndexPage = () =>
  <div>
  	<TitleScreen/>
  	<div 
  		css={{
  			position: 'relative',
  			background: 'white',
  		}}>

  		<About/>
  		<Footer/>

	</div>
  </div>

export default IndexPage
