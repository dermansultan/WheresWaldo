import React from "react";
import GameStart from "./GameStart"
import Leaderboards from "./Leaderboards"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  

function GameHome(){
    return(
        <div className='homeContainer'>
            <div className='titleSub'>
                <h1>Where's Waldo?</h1>
                <p> Find Waldo and the gang - Press start to begin!</p>
            </div>
        <div className='charContainer'>
            <img alt='Waldo Head'></img>
            <img alt='Waldo Head'></img>
            <img alt='Waldo Head'></img>
        </div>
        <div className='buttonsContainer'>
            <button>
                <Link to="/gamestart">Start</Link>
            </button>
            <button>
            <Link to="/Leaderboards">Leaderboards</Link>
            </button>
        </div>
        <Switch>
            <Route path='/gamestart'>
            <GameStart></GameStart>
            </Route>
            <Route path='/Leaderboards'>
            <Leaderboards></Leaderboards>
            </Route>
            </Switch>
        </div>
    )
}

export default GameHome