import "../Events.css";
import {Link} from '@reach/router';
import Head from '../components/Head';
import '../Main.css';
import Footer from "../components/Footer";

function componentDidMount() {
        var canvas = document.getElementById('Art_Canvas');
        var ctx = canvas.getContext('2d');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgb(200, 0, 0)';
                ctx.fillRect(10, 10, 50, 50);
                ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
                ctx.fillRect(30, 30, 50, 50);
            // drawing code here
        } else {
            // canvas-unsupported code here
            <p> Your Browser isn't supported for Canvas</p>
        }
}
const Paint = () => {
    return (
        <div id="Paint_Wrapper">
        <Head/>
            <div id="Art">
                <h1>Art</h1>
            </div>
            <div id="Artist">
                <canvas id="Art_Canvas" alt="Artists' Canvas">
                </canvas>
                <div id="Art_Tools">
                    <ul>
                        <li>this</li>
                        <li>that</li>
                        <li>the other</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Paint;