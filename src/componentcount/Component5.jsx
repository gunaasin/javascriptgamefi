import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component5 = () => {
  const codesnip = {
    javascript: `\n//create a let variable

    // define let (result) = num add 5
    let result = ; // (string concatenation)
    
  // assign == for type coercion
    if () {
        console.log("Equal"); //(type coercion: blue is coerced to a number)
    } else {
        console.log("Not equal");
    }
  // assign === for type coercion
    if () {
        console.log("Equal");
    } else {
        console.log("Not equal"); // Output: "Not equal" (no type coercion: different types)
    }
   // Output: Not executed (0 coerced to false in a boolean context)
   // Output:  executed (10 coerced to true in a boolean context)
if (num) {
    console.log("Truthy"); 
} else {
    console.log("Falsy"); 
}  
    
    `}
    const answer = {
      javascript: `\n
      //create a let variable
      let num = "10";
      let blue = "10";
      
      // define let (result) = num add 5
      let result = num + 5; // (string concatenation)
      
    // assign == for type coercion
      if (num==blue) {
          console.log("Equal"); //(type coercion: blue is coerced to a number)
      } else {
          console.log("Not equal");
      }
    // assign === for type coercion
      if (num===blue) {
          console.log("Equal");
      } else {
          console.log("Not equal"); // Output: "Not equal" (no type coercion: different types)
      }
     // Output: Not executed (0 coerced to false in a boolean context)
     // Output:  executed (10 coerced to true in a boolean context)
  if (num) {
      console.log("Truthy"); 
  } else {
      console.log("Falsy"); 
  }  
      
      `}
  return (
    <>
    <Maincom  title={" Type Coercion"}
    game={"https://gunaasin.github.io/typecongame/"}
    
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/d390d5b11a1aeecf5a/6842ea9b6d74ea35'}
      steps={['Type coercion is the process of automatically converting one data type to another in programming. It happens implicitly, often during operations involving different data types. Here a breakdown to explain type coercion:',
        'Step 1:  create let num = "10"; &  let blue = "10";',
      ' Implicit Conversion: Type coercion occurs automatically by the programming language, without the programmer explicitly writing conversion code. It allows the language to handle mixed data types in operations and comparisons.',
      ' Data Type Conversion: Type coercion typically involves converting between primitive data types such as strings, numbers, and booleans. For example, converting a string to a number, or a boolean to a string.',
      ' Contextual Conversion: The type conversion may vary depending on the operation or context in which it occurs. For example, in JavaScript, the addition operator (+) can concatenate strings if one operand is a string, even if the other operand is a number.',
      ' Loose vs. Strict Coercion: Some programming languages, like JavaScript, have both loose (==) and strict (===) equality operators. Loose equality performs type coercion before comparison, while strict equality checks both the value and type without coercion.',
      ' Potential Pitfalls: While type coercion can be convenient, it can sometimes lead to unexpected results or errors if not understood properly. Its essential for programmers to be aware of how type coercion works in their chosen language to avoid unintended consequences.',
      'Explanation: JavaScript performs implicit type coercion when operands or values of different types are encountered in expressions. For example, when adding a string and a number, JavaScript converts the number to a string and concatenates them. Comparisons using loose equality (==) can also trigger type coercion, where JavaScript tries to make the operands have the same type before comparison. Developers can also perform explicit type conversion using built-in functions like Number(), String(), Boolean(), etc., to convert values from one type to another. Understanding type coercion is essential in JavaScript to avoid unexpected behavior and write more predictable code.',
    
      ]}
      codesnip={codesnip}
      answer={answer}
      />
    </>
  )
}

