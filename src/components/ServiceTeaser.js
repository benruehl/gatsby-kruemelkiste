import React from 'react'
import styled from 'styled-components'

import kidBallPitImg from '../img/kid-ball-pit.jpg'
import kidPaintingImg from '../img/kid-painting.jpg'
import kidCarsImg from '../img/kid-cars.jpg'
import SectionContainer from '../components/SectionContainer'
import PrimaryBackgroundContainer from '../components/PrimaryBackgroundContainer'

//import {headerColor} from '../styles/colors'
import strings from '../../data/strings'

const ImageWrapper = styled.figure`
  max-width: 100%;
  min-width: 0;
  flex: 1 1 auto;
  border: 5px solid white;
  margin-right: 10px;
`

class ServiceTeaser extends React.Component {
  render() {
    return (
      <div>
        <PrimaryBackgroundContainer>
          <SectionContainer background='transparent'>

            <h1 css={{ color: 'white' }}>
              Mein Angebot
            </h1>

            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'no-wrap',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}>

              <div
                css={{
                  color: 'white',
                }}>

                <p>Tageskinder im Alter bis zu 3 Jahren werden von mir liebevoll und individuell betreut. Wir sind ein Nichtraucherhaushalt.</p>
                <p>Wir haben ein kindgerechtes, farbenfrohes Spielzimmer mit einem Kletterhäuschen, Tobe- und Kuschelmatratze und vielen Bewegungselementen. Spannende Spielelemente ,wie die große Holzeisenbahn, die Murmelbahn, jede Menge Bausteine, Autos, Bücher, Spiele, Handpuppen, einfache Musikinstrumente u.s.w. wecken die kreative Neugier der Kinder.</p>
                <p>Grundlage für meine Arbeit ist die situationsbezogene Pädagogik, d.h. ich greife Themen, Ideen und Anregungen, die die Kinder in die Tagespflege mitbringen, auf und entwickle sie gemeinsam mit den Kindern weiter. Jedes Kind wird entsprechend seines Alters und seines Entwicklungsstandes individuell gefördert.</p>
                <p>Täglich sind wir an der frischen Luft, beobachten die Natur in ihrer Vielfältigkeit und besuchen die Spielplätze in der Umgebung. Bewegung wird bei uns "groß" geschrieben.Wir singen viel und machen erste, frühe Erfahrungen mit Musik- und Klanginstrumenten. Es wird  gemalt, geknetet, gebastelt – häufig in Bezug auf die Jahreszeiten und deren typische Besonderheiten. Kinderbücher, Fingerspiele und Verse spielen für die Förderung der deutschen Sprache eine große Rolle.</p>
                <p>Die  Kinder erlernen die tägliche Hygiene, wie das Händewaschen, Töpfchen- oder Toilettengang und das Zähneputzen. Die Selbständigkeit wird dabei altersgerecht gefördert, genauso wie ein faires und freundliches Miteinander in der Gruppe.</p>

              </div>

              <div 
                css={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  marginTop: '2rem',
                  marginBottom: '-12rem',
                }}>

                <ImageWrapper>
                  <img src={kidBallPitImg} alt="child in ball pit"/>
                </ImageWrapper>

                <ImageWrapper>
                  <img src={kidPaintingImg} alt="child painting"/>
                </ImageWrapper>

                <ImageWrapper>
                  <img src={kidCarsImg} alt="child playing with cars"/>
                </ImageWrapper>

              </div>
            </div>
            
          </SectionContainer>
        </PrimaryBackgroundContainer>

        <div
          css={{
            minHeight: '7rem',
            width: '100%',
            background: 'white',
          }}>
        </div>
      </div>
    )
  }
}

export default ServiceTeaser