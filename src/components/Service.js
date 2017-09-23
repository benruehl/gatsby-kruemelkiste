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

class Service extends React.Component {
  render() {
    return (
      <BackgroundContentContainer background='white'>

        <div
          css={{
            width: '100%',
            textAlign: 'center',
          }}>
        </div>

        <SectionContainer>

          <div
            css={{
            }}>

            <h1>Individuelle und liebevolle Betreuung</h1>

            <TextWithImageContainer image={kidWithCarsImg} imagePosition='left'>
              <p>Tageskinder im Alter bis zu 3 Jahren werden von mir liebevoll und individuell betreut. Wir sind ein Nichtraucherhaushalt.</p>
              <span>Wir haben ein kindgerechtes, farbenfrohes Spielzimmer mit einem Kletterhäuschen, Tobe- und Kuschelmatratze und vielen Bewegungselementen. Spannende Spielelemente, wie die große Holzeisenbahn, die Murmelbahn, jede Menge Bausteine, Autos, Bücher, Spiele, Handpuppen, einfache Musikinstrumente u.s.w. wecken die kreative Neugier der Kinder.</span>
            </TextWithImageContainer>

            <p>Grundlage für meine Arbeit ist die situationsbezogene Pädagogik, d.h. ich greife Themen, Ideen und Anregungen auf, die die Kinder in die Tagespflege mitbringen, und entwickle sie gemeinsam mit den Kindern weiter. Jedes Kind wird entsprechend seines Alters und seines Entwicklungsstandes individuell gefördert.</p>
            
            <TextWithImageContainer image={cartImg} imagePosition='right'>
              <span>Täglich sind wir an der frischen Luft, beobachten die Natur in ihrer Vielfältigkeit und besuchen die Spielplätze in der Umgebung. Bewegung wird bei uns "groß" geschrieben. Wir singen viel und machen erste, frühe Erfahrungen mit Musik- und Klanginstrumenten. Es wird  gemalt, geknetet, gebastelt – häufig in Bezug auf die Jahreszeiten und deren typische Besonderheiten. Kinderbücher, Fingerspiele und Verse spielen für die Förderung der Sprache eine große Rolle.</span>
            </TextWithImageContainer>

            <p>Die  Kinder erlernen die tägliche Hygiene, wie das Händewaschen, Töpfchen- oder Toilettengang und das Zähneputzen. Die Selbständigkeit wird dabei altersgerecht gefördert, genauso wie ein faires und freundliches Miteinander in der Gruppe.</p>

            <div
              css={{
                textAlign: 'center',
              }}>

              <p
                css={{
                  background: '#f0f0f0',
                  borderTop: '4px solid #d0d0d0',
                  padding: '0.5em',
                }}>
                <b>Betreuungszeiten:</b> Montag - Freitag / 8.00 - 16.30 Uhr
              </p>
            </div>

          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}

export default Service