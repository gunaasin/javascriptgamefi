import React from 'react'
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
  return (
    <>
    <Maincom  title={" Module System" }
           codesnip={codesnip}
           game={"https://gunaasin.github.io/homeModuleSystem/"}
        
           url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/4490d5b11a1aefc5cd/28d106ad54c6218f'}
        steps={[' Step 1: Setting Up the Iland (Modules) , Define separate JavaScript files, each representing a home (module) with its unique functionality and resources.',
   
      '  const  resources1 =  { "wood" };',
    
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
