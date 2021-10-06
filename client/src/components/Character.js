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
        <div id="Character_Movement">
            <img src={AlienFWD} alt="Character" class="AlienBro" id="AlienFWD" onClick={(CharPhrase)}/>
            <img src={AlienRight} alt="Character" class="AlienBro" id="AlienRight" onClick={(CharPhrase)}/>
            <img src={AlienLeft} alt="Character" class="AlienBro" id="AlienLeft" onClick={(CharPhrase)}/>
        </div>
    )
}
export default Character;