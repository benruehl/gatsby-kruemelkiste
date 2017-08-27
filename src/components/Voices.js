import React from 'react'

import SectionContainer from '../components/SectionContainer'

//import {headerColor} from '../styles/colors'
import strings from '../../data/strings'

class About extends React.Component {
  render() {
    return (
      <SectionContainer background='white'>

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
          
          <blockquote>
            Ich bin sehr froh, dass du meine beiden Jungs in den ersten Jahren begleitet hast und noch begleitest. Ich könnte mir keine bessere Betreuung vorstellen.

            <footer>
              <cite>Reinhold</cite>
            </footer>
          </blockquote>

          <blockquote>
            Für uns Eltern ist es natürlich herrlich, wenn Magda Tag für Tag voller Freude zu Euch geht, ja: sogar "zu Effi!!!" einfordert. Wir geben sie mit einem rundum guten Gefühl zu Euch. Jetzt ist Magda schon seit einem Jahr bei Euch, ein weiteres liegt noch vor ihr. Um diese zwei Jahre sind wir so froh! Ganz gewiss wird sie von der Zeit, die sie bei Euch verbringt, gestärkt in's weitere Leben gehen.

            <footer>
              <cite>Boris und Sigrid</cite>
            </footer>
          </blockquote>

          <blockquote>
            Ich bin sehr froh und beruhigt, dass meine Enkelin Anouari bei Ihnen in der Tagespflege ist. Da stimmt einfach alles! Super Atmosphäre, nette Leute, ausgezeichnete Pflege und Betreuung, einfach rundum gut. Besser hätte sie es nicht treffen können.

            <footer>
              <cite>Jenny</cite>
            </footer>
          </blockquote>
        
        </div>
      </SectionContainer>
    )
  }
}

export default About