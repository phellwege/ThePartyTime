import "../Main.css";
import Head from '../components/Head';
import MovieControls from "../components/MovieControls";
import Audience from '../static/Audience.gif'


const MovieTheatre = () => {
    return (
        <>
        <Head/>
        <div id="Screen">
            <iframe id="ytplayer" type="text/html" width="100%" height="450"
            src="https://www.youtube.com/embed/JL2PB7NJ090"
            frameborder="0">
            </iframe>
            
        </div>
        
        <div id="now_playing">
            <MovieControls/>
        </div>
        <div id="crowd">
            <img src={Audience} alt="Audience"/>
        </div>
        </>
    )
}
export default MovieTheatre;