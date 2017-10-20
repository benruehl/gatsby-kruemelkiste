import React from 'react'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import BackgroundContentContainer from '../components/BackgroundContentContainer'
import ContactForm from '../components/ContactForm'

//import {headerColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

class Contact extends React.Component {
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}>

            <h1>Sprechen Sie mich an</h1>
            <p>Bei Fragen oder Anregungen können Sie mich gern über das Formular kontaktieren. Ich werde mich dann bei Ihnen melden. Alternativ können Sie mich auch telefonisch erreichen. Innerhalb der Woche ist das am besten zur Mittagszeit möglich.</p>

            <div
              css={{
                maxWidth: '50em',
                alignSelf: 'center',
                width: '100%',
                margin: '3em 0',
              }}>
              <ContactForm/>
            </div>

          </div>
        </SectionContainer>
      </BackgroundContentContainer>
    )
  }
}

export default Contact