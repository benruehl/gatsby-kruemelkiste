import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

//import {headerColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'
import abstractStreamImg from '../img/abstract-stream.svg'
import familyTreeImg from '../img/sketch-family-tree.svg'
import steffiImg from '../img/steffi-singing.svg'

const backgroundTopColor = '#EE7F7F';
const backgroundBottomColor = '#FFD496';

class About extends React.Component {
  render() {
    return (
      <div>

      <BackgroundContentContainer background='white'>

        <div
          css={{
            width: '100%',
            height: '100%',
            opacity: '0.5',
            background: 'url(' + abstractStreamImg + ') center center no-repeat',
            backgroundSize: 'cover',

            '@media(max-width: 640px)': {
              display: 'none',
            },
          }}>
        </div>

        <div name='about'>

          <SectionContainer
            css={{
              // background: backgroundTopColor,
              // border: '0px solid white',
              // borderTopWidth: '18px',
            }}>

            <h1>{strings.aboutCaption}</h1>
            <p>Mein Name ist Steffi Rühl. Ich bin verheiratet, habe zwei Kinder und bin von Beruf Kinderkrankenschwester. Nachdem ich jahrelang Erfahrungen in diesem Beruf gesammelt habe, gab ich diese Tätigkeit für die Betreuung meiner Kinder auf.</p>
            <p>Was zunächst mit einem Kind als Spielkamerad für unsere Tochter begann, hat sich unterdessen zu einer Institution mit fünf Tageskindern entwickelt. Die Tageskinder haben einen festen Platz in unserem Leben. Sie finden Halt und Geborgenheit in einem geregelten und dennoch abwechselungsreichen Tagesablauf.</p>

            <div
              css={{
                  // background: backgroundTopColor,
                  // background: 'linear-gradient(180deg, ' + backgroundTopColor + ' 0%, ' + backgroundBottomColor + ' 100%)',
                  // backgound: '#ffffff',
                  // border: '0px solid white',
                  // borderWidth: '18px 0',
              }}>

              <div
                css={{
                  display: 'flex',
                  height: '25em',
                  margin: '4em 0',
                  maxHeight: '68.3vw', // 68.3% of own width would be perfect
                  background: 'url(' + steffiImg + ') center center no-repeat',
                  backgroundSize: 'contain',
                }}>
              </div>
            </div>

            <p>Neben meiner Ausbildung als Kinderkrankenschwester wurde mir das Berliner Grund- und Aufbauzertifikat zur Kinderbetreuung als Tagespflegeperson vom Bezirksamt Pankow erteilt. Regelmäßig nehme ich an den Schulungs- und Fortbildungsmaßnahmen des Jugendamtes teil und tausche Erfahrungen mit anderen Tagesmüttern aus. Die Arbeit mit Kindern bereitet mir viel Freude.</p>
            <p>Dass Kinder und Eltern sich bei uns wohlfühlen, ist mir eine Herzensangelegenheit.</p>
          </SectionContainer>

        </div>
      </BackgroundContentContainer>
      </div>
    )
  }
}

export default About