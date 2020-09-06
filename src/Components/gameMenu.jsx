import React from "react";

function GameMenu(props){
    return(
        <div className='MenuContainer'>
        <div className='TitleSub'>
            <h1>Where's Waldo?</h1>
            <p>Find the 3 characters</p>
        </div>
        <div className='charContainer'>
            <img alt='char'></img>
            <img alt='char'></img>
            <img alt='char'></img>
        </div>
        <div className='MenButtons'>
            <button>Start</button>
            <button>Leaderboard</button>
        </div>
        </div>
    )
}


export default GameMenu