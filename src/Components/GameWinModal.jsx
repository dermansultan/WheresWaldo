import React from "react";
import firebase from "../fire";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function GameWinModal(props){

    return(
        <div className="modalContainer">
            <div className="modalBox">
                <form className='submitScore' onSubmit={props.handleSubmit}>
                    <label className='congrats'>Congratulations!</label>
                    <label className='nameEnter'>Enter your name:</label>
                    <input className='userNameIn' placeholder='Enter your name leaderboards' name='userName' value={props.value} onChange={props.onChange}></input>
                    <button type='submit' className='userNameSubmit'>Submit Score</button>
                </form>
            </div>
        </div>
    )
}


export default GameWinModal