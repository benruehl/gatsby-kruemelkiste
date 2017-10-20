import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5em;

  input {
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
`

class Contact extends React.Component {
  render() {
    return (
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
            ref='nameInput'/>
        </InputGroup>
        
        <InputGroup>
          <label htmlFor='mailInput'>
            Email
          </label>
          <input 
            className='materialCard1'
            type='text'
            id='mailInput'
            ref='mailInput'/>
        </InputGroup>

        <div
          css={{

          }}>

          <Button caption='Abschicken'/>
        </div>
      </div>
    )
  }
}

export default Contact