import React from "react";
import BorderPiece from "./BorderPiece"
import waldoBoard from "../Img/gameboard.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GameHome from "./GameHome";

  class GameStart extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              clicked: false,
              timerStart: false,
              imgloaded: true,
              x: 0,
              y: 0
          }
          this.startTimer = this.startTimer.bind(this)
          this.checkBoardClick = this.checkBoardClick.bind(this)
      }

      startTimer(){
        this.setState({
            imgloaded: true,
            timerStart: true
        })
      }

      checkBoardClick(e){
          
        this.setState({ x: e.clientX, y: e.clientY, clicked: true });
        if (e.clientX >= 570 && e.clientY < 585)
        {
            console.log('you found wizard!');
        }
      }

      render(){
        return(
            <div className='gameContainer'>
            <BorderPiece top={this.state.y} left={this.state.x} clicked={this.state.clicked ? 'flex' : 'none'}></BorderPiece>
                <img className='waldoBoard' src={waldoBoard}
                onLoad={() => this.startTimer()}
                onClick={this.checkBoardClick}
                ></img>
            </div>
        )
      }
  }

  export default GameStart