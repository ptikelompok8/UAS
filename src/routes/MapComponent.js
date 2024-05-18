import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -2.133333,
  lng: 106.116669
};

const locations = [
  { name: 'Tikus Beach', position: { lat: -1.885932568659634, lng: 106.17590183521659 } },
  { name: 'Tanjung Tinggi Beach', position: { lat: -2.551686542833416, lng: 107.7137724453313 } },
  { name: 'Pulau Lengkuas', position: { lat: -2.5323899939506287, lng: 107.60042907930213 } }
];

const Map = () => {
  const [selected, setSelected] = React.useState(null);

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
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            onClick={() => setSelected(location)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => setSelected(null)}
          >
            <div>{selected.name}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
