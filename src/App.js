import React from 'react';
import './App.css';
import Home from './components/Home'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightGreen[500]
    },
    icons:{
      main: '#4caf50',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
