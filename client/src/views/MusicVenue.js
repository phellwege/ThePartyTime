import "../Main.css";
import Head from '../components/Head';
import MusicControls from '../components/MusicControls';
import DJ from '../static/DJ.gif';
import Crowd from '../static/Crowd.gif';

const MusicVenue = () => {
    return (
        <div id="Music_background"
            
        >

        <Head/>
        <div class="OnStage">
            <div id="scrolling_text">
                <h4>Artist</h4>
            </div>
            <img src={DJ} alt="Music Dj Gif"/>
            
        </div>
        <MusicControls/>
        <img src={Crowd} alt="Crowd" id="Loud_Crowd"/>

        </div>
    )
}
export default MusicVenue;