    import React, { useState } from 'react'
import Loggedin from './Loggedin';
import Loggedout from './Loggedout';

const App = () => {

    const [loggedin,setloggedin]=useState(true)
    if(loggedin){
        return(<>
            <Loggedin loggedin={loggedin} setloggedin={setloggedin}/>
            </>
        )
    }
    else{
        return(<>
            <Loggedout loggedin={loggedin} setloggedin={setloggedin}/>
            </>
        )
    }
  
}


export default App