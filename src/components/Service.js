import React from 'react'

import kidBallPitImg from '../img/kid-ball-pit.jpg'
import kidPaintingImg from '../img/kid-painting.jpg'
import kidCarsImg from '../img/kid-cars.jpg'
import SectionContainer from '../components/SectionContainer'
import PrimaryBackgroundContainer from '../components/PrimaryBackgroundContainer'

//import {headerColor} from '../styles/colors'
import strings from '../../data/strings'

class Service extends React.Component {
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

                <figure
                  css={{
                    width: '100%',
                    flex: '1 1 auto',
                    border: '5px solid white',
                    marginRight: '10px',
                  }}>
                  <img src={kidBallPitImg} alt="child in ball pit"/>
                </figure>

                <figure
                  css={{
                    width: '100%',
                    flex: '1 1 auto',
                    border: '5px solid white',
                    marginRight: '10px',
                  }}>
                  <img src={kidPaintingImg} alt="child in ball pit"/>
                </figure>

                <figure
                  css={{
                    width: '100%',
                    flex: '1 1 auto',
                    border: '5px solid white',
                  }}>
                  <img src={kidCarsImg} alt="child in ball pit"/>
                </figure>

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

export default Service