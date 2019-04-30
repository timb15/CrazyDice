import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import StartScreen from './Components/StartScreen';
import PlayerEntry from './Components/PlayerEntry';
import CharacterSelect from './Components/CharacterSelect';
import GameBoard from './Components/GameBoard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: "player1",
        char: require("./img/monster_purple.svg"),
        score: 0,
        wins: 0
      },
      player2: {
        name: "player2",
        char: require("./img/monster_pink.svg"),
        score: 0,
        wins: 0
      }
    }

  }

  addPlayerName = (player, name) => {
    let namedPlayer = { ...this.state[player] };
    namedPlayer.name = name;
    this.setState({ [player]: namedPlayer });
  }

  addPlayerChar = (player, char) => {
    let newPlayer = { ...this.state[player] };
    newPlayer.char = char;
    this.setState({ [player]: newPlayer });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={(history) => <StartScreen history={history} />} />
          <Route exact path="/player1" render={(history) => <PlayerEntry player="player1" addPlayer={this.addPlayerName} history={history} />} />
          <Route exact path="/player2" render={(history) => <PlayerEntry player="player2" addPlayer={this.addPlayerName} history={history} />} />
          <Route exact path="/character1" render={(history) => <CharacterSelect selectChar={this.addPlayerChar} player="player1" playerName={this.state.player1.name} history={history} />} />
          <Route exact path="/character2" render={(history) => <CharacterSelect selectChar={this.addPlayerChar} player="player2" playerName={this.state.player2.name} history={history} />} />
          <Route exact path="/game" render={(history) => <GameBoard player1={this.state.player1} player2={this.state.player2} history={history} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
