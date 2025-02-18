// src/components/StoreList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function StoreList({ stores, onStoreSelect }) {
  return (
    <List>
      {stores.map(store => (
        <ListItem button key={store.id} onClick={() => onStoreSelect(store)}>
          <ListItemText primary={store.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default StoreList;