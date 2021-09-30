import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import AlienFWD from '../static/AlienFWD.gif';
import AlienRight from '../static/AlienRight.gif';
import AlienLeft from '../static/AlienLeft.gif';
import "../Main.css";

const Character = () => {


const [moveLeft, setMoveLeft] = useState(false);
const [moveRight, setMoveRight] = useState(false);
const [moveDefault, setMoveDefault] = useState('');

const CharPhrase = () => {
    alert('fdslkjahfdahsf jkfls;dajfj fakjsl;j')
};

document.getElementById('LeftArrow')
document.getElementById('RightArrow')

    const MoveMe =(props)=> {

    }
    return (
        <>
        
        <img src={AlienFWD} alt="Character" class="AlienBro" onClick={(CharPhrase)}/>
        {/* <img src={AlienRight} alt="Character" class="AlienBro"/>
        <img src={AlienLeft} alt="Character" class="AlienBro"/> */}
        </>
    )
}
export default Character;