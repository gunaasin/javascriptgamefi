import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component6 = () => {
  const codesnip = {
    javascript: `\n// Variable declaration and memory allocation
   
    // Object creation and memory allocation
    
    // Garbage collection

    // Free up memory by removing reference to the array
    
    
    `}
  return (
    <>

      <Maincom title={"Memory Management"}
game={"http://127.0.0.1:5500/index.html"}
url={'https://videoconsole-lac.vercel.app/'}
        steps={['Variable Declaration and Memory Allocation , Show how variables are declared and memory is allocated for them in JavaScript.',
     'Step 1: Variable declaration and memory allocation let x = 10; let y = "Hello";',
     'Step 2:  Demonstrate how objects are created and memory is allocated for them.',
     'Step 3: Object creation and memory allocation let person = { name: "John", age: 30 };',
     'Step 4: Explain how JavaScript garbage collector automatically deallocates memory for objects that are no longer in use.',
     'Step 5: Garbage collection let data = [1, 2, 3, 4, 5]; data = null; // Free up memory by removing reference to the array',
     'Explanation: In JavaScript, memory management is handled automatically by the runtime environment. When variables are declared, memory is allocated to store their values.Similarly, when objects are created, memory is allocated to store their properties and values. JavaScript garbage collector periodically scans the memory for objects that are no longer referenced (i.e., no longer in use) and deallocates the memory associated with them. Developers can explicitly remove references to objects to free up memory, though in most cases, this is unnecessary as JavaScript garbage collector handles memory management efficiently.',
        ]}
        codesnip={codesnip}
      />

    </>
  )
}
