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
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }

  handleScroll(e) {
    e.stopPropagation();
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
        height = document.body.clientHeight,
        vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        fadingOffset = vh * 0.5,
        fadingSpeed = height / vh * 1.5;

        console.log(((fadingOffset + height - scrollTop * fadingSpeed) / height))

    this.setState({
      scrollOpacity: ((fadingOffset + height - scrollTop * fadingSpeed) / height)
    });
  }

  render() {
    return (
      <div
        css={{
          position: 'relative',
          minHeight: 0,
          width: '100%',
          height: '50vw',
          maxHeight: '100vh',
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
              left: '6vw',
              bottom: '5vw',
              textAlign: 'left',
            }}>

            <h1 
              css={{
                color: 'white',
                fontSize: '6rem',
                fontSize: '5vw',
                textShadow: '2px 2px 0px ' + primaryColor,
              }}>

              {strings.siteTitle}
            </h1>

            <h2
              css={{
                color: 'rgba(255, 255, 255, .5)',
                fontSize: '3rem',
                fontSize: '3vw',
                textShadow: '1px 1px 0px ' + primaryColor,
              }}>

              {strings.siteSlogan.split('\n')[0]}
              <br/>
              {strings.siteSlogan.split('\n')[1]}
            </h2>

          </div>
        </div>
      </div>
    )
  }
}

export default TitleScreen