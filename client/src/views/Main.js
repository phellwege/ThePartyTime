import React from 'react';
import Head from '../components/Head';
import Controls from '../components/Controls';
import Events from '../components/Events';
import Character from '../components/Character';
import Footer from '../components/Footer';

import '../Main.css';


export default () => {

    return (
        <div id="background">
            <Head id="Home"/>
            <Controls/>
            <Events/>
            <Character/>
            <Footer/>
        </div>
    )
}

