import { Link } from '@reach/router';
import "../Main.css";

const Footer = () => {
    return (
        <>
        <footer id="foot_wrap">
                <div id="footer_links">
                    <Link to="/">Home</Link>
                    <Link to="/Rules">Rules</Link>
                </div>
                <div id="footer_links">
                    <Link to="/TaC">
                        Terms and Conditions
                    </Link>
                </div>
        </footer>
        </>
    )
}
export default Footer;