import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
 
function Map(){
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat:21.433920, lng:91.987030}} 
        > 
        <Marker position={{lat:21.433920, lng:91.987030}} />
        </GoogleMap>
        
        
    );
}
export const WrappedMap =  withScriptjs(withGoogleMap(Map));



// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC7iDh3VIGvAHIeVbnYiMI-ku7IjMUQOzY'
// })(MapContainer);
 
