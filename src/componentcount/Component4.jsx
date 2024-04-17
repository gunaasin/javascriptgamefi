import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    javascript: `\nfunction createTarget(size, distance, pointValue) {
      // create a let isHit value is false
    
  
      function hit() {
        //Change the isHit value false to true 
          console.log("Target hit Points earned: " + pointValue);
      }
      function isTargetHit() { 
          return isHit;
      }
      function getDistance() {
          return distance;
      }
      return {
          hit: hit,
          isTargetHit: isTargetHit,
          getDistance: getDistance
      };
  }
  
  // Creating targets and assign the range & point
  const target1 = createTarget("Small");
  const target2 = createTarget("Medium");
  
  // Simulating gameplay
  if (target1.isTargetHit()) {
      console.log("Target 1 was hit at distance: " + target1.getDistance());
  } else {
      console.log("Target 1 was missed.");
  }
  
  target2.hit();
  
  if (target2.isTargetHit()) {
      console.log("Target 2 was hit at distance: " + target2.getDistance());
  } else {
      console.log("Target 2 was missed.");
  }
    `}
    const answer ={
      javascript:`\n function createTarget(size, distance, pointValue) {
        let isHit = false;
        function hit() {
          //Change the isHit value false to true 
            isHit = true;
            console.log("Target hit! Points earned: " + pointValue);
        }
        function isTargetHit() { 
            return isHit;
        }
        function getDistance() {
            return distance;
        }
        return {
            hit: hit,
            isTargetHit: isTargetHit,
            getDistance: getDistance
        };
    }
    // Creating targets and assign the range & point
    const target1 = createTarget("Small", 10, 10);
    const target2 = createTarget("Medium", 15, 20);
    // Simulating gameplay
    if (target1.isTargetHit()) {
        console.log("Target 1 was hit at distance: " + target1.getDistance());
    } else {
        console.log("Target 1 was missed.");
    }
    target2.hit();
    if (target2.isTargetHit()) {
        console.log("Target 2 was hit at distance: " + target2.getDistance());
    } else {
        console.log("Target 2 was missed.");
    }
    `}
    
  return (
    <>

    <Maincom  title={"Closures"}
    answer={answer}
    game={"https://gunaasin.github.io/closurvillgame/"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/4d90d5b11a1aefc8c4/9f0d4106b8260745'}
       steps={['Closures are a fundamental concept in programming where a function retains access to its surrounding lexical scope even after the outer function has finished executing. In simpler terms, a closure "closes over" the variables from its outer scope, allowing the function to access and manipulate those variables, even if they are not directly passed as arguments to the function.',
       'Step 1: The createTarget function is a factory function that creates target objects with private variables such as isHit.',
       'Step 2:  Inside createTarget, there are three inner functions: hit, isTargetHit, and getDistance. These functions form closures, retaining access to the isHit variable even after createTarget has finished executing.',
       'Step 3:  The returned object from createTarget contains methods (hit, isTargetHit, getDistance) to interact with the target and retrieve its properties.',
       'Step 4: target1 and target2 hit and scores are (10,10) (15,20)',     
       'Step 5:   Each target created with createTarget encapsulates its hit status and distance within its closure, ensuring that the target s properties are accessed and modified only through the provided methods.',
       'Explanation:  In this example, outerFunction defines an inner function innerFunction. innerFunction accesses a variable outerVariable declared in the scope of outerFunction. Even after outerFunction has finished executing, innerFunction maintains access to outerVariable. This is closure: the inner function "closes over" the outer variable, retaining access to it. When innerFunction is called, it successfully accesses and logs the value of outerVariable, demonstrating closure.',
       
     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
