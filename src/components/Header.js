import React from 'react'
import Link from 'gatsby-link'

import {headerColor} from '../styles/colors'

const Header = () =>
  <div
    css={{
      background: headerColor,
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>

export default Header