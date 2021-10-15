import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Logo4 from '../static/Logo4.png';
import DayBkg from '../static/FinalDayBkg.gif';
import NightBkg from '../static/FinalNightBkg.gif';
import PaintBkg from '../static/PaintBkg.gif';
import PaintNightBkg from '../static/PaintNightBkg.gif';
import MusicBkg from '../static/MusicBkg.gif';
import MusicBkgDay from '../static/MusicDayBkg.gif';
import MovieBkg from '../static/MovieBkg.gif';
import MovieDayBkg from '../static/MovieDayBkg.gif';
import Toggle from '../Toggle/DayNight_Mode';
import '../Head.css';

// the first set is dark mode, the second is light mode
// dark contrast color b1b1b3
// light contrast color #111
// backgrounds are 320x180 pixels
// images are 128x128 pixels

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => 
            props.theme.mode === 'dark' ? '#2a2a2e' : '#eeeeee'};
        color: ${props => 
            props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 1.5s ease-in-out': 'all 1.5s ease-in-out'};
    }
    #background {
        background-image: ${props => 
            props.theme.mode === 'dark' ? `url(${DayBkg})` : `url(${NightBkg})`}; 
            transition: ${props => 
                props.theme.mode === 'dark' ? 'all 1.5s ease-in-out': 'all 1.5s ease-in-out'};
    }
    #Paint_Wrapper {
        background-image: ${props => 
            props.theme.mode === 'dark' ? `url(${PaintNightBkg})` : `url(${PaintBkg})`}; 
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 1.5s ease-in-out': 'all 1.5s ease-in-out'};
    }
    h1 {
        color: ${props => 
            props.theme.mode === 'dark' ? 'white' : 'none' };
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px #f5f5f5' : 'none' };
    }
    #Music_background {
        background-image: ${props => 
            props.theme.mode === 'dark' ? `url(${MusicBkg})` : `url(${MusicBkgDay})` };
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 1.5s ease-in-out': 'all 1.5s ease-in-out'};
    }
    #Music_background #under-banner {
        color: ${props => 
            props.theme.mode === 'dark' ? 'hotpink' : 'none' };
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 5px hotpink' : 'none' };
    }
    #Music_background h1 {
        color: ${props => 
            props.theme.mode === 'dark' ? 'hotpink' : '#C2185B' };
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 15px hotpink' : 'none' };
    }
    .OnStage {
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'hidden'};
    }
    #Loud_Crowd {
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'hidden'};
    }
    #under-banner {
        color: ${props => 
            props.theme.mode === 'dark' ? 'white' : 'none' };
        text-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 5px #f5f5f5' : 'none' };
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
            props.theme.mode === 'dark' ? '#2a2a2e' : '#b1b1b3'};
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
    #robo_kiosk {
        display: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'none'};
    }
    #angry_jan {
        display: ${props => 
            props.theme.mode === 'dark' ? 'none' : 'block'};
    }
    #octo_pop {
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'hidden'};
    }
    #Movie_Wrap {
        background-image: ${props => 
            props.theme.mode === 'dark' ? `url(${MovieBkg})` : `url(${MovieDayBkg})`};
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 1.5s ease-in-out': 'all 1.5s ease-in-out'};
    }
    #MovieBoard {
        box-shadow: ${props => 
            props.theme.mode === 'dark' ? '0 0 25px white' : 'none'};
        color: ${props =>
            props.theme.mode === 'dark' ? '#3F51B5' : 'darkblue'};
        font-size: ${props =>
            props.theme.mode === 'dark' ? '1.25em' : '1.25em'};
        display: ${props =>
            props.theme.mode === 'dark' ? 'block' : 'none'};
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
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'hidden'};
    }
    #ClosedSign {
        display: ${props => 
            props.theme.mode === 'dark' ? 'none' : 'block'};
    }
    #Artist {
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'hidden' : 'block'};
    }
    #Art {
        visibility: ${props => 
            props.theme.mode === 'dark' ? 'hidden' : 'block'};
    }
    #Driving {
        display: ${props => 
            props.theme.mode === 'dark' ? 'none' : 'block'};
    }
    #Shockpit {
        display: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'none'};
    }
    #Asteroids_Game_Window {
        display: ${props => 
            props.theme.mode === 'dark' ? 'none' : 'block'};
    }
    #WarningSystem {
        display: ${props => 
            props.theme.mode === 'dark' ? 'block' : 'none'};
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
                <p id="under-banner">party</p>
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