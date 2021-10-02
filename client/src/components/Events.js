import "../Events.css";
import {Link} from '@reach/router';

const Events = () => {
    return (
        <>
        <div>
        <ul id="navigation">
    <li><Link class="active" to="/">Home</Link></li>
    <li><Link to="/MusicVenue">Music Venue</Link></li>
    <li><Link to="/MovieTheatre">Movie Theatre</Link></li>
    <li><Link to="/Paint">Paint</Link></li>
    <li><Link to="/Asteroids">Asteroids</Link></li>
</ul>
</div>
        </>
    )
}
export default Events;