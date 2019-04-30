import React, { Component } from 'react';
import Player from './Player';
import Dice from './Dice';
import Scorecard from './Scorecard';
import WinScreen from './WinScreen';


class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Active: true,
      player2Active: false,
      scorecard1Active: false,
      scorecard2Active: false,
      player1Scorecard:
      {
        one: { temp: 0, actual: null },
        two: { temp: 0, actual: null },
        three: { temp: 0, actual: null },
        four: { temp: 0, actual: null },
        five: { temp: 0, actual: null },
        six: { temp: 0, actual: null },
        strait: { temp: 0, actual: null },
        threeOAK: { temp: 0, actual: null },
        fourOAK: { temp: 0, actual: null },
        crazy: { temp: 0, actual: null },
      },
      player2Scorecard:
      {
        one: { temp: 0, actual: null },
        two: { temp: 0, actual: null },
        three: { temp: 0, actual: null },
        four: { temp: 0, actual: null },
        five: { temp: 0, actual: null },
        six: { temp: 0, actual: null },
        strait: { temp: 0, actual: null },
        threeOAK: { temp: 0, actual: null },
        fourOAK: { temp: 0, actual: null },
        crazy: { temp: 0, actual: null },
      },
      player1Score: 0,
      player2Score: 0,
      diceNums: {
        dye1: { num: 1, color: "red" },
        dye2: { num: 1, color: "red" },
        dye3: { num: 1, color: "red" },
        dye4: { num: 1, color: "red" },
        dye5: { num: 1, color: "red" }
      },
      rollCount: 0,
      turnCount: 9
    };
  }

  //shows active player's scorecard
  activateScorecard = (playerNum) => {
    if (playerNum === 1) {
      this.setState({
        scorecard1Active: true
      })
    } else {
      this.setState({
        scorecard2Active: true
      })
    }
  }

  //comparing dice array to check if a strait is present
  compareArrays = (arr1, arr2) => {
    if (arr1[0] !== arr2[0]) return 0;
    if (arr1[1] !== arr2[1]) return 0;
    if (arr1[2] !== arr2[2]) return 0;
    if (arr1[3] !== arr2[3]) return 0;
    if (arr1[4] !== arr2[4]) return 0;
    return 30;
  }

  //sets temporary scores on scorecard
  setTempScore = (scorecard, diceNums) => {
    let tempScorecard = { ...scorecard };
    let diceArray = [
      diceNums.dye1.num,
      diceNums.dye2.num,
      diceNums.dye3.num,
      diceNums.dye4.num,
      diceNums.dye5.num
    ]
    //sets sore for strait
    let tempStrait = this.compareArrays(diceArray.sort(), [1, 2, 3, 4, 5]) + this.compareArrays(diceArray.sort(), [2, 3, 4, 5, 6])
    //resets temp scores
    for (var key in tempScorecard) {
      tempScorecard[key].temp = 0;
    }
    diceArray.forEach(num => {
      if (num === 1) tempScorecard.one.temp += 1;
      if (num === 2) tempScorecard.two.temp += 2;
      if (num === 3) tempScorecard.three.temp += 3;
      if (num === 4) tempScorecard.four.temp += 4;
      if (num === 5) tempScorecard.five.temp += 5;
      if (num === 6) tempScorecard.six.temp += 6;
    })
    //check for three of a kind
    if (tempScorecard.one.temp >= 3) tempScorecard.threeOAK.temp = 3;
    if (tempScorecard.two.temp >= 6) tempScorecard.threeOAK.temp = 6;
    if (tempScorecard.three.temp >= 9) tempScorecard.threeOAK.temp = 9;
    if (tempScorecard.four.temp >= 12) tempScorecard.threeOAK.temp = 12;
    if (tempScorecard.five.temp >= 15) tempScorecard.threeOAK.temp = 15;
    if (tempScorecard.six.temp >= 18) tempScorecard.threeOAK.temp = 18;
    //check for four of a kind
    if (tempScorecard.one.temp >= 4) tempScorecard.fourOAK.temp = 4;
    if (tempScorecard.two.temp >= 8) tempScorecard.fourOAK.temp = 8;
    if (tempScorecard.three.temp >= 12) tempScorecard.fourOAK.temp = 12;
    if (tempScorecard.four.temp >= 16) tempScorecard.fourOAK.temp = 16;
    if (tempScorecard.five.temp >= 20) tempScorecard.fourOAK.temp = 20;
    if (tempScorecard.six.temp >= 24) tempScorecard.fourOAK.temp = 24;

    //check for crazydice
    if (tempScorecard.one.temp === 5) tempScorecard.crazy.temp = 50;
    if (tempScorecard.two.temp === 10) tempScorecard.crazy.temp = 50;
    if (tempScorecard.three.temp === 15) tempScorecard.crazy.temp = 50;
    if (tempScorecard.four.temp === 20) tempScorecard.crazy.temp = 50;
    if (tempScorecard.five.temp === 25) tempScorecard.crazy.temp = 50;
    if (tempScorecard.six.temp === 30) tempScorecard.crazy.temp = 50;

    tempScorecard.strait.temp = tempStrait;
    this.setState({ [scorecard]: tempScorecard });
  }

  //rolls the dice and sets the temp scores on the playes scorecard
  rollDice = (scorecard) => {
    let newDice = { ...this.state.diceNums };
    for (var dye in this.state.diceNums) {
      if (newDice[dye].color !== "black") {
        newDice[dye].num = Math.floor((Math.random() * 6) + 1)
      }
    }
    this.setState((prevState) => ({
      diceNums: newDice,
      rollCount: prevState.rollCount += 1
    }));
    this.setTempScore(scorecard, this.state.diceNums);
  }

  //toggles if they dice can be rolled or not
  toggleDye = (dyeNum) => {
    let newDice = { ...this.state.diceNums };
    if (newDice[dyeNum].color === "red") {
      newDice[dyeNum].color = "black";
    } else {
      newDice[dyeNum].color = "red";
    }
    this.setState({ diceNums: newDice });
  }
  //closes active scorecard
  closeScoreCard = () => {
    this.setState({
      scorecard1Active: false,
      scorecard2Active: false
    })
  }

  //updates player scores
  updateScores = () => {
    let p1Score = 0;
    let p2Score = 0;
    for (var y in this.state.player1Scorecard) {
      p1Score += this.state.player1Scorecard[y].actual;
    }
    for (var x in this.state.player2Scorecard) {
      p2Score += this.state.player2Scorecard[x].actual;
    }
    this.setState({ player1Score: p1Score, player2Score: p2Score });
  }

  //resets dice 
  resetDice = () => {
    this.setState({
      diceNums: {
        dye1: { num: 1, color: "red" },
        dye2: { num: 1, color: "red" },
        dye3: { num: 1, color: "red" },
        dye4: { num: 1, color: "red" },
        dye5: { num: 1, color: "red" }
      }
    });
  }

  //saves selected score to active plares scorecard
  saveScore = (scoreName, num) => {
    if (this.state.player1Active) {
      let newScorecard = { ...this.state.player1Scorecard };
      newScorecard[scoreName].actual = num;
      this.setState({
        player1Scorecard: newScorecard,
        scorecard1Active: false,
        player1Active: false,
        player2Active: true,
        rollCount: 0
      });
    } else {
      let newScorecard = { ...this.state.player2Scorecard };
      newScorecard[scoreName].actual = num;
      this.setState((prevState) => ({
        player2Scorecard: newScorecard,
        scorecard2Active: false,
        player2Active: false,
        player1Active: true,
        rollCount: 0,
        turnCount: prevState.turnCount += 1
      }));
    }
    this.updateScores();
    this.resetDice();
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.turnCount === 10)
            ? <WinScreen player={(this.state.player1Score > this.state.player2Score) ? this.props.player1.name : this.props.player2.name} history={this.props.history} />
            : <React.Fragment>
              <Player playerNum={1} playerName={this.props.player1.name} character={this.props.player1.char} scorecardActive={this.activateScorecard} active={this.state.player1Active} score={this.state.player1Score} />
              <h1 className="title">Crazy Dice</h1>
              <Player playerNum={2} playerName={this.props.player2.name} character={this.props.player2.char} scorecardActive={this.activateScorecard} active={this.state.player2Active} score={this.state.player2Score} />
              {
                (this.state.player1Active)
                  ? (this.state.rollCount === 3)
                    ? <button className="roll-btn" onClick={() => this.setState({ scorecard1Active: true })}>SAVE SCORE</button>
                    : <button className="roll-btn" onClick={() => this.rollDice(this.state.player1Scorecard)}>ROLL</button>
                  : (this.state.rollCount === 3)
                    ? <button className="roll-btn" onClick={() => this.setState({ scorecard2Active: true })}>SAVE SCORE</button>
                    : <button className="roll-btn" onClick={() => this.rollDice(this.state.player2Scorecard)}>ROLL</button>
              }
              <Dice diceNums={this.state.diceNums} toggle={this.toggleDye} />
              {
                (!this.state.scorecard1Active)
                  ? null
                  : <Scorecard scorecard={this.state.player1Scorecard} close={this.closeScoreCard} playerName={this.props.player1.name} dice={this.state.diceNums} saveScore={this.saveScore} totalScore={this.state.player1Score} />
              }
              {
                (!this.state.scorecard2Active)
                  ? null
                  : <Scorecard scorecard={this.state.player2Scorecard} close={this.closeScoreCard} playerName={this.props.player2.name} dice={this.state.diceNums} saveScore={this.saveScore} totalScore={this.state.player2Score} />
              }
            </React.Fragment>
        }
      </div>
    )
  }
}

export default GameBoard;