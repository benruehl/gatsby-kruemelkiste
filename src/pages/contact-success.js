import React from 'react'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import Button from '../components/Button'

import {primaryColor} from '../styles/colors'

const ContactSuccess = () =>
  <div>
    <SectionContainer>
      <div
        className='materialCard1'
        css={{
          maxWidth: '30rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>

        <BackgroundContentContainer>
          <div
            css={{
              width: '100%',
              height: '100%',
              background: primaryColor,
            }}></div>
  
          <h1
            css={{
              padding: '4em 2rem 1em 2rem',
              color: 'white',
            }}>
            Ihre Nachricht wurde erfolgreich versandt
          </h1>
        </BackgroundContentContainer>

        <div
          css={{
            padding: '1em 2rem 4em 2rem',
          }}>

          <p>Vielen Dank für Ihr Interesse. Ich melde mich bei Ihnen, sobald es mir möglich ist.</p>

          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '5em',
            }}>

            <Button
              linkTo='/'
              caption='Zurück zur Hauptseite'/>
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>

export default ContactSuccess
