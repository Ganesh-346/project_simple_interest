import React, { useState } from 'react'

function Example()
{
    const [ex, update] = useState(0);
   
    return(
       <div>
            <h1> {ex} </h1>
            <button onClick={() => update(ex + 1)}>
                click
            </button>
            
        </div>
 
        

    );
}
export default Example;