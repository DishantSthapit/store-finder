// src/components/Map.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { Container, TextField, Grid, Paper, Typography, Box } from '@mui/material';
const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const defaultCenter = {
  lat: -33.868820,
  lng: 151.209296
};

function Map({ stores, selectedStore, userLocation }) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(12);
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    if (selectedStore) {
      setCenter({ lat: selectedStore.lat, lng: selectedStore.lng });
      setZoom(15);
    }
  }, [selectedStore]);

  const handleMarkerClick = (store) => {
    setActiveMarker(store.id);
  };

  const handleInfoWindowClose = () => {
    setActiveMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {stores.map(store => (
          <MarkerF
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            onClick={() => handleMarkerClick(store)}
          >
            {activeMarker === store.id && (
              <InfoWindow onCloseClick={handleInfoWindowClose}>
                <div>
                  <Typography variant="h6">{store.name}</Typography>
                  <Typography variant="body2">Address: {store.address}</Typography>
                  <Typography variant="body2">Contact: {store.contact}</Typography>
                  <Typography variant="body2">Opening Hours: {store.hours}</Typography>
                </div>
              </InfoWindow>
            )}
          </MarkerF>
        ))}
        {userLocation && (
          <MarkerF
            position={userLocation}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;