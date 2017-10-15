import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

import logoImg from '../img/logo.svg'
import wallpaperImg from '../img/wallpaper.svg'

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
                    width: '20em',
                    height: '20em',
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
                      margin: '3em',
                      background: 'url(' + logoImg + ') center center no-repeat',
                      backgroundSize: 'contain',
                    }}>
                  </div>
                </div>

                <div 
                  className='materialCard1'
                  css={{
                    flex: '1 1 0',
                    marginLeft: '-10em', //50% of circle width
                    paddingLeft: '12em', //negative margin plus additional padding
                    paddingRight: '1em',

                    '@media (max-width: 800px)': {
                      marginLeft: '0',
                      paddingLeft: '1em',
                      marginTop: '-6em',
                      paddingTop: '6em',
                    }
                  }}>

                  <h2>Ein Begleiter für die Kinder</h2>
                  <p>Unser kleiner Tiger ist ein pädagogisches Symbol, das ich hin und wieder gerne bei der Betreuung einsetze. Beim Toben auf der Kuschelmatratze werden die Kinder ermuntert, wie die Tiger herumzuspringen. Auch beim Zähneputzen lässt sich Motivation erzeugen, wenn alle Kinder wie Tiger die Mäuler aufreißen sollen.</p>
                  <p>Der Tiger hat sich auf diese Weise inzwischen als Logo der Krümelkiste etabliert. 😊</p>
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