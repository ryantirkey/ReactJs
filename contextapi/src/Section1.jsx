import React from 'react'
import { useContext } from 'react'
import { countContext } from './countContext'

const Section1 = () => {
    let {handledinc }= useContext(countContext)
  return (
    <section>

        <button onClick={handledinc}>Increment</button>
    </section>
  )
}

export default Section1