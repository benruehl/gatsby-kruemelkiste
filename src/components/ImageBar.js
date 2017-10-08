import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

import kidBallPitImg from '../img/kid-ball-pit.jpg'
import kidPaintingImg from '../img/kid-painting.jpg'
import kidCarsImg from '../img/kid-cars.jpg'

const ImageWrapper = styled.figure`
  max-width: 100%;
  min-width: 0;
  flex: 1 1 auto;
  border: 5px solid white;
  margin: 0;

  :not(:last-child) {
    margin-right: 1vw;
  }

  img {
    vertical-align: middle;
  }

  @media (max-width: 500px) {
    :not(:first-child) {
      display: none;
    }
  }
`

class ImageBar extends React.Component {
  render(children) {
    return (
      <BackgroundContentContainer>
        <div
          css={{
            width: '100%',
            height: '100%',
            boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.16), inset 0 -1px 3px rgba(0,0,0,0.12)',
          }}>
        </div>

        <SectionContainer>
          <div 
            css={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              margin: '1rem 0',
            }}>

            <ImageWrapper className='materialCard1'>
              <img src={kidBallPitImg} alt="child in ball pit"/>
            </ImageWrapper>

            <ImageWrapper className='materialCard1'>
              <img src={kidPaintingImg} alt="child painting"/>
            </ImageWrapper>

            <ImageWrapper className='materialCard1'>
              <img src={kidCarsImg} alt="child playing with cars"/>
            </ImageWrapper>

          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}
  

export default ImageBar