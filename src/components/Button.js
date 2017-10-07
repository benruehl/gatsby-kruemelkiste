import React from 'react'
import Link from 'gatsby-link'

import {primaryColor} from '../styles/colors'

class Button extends React.Component {
  render() {
    console.log(this.props.css)
    return (
      <Link
        to={this.props.linkTo}
        css={{
          textAlign: 'center',
        }}>

        <h3
          css={{
            overflow: 'hidden',
            margin: 0,
            color: primaryColor,
            border: '3px solid ' + primaryColor,
            borderRadius: '2px',
            padding: '0.5em 2em',
            WebkitTransition: '0.25s',
            transition: '0.25s',

            ':hover': {
              background: primaryColor,
              color: 'white',
            },
          }}>

          {this.props.caption}

        </h3>
      </Link>
    )
  }
}
  

export default Button