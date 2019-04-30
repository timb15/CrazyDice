import React from 'react';
import { Link } from 'react-router-dom';

const StartScreen = ({ history }) => {

    const startGame = () => {
        history.history.push("/player1");
    }

    return (
        <div className="container start">
            <h1 className="game-title">cRaZy DiCe</h1>
            <button className="start-button" onClick={() => startGame()}>Start Game</button>
            <Link className="how-to" to="/help">HOW TO PLAY</Link>
        </div>
    )
}

export default StartScreen;