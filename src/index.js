import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css'

import { red, deepPurple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary:{
     main: deepPurple[500]
    },
    secondary: {
      main:  red[900]
    } 
  },
});


ReactDOM.render(
  // necessário fazer a importação do "ThemeProvider"
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

