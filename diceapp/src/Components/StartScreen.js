import React from 'react';

const StartScreen = ({ history }) => {

    const logo = require(`../img/logo.svg`);
    const startGame = () => {
        history.history.push("/player1");
    }

    return (
        <div className="container start">
            <div className="game-title"><img src={logo} alt="" /></div>
            <button className="roll-btn" onClick={() => startGame()}>Start Game</button>
        </div>
    )
}

export default StartScreen;