import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  flex: 1 1 0;
  align-self: center;
  border: 4px solid #d0d0d0;
  padding: 4px;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`

function ConditionalImageLeft(props) {
  if (props.imagePosition == 'left') {
    return (
      <ImageWrapper 
        css={{
          marginRight: 'calc(1em + 3vw)',
  
          '@media(max-width: 640px)': {
            margin: '0',
            marginBottom: '1.58em',
          }
        }}>
  
        <Image src={props.image}/>
  
      </ImageWrapper>
    );
  } else {
    return null;
  }
}

function ConditionalImageRight(props) {
  if (props.imagePosition == 'right') {
    return (
      <ImageWrapper 
        css={{
          marginLeft: 'calc(1em + 3vw)',
  
          '@media(max-width: 640px)': {
            margin: '0',
            marginTop: '1.58em',
          }
        }}>
  
        <Image src={props.image}/>
  
      </ImageWrapper>
    );
  } else {
    return null;
  }
}

class TextWithImageContainer extends React.Component {
  render(children) {
    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',

          '@media(max-width: 640px)': {
            flexDirection: 'column',

            '> div': {
              flexBasis: 'auto!important',
            }
          }
        }}>

        <ConditionalImageLeft image={this.props.image} imagePosition={this.props.imagePosition}/>

        <div
          css={{
            flex: '2 2 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

          {this.props.children}

        </div>

        <ConditionalImageRight image={this.props.image} imagePosition={this.props.imagePosition}/>
        
      </div>
    )
  }
}
  

export default TextWithImageContainer