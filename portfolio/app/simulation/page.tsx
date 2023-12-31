"use client"
import React, { useState } from 'react';
import Card from '@/component/main/card';
import { AnimateNav } from '@/component/navbar/newnav';
import Gameboard from '@/component/maze/dashboard/gameboard';
import Statistics from '@/component/tabs/skill/graphs/examplebar';

import { counts } from '@/component/maze/dashboard/gameboard';
const SimulationPage: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div style={{ overflow: 'auto',     width: '100%',
    height: '100vh', backgroundColor: '#759f7e'}}>
      
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', zIndex:-1}}>

          <button
            onClick={handleToggleCard}
            style={{
              position: 'absolute',
              left: '1em',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 4,
              height: '20vmin',
              width: '3vmin',
              backgroundColor: '#cae3c9',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              borderRadius:"1em"
            }}
          ></button>

       
      
      <div style={{ zIndex: isCardOpen?2:3}}>
 
              <Card onMenuButtonClick={handleToggleCard} isMenuOpen={isCardOpen} />
            </div> 
         

          <div
            style={{
       
              height: '100%',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
              
              flexWrap:"wrap",
              
        
              borderRadius: '0.5em',
        
              zIndex: 1,
              
      
            }}
          >

            <Gameboard/>

    <div style={{backgroundColor:"transparent", height: '94vmin',
             width:"25vw", marginLeft:"3vmin", borderRadius:"1vmin", marginTop:'1vmin',padding:"1vmin"}}>
                  <div style={{backgroundColor:"#cae3c9", height:"100%", width:"100%",borderRadius:"1vmin",display:"flex", justifyContent:"center",
             alignItems:"center", padding:"4vmin",  flexDirection:"column",boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)', gap:"5vmin", color:"green"}}>
              <div style={{fontSize:"3vmin"}}>Simulation</div>
              <div>  
                <h1 >Context:</h1>
           <p> This is the first day the fishes are being placed into a new pond. They are exited to explore around. How far will they explore before they settle down?</p>
          </div>
           <div>
           <h1>Method:</h1>
           <p> To do this we let the fishes move randomly with the following rules:</p>
           <ol>
            <li>- Can only move one cell at a time</li>
            <li>- Can not go back to the cell(s) it visited</li>
            <li>- Cannot move pass barriers</li>
           </ol>
           </div>
          <div>
          <h1>Statistics:</h1>

          <br />
           <Statistics param={counts}/>
           </div>

             </div>
       
              </div>
    
     
        

  
          </div>
        </div>
      


      <AnimateNav/>

    </div>
  );
};

export default SimulationPage;
