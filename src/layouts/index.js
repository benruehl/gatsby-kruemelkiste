import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Steffis Krümelkiste"
      meta={[
        { name: 'description', content: 'Kindertagespflege in Weißensee' },
        { name: 'keywords', content: 'Kindertagespflege, Weißensee, Kinder, Tagespflege, Betreuung, Kinderbetreuung, Tagesmutter' },
      ]}
    />

    <div style={{
      width: '100%',
    }}>

        {children()}
        
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
