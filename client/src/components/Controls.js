import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import Left from '../static/Left.png';
import Pause from '../static/pause.png';
import Right from '../static/Right.png';
import AlienLeft from '../static/AlienLeft.gif';
import AlienRight from '../static/AlienRight.gif';
import AlienFWD from '../static/AlienFWD.gif';
import Character from '../components/Character';
import "../Main.css";

const Controls = () => {
    const [move, setMove] = useState({direction: 'FWD'});
    const moveLeft = () => {
        setMove(move.direction === 'FWD' ? {direction: 'FWD'}:{direction: 'Left'});
        this.move(`${<img src={AlienLeft} alt="Character" class="AlienBro"/>}`);
    };
    const moveRight = () => {
        setMove(move.direction === 'FWD' ? {direction: 'FWD'}:{direction: 'Right'});
        this.move(`${<img src={AlienRight} alt="Character" class="AlienBro"/>}`);
    };
    const moveDefault = () => {
        setMove(move.direction === 'FWD' ? {direction: 'FWD'}:{direction: 'FWD'});
        this.move(`${<img src={AlienFWD} alt="Character" class="AlienBro"/>}`);
    };

    return (
        <>
            <div id="Controller-interface">
                <h6>Controls</h6>
                <div class="Selector">
                    <h1>Select</h1>
                </div>
                <br/>
                <div class="Selector">
                    <img src={Left} alt="Left" id="LeftArrow" onClick={(moveLeft)}/>
                    <img src={Pause} alt="Pause" id="PauseButton" onClick={(moveDefault)}/>
                    <img src={Right} alt="Right" id="RightArrow" onClick={(moveRight)}/>
                </div>
            </div>
        </>
    )
}
export default Controls;