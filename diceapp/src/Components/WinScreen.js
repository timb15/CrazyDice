import React from 'react';

const WinScreen = ({ player, history, reset }) => {

  return (
    <div className="win-container">
      {
        (player === "tie")
          ? <h1>It's a tie!!</h1>
          : <h1>{player} WINS!!</h1>
      }
      <button className="win-button" onClick={() => reset()}>PLAY AGAIN</button>
      <button className="win-button" onClick={() => {
        reset();
        history.history.push("/")
      }
      }>MAIN MENU</button>
    </div>
  )
}

export default WinScreen;