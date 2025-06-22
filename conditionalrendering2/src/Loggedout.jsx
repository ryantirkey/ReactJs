import React from 'react'

const Loggedout = ({Loggedin,setloggedin}) => {
  return (
    <nav>
        <h1>Bye Bye From Qspider</h1>
        <button onClick={()=>{setloggedin(true)}}>Login</button>
    </nav>
  )
}

export default Loggedout