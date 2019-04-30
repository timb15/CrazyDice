import React from 'react';

const Dye = ({ dyeAtt, toggle, dyeNum }) => {
  const dyeImage = require(`../img/${dyeAtt.num}_${dyeAtt.color}.svg`);
  return (
    <div className="dye" onClick={() => toggle(dyeNum)}><img src={dyeImage} alt="dye" /></div>
  )
}

export default Dye;