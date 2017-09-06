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
            <span css={{ color: 'white', margin: '0 1rem' }}>|</span>
          );
        }
    }

    return (
      <div
        css={{
          fontSize: '11',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        {items}
      </div>
    )
  }
}

export default FooterSeparatorList