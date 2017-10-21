import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import TextWithImageContainer from '../components/TextWithImageContainer'

//import {primaryColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'
import cartImg from '../img/in-cart.jpg'
import kidWithCarsImg from '../img/kid-cars.jpg'
import abstractRingsImg from '../img/abstract-rings.svg'
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
  margin: 1em;
`

const IconContainer = styled.div`
  min-width: 10em;
  min-height: 10em;
  width: 10em;
  height: 10em;
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
            opacity: '0.15',
            background: 'url(' + abstractRingsImg + ') top center no-repeat',
            backgroundSize: 'contain',
          }}>
        </div>

        <div>
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

          <div
            css={{
              background: '#FFC7B9',
              background: '-moz-linear-gradient(30deg, #FFE7E0 35%, #FFF7F5 35%)',
              background: '-webkit-linear-gradient(30deg, #FFE7E0 35%, #FFF7F5 35%)',
              background: 'linear-gradient(-300deg, #FFE7E0 35%, #FFF7F5 35%)',
            }}>
            <SectionContainer>
              <TextWithImageContainer image={kidWithCarsImg} imagePosition='left'>
                <span>Wir haben ein kindgerechtes, farbenfrohes Spielzimmer mit einem Kletterhäuschen, Tobe- und Kuschelmatratze und vielen Bewegungselementen. Spannende Spielelemente, wie die große Holzeisenbahn, die Murmelbahn, jede Menge Bausteine, Autos, Bücher, Spiele, Handpuppen, einfache Musikinstrumente u.s.w. wecken die kreative Neugier der Kinder.</span>
              </TextWithImageContainer>
            </SectionContainer>
          </div>

          <SectionContainer>
            <span>Grundlage für meine Arbeit ist die situationsbezogene Pädagogik, d.h. ich greife Themen, Ideen und Anregungen auf, die die Kinder in die Tagespflege mitbringen, und entwickle sie gemeinsam mit den Kindern weiter. Jedes Kind wird entsprechend seines Alters und seines Entwicklungsstandes individuell gefördert.</span>
          </SectionContainer>

          <div
            css={{
              background: '#FFD098',
              background: '-moz-linear-gradient(-30deg, #F6EFF0 65%, #F6DDE1 65%)',
              background: '-webkit-linear-gradient(-30deg, #F6EFF0 65%, #F6DDE1 65%)',
              background: 'linear-gradient(-60deg, #F6DDE1 35%, #F6EFF0 35%)',
            }}>
            <SectionContainer>
              <TextWithImageContainer image={cartImg} imagePosition='right'>
                <span>Täglich sind wir an der frischen Luft, beobachten die Natur in ihrer Vielfältigkeit und besuchen die Spielplätze in der Umgebung. Bewegung wird bei uns "groß" geschrieben. Wir singen viel und machen erste, frühe Erfahrungen mit Musik- und Klanginstrumenten. Es wird  gemalt, geknetet, gebastelt – häufig in Bezug auf die Jahreszeiten und deren typische Besonderheiten. Kinderbücher, Fingerspiele und Verse spielen für die Förderung der Sprache eine große Rolle.</span>
              </TextWithImageContainer>
            </SectionContainer>
          </div>

          <SectionContainer>
            <p>Die  Kinder erlernen die tägliche Hygiene, wie das Händewaschen, Töpfchen- oder Toilettengang und das Zähneputzen. Die Selbständigkeit wird dabei altersgerecht gefördert, genauso wie ein faires und freundliches Miteinander in der Gruppe.</p>
          </SectionContainer>
        </div>
      </BackgroundContentContainer>
    )
  }
}

export default Service