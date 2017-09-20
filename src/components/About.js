import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

//import {headerColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'
import familyTreeImg from '../img/sketch-family-tree.svg'

class About extends React.Component {
  render() {
    return (
      <BackgroundContentContainer background='white'>

        <div
          css={{
            width: '100%',
            height: '100%',
            opacity: '0.15',
            background: 'url(' + familyTreeImg + ') center right no-repeat',
            backgroundSize: 'cover',
          }}>
        </div>

        <div name='about'>
          <SectionContainer>

            <div
              css={{
              }}>

              <h1>{strings.aboutCaption}</h1>
              <p>Mein Name ist Steffi Rühl. Ich bin verheiratet, habe zwei Kinder und bin von Beruf Kinderkrankenschwester. Nachdem ich jahrelang Erfahrungen in diesem Beruf gesammelt habe, gab ich diese Tätigkeit für die Betreuung meiner Kinder auf.</p>
              <p>Was zunächst mit einem Kind als Spielkamerad für unsere Tochter begann, hat sich unterdessen zu einer Institution mit fünf Tageskindern entwickelt.</p>
              <p>Die Tageskinder haben einen festen Platz in unserem Leben. Sie finden Halt und Geborgenheit in einem geregelten und dennoch abwechselungsreichen Tagesablauf.</p>
              <p>Neben meiner Ausbildung als Kinderkrankenschwester wurde mir das Berliner Grund- und Aufbauzertifikat zur Kinderbetreuung als Tagespflegeperson vom Bezirksamt Pankow erteilt. Regelmäßig nehme ich an den Schulungs- und Fortbildungsmaßnahmen des Jugendamtes teil und tausche Erfahrungen mit anderen Tagesmüttern aus. Die Arbeit mit Kindern bereitet mir viel Freude.</p>
              <p>Dass Kinder und Eltern sich bei uns wohlfühlen, ist mir eine Herzensangelegenheit.</p>
            
            </div>
          </SectionContainer>
        </div>
      </BackgroundContentContainer>
    )
  }
}

export default About