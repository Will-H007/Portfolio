import React from 'react';
import Example from '../tabs/skill/graphs/examplebar';
import Example3 from '../tabs/skill/graphs/exampledonut';
import Example4 from '../tabs/skill/graphs/exampleline';


const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '0.75fr 1.25fr 2fr',
    gap: '20px',
    height: '100%',
    width: '100%',
    maxHeight: '40em', // Set your desired max width
    margin: '0 auto',   // Center the content horizontally
};


const grid1: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
    height:"100%",
    width:"100%",

  };

  const grid2: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '20px',
    height:"100%",
    width:"100%",

  };
  
  const grid3: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr ',
    gap: '20px',
    height:"100%",
    width:"100%",

  };



const gridItemStyle: React.CSSProperties = {

  borderRadius:"1em",
  padding: '20px',
  display:'flex',
  justifyContent:'center',
  alignItems:"center",
  color:"white",
  backgroundColor: "#476343",
  maxHeight:"20em"

};

const Dashboard: React.FC = () => {
  return (
    <div style={gridContainerStyle}>

      <div style={grid1}>
        <div style={gridItemStyle}>
            1st Place in Hackathon (Accenture 2022)
        </div>
        <div style={gridItemStyle}>
        UWA Qfin club competition winner
        </div>
        <div style={gridItemStyle}>
        text
        </div>
      </div>


      <div style={grid2}>
      <div style={gridItemStyle}>
            <Example3/>
        </div>
        <div style={gridItemStyle}>
            <Example4/>
        </div>
   
      </div>


      <div style={grid3}>
        <div style={gridItemStyle}>
        <Example/>
            </div>
        <div style={gridItemStyle}>
        This dashboard tracks the sales performance of a fictional bicycle manufacturer named AdventureWorks. It provides a great overview of total sales and growth over time with the ability to drill down by product category. Moreover, 
        it provides excellent comparison features between different years and months, alongside a great map of sales by region.  
        </div>
     
        </div>
 


    </div>
  );
};

export default Dashboard;
