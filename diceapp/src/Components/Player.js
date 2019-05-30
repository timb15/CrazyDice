import React from 'react';

const Player = ({ playerNum, playerName, character, scorecardActive, active, score, wins }) => {
  let name = "";
  if (playerName === "player1") {
    name = "PLAYER 1"
  } else if (playerName === "player2") {
    name = "PLAYER 2"
  } else {
    name = playerName;
  }
  return (
    <div className="player-div player1">
      <div className="player-icon"><img src={character} alt="Player's Character" /></div>
      <h1 className="player-name">{name.toUpperCase()}</h1>
      {
        active
          ? <button onClick={() => scorecardActive(playerNum)} className="scorecard-link">Scorecard</button>
          : <button onClick={() => scorecardActive(playerNum)} className="scorecard-link-disabled" disabled>Scorecard</button>
      }
      <div className="scores">
        <h1>Score: {score}</h1>
      </div>
    </div>
  )
}

export default Player;