import React from "react";
import GameHome from "./Components/GameHome"
import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import GameStart from "./Components/GameStart"
import Leaderboards from "./Components/Leaderboards"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };

  }

// Methods go here 



  render(){
    return(
      <div className='mainContainer'>
      <Router>
        <Switch>
        <Route path="/Home">
          <GameHome></GameHome>
        </Route>
        <Route exact path='/'>
          <Redirect to='/Home'></Redirect>
        </Route>
          <Route path="/gamestart">
          <GameStart>
          </GameStart>
          </Route>
          <Route path="/Leaderboards">
          <Leaderboards></Leaderboards>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
