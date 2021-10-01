import React, { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Logo4 from '../static/Logo4.png';
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
    #footer_links a {
        color: ${props => 
            props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
    }
    .Selector {
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #ff9800' : 'none' };
        color: ${props => 
            props.theme.mode === 'dark' ? '#ff9800' : 'none' };
    }
    .Selector a {
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #ff9800' : 'none' };
        color: ${props => 
            props.theme.mode === 'dark' ? '#ff9800' : 'black' };
    }
    #Controller-interface {
        border: ${props => 
            props.theme.mode === 'dark' ? '1px solid #ff9800' : '1px solid black;' };
    }
    #navigation li a:hover:not(.active) {
        background-color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#5499C7'};
        color: ${props =>
            props.theme.mode === 'dark' ? 'rgb(255, 55, 55)' : 'white'};
        border: ${props =>
            props.theme.mode === 'dark' ? '1px solid darkgreen' : '1px solid black'};
    }
    #navigation {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #ff9800' : '0 0 8px rgba(33,33,33,1)'};
    }
    #navigation li a.active {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 4px 2px -2px #ff9800' : 'none'};
    }
    #scrolling_text {
        background-color: ${props =>
            props.theme.mode === 'dark' ? 'darkgray' : '#2a2a2e'};
        color: ${props =>
            props.theme.mode === 'dark' ? 'white' : '#b1b1b3'};
    }
    .ExitSign {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : 'rgba(33,33,33,1)'};
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : 'none'};
    }
    #LeftExit {
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : 'none'};
    }
    #RightExit {
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : 'none'};
    }
    #Screen {
    box-shadow: ${props => 
        props.theme.mode === 'dark' ? '0 0 25px white' : 'none'};
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
            <div id="Logo">
                <a href="/">
                    <img src={Logo4} alt="Logo4" id="LogoImg"/>
                </a>
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