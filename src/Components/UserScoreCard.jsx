import React from "react";

function UserScoreCard(props){
return (
    <div className='ScoresCardWrapper'>
    <p className='userName'>{props.name}</p>
    <p className='userScore'>{props.score}</p>
    </div>
)
}

export default UserScoreCard