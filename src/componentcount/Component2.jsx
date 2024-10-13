import React, { useState , useEffect } from 'react'
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
      
      const dataToEncrypt = "https://drive.google.com/file/d/1APL5RtJR0_hJpH4ZM54MUqnL5cWKZDOr/preview";
      const password = "guna-techy@codingGame";
      const { encryptedBase64, ivBase64 } = await encryptAndEncodeURL(dataToEncrypt, password);
      const finalEncryptedURL = `https://videoconsole-lac.vercel.app/?game=${encodeURIComponent(encryptedBase64)}&iv=${encodeURIComponent(ivBase64)}&lang=${lang}`;
      setEncryptedURL(finalEncryptedURL);
    };

    encryptData(); 
  }, []);
  return (
    <>
      <Maincom title={"Scope"}

       game={'https://gunaasin.github.io/scope-coincatch/ '}
       url={encryptedURL}
       
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
