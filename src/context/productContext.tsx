"use client"
import { useState } from "react";
import { createContext } from "react";
export const productContext=createContext()
const ProductContextComp = ({children}) => {
    const[color,setColor]=useState('#2e2c2e');
    const[scale,setScale]=useState(0.08)
    const reset=()=>{
        setColor('#2e2c2e')
        setScale(0.08)
    }

    return ( 
        <productContext.Provider value={{color,setColor,scale,setScale,reset}}>
            {children}
        </productContext.Provider>

     );
}
 
export default ProductContextComp;