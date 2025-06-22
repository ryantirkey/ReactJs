import React, { useState } from 'react'
// import LoadComp from './LoadComp'

const App = () => {

    const [load,setload]= useState(1)
    if(load){
        return(
            <h1>{load}</h1>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}

export default App