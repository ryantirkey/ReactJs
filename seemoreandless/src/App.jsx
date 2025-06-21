import React, { useState } from 'react'


const App = () => {

    const [state,setState]= useState({
        btntext:"see less",
        class: "lessActive",
        // theme:"light",
        // themetxt:"LightMode"
    })

    let handleCLick=()=>{
        if(state.class== "lessActive"){
            setState({btntext:"see more",
                class:"moreActive"
            })
        }else{
            setState({btntext:"see less",
                class:"lessActive"
            })
        }
    }

   

  return (
    <>
        <div className={state.class}>
         A wiki is a form of hypertext publication on the internet which is collaboratively 
         edited and managed by its audience directly through a web browser. A typical wiki contains multiple pages
        that can either be edited by the public or limited to use within an organization for maintaining its internal knowledge base.
        Wikis are powered by wiki software, also known as wiki engines. Being a form of content management system, these differ from other web-based systems such as blog software or static site generators in that the content is created without any defined owner or leader. Wikis have little inherent structure, allowing one to emerge according to the needs of the users.
        Wiki engines usually allow content to be written using a lightweight markup language and sometimes edited with the help 
        of a rich-text editor. There are dozens of different wiki engines in use, both standalone and part of other software, such
         as bug tracking systems. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control 
         over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material
         . Others may permit access without enforcing access control. Further rules may be imposed to organize content. In addition to hosting user-authored content, wikis allow those users to interact, hold discussions, and collaborate.
        </div>
        <button onClick={handleCLick}>{state.btntext} </button>

    </>
    
  )
}

export default App