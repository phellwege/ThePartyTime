import { Link } from '@reach/router';
import "../Main.css";

const Footer = () => {
    return (
        <>
        <footer id="foot_wrap">
                <div id="footer_links">
                    <Link to="/">Home</Link>
                    <a href ="#Stuff">Stuff</a>
                    <a href="#Stuff">Stuff</a>
                    <Link to="/Rules">Rules</Link>
                </div>
                <div id="footer_links">
                    <a href="https://github.com/phellwege/ThePartyTime">
                        Git
                    </a>
                    <Link to="/TaC">
                        Terms and Conditions
                    </Link>
                </div>
        </footer>
        </>
    )
}
export default Footer;