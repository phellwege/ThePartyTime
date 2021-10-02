import "../Main.css";
import Head from '../components/Head';
import Footer from '../components/Footer';
import MusicControls from '../components/MusicControls';
import DJ from '../static/DJ.gif';
import Crowd from '../static/Crowd.gif';

const MusicVenue = () => {
    return (
        <>
        <Head/>
        <div class="OnStage">
            <div id="scrolling_text">
                <h4>This is text</h4>
            </div>
            <img src={DJ} alt="Music Dj Gif"/>
            
        </div>
        <MusicControls/>
        <img src={Crowd} alt="Crowd" id="Loud_Crowd"/>
        </>
    )
}
export default MusicVenue;