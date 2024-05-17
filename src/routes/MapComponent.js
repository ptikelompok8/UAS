import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -2.741051,
  lng: 106.440587
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCHTlvuDTn2Oyr6b5CWbCPR2_OqwyHZ2o0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
