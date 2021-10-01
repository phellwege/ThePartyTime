import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import AlienFWD from '../static/AlienFWD.gif';
import AlienRight from '../static/AlienRight.gif';
import AlienLeft from '../static/AlienLeft.gif';
import Controls from '../components/Controls';
import "../Main.css";

const Character = () => {


const [moveLeft, setMoveLeft] = useState(false);
const [moveRight, setMoveRight] = useState(false);
const [moveDefault, setMoveDefault] = useState('');

const CharPhrase = () => {
    alert(`Let's Party!`)
};

document.getElementById('LeftArrow')
document.getElementById('RightArrow')

    const MoveMe =(props)=> {

    }
    return (
        <>
        
            <img src={AlienFWD} alt="Character" class="AlienBro" onClick={(CharPhrase)}/>
        
        {/* <div class="AlienDiv" id="2">
            <img src={AlienRight} alt="Character" class="AlienBro"/>
        </div>
        <div class="AlienDiv" id="3">
            <img src={AlienLeft} alt="Character" class="AlienBro"/>
        </div> */}
        </>
    )
}
export default Character;