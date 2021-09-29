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
                    <a href="#Stuff">Stuff</a>
                </div>
                <div id="footer_links">
                    <a href="https://github.com/">
                        Git
                    </a>
                    <a href="https://">
                        Another link
                    </a>
                </div>
        </footer>
        </>
    )
}
export default Footer;