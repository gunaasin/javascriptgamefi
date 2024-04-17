import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'

export const Component2 = () => {
  const [runCodeData] = useState(null);
const codesnip = {
    javascript: `\nfunction globalFunction() {
      console.log(); // Accessible inside function
    }

    console.log(); // Accessible outside function
    function localFunction() {
    
      console.log(); // Accessible inside function
    }
    
    localFunction();
    console.log(); // Error: localVariable is not defined
    
`}

    const answer = {
      javascript: `\n var globalVariable = "goldcoin";

      function globalFunction() {
        console.log(globalVariable); // Accessible inside function
      }

      console.log(globalVariable); // Accessible outside function
      function localFunction() {
        var localVariable = "coinwithstone";
        console.log(localVariable); // Accessible inside function
      }
      
      localFunction();
      console.log(localVariable); // Error: localVariable is not defined
      `}
  return (
    <>
      <Maincom title={"Scope"}

       game={'https://gunaasin.github.io/scope-coincatch/ '}
       url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ac90d5b11a19e4c525/2d1c666d596baedd'}
       
        steps={['Scope refers to the visibility and accessibility of variables and functions in a particular context within a program. In JavaScript, variables and functions have different scopes, which determine where they can be accessed and how long they persist. There are mainly two types of scope in JavaScript',
        'Global Scope:',
        'Variables declared outside of any function or block have global scope. They can be accessed from any part of the codebase, including within functions and blocks. Global variables persist throughout the entire lifetime of the program.',
        'Create a  "globalVariable" and value is "Goldcoin"',
         'Local Scope:',
         'Variables declared within a function or block have local scope.They are accessible only within the function or block in which they are declared. Local variables exist only as long as the function or block is executing.',
         'create a varible "localVariable " inside function and value is "CoinWithstone"',
         'In terms of comparing code with a coin game, you might create variables to represent the player score, the number of coins collected. These variables would likely have a local scope within the functions and globalscope,'
        ]}
         answer={answer}
         codesnip={codesnip}

      />

    </>
  )
}

export const ChildComponent = ({ runCodeData}) => {
  
  return (
    
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
    </div>
    
  )
}
