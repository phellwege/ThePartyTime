import React, {useState} from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Main from './views/Main';
import Rules from './views/Rules';
import TaC from './views/TaC';
import './App.css';
import MovieTheatre from './views/MovieTheatre';
import MusicVenue from './views/MusicVenue';


function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <React.Fragment>
          <Router>
            <Main path="/"/>
            <Rules path="/Rules"/>
            <TaC path="/TaC"/>
            <MovieTheatre path="/MovieTheatre"/>
            <MusicVenue path="/MusicVenue"/>
          </Router>
      </React.Fragment>
    </div>
    </ThemeProvider>
  );
}

export default App;
