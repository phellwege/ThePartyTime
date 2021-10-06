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
    function moveLeft() {
        var x = document.getElementById('AlienFWD') 
        if(x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }

        var y = document.getElementById('AlienLeft')
        if(y.style.display === 'none') {
            y.style.display = 'block';
        } else {
            y.style.display = 'none';
        }

        var z = document.getElementById('AlienRight')
        if(z.style.display === 'block') {
            z.style.display = 'none';
        } else {
            z.style.display = 'block';
        }
    }
    function moveRight() {
    const x = document.getElementById('AlienFWD')
    if(x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var y = document.getElementById('AlienRight')
        if(y.style.display === 'none') {
            y.style.display = 'block';
        } else {
            y.style.display = 'none';
        }
    }
    function moveDefault() {
        const x = document.getElementById('AlienFWD')
        if(x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

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