import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
 
function Map(){
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat:21.433920, lng:91.987030}} 
        />
    );
}
export const WrappedMap =  withScriptjs(withGoogleMap(Map));



// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC7iDh3VIGvAHIeVbnYiMI-ku7IjMUQOzY'
// })(MapContainer);
 
