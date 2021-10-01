import "../Events.css";
import {Link} from '@reach/router';

const NavBar = () => {
    return (
        <>
        <div>
        <ul id="navigation">
    <li><Link class="active" to="/">Home</Link></li>
    <li><Link to="/MusicVenue">Music Venue</Link></li>
    <li><Link to="/MovieTheatre">Movie Theatre</Link></li>
    <li><a href="#Contact">Contact</a></li>
</ul>
</div>
        </>
    )
}
export default NavBar;