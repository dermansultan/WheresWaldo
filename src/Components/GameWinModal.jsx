import React from "react";


function GameWinModal(props){
    return(
        <div className="modalContainer">
            <div className="modalBox">
                <form className='submitScore' onSubmit={props.handleSubmit}>
                    <label className='congrats'>Congratulations!</label>
                    <label className='nameEnter'>Enter your name:</label>
                    <input className='userNameIn' placeholder='Enter your name leaderboards' name='userName' value={props.value} onChange={props.onChange}></input>
                    <button className='userNameSubmit'>Submit Score</button>
                </form>
            </div>
        </div>
    )
}


export default GameWinModal