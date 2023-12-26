import React, { useState } from 'react'
import './Gameplay.css'


const Gameplay = ({currentdice,roledice,setscore}) => {

    const restartgame=()=>{
      setscore(0);
    }
  return (
    <div>
        <div className="game">
            <img onClick={roledice} src={`src/assets/dice_${currentdice}.png`} alt="img" />
            <p>Click on the Dice to Roll</p>
            <button onClick={restartgame}>Restart the Score</button>
        </div>
    </div>
  )
}

export default Gameplay