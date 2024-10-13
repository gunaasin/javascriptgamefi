import React, { useState , useEffect } from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component8 = () => {
  const codesnip = {
    javascript: `\n //import resources1 and resources2 from the url
    import { resources as  } from "./woodpack.js";
    import { resources as  } from "./stonepack.js";

    // stone.js
    export const buildStonehouse = () => {
      // Simulate building a factory to produce goods
      console.log("Stonehouse");
    };
    
    // house.js
    export const buildWoodhouse = () => {
      // Simulate building a market to trade resources with other kingdoms
      console.log("Woodhouse");
    };
    // NPC interactions
    console.log("NPC: Welcome to iland! Let me teach you about importing resources...");
    console.log("NPC: In our house to build structures.");
    
    
    `}
  const answer = {
    javascript: `\n
      //import resources1 and resources2 from the url
      import { resources as resources1 } from "./.js";
      import { resources as resources2 } from "./.js";
     // stone.js
      export const buildStonehouse = () => {
        // Simulate building a factory to produce goods
        console.log("Stonehouse");
      };
      // house.js
      export const buildWoodhouse = () => {
        // Simulate building a market to trade resources with other kingdoms
        console.log("Woodhouse");
      };
      // NPC interactions
      console.log("NPC: Welcome to iland! Let me teach you about importing resources...");
      console.log("NPC: In our house to build structures.");
      
      
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

      const dataToEncrypt = "https://drive.google.com/file/d/12ckfqONNOVJMjD6gQLswdUPT2L_CntuW/preview";
      const password = "guna-techy@codingGame";
      const { encryptedBase64, ivBase64 } = await encryptAndEncodeURL(dataToEncrypt, password);
      const finalEncryptedURL = `https://videoconsole-lac.vercel.app/?game=${encodeURIComponent(encryptedBase64)}&iv=${encodeURIComponent(ivBase64)}&lang=${lang}`;
      setEncryptedURL(finalEncryptedURL);
    };

    encryptData();
  }, []);

  return (
    <>
      <Maincom title={" Module System"}
        codesnip={codesnip}
        game={"https://gunaasin.github.io/homeModuleSystem/"}

        url={encryptedURL}
        steps={[' Step 1: Setting Up the Iland (Modules) , Define separate JavaScript files, each representing a home (module) with its unique functionality and resources.',

          ' const  resources1 =  { "wood" };',

          ' const resources2 = {  "stone" };',

          'Step 1: Exploring the House In the main game file, import and explore each resources , interacting with its resources.',
          'console.log("Kingdom 1 Resources:", resources1);',
          'console.log("Kingdom 2 Resources:", resources2);',


          'Step 2:  Simulate woodbuilding',
          'Step 3:  Simulate stonebuilding ',

          'Step 6: construct new iland ',

          'Step 6:  Interacting with NPCs and Learning Concepts Integrate dialogue with NPCs (non-player characters) to provide guidance and explanations about the module system.',

          'Step 6:  NPC interactions : Welcome Iland Let me teach you about importing resources...");',

        ]}
        answer={answer}
      />
    </>
  )
}
