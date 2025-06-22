import React from 'react'

const Loggedin = ({Loggedin,setloggedin}) => {
  return (
    <nav>
        <h1>Welcome To Qspider!!! </h1>
        <button onClick={()=>{setloggedin(false)}}>Logout</button>
    </nav>
  )
}

export default Loggedin