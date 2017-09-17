import React from 'react'
import Link from 'gatsby-link'

import backgroundImg from '../img/banner-crayons.jpg'
import strings from '../../data/strings'
import {contentWidth} from '../styles/dimens'
import {primaryColor} from '../styles/colors'

class ContractHeader extends React.Component {

  render() {
    return (
      <div
        css={{
          background: '#ae7e66',
          background: '-moz-linear-gradient(-45deg, #ae7e66 0%, #8bbfdd 100%)',
          background: '-webkit-linear-gradient(-45deg, #ae7e66 0%, #8bbfdd 100%)',
          background: 'linear-gradient(135deg, #ae7e66 0%, #8bbfdd 100%)',
          filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ae7e66", endColorstr="#8bbfdd", GradientType=1)',
        }}>

        <div
          css={{
            position: 'relative',
            minHeight: 0,
            width: '100%',
            overflow: 'hidden',
            background: 'url(' + backgroundImg + ') center center no-repeat',
            backgroundSize: 'cover',
            paddingTop: '34%',
            minHeight: '15rem',
          }}>

          <div 
            css={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <h1 className='bannerTitle'>{strings.contractCaption}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ContractHeader