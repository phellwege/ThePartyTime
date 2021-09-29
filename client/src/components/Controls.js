import { Link } from '@reach/router';
import Left from '../static/Left.png';
import Right from '../static/Right.png';
import "../Main.css";

const Controls = () => {
    return (
        <>
            <div id="Controller-interface">
                <div class="Selector">
                    <h1>Select</h1>
                </div>
                <div class="Selector">
                    <img src={Left} alt="Left"/>
                    <img src={Right} alt="Left"/>
                </div>
            </div>
        </>
    )
}
export default Controls;