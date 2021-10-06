import "../Events.css";
import {Link} from '@reach/router';
import Head from '../components/Head';
import '../Main.css';
import Footer from "../components/Footer";

const Paint = () => {
    return (
        <>
        <Head/>
            <div>
                <h1>Art</h1>
            </div>
            <div id="Artist">
                <div id="Art_Canvas">

                </div>
                <div id="Art_Tools">
                    <ul>
                        <li>this</li>
                        <li>that</li>
                        <li>the other</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Paint;