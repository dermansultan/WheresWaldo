import React from "react";
import GameHome from "./Components/GameHome"
import Header from "./Components/Header"
import firebase from "./fire";
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
      user: null
    };

  }

// Methods go here 
createAnonUser = () => {
  firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
        })
        console.log(user.uid)
      } 
    });
  }

  componentDidMount(){
    this.createAnonUser()
  }


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
          <GameStart user={this.state.user}>
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
