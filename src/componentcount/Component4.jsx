import React ,{ useState , useEffect } from 'react';
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

      const dataToEncrypt = "https://drive.google.com/file/d/1yfgXmdcsXLAKiPk74HSZIv_5HaW38T07/preview";
      const password = "guna-techy@codingGame";
      const { encryptedBase64, ivBase64 } = await encryptAndEncodeURL(dataToEncrypt, password);
      const finalEncryptedURL = `https://videoconsole-lac.vercel.app/?game=${encodeURIComponent(encryptedBase64)}&iv=${encodeURIComponent(ivBase64)}&lang=${lang}`;
      setEncryptedURL(finalEncryptedURL);
    };

    encryptData();
  }, []);

    
  return (
    <>

    <Maincom  title={"Closures"}
    answer={answer}
    game={"https://gunaasin.github.io/closurvillgame/"}
    url={encryptedURL}
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
