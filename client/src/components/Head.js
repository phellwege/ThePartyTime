import React, { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Toggle from '../Toggle/DayNight_Mode';
import '../Head.css';

// the first set is dark mode the second is light mode
// dark contrast color b1b1b3
// light contrast color #111
const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => 
            props.theme.mode === 'dark' ? '#2a2a2e' : '#eeeeee'};
    color: ${props => 
        props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
    transition: ${props => 
        props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
    }

    };
`

const Head = () => {
    const [toggled, setToggled] = useState(false);
    const [theme, setTheme] = useState({mode: 'light'});
    const handleClick =() => {
        setToggled((s)=>!s);
        setTheme(theme.mode === 'dark' ? {mode: 'light'}: {mode:'dark'});
}

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div id='headspace'>
            <div>
                <h1>icon</h1>
            </div>
            <div>
                <h1>Party Time</h1>
                <p>party</p>
            </div>
            <div className="Mode">
                <Toggle toggled={toggled} onClick={handleClick} />
                <p>{theme.mode === 'dark' ? "Night" : "Day"}</p>
            </div>
        </div>
        </ThemeProvider>
    )
}
export default Head;