import React from 'react'
import { useContext } from 'react'
import { countContext } from './countContext'

const Section2 = () => {
    let {handleddec}= useContext(countContext)
  return (
    <section>
        <button onClick={handleddec}>Decrement</button>
    </section>
  )
}

export default Section2