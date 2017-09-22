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
          paddingLeft: '2vw',
          paddingRight: '2vw',
        }}>

        <div
          css={{
            maxWidth: contentWidth,
            display: 'inline-block',
            textAlign: 'left',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            width: '100%',
          }}>

          {this.props.children}

        </div>
      </div>
    )
  }
}
  

export default SectionContainer