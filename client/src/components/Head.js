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
            props.theme.mode === 'dark' ? '3px solid #ff9800' : '3px solid black;' };
        background-color: ${props =>
            props.theme.mode === 'dark' ? 'rgb(54, 54, 54)' : 'darkgray'};
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 25px #ff9800' : 'none'};
    }
    #navigation {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #38a9ad' : '0 0 8px rgba(33,33,33,1)'};
    }
    #navigation li a.active {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 2.5px #38a9ad' : 'none'};
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
    #LogoImg {
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 25px #38a9ad' : 'none'};
    }
    #MovieBoard {
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 25px white' : 'none'};
        color: ${props =>
            props.theme.mode === 'dark' ? '#3F51B5' : '#6D4C41'};
    }
    #MovieBoard a {
        color: ${props =>
            props.theme.mode === 'dark' ? 'black' : 'rgba(33,33,33,1)'};
        text-shadow: ${props => 
                props.theme.mode === 'dark' ? '0 0 5px white' : 'none'};
    }
    #Controller-interface2 {
        background-color: ${props =>
            props.theme.mode === 'dark' ? 'rgb(54, 54, 54)' : 'darkgray'};
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 25px #ff9800' : 'none'};
        border: ${props => 
            props.theme.mode === 'dark' ? '3px solid #ff9800' : '3px solid black;' };
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