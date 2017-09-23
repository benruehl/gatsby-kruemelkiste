import React from 'react'
import Link from 'gatsby-link'

class BannerHeader extends React.Component {

  render() {
    return (
      <div
        css={{
          background: this.props.gradientTopLeft,
          background: '-moz-linear-gradient(-45deg, ' + this.props.gradientTopLeft + ' 0%, ' + this.props.gradientBottomRight + ' 100%)',
          background: '-webkit-linear-gradient(-45deg, ' + this.props.gradientTopLeft + ' 0%, ' + this.props.gradientBottomRight + ' 100%)',
          background: 'linear-gradient(135deg, ' + this.props.gradientTopLeft + ' 0%, ' + this.props.gradientBottomRight + ' 100%)',
          filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + this.props.gradientTopLeft + '", endColorstr="' + this.props.gradientBottomRight + '", GradientType=1)',
        }}>

        <div
          css={{
            position: 'relative',
            minHeight: 0,
            width: '100%',
            overflow: 'hidden',
            background: 'url(' + this.props.backgroundImage + ') center center no-repeat',
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

            <h1 css={{color: 'white', fontSize: 'calc(2rem + 2vw)'}}>
              {this.props.caption}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerHeader