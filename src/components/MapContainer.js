import React from 'react'
import ReactDOM from 'react-dom'

const KRUEMELKISTE_POSITION = {
  lat: 52.54846,
  lng: 13.4653
}

class MapContainer extends React.Component {

  constructor() {
    super()
    this.loadJS = this.loadJS.bind(this)
    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;

    // Asynchronously load the Google Maps script, passing in the callback reference
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCwRVzrL4nSTZ0xkgLgkZgi7Q1TLOUoEao&callback=initMap')
  }

  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  initMap() {
    this.map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: KRUEMELKISTE_POSITION,
      zoom: 15,
    });

    var marker = new google.maps.Marker({
      position: KRUEMELKISTE_POSITION,
      map: this.map,
      title: 'Steffis Krümelkiste - Gounodstr. 101'
    });
  }

  panToHome() {
    this.map.panTo(KRUEMELKISTE_POSITION);
  }

  render() {
    return (
      <div>
        <div 
          ref='map'
          style={{
            height: this.props.height, 
            width: this.props.width,
          }}>
        </div>
      </div>
    )
  }
}

export default MapContainer