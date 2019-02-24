import React from 'react'
import ReactDOM from 'react-dom'

class MapContainer extends React.Component {

  render() {
    return (
      <div css={{
        display: 'flex',
        minHeight: '30em',
      }}>
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=13.462725877761843%2C52.54733633046878%2C13.467746973037722%2C52.54960019277862&amp;layer=hot&amp;marker=52.548471504454746%2C13.46523642539978"
          css={{
            flex: 1,
            margin: 0,
            border: 0
          }}
        />
      </div>
    )
  }
}

export default MapContainer