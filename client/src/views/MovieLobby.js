import "../Main.css";
import Head from '../components/Head';
import Octo_pop from '../static/octo_pop.gif';
import Kiosk from '../static/Kiosk.gif';

const MovieTheatre = () => {
    return (
        <>
        <Head/>
        <div id="MovieBoard">
            <h3>Currently Playing</h3>
            <table>
                    <tr>
                        <th>Halloween</th>
                        <th>Childrens</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="/Movie1">
                                Nightmare Before Christmas
                            </a> 
                        </td>
                        <td>
                            <a href="/Movie4">
                                Zootopia
                            </a> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/Movie3">
                                Halloween
                            </a> 
                        </td>
                        <td>
                            <a href="/Movie5">
                                Pocahontas
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="/Movie2">
                                Coraline
                            </a> </td>
                        
                        <td>
                            <a href="/Movie6">
                                Rise of the Guardians
                            </a>
                        </td>
                    </tr>
            </table>
        </div>
        <div id="octo_pop">
            <img src={Octo_pop} alt="octo_pop"/>
        </div>
        <div id="robo_kiosk">
            <img src={Kiosk} alt="robo_kiosk" id="robo_kiosk"/>
        </div>
        </>
    )
}
export default MovieTheatre;