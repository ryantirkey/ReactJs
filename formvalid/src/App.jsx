import React, { useState } from 'react'


const App = () => {
    let [email,setemail]= useState('');
    let [password, setpassword] =useState('');
    let [confirm, setconfirm]= useState('');
    let [isconfirm, setisconfirm]= useState(true);

    let valid=(e)=>{
       setconfirm(e.target.value)
       setisconfirm(e.target.value===password)

    }
  return (
    <form>
      <input type='email' placeholder='enter email' value={email} onChange={(e)=>{setemail(e.target.value)} }/>
      <input type='password' placeholder='enter pasword' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      <input type='password' placeholder='confirm password' value={confirm} onChange={valid}/>

      <p></p>
    </form>
    
  )
}

export default App