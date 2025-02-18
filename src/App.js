import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import StoreFinder from './components/StoreFinder';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{  boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src="/dominos.png" alt="Domino's Logo" style={{ height: '40px' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Domino's Store Finder
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="login">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <StoreFinder />
      </Container>
    </div>
  );
}

export default App;