import React from 'react'
import { useContext } from 'react'
import { countContext } from './countContext'

const Section3 = () => {
    let {handledreset}= useContext(countContext)
  return (
    <section >
        <button onClick={handledreset}>Reset</button>
    </section>
  )
}

export default Section3