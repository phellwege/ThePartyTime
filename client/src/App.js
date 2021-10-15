import React, {useState} from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Main from './views/Main';
import Rules from './views/Rules';
import TaC from './views/TaC';
import './App.css';
import Movie1 from './views/Movie1';
import Movie2 from './views/Movie2';
import Movie3 from './views/Movie3';
import Movie4 from './views/Movie4';
import Movie5 from './views/Movie5';
import Movie6 from './views/Movie6';
import Paint from './views/Paint';
import Asteroids from './views/Asteroids';
import MovieLobby from './views/MovieLobby';
import MusicVenue from './views/MusicVenue';
import Sketchy from './views/Sketchy';

function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <React.Fragment>
          <Router basename={process.env.PUBLIC_URL}>
            <Main path="/"/>
            <Rules path="/Rules"/>
            <TaC path="/TaC"/>
            <MovieLobby path="/MovieTheatre"/>
            <Movie1 path="/Movie1"/>
            <Movie2 path="/Movie2"/>
            <Movie3 path="/Movie3"/>
            <Movie4 path="/Movie4"/>
            <Movie5 path="/Movie5"/>
            <Movie6 path="/Movie6"/>
            <Paint path="/Paint"/>
            <Asteroids path="/Asteroids"/>
            <MusicVenue path="/MusicVenue"/>
            <Sketchy path="/Sketchy"/>
          </Router>
      </React.Fragment>
    </div>
    </ThemeProvider>
  );
}

export default App;
