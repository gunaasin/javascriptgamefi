import React, { useState, useEffect } from 'react';
import { Rabitrun } from './Rabitrun';

export const Game = ({ runCodeData: propRunCodeData, game }) => {
  const [localRunCodeData, setLocalRunCodeData] = useState(false); // Start with 'false'

  useEffect(() => {
    setLocalRunCodeData(propRunCodeData); // Update localRunCodeData when propRunCodeData changes
  }, [propRunCodeData]);

  // Function to return the appropriate style based on localRunCodeData
  const getDisplayStyle = () => {
    if (localRunCodeData === true) {
    
    } else {
     
    }
  }

  return (
    <div>
      <div className='te'>
        {/* You can remove the console.logs now */}
        {/* {localRunCodeData === true && console.log('guna')}
        {localRunCodeData === false && console.log('nisha')}
        {localRunCodeData === null && console.log('null')} */}
      </div>
      
      <Rabitrun styles={localRunCodeData?'play':'noplay'}  game={game}/>
     
    </div>
  );
};
