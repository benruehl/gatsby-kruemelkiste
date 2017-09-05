import React from 'react'
import Link from 'gatsby-link'

import strings from '../../data/strings'
import {navBarFgColor, navBarBgColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      scrollOpacity: 0
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
        vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (scrollTop > vh) {
      this.setState({
        scrollOpacity: 1
      });
    } else {
      this.setState({
        scrollOpacity: 0
      });
    }
  }

  render() {
    return (
      <div
        css={{
          background: navBarBgColor,
          marginBottom: '1.45rem',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 100,
          opacity: this.state.scrollOpacity,
          WebkitBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.15)',
          MozBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.15)',
          boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.15)',
          WebkitTransition: 'opacity .5s ease-in-out',
          MozTransition: 'opacity .5s ease-in-out',
          MsTransition: 'opacity .5s ease-in-out',
          OTransition: 'opacity .5s ease-in-out',
          transition: 'opacity .5s ease-in-out',
        }}>

        <div
          style={{
            margin: '0 auto',
            maxWidth: contentWidth,
            padding: '0.75rem 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>

          <h2 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: navBarFgColor,
                textDecoration: 'none',
              }}>

              {strings.siteTitle}
            </Link>
          </h2>

          <div
            css={{
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'flex-end',
            }}>

            <h4 style={{ margin: 0, marginLeft: '2rem' }}>
              Mein Angebot
            </h4>

            <h4 style={{ margin: 0, marginLeft: '2rem' }}>
              Kosten & Vertrag
            </h4>

            <h4 style={{ margin: 0, marginLeft: '2rem' }}>
              Kontakt
            </h4>

          </div>
        </div>
      </div>
    )
  }
}

export default NavBar