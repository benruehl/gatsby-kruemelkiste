import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import titleImg from '../img/kid-soap-bubbles.jpg'
import titleImgAlt from '../img/kid-soap-bubbles-alt.jpg'
import strings from '../../data/strings'
import {contentWidth} from '../styles/dimens'
import {primaryColor} from '../styles/colors'

const NavBarItem = styled.h4`
  margin: 0;
  margin-left: 2rem;
  color: white;
`

const NavBarLink = styled(Link)`
  color: white;
  padding: 4px 0;
  border: 0 solid transparent;
  border-bottom-width: 2px;
  &:hover {
    border-color: white;
  }
`

class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      scrollOpacity: 1
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }

  handleScroll(e) {
    e.stopPropagation();
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
        height = Math.max(window.innerHeight, document.body.clientHeight),
        vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        fadingOffset = vh * 0.25,
        fadingSpeed = height / vh * 1.5;

    this.setState({
      scrollOpacity: ((fadingOffset + height - scrollTop * fadingSpeed) / height)
    });
  }

  render() {
    return (
      <div
        css={{
          width: '100%',
          height: '50vw',
          minHeight: '60vh',
          maxHeight: '100vh',
          overflow: 'hidden',
          background: 'transparent',backgroundSize: 'cover',
          backgroundSize: 'cover',

          '@media (min-width: 801px) and (min-aspect-ratio: 4/3)': {
            background: 'url(' + titleImg + ') center center no-repeat fixed',
            backgroundSize: 'cover',
          },

          '@media (max-width: 800px), (max-aspect-ratio: 4/3)': {
            background: 'url(' + titleImgAlt + ') center center no-repeat fixed',
            backgroundSize: 'cover',
          },
        }}>

        <div 
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
            opacity: this.state.scrollOpacity,
          }}>

          <div
            css={{
              margin: '4rem 0',
              marginLeft: '6vw',
              marginBottom: '3vw',
              textAlign: 'left',

              '@media (max-width: 1400px)': {
                marginLeft: '5vw',
              }
            }}>

            <h1 
              css={{
                color: 'white',
                fontSize: '2rem',
                fontSize: 'calc(2rem + 3vw)',
                textShadow: '2px 2px 0px ' + primaryColor,
              }}>

              {strings.siteTitle}
            </h1>

            <h2
              css={{
                color: 'rgba(255, 255, 255, .5)',
                fontSize: '1.5rem',
                fontSize: 'calc(1.25rem + 1.5vw)',
                textShadow: '1px 1px 0px ' + primaryColor,
              }}>

              {strings.siteSlogan.split('\n')[0]}
              <br/>
              {strings.siteSlogan.split('\n')[1]}
            </h2>

          </div>
        </div>

        <div
          css={{
            position: 'absolute',
            top: 0,
            width: '100%',
            padding: '1.75rem 2vw',

            '@media (max-width: 800px)': {
              display: 'none',
            },
          }}>

          <div
            css={{
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'flex-end',
              maxWidth: contentWidth,
              marginLeft: 'auto',
              marginRight: 'auto',
              zIndex: '101',
            }}>

            <NavBarItem>
              <NavBarLink to="#about">
                {strings.aboutCaption}
              </NavBarLink>
            </NavBarItem>

            <NavBarItem>
              <NavBarLink to="/service/">
                {strings.serviceCaption}
              </NavBarLink>
            </NavBarItem>

            <NavBarItem>
              <NavBarLink to="/contract/">
                {strings.contractCaption}
              </NavBarLink>
            </NavBarItem>

            <NavBarItem>
              <NavBarLink to="/contact/">
                {strings.contactCaption}
              </NavBarLink>
            </NavBarItem>

          </div>
        </div>
      </div>
    )
  }
}

export default Header