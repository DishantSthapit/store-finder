// src/components/StoreFinder.js
import React, { useState, useEffect } from 'react';
import Map from './Map';
import StoreList from './StoreList';
import { stores } from '../stores';
import { Container, TextField, Grid, Paper, Typography, Box } from '@mui/material';

function StoreFinder() {
  const [search, setSearch] = useState('');
  const [selectedStore, setSelectedStore] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Find a Restuarant
      </Typography>
      <TextField
        label="Search stores"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#F4F4F4' }}>
            <Map stores={filteredStores} selectedStore={selectedStore} userLocation={userLocation} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#F4F4F4' }}>
            <StoreList stores={filteredStores} onStoreSelect={handleStoreSelect} />
          </Paper>
          {selectedStore && (
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#F4F4F4' }}>
              <Typography variant="h6" gutterBottom>
                {selectedStore.name}
              </Typography>
              <Typography variant="body1">
                Address: {selectedStore.address}
              </Typography>
              <Typography variant="body1">
                Contact: {selectedStore.contact}
              </Typography>
              <Typography variant="body1">
                Opening Hours: {selectedStore.hours}
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default StoreFinder;