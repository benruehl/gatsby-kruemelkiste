import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import abstractRingsImg from '../img/abstract-rings.svg'
import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import Button from '../components/Button'

//import {headerColor} from '../styles/colors'
import strings from '../../data/strings'

const FeatureRow = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
		border-bottom: 1px solid #e0e0e0;
  }
  
  @media (max-width: 500px) {
    flex-direction: column;
    border-width: 0!important;
  }
`

const FeatureQuad = styled.div`
  flex: 1 1 0;
  padding: calc(1rem + 1vw) 2vw;

  &:not(:last-child) {
		border-right: 1px solid #e0e0e0;
	}

  h4 {
    margin: 0;
    margin-bottom: 1em;
  }

  @media (max-width: 500px) {
    border-width: 0!important;
  }
`

class ServiceTeaser extends React.Component {
  render() {
    return (
      <div>
        <BackgroundContentContainer background='white'>
        
          <div
            css={{
              width: '100%',
              height: '100%',
              opacity: '0.15',
              background: 'url(' + abstractRingsImg + ') center center no-repeat',
              backgroundSize: 'cover',
            }}>
          </div>

          <SectionContainer background='transparent'>

            <h1>
              Mein Angebot
            </h1>

            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'no-wrap',
                alignItems: 'stretch',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}>

              <p>Tageskinder im Alter bis zu 3 Jahren werden von mir liebevoll und individuell betreut. Wir sind ein Nichtraucherhaushalt. Bei der Betreuung der Kindern lege ich auf einige Aspekte besonderen Wert.</p>

              <div
                className='materialCard1'
                css={{
                  marginTop: '1.5rem',
                  marginBottom: '3rem',
                  padding: '1vw',
                }}>

                <FeatureRow>
                  <FeatureQuad>
                    <h4>Frische Luft und Bewegung</h4>
                    <div>Täglich sind wir an der frischen Luft, beobachten die Natur in ihrer Vielfältigkeit und besuchen die Spielplätze in der Umgebung.</div>
                  </FeatureQuad>
                  <FeatureQuad>
                    <h4>Malen, Basteln, Singen, Spielen</h4>
                    <div>Neben einem Kletterhäuschen, Tobe- und Kuschelmatratze sind natürlich jede Menge Spielelemente wie Holzeisenbahn, Bausteine, Bücher und einfache Musikinstrumente vorhanden.</div>
                  </FeatureQuad>
                </FeatureRow>

                <FeatureRow>
                  <FeatureQuad>
                    <h4>Tägliche Hygiene</h4>
                    <div>Die Kinder erlernen die tägliche Hygiene, wie das Händewaschen, Töpfchen- oder Toilettengang und das Zähneputzen.</div>
                  </FeatureQuad>
                  <FeatureQuad>
                    <h4>Faires und freundliches Miteinander in der Gruppe</h4>
                    <div>Der richtige Umgang mit anderen Kindern muss erst erlernt werden. Hierbei werden behutsam soziale Werte wie Gerechtigkeit vermittelt.</div>
                  </FeatureQuad>
                </FeatureRow>
              </div>

              <p>Alter und Entwicklungsstand werden dabei stets individuell gefördert. Je nach Situation wird auch auf Interessen und Ideen der Kinder eingegangen.</p>

              <div 
                css={{
                  alignSelf: 'center',
                  margin: '2rem 0',
                }}>

                <Button 
                  linkTo='/service/'
                  caption='Mehr erfahren'>
                </Button>
              </div>
            </div>
            
          </SectionContainer>
        </BackgroundContentContainer>
      </div>
    )
  }
}

export default ServiceTeaser