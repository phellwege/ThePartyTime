import "../Main.css";
import Head from '../components/Head';
import Footer from '../components/Footer';
import MusicControls from '../components/MusicControls';
import DJ from '../static/DJ.gif'

const MusicVenue = () => {
    return (
        <>
        <Head/>
        <div class="OnStage">
            <img src={DJ} alt="Music Dj Gif"/>
            <div id="scrolling_text">
                <h4>This is text</h4>
            </div>
        </div>
        <MusicControls/>
        <Footer/>
        </>
    )
}
export default MusicVenue;