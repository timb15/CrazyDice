import React from 'react';
import Dye from './Dye';

const Dice = ({ diceNums, toggle }) => {
  return (
    <div className="dice">
      <Dye dyeAtt={diceNums.dye1} toggle={toggle} dyeNum={"dye1"} />
      <Dye dyeAtt={diceNums.dye2} toggle={toggle} dyeNum={"dye2"} />
      <Dye dyeAtt={diceNums.dye3} toggle={toggle} dyeNum={"dye3"} />
      <Dye dyeAtt={diceNums.dye4} toggle={toggle} dyeNum={"dye4"} />
      <Dye dyeAtt={diceNums.dye5} toggle={toggle} dyeNum={"dye5"} />
    </div>
  )
}

export default Dice;