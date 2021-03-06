import "../Main.css";
import Head from '../components/Head';
import Octo_pop from '../static/octo_pop.gif';
import Kiosk from '../static/Kiosk.gif';
import AngryJan from '../static/Sweep.gif';
const WhatYouWant = () => {
    alert(`Who do you think you're Looking at?!`)
};
const GetYouAnything = () => {
    alert(`Can I get you anything?`)
}
const SorryWereClosed = () => {
    alert(`Sorry We're closed for matinee showings`)
}

const MovieTheatre = () => {
    return (
        <div id="Movie_Wrap">
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
            <div id="ClosedSign">
                <h2>Closed</h2>
                <p>Sorry for the inconvenience but we're closed during the day</p>
            </div>

            <div id="robo_kiosk">
                <img src={Kiosk} alt="robo_kiosk" onClick={GetYouAnything}/>
            </div>
            <div id="angry_jan">
                <img src={AngryJan} alt="angry janitor" onClick={SorryWereClosed}/>
            </div>
            <div id="octo_pop">
                <img src={Octo_pop} alt="octo_pop" onClick={WhatYouWant}/>
            </div>
        </div>
    )
}
export default MovieTheatre;