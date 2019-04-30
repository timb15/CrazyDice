import React, { Component } from 'react';

class PlayerEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.player
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.props.player, this.state.name);
    (this.props.player === "player1") ? this.props.history.history.push("player2") : this.props.history.history.push("character1");
  }

  render() {
    return (
      <div className="container">
        <div className="player-select-title">
          <h1>{this.props.player}</h1>
          <h1>Enter Your Name</h1>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input className="name-input" type="text" placeholder={this.props.player} maxLength="10" onChange={(e) => this.handleChange(e)} />
          <button className="ok-btn" type="submit">OK</button>
        </form>
      </div>
    )
  }
}

export default PlayerEntry;