import React from "react";



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