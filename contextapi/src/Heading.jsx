import React from 'react'
import { useContext } from 'react'
import { countContext } from './countContext'

const Heading = () => {
    let {count}= useContext(countContext)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Heading