import React from 'react'
import Link from 'gatsby-link'

import {primaryColor} from '../styles/colors'

class Button extends React.Component {
  render() {
    let buttonContent = this.renderContent()
    return this.props.linkTo ? this.renderLink(buttonContent) : this.renderButton(buttonContent)
  }

  renderLink(children) {
    return (
      <Link
        to={this.props.linkTo}
        css={{
          textAlign: 'center',
        }}>
        {children}
      </Link>
    ) 
  }

  renderButton(children) {
    return (
      <div
        onClick={this.props.onClick}
        css={{
          textAlign: 'center',
        }}>
        {children}
      </div>
    )
  }

  renderContent() {
    return (
      <h3
        css={{
          overflow: 'hidden',
          margin: 0,
          color: primaryColor,
          border: '3px solid ' + primaryColor,
          borderRadius: '2px',
          padding: '0.5em 2em',
          userSelect: 'none',
          cursor: 'default',
          WebkitTransition: '0.25s',
          transition: '0.25s',

          ':hover': {
            background: primaryColor,
            color: 'white',
          },
        }}>

        {this.props.caption}

      </h3>
    )
  }
}
  

export default Button