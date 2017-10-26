import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import Button from '../components/Button'
import strings from '../../data/strings'

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5em;

  input, textarea {
    flex: 1 1 auto;
    margin-left: 1em;
    border: 0 solid transparent;
    padding: .5em;

    :hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    :focus {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      outline: none;
    }
  }

  label {
    text-align: right;
    flex-basis: 4.6em;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;

    input, textarea {
      margin-left: 0;
    }

    label {
      text-align: left;
      flex-basis: auto;
    }
  }
`

class Contact extends React.Component {

  submit() {
    var formData = {
      name: ReactDOM.findDOMNode(this.refs.nameInput).value,
      mail: ReactDOM.findDOMNode(this.refs.mailInput).value,
      message: ReactDOM.findDOMNode(this.refs.messageInput).value,
    }

    if (formData.message != '' && formData.message.trim() == '') {
      return false;
    }

    this.submitElement.click()
  }

  render() {
    return (
      <form
        action={'https://formspree.io/' + strings.emailAddress}
        method="POST">

        <input type="hidden" name="_language" value="de" />
        <input type="hidden" name="_subject" value="Interesse an der Krümelkiste" />
        <input type="hidden" name="_next" value="//steffis-kruemelkiste.netlify.com/contact-success" />

        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>

          <InputGroup>
            <label htmlFor='nameInput'>
              Name
            </label>
            <input 
              className='materialCard1'
              type='text'
              id='nameInput'
              name='name'
              ref='nameInput'/>
          </InputGroup>
          
          <InputGroup>
            <label htmlFor='mailInput'>
              E-Mail
            </label>
            <input 
              className='materialCard1'
              type='email'
              id='mailInput'
              name='_replyto'
              ref='mailInput'/>
          </InputGroup>

          <InputGroup>
            <label 
              htmlFor='messageInput' 
              css={{
                alignSelf: 'flex-start',
                marginTop: '.5em',
              }}>
              Nachricht
            </label>
            <textarea 
              className='materialCard1'
              type='text'
              id='messageInput'
              name='message'
              ref='messageInput'
              rows='5'
              maxlength='1000'
              required/>
          </InputGroup>

          <p
            css={{
              color: '#a0a0a0',
              textAlign: 'justify',
              marginTop: '1em',
            }}>
            Beim Abschicken werden Sie zum Schutz vor Spam kurzzeitig an den externen Dienst Formspree weitergeleitet. Danach kehren Sie automatisch hierher zurück. Die eingegebenen Daten werden von mir nicht an Dritte weitergegeben.
          </p>

          <div
            css={{
              marginTop: '2em',
            }}>

            <input 
              type='submit'
              ref={input => this.submitElement = input} 
              value='Abschicken'
              style={{ display: 'none' }}/>

            <Button 
              caption='Abschicken'
              onClick={this.submit.bind(this)}/>
          </div>
        </div>
      </form>
    )
  }
}

export default Contact