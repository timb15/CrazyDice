import React from 'react';

const WinScreen = ({ player, history }) => {


    return (
        <div className="save-score">
            <h1>{player} WINS!!</h1>
            <button className="save-button" onClick={() => history.history.push("/player1")}>PLAY AGAIN</button>
            <button className="save-button" onClick={() => history.history.push("/")}>MAIN MENU</button>
        </div>
    )
}

export default WinScreen;