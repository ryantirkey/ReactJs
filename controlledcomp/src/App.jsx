import React, { useState } from 'react'

const App = () => {
    let [state,setstate]= useState({text:'',email:'',pwsd:'',num:'',range:'',color:'',date:'',datetime:'',textarea:'',gender:'',lang:'',browser:''})

    let [skill,setskill]=useState([]);

    let handle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setstate({...state,[name]:value})
    }

    let handlecheckbox=(e)=>{
        let {value,checked}=e.target;
        if(checked){
            setskill([...skill,value])
        }
        else{
            setskill(skill.filter(ele=>ele!==value))
        }
    }

    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log(state);
        console.log(skill)
    }
  return (
    <form>
        {/* <input type='text' placeholder='Enter some text' name='text' value={state.text} onChange={(e)=>{
            setstate({...state,text:e.target.value})
        }} /> */}


        <input type='text' placeholder='Enter some text' name='text' value={state.text} onChange={handle} />
        <input type='email' placeholder='Enter email' name='email' value={state.email} onChange={handle}/>
        <input type='password' placeholder='Enter password' name='pwsd' value={state.password} onChange={handle} />
        <input type='number' placeholder='Enter number' name='num' value={state.num} onChange={handle} />
        <input type='range' placeholder='Enter Range' name='range' value={state.range} onChange={handle} />
        <input type='color' placeholder='Enter color' name='color' value={state.color} onChange={handle} />
        <input type='date' placeholder='Enter date' name='date' value={state.date} onChange={handle} />
        <input type='datetime-local' placeholder='Enter dateTime' name='datetime' value={state.datetime} onChange={handle} />
        <textarea placeholder='ENter the description' name='textarea' value={state.textarea} onChange={handle}></textarea>

        <div name='gender'>
        <label >Gender</label>
        <input type='radio'  name='gender' value='male' onChange={handle} />
        <label >male</label>
        <input type='radio'  name='gender' value='female' onChange={handle} />
        <label >female</label>
        <input type='radio'  name='gender' value='other' onChange={handle} />
        <label >other</label>
        </div>


        <div onChange={handle}>
        <select  name="lang" >
        <option type='checkbox' name="lang" value='hindi'>hindi</option>
        <option type='checkbox' name="lang" value='english'>english</option>
        <option type='checkbox' name="lang" value='japanese'>japanese</option>
        </select>
        </div>

        <div  onChange={handlecheckbox}>
        <label >Tell your Skills</label>
        <input type='checkbox' value='Frontend'  />
        <label >Frontend</label>
        <input type='checkbox' value='Backend' />
        <label >Backend</label>
        <input type='checkbox' value='Not interested' />
        <label >Not interested</label>
        </div>

        <label >Choose a browser:</label>
        <input list="browsers" id="browser" name="browser" onChange={handle} />
        <datalist id="browsers" >
        <option name="browser" value="Chrome"/>
        <option name="browser" value="Firefox" />
        <option value="Edge" name="browser"/>
        <option value="Safari" name="browser"/>
        <option value="Opera" name="browser"/>
        
        </datalist>
       

        <button onClick={handlesubmit}> Submit</button>

        <h2>{state.text} {state.email} {state.password} {state.num} {state.range} {state.color} {state.date} {state.datetime} {state.textarea} {state.gender} {state.lang}</h2>
    </form>
  )
}

export default App