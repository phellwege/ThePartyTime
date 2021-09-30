import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import Left from '../static/Left.png';
import Right from '../static/Right.png';
import AlienLeft from '../static/AlienLeft.gif';
import AlienRight from '../static/AlienRight.gif';
import "../Main.css";

const Controls = () => {
    const moveLeft = () => {
        alert('<img src={AlienLeft} alt="Character" class="AlienBro"/>')
    };
    const moveRight = () => {
        alert('<img src={AlienRight} alt="Character" class="AlienBro"/>')
    };
    return (
        <>
            <div id="Controller-interface">
                <div class="Selector">
                    <h1>Select</h1>
                </div>
                <div class="Selector">
                    <img src={Left} alt="Left" id="LeftArrow" onClick={(moveLeft)}/>
                    <img src={Right} alt="Right" id="RightArrow" onClick={(moveRight)}/>
                </div>
            </div>
        </>
    )
}
export default Controls;