import React, { useState } from 'react'
import JSON from './data.json'
import Course from './Course';

const App = () => {
    const [jdata,setjdata]= useState(JSON)
    
  return (
    <>
     <Course courseDetails={jdata}/>
    </>
  )
}

export default App