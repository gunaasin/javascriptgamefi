import React from 'react';
import { Game } from '../Game/Game';

export const Leftbox = (prop) => {
  return (
    <div className='leftbox'>
      <div className='game-box'>
        <Game game={prop.game}/>
      </div>
      <div className="hint-box">
        <h2 >Instructions :</h2>
        <ul>

          {prop.steps.map((steps,index)=>(
            <li key={index}>{steps}</li>
          ))} 
         
        </ul>
      </div>
    </div>
  )
}




