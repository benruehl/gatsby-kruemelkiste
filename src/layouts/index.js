import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import faviconApple from '../favicon/apple-touch-icon.png'
import favicon32 from '../favicon/favicon-32x32.png'
import favicon16 from '../favicon/favicon-16x16.png'
import safariPinned from '../favicon/safari-pinned-tab.svg'
import faviconICO from '../favicon/favicon.ico'
// import browserConfig from '../favicon/browserconfig.xml'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Steffis Krümelkiste"
      meta={[
        { name: 'description', content: 'Liebevolle Kindertagespflege in Weißensee' },
        { name: 'keywords', content: 'Kindertagespflege, Weißensee, Kinder, Tagespflege, Betreuung, Kinderbetreuung, Tagesmutter' },
        { name: 'msapplication-TileColor', content: '#eb584f' },
        // { name: 'msapplication-config', content: browserConfig },
        { name: 'theme-color', content: '#ffffff' },
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: faviconApple },
        { rel: 'icon', sizes: '32x32', href: favicon32 },
        { rel: 'icon', sizes: '16x16', href: favicon16 },
        { rel: 'mask-icon', href: safariPinned, color: '#5bbad5' },
        { rel: 'shortcut icon', href: faviconICO },
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
