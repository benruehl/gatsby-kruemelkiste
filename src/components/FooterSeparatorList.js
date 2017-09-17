import React from 'react'

class FooterSeparatorList extends React.Component {
  render(children) {
    var items = [];
    for (var i=0; i < this.props.children.length; i++) {
        items.push(
          this.props.children[i]
        );

        if (i != this.props.children.length - 1) {
          items.push(
            <span css={{ 
              color: 'white',
              margin: '0 1rem',
              '@media(max-width: 600px)': {
                display: 'none',
              },
            }}>|</span>
          );
        }
    }

    return (
      <div
        css={{
          fontSize: '11',
          margin: '0 11px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',

          '& span, a': {
            lineHeight: '1.5',
            marginTop: '0.5em',
            marginBottom: '0.5em',
          },

          '@media(max-width: 600px)': {
            flexDirection: 'column',
          }
        }}>

        {items}
      </div>
    )
  }
}

export default FooterSeparatorList