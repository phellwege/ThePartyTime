import "../Events.css";
import {Link} from '@reach/router';
import Head from '../components/Head';
import Footer from '../components/Footer';
import Cockpit from '../static/Cockpit.gif'
const Asteroids = () => {
    return (
        <>
        <Head/>
        <div id="Cockpit_View">
            <div id="Asteroids_Game_Window">

            </div>
            <div id="Alien_Driver">
                <img src={Cockpit} alt="Alien Driving SpaceShip" id="Driving"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Asteroids;