import React, { createElement } from "react";
import { createRoot } from 'react-dom/client';
import './index.css'

// let ele= <> 
//     <h1>React js</h1>
//     <p>sdkajfh djsfjkahs nsdjkafh kdjaf</p>
//     <input type="text"/>
// </>

//Second way to create element
// let element= createElement('div',null,createElement()) //using createElement we can also provide html

// createRoot(document.getElementById("root")).render(ele) //we can write html inside render() also


// let data= 10;

// createRoot(document.getElementById("root")).render(<h1>{data + 100}</h1>)

// let data= 'ryan';

// createRoot(document.getElementById("root")).render(<h1> Student name: {data}</h1>)

// let data=[10,20,30,40,50]

// createRoot(document.getElementById("root")).render(<ul>{data.map((data)=>{
//     return(<li>{data}</li>)
// })}</ul>)

let sdetail={
    sname:'ryan',
    age:'24',
    email:'ryantirkey10@hgamil.com',
    hired:true,
    salary:'20000',
    experience:'null',
    hobbies:['music','book'],
    address:{
        state:'gujrat',
        city:'ahmedabad'
    }
}

createRoot(document.getElementById("root")).render(<>
    <h1>Student name: {sdetail.sname}</h1>
    <h2>Student age: {sdetail.age}</h2>
    <h2>Student email: {sdetail.email}</h2>
    <h2>Student hired: {sdetail.hired?'yes':'no'}</h2>
    <h2>Student salary: {sdetail.salary}</h2>
    <h2>Student hobbies: {sdetail.hobbies.map((ele)=>{
        return(<li>{ele}</li>)
    })}</h2>
   <h2>Student address: {sdetail.address.city}, {sdetail.address.state}</h2>
</>)