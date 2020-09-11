import React from "react";
import firebase from "../fire";

  class Leaderboards extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      playerListData: {}
    }
    }

    componentDidMount() {
      const usersListObj = {};
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
            usersListObj[user.id] = userObj;
          });
          this.setState({
            playerListData: usersListObj,
          });
        });
    }


    render(){
      return(
        <div className='LeaderboardsContainer'>
          Welcome to Leaderboards!
        </div>
      )
    }
  }

export default Leaderboards