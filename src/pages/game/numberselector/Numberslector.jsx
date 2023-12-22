import React, { useState } from 'react'
import './Number.css'

const Numberslector = ({selectNumber,SetselectNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  console.log(selectNumber);
  return (
    <>
      <div className="right">
      <p>Select A Number .. </p>
        <div className='number'>
          {
            arrNumber.map((value, i) => (
              <div className="num" 
              key={i} 
              onClick={() => SetselectNumber(value)}>
                {value}</div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Numberslector