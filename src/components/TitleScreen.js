import React from 'react'

import titleImg from '../img/kid-soap-bubbles.png'
import strings from '../../data/strings'
import {contentWidth} from '../styles/dimens'
import {primaryColor} from '../styles/colors'

const TitleScreen = () =>
  <div
    css={{
      position: 'relative',
      minHeight: 0,
      marginBottom: '1.45rem',
      width: '100%',
      overflow: 'hidden',
    }}
  >

    <figure 
      css={{
        position: 'absolute',
        left: 0,
        right: 0,
        overflow: 'hidden',
      }}>

      <img src={titleImg} alt="title background"
        style={{
          position: 'relative',
          width: '100%',
        }} />

    </figure>

    <div 
      css={{
        position: 'relative',
        width: '100%',
        height: 970,
        textAlign: 'center',
      }}>

      <div
        style={{
          display: 'inline-block',
          width: contentWidth,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 580,
          textAlign: 'left',
        }}>

        <h1 
          css={{
            color: 'white',
            fontSize: '5em',
            textShadow: '2px 2px 0px #f59782'
          }}>

          {strings.siteTitle}
        </h1>

        <h2
          css={{
            color: primaryColor,
            fontSize: '3em',
          }}>

          {strings.siteSlogan}
        </h2>

      </div>
    </div>
  </div>

export default TitleScreen