// MenuItem.tsx
import * as React from "react";
import { motion, Variants } from "framer-motion";
import Link from 'next/link';

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface MenuItemProps {
  i: number;
  label: string; // Include label property in MenuItemProps
  path:string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ i, label,path }) => {

  return (
    <Link href={`/${path}`}>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ height: "100%", width: "100%", display: 'flex',  justifyContent: 'start', alignItems:"center" }}
        >
        
            <div className="icon-placeholder" style={{border: `4px solid ${colors[i]}`, height:"2em", width:"2em", margin:"1em", borderRadius:"1em"}} />
            <div style={{color: `${colors[i]}`, fontSize:"20px", display:"flex", flexDirection:"row", width:"5em"}}>{label}</div>
       
        </motion.li>
        </Link>
  );
};

const colors = [
 "#006994", // or "#008DBB"
   "#FF8C00", // or "#FFA500"
 "#228B22", // or "#008000"
 "#FFD700"
];
