import React from 'react'
import ReactDOM from 'react-dom'

class MapContainer extends React.Component {

  render() {
    return (
      <div css={{
        display: 'flex',
        minHeight: '30em',
      }}>
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=13.451471328735353%2C52.5439337932714%2C13.479065895080568%2C52.55298924386305&amp;layer=hot&amp;marker=52.548461752121476%2C13.465268611907959"
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