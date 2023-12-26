import React, { useState } from 'react'
import './Game.css'
import Numberslector from './numberselector/Numberslector';
import Gameplay from './gameplay/Gameplay';
import Rules from './rules/Rules';

const Game = () => {
    const [score, setscore] = useState(0);
    const [selectNumber, SetselectNumber] = useState()
    const [currentdice, setCurrentdice] = useState(1);
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

    const roledice=()=>{
        const randomnum=generateRandomNumber(1,7)
        setCurrentdice((prev)=>randomnum)

        if(selectNumber===randomnum)
        setscore((prev)=>prev+randomnum)
        else
        setscore((prev)=>prev-2)
    }

    return (

        <>
            <div className="head">
                <div className="score">
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>

                <Numberslector 
                    selectNumber={selectNumber}
                    SetselectNumber={SetselectNumber}
                />
                <Gameplay 
                    currentdice={currentdice}
                    roledice={roledice}
                    setscore={setscore}
                />
                 <button className='rule-btn' onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show"} Rules
                </button>
                
                {showRules && <Rules/>}
            </div>
            
        </>


    )
}

export default Game