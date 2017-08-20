import React from 'react'
import PropTypes from 'prop-types'

import {contentWidth} from '../styles/dimens'

class SectionContainer extends React.Component {
  render(children) {
    return (
      <div
        css={{
          textAlign: 'center',
          background: this.props.background,
        }}>

        <div
          css={{
            width: contentWidth,
            display: 'inline-block',
            textAlign: 'left',
            paddingTop: 120,
            paddingBottom: 120,
          }}>

          {this.props.children}

        </div>
      </div>
    )
  }
}
  

export default SectionContainer