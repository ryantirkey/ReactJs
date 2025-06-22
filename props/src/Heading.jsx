import React from 'react'


// const Heading = ({count,data}) => {
    
    // const Heading=({data})=>{

        const Heading=(props)=>{

            // const Heading=({count,children})=>{

                // const Heading=({data,count})=>{
  return (
    <>
    {/* <h1>{count} {data || 'hii'}</h1> */}

    {/* <h1>{data.count}</h1> */}

     <h1>{props.data.count}</h1>

    {/* <h1>{count}</h1>
    {
        children
    } */}

    {/* <h1>{data}</h1> */}
    </>
  )
} 

// Heading.defaultProps={
//     data:'good morning',    
//     count:10
// }

export default Heading