import React from 'react'
import Link from 'gatsby-link'

import SectionContainer from '../components/SectionContainer'

import {primaryColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const Footer = () =>
  <SectionContainer background={primaryColor}>

	<h1>Kontakt</h1>

	<div
		css={{
			width: '100%',
			color: 'white',
		}}>

    	<Link to="/site-notice/"
    		css={{
    			color: 'white'
    		}}>

    		Impressum
		</Link>
	</div>
  </SectionContainer>

export default Footer