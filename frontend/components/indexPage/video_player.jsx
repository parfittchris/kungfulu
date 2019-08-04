import React from 'react';

const videoPlayer = (url) => {
    // debugger
    return (
        <div className="player-container">
            <video className= "webplayer" controls>
                <source src={url.url}></source>
            </video>
            <button className="exit-button"></button>
        </div>
        
    )
}



export default videoPlayer