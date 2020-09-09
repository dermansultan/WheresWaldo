import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  class Leaderboards extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      playerListData: {}
    }
    }
    render(){
      return(
        <div className='LeaderboardsContainer'></div>
      )
    }
  }

export default Leaderboards