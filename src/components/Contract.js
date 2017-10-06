import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'

//import {headerColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const TableColumn = styled.div`
  flex: 1 1 auto;
  margin-bottom: 1.58rem;
  background: #f0f0f0;
  border-top: 4px solid #d0d0d0;
`

const ColumnHeader = styled.div`
  background: #e0e0e0;
  padding: 12px;
`

const ColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;

  ul, li, p {
    margin-bottom: 0;
    margin-left: 0;
  }

  ol {
    margin-bottom: 0;
    margin-left: 1rem;
  }
`

class Contract extends React.Component {
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

            <h1>Antrag beim Jugendamt</h1>
            <p>Die Betreuung bei mir erfolgt über das Jugendamt. Zunächst wird dafür ein Gutschein benötigt. Dieser kann 9 Monate vor Betreuungsbeginn (spätestens 2 Monate vorher) beim Jugendamt beantragt werden.</p>

            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',

                '@media(max-width: 800px)': {
                  flexDirection: 'column',
                }
              }}>

              <TableColumn>
                <ColumnHeader>Ihr benötigt:</ColumnHeader>

                <ColumnBody>
                  <ol>
                    <li>Antragsformular (<a href='http://www.berlin.de/ba-pankow/verwaltung/jugend/fd5-downloads.html'>Link</a>)</li>
                    <li>Unterschrift beider Sorgeberechtigter</li>
                    <li>Einkommensnachweis</li>
                    <li>Bescheinigung des Arbeitgebers</li>
                  </ol>
                </ColumnBody>
              </TableColumn>

              <TableColumn>
                <ColumnHeader>Antragsstellung an:</ColumnHeader>

                <ColumnBody>
                  <ul css={{ listStyleType: 'none', }}>
                    <li>Bezirksamt Pankow von Berlin</li>
                    <li>AG Gutschein</li>
                    <li>Fröbelstr.17/ Haus 4</li>
                    <li>10405 Berlin</li>
                  </ul>
                </ColumnBody>
              </TableColumn>

              <TableColumn>
                <ColumnHeader>Öffnungszeiten:</ColumnHeader>

                <ColumnBody>
                  <div css={{ display: 'flex' }}>
                    <div>Montag, Dienstag, Freitag:</div>
                    <div style={{ flex: '1 1 auto', marginLeft: '1rem', textAlign: 'right', }}>9 – 12 Uhr</div>
                  </div>
                  <br/>
                  <div css={{ display: 'flex' }}>
                    <div>Donnerstag:</div>
                    <div style={{ flex: '1 1 auto', marginLeft: '1rem', textAlign: 'right', }}>14 – 18 Uhr</div>
                  </div>
                </ColumnBody>
              </TableColumn>
            </div>

            <p>Vereinbart am besten einen Termin über <a href='www.berlin.de/ba-pankow/verwaltung/jugend/fachdienst5.html'>die Webite des Jugendamts Pankow</a> oder telefonisch unter 9 02 95 56 89 während der Öffnungszeiten.</p>
            <p>Die Kosten der Kinderbetreuung sind einkommensabhängig und bei Kita und Tagespflege gleich.</p>
          
          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}

export default Contract