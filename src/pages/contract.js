import React from 'react'
import Link from 'gatsby-link'

import titleImg from '../img/kid-soap-bubbles.jpg'
import strings from '../../data/strings'

const ContractPage = () =>
  <div
	  css={{
	  	background: 'url(' + titleImg + ')',
	  }}>

    <h1>{strings.contractCaption}</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>

export default ContractPage
