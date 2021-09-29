import { Link } from '@reach/router';
import "../Main.css";

const Footer = () => {
    return (
        <>
        <footer id="foot_wrap">
                <div id="footer_links">
                    <a href={"#Home"}>Home</a>
                    <a href ="#Stuff">Stuff</a>
                    <a href="#Stuff">Stuff</a>
                    <Link to="/Rules">Rules</Link>
                </div>
                <div id="footer_links">
                    <a href="https://github.com/">
                        Git
                    </a>
                    <Link to="/Disclosures">
                        Disclosures
                    </Link>
                    <Link to="/TaC">
                        Terms and Conditions
                    </Link>
                </div>
        </footer>
        </>
    )
}
export default Footer;