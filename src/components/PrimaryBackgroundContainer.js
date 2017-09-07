import React from 'react'
import PropTypes from 'prop-types'

class PrimaryBackgroundContainer extends React.Component {
  render(children) {
    return (
      <div
        css={{
          background: 'transparent',
        }}>

        {this.props.children}
      </div>
    )
  }
}
  

export default PrimaryBackgroundContainer