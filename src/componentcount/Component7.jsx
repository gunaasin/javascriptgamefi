import React, { useState , useEffect } from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
    const codesnip = {
        javascript: `\n // Get reference to the character element
    const character = document.getElementById('character');
   
    // Character position variables  let posX = 0; let posY = 0;
    

    // Event listener for moving the character forward
    document.('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            // Move character forward (increase    posX += 10; position)
            posX += 10;
            character.style.left = posX + 'px';
        }
    });

    // Event listener for moving the character backward
    document.('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            // Move character backward (decrease   posX -= 10;position)
            posX -= 10;
            character.style.left = posX + 'px';
        }
    });

    // Event listener for making the character jump
    document.('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            // Move character upward (increase posY -= 100; position)
            posY -= 100;
            character.style.bottom = posY + 'px';

            // Simulate gravity by resetting character's position after a short delay
            setTimeout(() => {
                posY = 0;
                character.style.bottom = posY + 'px';
            }, 500);
        }
    });
    
    `}
    const answer = {
        javascript: `\n  // Get reference to the character element
      const character = document.getElementById('character');

      // Character position variables   let posX = 0; let posY = 0;
      let posX = 0;
      let posY = 0;

      // Event listener for moving the character forward
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowRight') {
              // Move character forward (increase    posX += 10; position)
              posX += 10;
              character.style.left = posX + 'px';
          }
      });

      // Event listener for moving the character backward
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowLeft') {
              // Move character backward (decrease   posX -= 10;position)
              posX -= 10;
              character.style.left = posX + 'px';
          }
      });

      // Event listener for making the character jump
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowUp') {
              // Move character upward (increase posY -= 100; position)
              posY -= 100;
              character.style.bottom = posY + 'px';

              // Simulate gravity by resetting character's position after a short delay
              setTimeout(() => {
                  posY = 0;
                  character.style.bottom = posY + 'px';
              }, 500);
          }
      });
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

            const dataToEncrypt = "https://drive.google.com/file/d/1jwJf5TSB8fHhuTZC3kGy32P4SGJkGxT2/preview";
            const password = "guna-techy@codingGame";
            const { encryptedBase64, ivBase64 } = await encryptAndEncodeURL(dataToEncrypt, password);
            const finalEncryptedURL = `https://videoconsole-lac.vercel.app/?game=${encodeURIComponent(encryptedBase64)}&iv=${encodeURIComponent(ivBase64)}&lang=${lang}`;
            setEncryptedURL(finalEncryptedURL);
        };

        encryptData();
    }, []);

    return (
        <>
            <Maincom title={"Event Handling"}
                game={"https://gunaasin.github.io/superlisatar/"}

                url={encryptedURL}
                steps={['Event Handling in JavaScript: In JavaScript, event handling is commonly done using the addEventListener method to attach event listeners to DOM elements. Event listeners can listen for various events, such as click, mouseover, keydown, submit, etc.',

                    ' Event handling in programming refers to the process of capturing and responding to events that occur during the execution of a program. Events can include user interactions, such as clicking a button, typing on a keyboard, or resizing a window, as well as system-generated events like timers or network activity.',

                    'Step 1: Adding an event listener for keypress events',

                    'Step 2: Explain event propagation, including capturing and bubbling phases.',
                ]}
                codesnip={codesnip}
                answer={answer}
            />

        </>
    )
}
