import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

//import {headerColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const DailyItem = styled.div`
  display: flex;
  flex-direction: row;
  background: #f7f5f2;
  

  &:nth-child(even) {
    background: #fffcf9;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    
    &:not(:first-child) {
      border-top: 4px solid #d0d0d0;
    }
  }
`

const ItemTime = styled.div`
  flex: 1 1 0;
  text-align: right;
  padding: .5em 2vw;

  @media (max-width: 640px) {
    text-align: center;
    padding-bottom: .5em;
    background: #e0e0e0;
  }
`

const ItemActivity = styled.div`
  flex: 3 3 0;
  padding: .5em 2vw;
  font-weight: bold;
`

const ActivityDescription = styled.div`
  font-weight: normal;
`

class DailyRoutine extends React.Component {
  render() {
    return (
      <BackgroundContentContainer background='white'>

        <div
          css={{
            width: '100%',
            height: '100%',
            background: 'repeating-linear-gradient(45deg, #FFF7F5, #FFF7F5 10px, #FFF2EF 10px, #FFF2EF 20px)',
          }}>
        </div>

        <SectionContainer>

          <div>

            <h1>Tagesablauf</h1>

            <div 
              className='materialCard1'
              css={{
                padding: '.5em',
                marginBottom: '2em',
              }}>

              <div
                className='primaryBackground'
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '8px',
                }}>

                <DailyItem>
                  <ItemTime>8.00 - 9.30	Uhr</ItemTime>
                  <ItemActivity>
                    Begrüßung der Kinder
                    <ActivityDescription>
                      Aufgreifen von Themen und Dingen, die die Kinder mitbringen und bewegen;<br/>
                      Kleine Beschäftigungen wie Singspiele, Lesen, Malen, Puzzlen, Bauen mit Bausteinen, Basteln, Toben etc.
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>9.30 - 9.45	Uhr</ItemTime>
                  <ItemActivity>
                    Obstfrühstück
                    <ActivityDescription>
                      Bei sehr schönem Wetter gibt's manchmal auch Obstpicknicks draußen.
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>ab 10.00	Uhr</ItemTime>
                  <ItemActivity>
                    Wir sind draußen
                    <ActivityDescription>
                      Spielplatz, Natur beobachten, Pfützen patschen, Laub fegen usw.
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>11.15 - 11.30	Uhr</ItemTime>
                  <ItemActivity>
                    Mittagessen
                    <ActivityDescription>
                      selbstgekocht & lecker ...
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>11.30 - 12.00	Uhr</ItemTime>
                  <ItemActivity>
                    Vorbereitung auf die Mittagsruhe
                    <ActivityDescription>
                      Hygiene, Anziehen der Schlafsäckchen, Bettgeschichte ...
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>12.00 - 13.30	Uhr</ItemTime>
                  <ItemActivity>Mittagsruhe</ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>13.30 - 14.30	Uhr</ItemTime>
                  <ItemActivity>Individuelles Erwachen, freies Spiel</ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>14.30 - 15.00	Uhr</ItemTime>
                  <ItemActivity>Freies Spiel, Singspiele, Buch lesen, Toben o.ä.</ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>15.00 - 15.15	Uhr</ItemTime>
                  <ItemActivity>
                    Vesper
                    <ActivityDescription>
                      Im Sommer vespern wir gelegentlich draußen.
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>15.15 - 15.45	Uhr</ItemTime>
                  <ItemActivity>Kleine Beschäftigungen am Tisch oder freies Spiel</ItemActivity>
                </DailyItem>
                <DailyItem>
                  <ItemTime>15.45 - 16.00	Uhr</ItemTime>
                  <ItemActivity>
                    Wir sind auf dem Spielplatz im Hof
                    <ActivityDescription>
                      Bei schlechtem Wetter oder im Winter spielen wir drinnen.
                    </ActivityDescription>
                  </ItemActivity>
                </DailyItem>
              </div>
            </div>

            <p>Der Tagesablauf versteht sich als Rahmen. Die Zeiten können je nach Alter der Kinder, nach Jahreszeit und Wettersituation variieren.</p>

          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}

export default DailyRoutine