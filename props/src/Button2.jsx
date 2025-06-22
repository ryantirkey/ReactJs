import React from 'react'

const Button2 = ({count,setcount}) => {
  return (
    <button onClick={()=>setcount(--count)}>Minus</button>
  )
}

export default Button2