import React from 'react'
import Link from 'gatsby-link'
import TitleScreen from '../components/TitleScreen'
import strings from '../../data/strings'

const IndexPage = () =>
  <div>
  	<TitleScreen/>
    <h1>{strings.siteTitle}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/site-notice/">Impressum</Link>
  </div>

export default IndexPage
