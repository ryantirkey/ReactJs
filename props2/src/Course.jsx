import React from 'react'

const Course = ({courseDetails}) => {
  return (
    <div>
       {
          courseDetails.map((ele,i)=>{
              return(
          
                <div key={i}> 
                    <h2>{ele.course}</h2>
                    <h4> Technologies:  {ele.technologies.map((ele,i)=>{
                        return(<ul key={i}><li>{ele}</li></ul>)
                })}</h4>
                
                  <h4>Fees: {ele.fee} /-</h4>
                  <h3>Our Trainers</h3>
                  <h4>Main: {ele.trainers.main}</h4>
                  <h4>Webtech: {ele.trainers.webtech}</h4>
                  <h4>Sql: {ele.trainers.sql}</h4>
                  <button>Select</button>
                </div>

              )
          })
       }
    </div>
  )
}

export default Course