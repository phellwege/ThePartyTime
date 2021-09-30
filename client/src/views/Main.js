import React from 'react';
import Head from '../components/Head';
import Controls from '../components/Controls';
import Character from '../components/Character';
import Footer from '../components/Footer';
import '../Main.css';


export default () => {

    return (
        <div id="background">
            <Head/>
            <Controls/>
            <Character/>
            <Footer/>
        </div>
    )
}

