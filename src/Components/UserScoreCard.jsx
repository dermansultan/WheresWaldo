import React from "react";

function UserScoreCard(props){
return (
    <div className='scoresCardWrapper'>
    <p className='userName'>{props.name}</p>
    <p className='userScore'>{props.score}</p>
    </div>
)
}

export default UserScoreCard