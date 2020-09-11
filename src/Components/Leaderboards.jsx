import React from "react";
import firebase from "../fire";
import UserScoreCard from "./UserScoreCard"

  class Leaderboards extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      playerListData: []
    }
    }

    componentDidMount() {
      const usersListArr = [];
      firebase
        .firestore()
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.forEach((user) => {
            const userObj = {
              userName: user.data().name,
              score: user.data().score
            };
            usersListArr.push(userObj);
          });
          this.setState({
            playerListData: usersListArr,
          });
        });
    }


    render(){
      return(
        <div className='LeaderboardsContainer'>
         {this.state.playerListData.map(userInfo => (
           <UserScoreCard name={userInfo.userName} score={userInfo.score} key={userInfo.userName}></UserScoreCard>
        ))}
        </div>
      )
    }
  }

export default Leaderboards