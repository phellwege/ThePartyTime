import React from 'react';
import Head from '../components/Head';
import Controls from '../components/Controls';
import Events from '../components/Events';
import Character from '../components/Character';
import Footer from '../components/Footer';
import Trumpy from '../static/ButtScratchers.gif';
import Tweak from '../static/Tweak.gif'

import '../Main.css';


export default () => {

    return (
        <div id="background">
            <Head id="Home"/>
            <Controls/>
            <Events/>
            <div is="Sketchy_characters">
            <img src={Trumpy} alt="Sketchy_trumpy" id="Sketchy_trumpy"/>
            <img src={Tweak} alt="Sketchy_tweak" id="Sketchy_tweak"/>
            </div>
            <Character/>
            <Footer/>
        </div>
    )
}

