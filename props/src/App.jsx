import React, { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import Button2 from './Button2';

const App = () => {

    const [count,setcount]=useState(0);


  return (
    <>
        <Heading data={{count,setcount}}/>

         <Heading count={count} data='hello'/> 

         {/* <Heading count={count}/>

         <h1>My name is ryan</h1>
            
         <Heading/> */}

         {/* <Heading/> */}

        <Button count={count} setcount={setcount}/>

        <Button2 setcount={setcount} count={count}></Button2>

      
    </>
  )
}

export default App