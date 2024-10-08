import React, { useState , useEffect } from 'react'
import { Maincom } from '../Structrue/Maincom';

export const Component3 = () => {
  const codesnip = {
    javascript: `\// Constructor function
   
    // Adding method to the prototype
    Animal.prototype.sayHello = function() {
      
    };
    
    // Creating objects using the constructor function

    // Calling the inherited method
    cat.sayHello(); // Output: Hello, I'm Cat
    dog.sayHello(); // Output: Hello, I'm Dog Call the inherited method on instances
 
    `}
  const answer = {
    javascript: `\ // Constructor function
      function Animal(name) {
        this.name = name;
      }
      // Adding method to the prototype
      Animal.prototype.sayHello = function() {
        console.log("Hello, I'm" + this.name);
      };
      // Creating objects using the constructor function
      let cat = new Animal("Cat");
      let dog = new Animal("Dog");
      // Calling the inherited method
      cat.sayHello(); // Output: Hello, I'm Cat
      dog.sayHello(); // Output: Hello, I'm Dog Call the inherited method on instance
      `}


  //  encript the url data
  const lang = 'javascript';
  const [encryptedURL, setEncryptedURL] = useState("");
  const encryptAndEncodeURL = async (data, password) => {
    const enc = new TextEncoder();
    const encodedPassword = enc.encode(password);
    const key = await crypto.subtle.importKey(
      "raw",
      encodedPassword,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );

    const aesKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: enc.encode("some-salt"),
        iterations: 100000,
        hash: "SHA-256"
      },
      key,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv
      },
      aesKey,
      enc.encode(data)
    );

    const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
    const ivBase64 = btoa(String.fromCharCode(...iv));
    return { encryptedBase64, ivBase64 };
  };
  useEffect(() => {
    const encryptData = async () => {

      const dataToEncrypt = "https://videos.sproutvideo.com/embed/4491d1b21613e1c8cd/c88103b34ff48db1";
      const password = "guna-techy@codingGame";
      const { encryptedBase64, ivBase64 } = await encryptAndEncodeURL(dataToEncrypt, password);
      const finalEncryptedURL = `https://videoconsole-lac.vercel.app/?game=${encodeURIComponent(encryptedBase64)}&iv=${encodeURIComponent(ivBase64)}&lang=${lang}`;
      setEncryptedURL(finalEncryptedURL);
    };

    encryptData();
  }, []);

  return (
    <>
      <Maincom title={" Prototype Inheritance"}
        game={"https://catprototype.vercel.app/"}
        url={encryptedURL}
        steps={['Prototype Chain :',
          ' Every object in JavaScript has an internal property called [[Prototype]], which references another object called its prototype. When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it doesnt find it, it looks up the prototype chain until it finds the property or method or reaches the end of the chain. This chain of objects linked by their prototypes is called the prototype chain.',
          'Constructor Functions and Prototypes :',
          'In JavaScript, constructor functions are used to create objects that share the same properties and methods. When you create an object using a constructor function with the new keyword, the [[Prototype]] of the new object is set to the prototype property of the constructor function. Properties and methods added to the constructor functions prototype are shared by all objects created with that constructor function.',
          'Creating Objects with Prototypes :',
          'You can create objects that inherit from a prototype using the Object.create() method or by using constructor functions.',
          'Step 1: Constructor Animal(name) function',
          'Step 2: Adding method to the prototype',
          'Step 3: Creating objects using the constructor function',
          'let cat = new Animal("Cat");',
          'let dog = new Animal("Dog");',
          'Step 3: Calling the inherited method'

        ]}
        answer={answer}
        codesnip={codesnip}
      />
    </>
  )
}
