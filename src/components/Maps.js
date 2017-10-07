import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import MapContainer from '../components/MapContainer'

//import {headerColor} from '../styles/colors'
//import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

class Maps extends React.Component {
  render() {
    return (
      <BackgroundContentContainer background='transparent'>

        <div
          className='primaryBackground'
          css={{
            width: '100%',
            height: '100%',
          }}>
        </div>

        <div>
          <SectionContainer>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>

              <div
                className='materialCard1'
                css={{
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem 3rem',
                }}>

                <div>Gounodstraße 101</div>
                <div>13088 Berlin</div>
              </div>

              <div
                css={{
                  alignSelf: 'stretch',
                  marginTop: '-2.5rem',
                  padding: '.5rem',
                  background: 'rgba(255, 255, 255, 0.5)',

                  '@media (max-width: 550px)': {
                    marginTop: '2rem',  
                  }
                }}>

                <MapContainer width='100%' height='calc(10rem + 40vh)'/>
              
              </div>
            </div>
          </SectionContainer>
        </div>
      </BackgroundContentContainer>
    )
  }
}

export default Maps