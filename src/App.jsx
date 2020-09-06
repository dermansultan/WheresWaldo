import React from "react";
import GameMenu from './Components/gameMenu'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameStart: false
    }

  }
  render(){
    return(
      <div className='gameContainer'>{this.state.gameStart ? 'Component to be made: ActiveGame' : <GameMenu></GameMenu>}</div>
    )
  }
}

export default App;
