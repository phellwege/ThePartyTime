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
        const x = document.getElementById('AlienFWD') 
        const y = document.getElementById('AlienLeft')
        const z = document.getElementById('AlienRight')
        if(x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }

        if(y.style.display === 'block') {
            y.style.display = 'none';
        } else {
            y.style.display = 'block';
        }
        if(z.style.display === 'block' || z.style.display === 'none') {
            z.style.display = 'none';
        } 

    }
    function moveRight() {
    var x = document.getElementById('AlienFWD')
    var y = document.getElementById('AlienRight')
    var z = document.getElementById('AlienLeft')
    if(x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
        if(y.style.display === 'block') {
            y.style.display = 'none';
        } else {
            y.style.display = 'block';
        }
        if(z.style.display === 'block'|| z.style.display === 'none'){
            z.style.display = 'none';
        }
    }

    function moveDefault() {
        var x = document.getElementById('AlienFWD')
        var y = document.getElementById('AlienRight')
        var z = document.getElementById('AlienLeft')
        if(x.style.display === 'none') {
            x.style.display = 'block';
        } 
        if(y.style.display === 'block'){
            y.style.display = 'none';
        }
        if(z.style.display === 'block'){
            z.style.display = 'none';
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