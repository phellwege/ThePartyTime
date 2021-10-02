import "../Main.css";


const MusicControls = () => {
    return (
        <>
        <div id="Controller-interface">
                <h4>Controls</h4>
                <div class="Selector">
                    <h2><a href="/">Leave</a></h2>
                    
                </div>
                <div class="Selector" id="music_selector">
                <iframe src="https://open.spotify.com/embed/artist/2g1JSu9UfRcQQYb3b03Km7" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </>
    )
}
export default MusicControls;