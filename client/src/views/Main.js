import React from 'react';
import Head from '../components/Head'
import Controls from '../components/Controls'
import Footer from '../components/Footer'
import '../Main.css';


export default () => {

    return (
        <div id="background">
            <Head/>
            <Controls/>
            <Footer/>
        </div>
    )
}

