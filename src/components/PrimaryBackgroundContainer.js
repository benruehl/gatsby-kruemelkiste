import React from 'react'
import PropTypes from 'prop-types'

class PrimaryBackgroundContainer extends React.Component {
  render(children) {
    return (
      <div
        css={{
        background: '#ff5730',
        background: '-moz-linear-gradient(-45deg, #ff5730 0%, #9c3bc5 100%)',
        background: '-webkit-linear-gradient(-45deg, #ff5730 0%,#9c3bc5 100%)',
        background: 'linear-gradient(135deg, #ff5730 0%,#9c3bc5 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff5730", endColorstr="#9c3bc5", GradientType=1)',
      }}>

        {this.props.children}
      </div>
    )
  }
}
  

export default PrimaryBackgroundContainer