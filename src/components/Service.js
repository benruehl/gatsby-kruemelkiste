import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import TextWithImageContainer from '../components/TextWithImageContainer'

//import {primaryColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'
import cartImg from '../img/in-cart.jpg'
import cartBlurImg from '../img/in-cart-blur.jpg'
import indoorImg from '../img/indoor.jpg'
import indoorBlurImg from '../img/indoor-blur.jpg'
import babyIcon from '../img/icon-baby.svg'
import timeIcon from '../img/icon-time.svg'
import noSmokingIcon from '../img/icon-no-smoking.svg'

const FeatureContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2em 1em 0 1em;
  margin: 1vw;

  p {
    max-width: 100%;
  }
`

const IconContainer = styled.div`
  min-width: 7.5em;
  min-height: 7.5em;
  width: 10vw;
  height: 10vw;
  background-size: contain;
  margin-bottom: 2em;
`

class Service extends React.Component {
  render() {
    return (
      <BackgroundContentContainer background='#fcf0f0'>

        <div
          css={{
            width: '100%',
            height: '100%',
          }}>
        </div>

        <div>
          <BackgroundContentContainer>

            <div
              css={{
                width: '100%',
                height: '100%',
                background: '#FFC7B9',
                background: '-moz-linear-gradient(280deg, #FFF7F5 25%, #FFE7E0 25%, #FFE7E0 75%, #FFF7F5 75%)',
                background: '-webkit-linear-gradient(280deg, #FFF7F5 25%, #FFE7E0 25%, #FFE7E0 75%, #FFF7F5 75%)',
                background: 'linear-gradient(-190deg, #FFF7F5 25%, #FFE7E0 25%, #FFE7E0 75%, #FFF7F5 75%)',
              }}>
            </div>

            <SectionContainer>

              <h1
                css={{
                  textAlign: 'center'
                }}>
                Individuelle und liebevolle Betreuung
              </h1>

              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  marginTop: '4em',
                  marginBottom: '4em',

                  '@media (max-width: 650px)': {
                    flexDirection: 'column',
                  }
                }}>

                <FeatureContainer className='materialCard1'>
                  <IconContainer css={{ background: 'url(' + babyIcon + ')' }}/>
                  <p>Tageskinder im Alter bis zu 3 Jahren werden von mir betreut</p>
                </FeatureContainer>

                <FeatureContainer className='materialCard1'>
                  <IconContainer css={{ background: 'url(' + timeIcon + ')' }}/>
                  <p>Betreuungszeiten von Montag bis Freitag von je 8 bis 16 Uhr</p>
                </FeatureContainer>

                <FeatureContainer className='materialCard1'>
                  <IconContainer css={{ background: 'url(' + noSmokingIcon + ')' }}/>
                  <p>Wir sind ein Nichtraucherhaushalt</p>
                </FeatureContainer>
              </div>
            </SectionContainer>
          </BackgroundContentContainer>

          <BackgroundContentContainer background='#ffd3e5'>
            <div
              css={{
                width: '100%',
                height: '100%',
                background: 'url(' + indoorBlurImg + ') center center no-repeat',
                backgroundSize: 'cover',
                opacity: 0.25,
              }}/>

            <SectionContainer>
              <TextWithImageContainer image={indoorImg} imagePosition='left'>
                <h2>Für Spielzeug ist gesorgt</h2>
                <p>Wir haben ein kindgerechtes, farbenfrohes Spielzimmer mit einem Kletterhäuschen, Tobe- und Kuschelmatratze und vielen Bewegungselementen. Spannende Spielelemente, wie die große Holzeisenbahn, die Murmelbahn, jede Menge Bausteine, Autos, Bücher, Spiele, Handpuppen, einfache Musikinstrumente u.s.w. wecken die kreative Neugier der Kinder.</p>
              </TextWithImageContainer>
            </SectionContainer>
          </BackgroundContentContainer>

          <SectionContainer>
            <div
              css={{
                textAlign: 'center',
                marginBottom: '1.5em',
              }}>

              <h2>Betreuung je nach individueller Situation</h2>
              <p>Grundlage für meine Arbeit ist die situationsbezogene Pädagogik, d.h. ich greife Themen, Ideen und Anregungen auf, die die Kinder in die Tagespflege mitbringen, und entwickle sie gemeinsam mit den Kindern weiter. Jedes Kind wird entsprechend seines Alters und seines Entwicklungsstandes individuell gefördert.</p>
            </div>
          </SectionContainer>

          <BackgroundContentContainer background='#d0ef98'>
            <div
              css={{
                width: '100%',
                height: '100%',
                background: 'url(' + cartBlurImg + ') center center no-repeat',
                backgroundSize: 'cover',
                opacity: 0.25,
              }}/>
            <SectionContainer>
              <TextWithImageContainer image={cartImg} imagePosition='right'>
                <h2>Jede Menge frische Luft</h2>
                <p>Täglich sind wir an der frischen Luft, beobachten die Natur in ihrer Vielfältigkeit und besuchen die Spielplätze in der Umgebung. Bewegung wird bei uns "groß" geschrieben. Wir singen viel und machen erste, frühe Erfahrungen mit Musik- und Klanginstrumenten. Es wird  gemalt, geknetet, gebastelt – häufig in Bezug auf die Jahreszeiten und deren typische Besonderheiten. Kinderbücher, Fingerspiele und Verse spielen für die Förderung der Sprache eine große Rolle.</p>
              </TextWithImageContainer>
            </SectionContainer>
          </BackgroundContentContainer>

          <SectionContainer>
            <div
              css={{
                textAlign: 'center',
                marginBottom: '1.5em',
              }}>

              <h2>Soziale Werte werden vermittelt</h2>
              <p>Die  Kinder erlernen die tägliche Hygiene, wie das Händewaschen, Töpfchen- oder Toilettengang und das Zähneputzen. Die Selbständigkeit wird dabei altersgerecht gefördert, genauso wie ein faires und freundliches Miteinander in der Gruppe.</p>
            </div>
          </SectionContainer>
        </div>
      </BackgroundContentContainer>
    )
  }
}

export default Service