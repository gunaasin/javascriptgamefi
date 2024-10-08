import React, { useState , useEffect } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
    javascript: `// Define a function to simulate fetching data from a server
    function fetchData(virusGame) {
      
          // Simulate fetching data asynchronously
       
        // Simulate a delay of 2 seconds
    
    }
    
    // Define a function to start the game
    async function startGame() {
          console.log("Start the Game [START]");
          console.log("Ready to fire. [SHOOT]");
      try {
        console.log("Initiating data fetch...");
       // No import statement needed for Fetch API, as it's built into modern browsers 
        const response = await fetchData("https://api.virus.com/data");
        //  define data fetch 
        console.log("Data fetched:", );
        console.log("Congratulations! You completed the quest.");
            console.log("If you shoot the virus you save the world until Game over");
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Oops! Looks like something went wrong.");
      }
    }
    // Start the game , call function
  `}
  const answer = {
    javascript: `// Define a function to simulate fetching data from a server
    function fetchData(virusGame) {
      return new Promise((virus) => {
        setTimeout(() => {
          // Simulate fetching data asynchronously
          const data = { message: "virus change the appearance !" };
          virus(data);
        }, 2000); // Simulate a delay of 2 seconds
      });
    }
    // Define a function to start the game
    async function startGame() {
          console.log("Start the Game [START]");
          console.log("Ready to fire. [SHOOT]");
      try {
        console.log("Initiating data fetch...");
       // No import statement needed for Fetch API, as it's built into modern browsers 
        const response = await fetchData("https://api.virus.com/data");
        //  define data fetch 
        console.log("Data fetched:", response);
        console.log("Congratulations! You completed the quest.");
            console.log("If you shoot the virus you save the world until Game over");
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Oops! Looks like something went wrong.");
      }
    }
    // Start the game
    startGame();`}



    
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
      
      <Maincom

        game={'https://gunaasin.github.io/firegunfire/'}
        url={encryptedURL}
      
        steps={[
          'Define a fetchData function that simulates fetching data from a server asynchronously using a Promise. The function returns a Promise that resolves with the fetched data after a simulated delay of 2 seconds.',
          'The startGame function serves as the entry point for the game. It initiates the quest to fetch data from the server using asynchronous code. Inside the function, we use await to wait for the fetchData promise to resolve, and then log the fetched data to the console.',
          'If the data fetch is successful, the player completes the quest and sees a success message. If an error occurs during the fetch operation, an error message is logged to the console.',
          '// Define a function to simulate fetching data from a server',
          'return new Promise((virus) => {}',
          '// Simulate fetching data variable asynchronously',
          '// Simulate a delay of 2 seconds',
          'What is Asynchronous Programming?',

          `      Asynchronous programming is a programming paradigm that allows tasks to be executed independently of the main program flow. In other words, instead of waiting for a task to complete before moving on to the next one, asynchronous programming enables tasks to be executed concurrently, improving efficiency and responsiveness in applications.`
        ]}

        title={"Asynchronous Programming"}
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


