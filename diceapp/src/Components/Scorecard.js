import React, { Component } from 'react';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreToSave: null,
      scoreName: null
    }
  }

  setScoreToSave = (score, name) => {
    this.setState({ scoreToSave: score, scoreName: name })
  }

  render() {
    let dice = []
    for (var dye in this.props.dice) {
      dice.push(<div className="dye-scorecard"><img src={require(`../img/${this.props.dice[dye].num}_${this.props.dice[dye].color}.svg`)} alt="dye" /></div>)
    }

    let scorelines = [];
    for (var score in this.props.scorecard) {
      let a = this.props.scorecard[score].temp;
      let b = score;
      scorelines.push(
        (this.props.scorecard[score].actual === null)
          ? <div className="scoreline" onClick={() => this.setScoreToSave(a, b)}>
            <span className="score-title">{score.toUpperCase()}:</span>
            <span className="score-input">{this.props.scorecard[score].temp}</span>
          </div>
          : <div className="scoreline" style={{ color: "goldenrod", backgroundColor: "black" }}>
            <span className="score-title">{score.toUpperCase()}:</span>
            <span className="score-input">{this.props.scorecard[score].actual}</span>
          </div>)
    }
    return (
      <div className="scorecard-container">
        {
          (this.state.scoreToSave === null)
            ? <div className="scorecard">
              <h1>{this.props.playerName}'s Scorecard</h1>
              {scorelines}
              <div className="scoreline total">
                <span className="score-title">SCORE:</span><span className="score-input">{this.props.totalScore}</span>
              </div>
              <div className="dice-scorecard">
                {dice}
              </div>
              <button className="save-button" onClick={() => this.props.close()}>CLOSE</button>
            </div>
            : <div className="save-score">
              <h1>TAKE {this.state.scoreToSave} POINTS?</h1>
              <button className="save-button" onClick={() => {
                this.props.saveScore(this.state.scoreName, this.state.scoreToSave);
                this.setState({ scoreToSave: null, scoreName: null });
              }}>YES</button>
              <button className="save-button" onClick={() => this.setState({ scoreToSave: null, scoreName: null })}>NO</button>
            </div>
        }
      </div >
    )
  }
}

export default Scorecard;