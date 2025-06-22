import React from 'react'

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import { countContext } from './countContext';
import { useState } from 'react';
import Heading from './Heading';


const App = () => {

    let [count,setcount]= useState(0)
    
    let handledinc=()=>{
        setcount(++count);
    }
    let handleddec=()=>{
        setcount(--count);
    }
    let handledreset=()=>{
        setcount(0);
    }

  return (

    <countContext.Provider value={{count,setcount,handledinc,handleddec,handledreset}}>
    <div>
        <Heading/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
     </countContext.Provider>
    
  )
}

export default App