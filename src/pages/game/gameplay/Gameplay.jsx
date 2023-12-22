import React, { useState } from 'react'
import './Gameplay.css'


const Gameplay = ({currentdice,roledice,setscore}) => {

    
  return (
    <div>
        <div className="game">
            <img onClick={roledice} src={`src/assets/dice_${currentdice}.png`} alt="img" />
            <p>Click on the Dice to Roll</p>
            <button>Restart the Score</button>
        </div>
    </div>
  )
}

export default Gameplay