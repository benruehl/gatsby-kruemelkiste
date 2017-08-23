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
            maxWidth: contentWidth,
            display: 'inline-block',
            textAlign: 'left',
            paddingTop: 120,
            paddingBottom: 120,
            paddingLeft: '2vw',
            paddingRight: '2vw',
          }}>

          {this.props.children}

        </div>
      </div>
    )
  }
}
  

export default SectionContainer