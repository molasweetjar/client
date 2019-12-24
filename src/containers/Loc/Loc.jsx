import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={{
        lat: -2.9759017,
        lng: 104.7372071
      }}
      zoom={20}>
    
        <Marker onClick={this.onMarkerClick}
                name={'Mola Sweet Jar'} />
  
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Mola Sweet Jar</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyDBY1S_e5xC0b0ZdZeosB8DEHZVNAAmmUc' })(MapContainer)