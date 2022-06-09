import React, {useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './views/Main';
import Rules from './views/Rules'
import './App.css';


function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/Rules" element={<Rules/>}/>
          </Routes>
      </React.Fragment>
    </div>
    </ThemeProvider>
  );
}

export default App;
