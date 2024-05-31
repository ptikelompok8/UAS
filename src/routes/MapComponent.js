import React, { useState, useEffect } from 'react';
import WeatherComponent from './WeatherComponent';
import './map.css';
const locations = [
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [directionsUrl, setDirectionsUrl] = useState('');
  const API_KEY = 'AIzaSyCHTlvuDTn2Oyr6b5CWbCPR2_OqwyHZ2o0';

  useEffect(() => {
    const getPlaceDetails = async () => {
      if (selectedLocation) {
        try {
          const placeResponse = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${selectedLocation.placeId}&key=${API_KEY}`);
          const placeData = await placeResponse.json();
          setPlaceDetails(placeData.result);
        } catch (error) {
          console.error('Error fetching place details:', error);
          setPlaceDetails(null);
        }
      }
    };

    getPlaceDetails();
  }, [selectedLocation, API_KEY]);

  const handleGetDirections = () => {
    if (selectedLocation && placeDetails) {
      const destination = `${placeDetails.geometry.location.lat},${placeDetails.geometry.location.lng}`;
      setDirectionsUrl(`https://www.google.com/maps/dir/?api=1&destination=${destination}`);
    }
  };

  return (
    <div className="map-container">
      <ul>
        {locations.map((location, index) => (
          <li key={index} onClick={() => setSelectedLocation(location)}>
            {location.name}
          </li>
        ))}
      </ul>

      {selectedLocation && (
        <div>
          <h2>{selectedLocation.name}</h2>
          {placeDetails ? (
            <div>
              <p>{placeDetails.formatted_address}</p>
              <p>{placeDetails.formatted_phone_number}</p>
              <p>{placeDetails.website && <a href={placeDetails.website} target="_blank" rel="noopener noreferrer">Website</a>}</p>
              <p>Rating: {placeDetails.rating}</p>
              {placeDetails.reviews && placeDetails.reviews.length > 0 && (
                <p>{placeDetails.reviews[0].text}</p>
              )}
            </div>
          ) : (
            <p>Loading details...</p>
          )}
          <button onClick={handleGetDirections}>Get Directions</button>
        </div>
      )}

      <div className="map-responsive-container">
        <iframe
          title="Embedded Map"
          src="https://www.google.com/maps/d/embed?mid=1GYHrwsW4RLOtPDj-xKg60xWrh3Qz6nI&ehbc=2E312F"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <WeatherComponent />
    </div>
  );
};

export default Map;