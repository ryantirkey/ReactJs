import React from "react";
import { useState } from "react";


let App=()=>{

    let [count,setcount]=useState(5)
    let clickedUp=()=>{
        setcount(++count)
    }
    // let [count,mincount]=useState(15)
    let clickedDown=()=>{
        setcount(--count)
    }
    // let [count3,resetCount]=useState(15)
    let reset=()=>{
        setcount(0)
    }
    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={clickedUp}> increase</button>
            <button onClick={clickedDown}> decrease</button>
            <button onClick={reset}> reset</button>
        </>
        
    )
}

export default App

//rafce shortcut

