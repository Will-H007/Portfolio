import React, { useState } from "react";
import Card from "@/component/main/card";

import DoubleLinkedList from "@/component/two_pointers/Boxes";

const Skill: React.FC = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  const initialItems = ["#ADA87C", "#7CAD90", "#7C9AAD"];

  // State to store visible items
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // Callback function to handle visible items change
  const handleVisibleItemsChange = (items: string[]) => {
    setVisibleItems(items);
  };

  // Determine which component to render based on the center visible item
  const renderCenterComponent = () => {
    if (visibleItems.length > 0) {
      const centerItem = visibleItems[Math.floor(visibleItems.length / 2)];

      // Conditionally render Example component based on the center item
      if (centerItem === "#7CAD90") {
        return <div></div>;
      } else {
        // Replace this with the component you want to render for other cases
        return <div>Other content</div>;
      }
    }

    // Default rendering when there are no visible items
    return <div>In the future</div>;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
        gap: "20px",
   
      }}
    >

  <div style={{
        height: "100%", // Adjust the height to fill the entire available height
        width: "30px",
        zIndex: 2,
        position: 'relative',
      }}>
        {isMenuOpen && (
          <div >
            <Card onMenuButtonClick={handleToggleMenu} isMenuOpen={isMenuOpen} />
          </div>
        )}
        <button
          onClick={handleToggleMenu}
          className="bg-[transparent] rounded h-full w-full"
          style={{ position: 'absolute', top: 275, left: `${isMenuOpen ? '5px' : ''}` , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',height:"20%"}} // Adjust top and left to 0
        />
      </div>
      
      
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap:"10px",
          padding:"20px"
        }}
      >
      
        <div style={{height:"100%",width:"100%", display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          }}>

         {renderCenterComponent()}

         </div>
         <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            padding: '2px',
            backdropFilter: 'blur(16px)',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px',

          }}>
            <DoubleLinkedList
              items={initialItems}
              visibleItemCount={1}
              onVisibleItemsChange={handleVisibleItemsChange}
            />
          </div>

      </div>
    </div>
  );
};

export default Skill;
