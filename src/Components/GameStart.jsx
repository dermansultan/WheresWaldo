import React from "react";
import BorderPiece from "./BorderPiece";
import waldoBoard from "../Img/gameboard.jpg";
import Timer from "./Timer";
import GameWinModal from "./GameWinModal";
import firebase from "../fire";
import {
  Redirect
} from "react-router-dom";


class GameStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toLeaderboard: false,
      gameOver: false,
      bordercolor: "blue",
      clicked: false,
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
      imgloaded: false,
      selectedChar: "",
      wizard: true,
      waldo: true,
      odlaw: true,
      x: 0,
      y: 0,
      userName: "",
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.checkBoardClick = this.checkBoardClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  componentDidMount() {
    const coordsObj = {};
    firebase
      .firestore()
      .collection("charcoords ")
      .get()
      .then((snapshot) => {
        snapshot.forEach((character) => {
          const charObj = {
            minX: character.data().minX,
            maxX: character.data().maxX,
            minY: character.data().minY,
            maxY: character.data().maxY,
          };
          coordsObj[character.id] = charObj;
        });
        this.setState({
          coordsObj: coordsObj,
        });
        console.log(coordsObj);
      });
  }

  startTimer() {
    // Start Timer Locally
    this.setState({
      imgloaded: true,
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });

    // Start Timer Server Side
    firebase.firestore().collection("users").doc(`${this.props.user.uid}`).set({
      name: "",
      userStart: firebase.firestore.Timestamp.now(),
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  }

  checkForWin() {
    // Win State
    console.log("it ran gotem");
    if (
      this.state.waldo === true &&
      this.state.wizard === true &&
      this.state.odlaw === true
    ) {
      this.stopTimer();
      this.setState(
        {
          gameOver: true,
        },
        () => {
          firebase
            .firestore()
            .collection("users")
            .doc(`${this.props.user.uid}`)
            .update({
              userEnd: firebase.firestore.Timestamp.now(),
            });
        }
      );
      firebase
        .firestore()
        .collection("users")
        .doc(`${this.props.user.uid}`)
        .get()
        .then((snap) => {
          let startTime = snap.get("userStart");
          let endTime = snap.get("userEnd");
          console.log(`Duration: ${endTime - startTime}`);
          firebase
            .firestore()
            .collection("users")
            .doc(`${this.props.user.uid}`)
            .update({
              score: (endTime - startTime),
            });
        });
    }
  }

  stopTimer() {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });

    // Find Wizard
    if (
      this.state.x >= this.state.coordsObj.wizard.minX &&
      this.state.x < this.state.coordsObj.wizard.maxX &&
      this.state.y >= this.state.coordsObj.wizard.minY &&
      this.state.y < this.state.coordsObj.wizard.maxY &&
      e.target.value == "wizard"
    ) {
      console.log("wizard found");
      this.setState(
        {
          bordercolor: "green",
          wizard: true,
        },
        this.checkForWin
      );
    }

    // Find Waldo
    if (
      this.state.x >= this.state.coordsObj.waldo.minX &&
      this.state.x < this.state.coordsObj.waldo.maxX &&
      this.state.y >= this.state.coordsObj.waldo.minY &&
      this.state.y < this.state.coordsObj.waldo.maxY &&
      e.target.value == "waldo"
    ) {
      console.log("waldo found");
      this.setState(
        {
          bordercolor: "green",
          waldo: true,
        },
        this.checkForWin
      );
    }

    // Find Odlaw
    if (
      this.state.x >= this.state.coordsObj.odlaw.minX &&
      this.state.x < this.state.coordsObj.odlaw.maxX &&
      this.state.y >= this.state.coordsObj.odlaw.minY &&
      this.state.y < this.state.coordsObj.odlaw.maxY &&
      e.target.value == "odlaw"
    ) {
      console.log("odlaw found");
      this.setState(
        {
          bordercolor: "green",
          odlaw: true,
        },
        this.checkForWin
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const setUserName = async () => {
      try{
        firebase
        .firestore()
        .collection("users")
        .doc(`${this.props.user.uid}`)
        .update({
          name: `${this.state.userName}`,
        });
      } catch(err){
        console.log(err, 'BRUH')
      }
    }
    setUserName();
      this.setState({
        toLeaderboard: true
      });

  }

  checkBoardClick(e) {
    this.setState(
      {
        x: e.clientX,
        y: e.clientY,
        clicked: true,
        bordercolor: "blue",
      },
      this.checkForWin
    );
  }

  render() {
    if (this.state.toLeaderboard === true) {
      return <Redirect to='/Leaderboards' />
    }
    return (
      
      <div className="gameContainer">
        {this.state.gameOver ? (
          <GameWinModal
            value={this.state.userName}
            onChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            user={this.props.user.uid}
          ></GameWinModal>
        ) : (
          ""
        )}
        <Timer timerTime={this.state.timerTime}></Timer>
        {this.state.gameOver ? (
          ""
        ) : (
          <BorderPiece
            top={this.state.y}
            left={this.state.x}
            clicked={this.state.clicked ? "flex" : "none"}
            onChange={this.handleChange}
            value={this.state.selectedChar}
            characters={{
              waldo: this.state.waldo,
              odlaw: this.state.odlaw,
              wizard: this.state.wizard,
            }}
            color={this.state.bordercolor}
            placeholder={"character"}
          ></BorderPiece>
        )}
        <img
          className="waldoBoard"
          src={waldoBoard}
          onLoad={() => this.startTimer()}
          onClick={this.checkBoardClick}
        ></img>
        <button onClick={this.stopTimer}>Stop Timer Test</button>
      </div>
    );
  }
}

export default GameStart;
