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
              bordercolor: 'blue',
              clicked: false,
              timerStart: false,
              imgloaded: true,
              selectedChar: '',
              wizard: false,
              waldo: false,
              odlaw: false,
              x: 0,
              y: 0
          }
          this.startTimer = this.startTimer.bind(this)
          this.checkBoardClick = this.checkBoardClick.bind(this)
          this.handleChange = this.handleChange.bind(this)
      }

      startTimer(){
        this.setState({
            imgloaded: true,
            timerStart: true
        })
      }

      handleChange(e){
        this.setState({ 
          [e.target.name]: e.target.value, 
        });

        // Find Wizard
        if ((this.state.x >= 570 && this.state.x < 585) && (this.state.y >= 256 && this.state.y < 300) && (e.target.value == 'wizard'))
        {
          console.log('wizard found')
          this.setState({
            bordercolor: 'green',
            wizard: true
          })
        }

        // Find Waldo
        if ((this.state.x >= 1014 && this.state.x < 1031) && (this.state.y >= 277 && this.state.y < 308) && (e.target.value == 'waldo'))
        {
          console.log('wizard found')
          this.setState({
            bordercolor: 'green',
            waldo: true
          })
        }

        // Find Odlaw
        if ((this.state.x >= 362 && this.state.x < 376) && (this.state.y >= 262 && this.state.y < 293) && (e.target.value == 'odlaw'))
        {
          console.log('wizard found')
          this.setState({
            bordercolor: 'green',
            odlaw: true
          })
        }


      }

      checkBoardClick(e){
        this.setState({ x: e.clientX, y: e.clientY, clicked: true, bordercolor: "blue" });
      }


      render(){
        return(
            <div className='gameContainer'>
            <BorderPiece top={this.state.y} left={this.state.x} clicked={this.state.clicked ? 'flex' : 'none'} onChange={this.handleChange} value={this.state.selectedChar} characters={{waldo: this.state.waldo, odlaw: this.state.odlaw, wizard: this.state.wizard}} color={this.state.bordercolor}></BorderPiece>
                <img className='waldoBoard' src={waldoBoard}
                onLoad={() => this.startTimer()}
                onClick={this.checkBoardClick}
                ></img>
            </div>
        )
      }
  }

  export default GameStart