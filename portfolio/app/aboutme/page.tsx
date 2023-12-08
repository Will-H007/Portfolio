"use client"
import React, { useState } from 'react';
import Card from '@/component/main/card';
import { AnimateNav } from '@/component/navbar/newnav';

const ExperiencePage: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      

      <div
  style={{
    boxSizing: 'border-box',

    width: '100%',
    height: '100vh',

    padding: '2em',
    paddingTop: '4em',

  }}
>   



        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '1em',zIndex:-1 }}>

          <button
            onClick={handleToggleCard}
            style={{
              position: 'absolute',
              left: '3em',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 4,
              height: '10em',
              width: '2em',
              backgroundColor: '#759f7e',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
            }}
          ></button>

       
      
            <div style={{ position: 'fixed', zIndex: isCardOpen?2:3, marginTop: '20em', marginLeft:"1em" , height:'100%'}}>
 
              <Card onMenuButtonClick={handleToggleCard} isMenuOpen={isCardOpen} />
            </div>
         

          <div
            style={{
              backgroundColor: '#759f7e',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
              marginLeft: '1em',
              marginBottom: '0.25em',
              borderRadius: '0.5em',
              gap: '2.5em',
              padding: '2em',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              zIndex: 1,
            }}
          >
            asdas
          </div>
        </div>
      
      </div>

      <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
