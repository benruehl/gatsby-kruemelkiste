import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

import logoImg from '../img/logo.svg'
import wallpaperImg from '../img/wallpaper.svg'

const logoSize = 18
const logoPadding = 3
const textPaddingLeft = 2
const textPaddingRight = 1

class LogoExplanation extends React.Component {
  render() {
    return (
      <div className='primaryBackground'>
        <BackgroundContentContainer background='rgba(255, 255, 255, 0.55)'>

          <div
            css={{
              width: '100%',
              height: '100%',
              opacity: '0.35',
              background: 'url(' + wallpaperImg + ') top left repeat',
              backgroundSize: '150px 124px',
            }}>
          </div>

          <div>
            <SectionContainer background='transparent'>

              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  '@media (max-width: 800px)': {
                    flexDirection: 'column',
                  }
                }}>

                <div
                  css={{
                    minWidth: logoSize + 'em',
                    minHeight: logoSize + 'em',
                    position: 'relative',
                  }}>

                  <div
                    className='materialCard2'
                    css={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      left: '0',
                      bottom: '0',
                      borderRadius: '100%!important',
                    }}>
                  </div>

                  <div
                    className='primaryBackground'
                    css={{
                      position: 'absolute',
                      top: '.5em',
                      right: '.5em',
                      left: '.5em',
                      bottom: '.5em',
                      borderRadius: '100%',
                      opacity: '.15',
                    }}>
                  </div>

                  <div
                    css={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      left: '0',
                      bottom: '0',
                      margin: logoPadding + 'em',
                      background: 'url(' + logoImg + ') center center no-repeat',
                      backgroundSize: 'contain',
                    }}>
                  </div>
                </div>

                <div 
                  className='materialCard1'
                  css={{
                    flex: '1 1 0',
                    marginLeft: '-' + logoSize / 2 + 'em', //50% of circle width
                    paddingLeft: logoSize / 2 + textPaddingLeft + 'em', //negative margin plus additional padding
                    paddingRight: textPaddingRight + 'em',

                    '@media (max-width: 800px)': {
                      marginLeft: '0',
                      paddingLeft: '1em',
                      marginTop: '-' + logoSize / 4 + 'em',
                      paddingTop: logoSize / 4 + 'em',
                    }
                  }}>

                  <h2>Hallo Kinder, wisst ihr schon wer ich bin?</h2>
                  <p>Ich heiße Krümel und begleite euch durch den Tag. Stets bin ich an eurer Seite, lache, tobe und spiele mit euch. Und sollte es doch einmal nötig sein: Ich kann auch ganz toll trösten.</p>
                  <p>Also bis bald in der Krümelkiste. Ich freue mich auf euch! 🐯</p>
                </div>
              
              </div>
            </SectionContainer>
          </div>
        </BackgroundContentContainer>
      </div>
    )
  }
}

export default LogoExplanation