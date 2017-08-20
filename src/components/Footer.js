import React from 'react'
import Link from 'gatsby-link'

import SectionContainer from '../components/SectionContainer'

import {primaryColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const Footer = () =>
  <SectionContainer background={primaryColor}>

    <h1>Kontakt</h1>
    <Link to="/site-notice/">Impressum</Link>
  </SectionContainer>

export default Footer