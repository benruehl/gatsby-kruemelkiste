import React from 'react'
import PropTypes from 'prop-types'

//import {contentWidth} from '../styles/dimens'

class BackgroundContentContainer extends React.Component {
  render(children) {
    return (
      <div
        css={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <div
          css={{
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        >

          {this.props.children[0]}

        </div>

        <div
          css={{
            position: 'relative',
          }}
        >

          {this.props.children[1]}
        
        </div>
      </div>
    )
  }
}
  

export default BackgroundContentContainer