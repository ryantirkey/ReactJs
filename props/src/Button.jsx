import React from 'react'

const Button = ({count,setcount}) => {
  return (
    <button onClick={()=>setcount(++count)}>click</button>
  )
}

export default Button