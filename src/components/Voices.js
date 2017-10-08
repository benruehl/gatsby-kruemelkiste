import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import wallpaperImg from '../img/wallpaper.svg'

//import {headerColor} from '../styles/colors'
import strings from '../../data/strings'

const QuoteWrapper = styled.div`
  padding: 1.5rem 2vw;
  margin: 1rem 0;

  blockquote {
    margin-bottom: 0;
  }
`

class About extends React.Component {
  render() {
    return (
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
      
        <SectionContainer background='transparent'>

          <h1>Zufriedenheit bei Kindern und Eltern</h1>

          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
            
            <QuoteWrapper className='materialCard1'>
              <blockquote>
                Ich bin sehr froh, dass du meine beiden Jungs in den ersten Jahren begleitet hast und noch begleitest. Ich könnte mir keine bessere Betreuung vorstellen.

                <footer>
                  <cite>Reinhold</cite>
                </footer>
              </blockquote>
            </QuoteWrapper>

            <QuoteWrapper className='materialCard1'>
              <blockquote>
                Für uns Eltern ist es natürlich herrlich, wenn Magda Tag für Tag voller Freude zu Euch geht, ja: sogar "zu Effi!!!" einfordert. Wir geben sie mit einem rundum guten Gefühl zu Euch. Jetzt ist Magda schon seit einem Jahr bei Euch, ein weiteres liegt noch vor ihr. Um diese zwei Jahre sind wir so froh! Ganz gewiss wird sie von der Zeit, die sie bei Euch verbringt, gestärkt in's weitere Leben gehen.

                <footer>
                  <cite>Boris und Sigrid</cite>
                </footer>
              </blockquote>
            </QuoteWrapper>

            <QuoteWrapper className='materialCard1'>
              <blockquote>
                Ich bin sehr froh und beruhigt, dass meine Enkelin Anouari bei Ihnen in der Tagespflege ist. Da stimmt einfach alles! Super Atmosphäre, nette Leute, ausgezeichnete Pflege und Betreuung, einfach rundum gut. Besser hätte sie es nicht treffen können.

                <footer>
                  <cite>Jenny</cite>
                </footer>
              </blockquote>
            </QuoteWrapper>
          
          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}

export default About