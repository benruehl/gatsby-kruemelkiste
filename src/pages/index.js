import React from 'react'
import Link from 'gatsby-link'
import TitleScreen from '../components/TitleScreen'
import About from '../components/About'
import Footer from '../components/Footer'
import strings from '../../data/strings'

const IndexPage = () =>
  <div
  	css={{
		background: '#ff5730',
		background: '-moz-linear-gradient(-45deg, #ff5730 0%, #9c3bc5 100%)',
		background: '-webkit-linear-gradient(-45deg, #ff5730 0%,#9c3bc5 100%)',
		background: 'linear-gradient(135deg, #ff5730 0%,#9c3bc5 100%)',
		filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff5730", endColorstr="#9c3bc5", GradientType=1)',
	}}>

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
