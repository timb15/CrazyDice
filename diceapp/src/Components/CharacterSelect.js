import React from 'react';

const CharacterSelect = ({ player, history, playerName, selectChar }) => {


  const handleSelect = (play, char) => {
    selectChar(play, char);
    (player === "player1") ? history.history.push("character2") : history.history.push("game");
  }

  return (
    <div className="container">
      <div className="player-select-title">
        <h1>{playerName}</h1>
        <h1>Select A Character</h1>
      </div>
      <div className="char-container">
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_blue.svg"))}>
          <img src={require("../img/monster_blue.svg")} alt="bluemonster" />
        </div>
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_orange.svg"))}>
          <img src={require("../img/monster_orange.svg")} alt="orangemonster" />
        </div>
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_purple.svg"))}>
          <img src={require("../img/monster_purple.svg")} alt="purplemonster" />
        </div>
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_green.svg"))}>
          <img src={require("../img/monster_green.svg")} alt="greenmonster" />
        </div>
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_yellow.svg"))}>
          <img src={require("../img/monster_yellow.svg")} alt="yellowmonster" />
        </div>
        <div className="character" onClick={() => handleSelect(player, require("../img/monster_pink.svg"))}>
          <img src={require("../img/monster_pink.svg")} alt="pinkmonster" />
        </div>
      </div>
    </div>
  )
}

export default CharacterSelect;