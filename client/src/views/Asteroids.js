import "../Events.css";
import Head from '../components/Head';
import Cockpit from '../static/Cockpit.gif';
import Shockpit from '../static/Shockpit.gif';

const DrivingThisBeast = () => {
    alert(`We have to stop the asteroids before they reach us!`)
}
const Bzzzt = () => {
    alert(`Bzzzt Bzzzt : Ouch`)
}
const Asteroids = () => {
    return (
        <>
        <Head/>
        <div id="Cockpit_View">
            <div id="Asteroids_Game_Window">

            </div>
            <div id="WarningSystem">
                <h2>Warning</h2>
                <p>Critical System Malfunction Detected</p>
                    <br/>
                <p>Please Exit the Control Room</p>
            </div>
            <div id="Alien_Driver">
                <img src={Cockpit} alt="Alien Driving SpaceShip" id="Driving" onClick={DrivingThisBeast}/>
                <img src={Shockpit} alt="Malfunctioning cockpit" id="Shockpit" onClick={Bzzzt}/>
            </div>
        </div>
        </>
    )
}
export default Asteroids;