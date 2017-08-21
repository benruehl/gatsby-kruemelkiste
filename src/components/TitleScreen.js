import React from 'react'

import titleImg from '../img/kid-soap-bubbles.jpg'
import strings from '../../data/strings'
import {contentWidth} from '../styles/dimens'
import {primaryColor} from '../styles/colors'

class TitleScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      scrollOpacity: 1
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    e.stopPropagation();
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
        height = document.body.clientHeight,
        fadingOffset = 0.5,
        fadingSpeed = 5;

    this.setState({
      scrollOpacity: fadingOffset + ((height - scrollTop * fadingSpeed) / height)
    });
  }

  render() {
    return (
      <div
        css={{
          position: 'relative',
          minHeight: 0,
          marginBottom: '1.45rem',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >

        <figure 
          css={{
            position: 'fixed',
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
            height: '100%',
            opacity: this.state.scrollOpacity
          }}>

          <div
            style={{
              position: 'absolute',
              left: 120,
              bottom: 80,
              textAlign: 'left',
            }}>

            <h1 
              css={{
                color: 'white',
                fontSize: '6em',
                textShadow: '2px 2px 0px ' + primaryColor,
              }}>

              {strings.siteTitle}
            </h1>

            <h2
              css={{
                color: 'rgba(255, 255, 255, .5)',
                fontSize: '3em',
                maxWidth: '900px',
                textShadow: '1px 1px 0px ' + primaryColor,
              }}>

              {strings.siteSlogan}
            </h2>

          </div>
        </div>
      </div>
    )
  }
}

export default TitleScreen