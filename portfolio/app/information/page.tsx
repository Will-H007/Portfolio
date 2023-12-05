'use client';
import React, { useState } from 'react';
import GlassmorphismBox from '@/component/Second_page/glass_box';

import Card from '@/component/Second_page/card';
import Skill from '@/component/tabs/skill/skill';
import Experience from '@/component/tabs/experience/experience';
import AboutMe from '@/component/tabs/about_me/aboutme';

const DoubleLinkedListLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-full flex flex-row gap-x-8 w-max-xl grid grid-rows-6 grid-cols-10 items-center justify-center pt-10 pl-4 pr-6">
      {/* Hamburger menu button */}
      <div className="col-start-1 col-end-2 row-span-full" style={{
        height: "100%", // Adjust the height to fill the entire available height
        width: "30px",
        zIndex: 2,
        position: 'relative',
      }}>
        {isMenuOpen && (
          <div className="col-start-1 col-end-3 row-span-full" style={{ zIndex: 1 }}>
            <Card onMenuButtonClick={handleToggleMenu} isMenuOpen={isMenuOpen} />
          </div>
        )}
        <button
          onClick={handleToggleMenu}
          className="bg-[transparent] rounded h-full w-full"
          style={{ position: 'absolute', top: 250, left: 0 , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',height:"20%"}} // Adjust top and left to 0
        />
      </div>

      <div className={`col-span-full row-span-full h-[700px] w-full ${isMenuOpen ? 'col-start-3 col-end-11' : ''}`} style={{ paddingLeft: '40px' }}>
        <GlassmorphismBox skill={<Skill />} experience={<Experience />} aboutme={<AboutMe />} />
      </div>
    </div>
  );
};

export default DoubleLinkedListLayout;
