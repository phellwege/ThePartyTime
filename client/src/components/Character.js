import React from 'react';
import AlienFWD from '../static/AlienFWD.gif';
import AlienRight from '../static/AlienRight.gif';
import AlienLeft from '../static/AlienLeft.gif';
import "../Main.css";

const Character = () => {

const CharPhrase = () => {
    alert(`Let's Party!`)
};

    return (
        <>
        <div id="Character_Movement">
            
            <img src={AlienFWD} alt="Character" class="AlienBro" id="AlienFWD" onClick={(CharPhrase)}/>
            <img src={AlienRight} alt="Character" class="AlienBro" id="AlienRight" onClick={(CharPhrase)}/>
            <img src={AlienLeft} alt="Character" class="AlienBro" id="AlienLeft" onClick={(CharPhrase)}/>
        
        </div>
        {/* <div id="Moving_Panel">
        </div> */}
            </>
    )
}
export default Character;