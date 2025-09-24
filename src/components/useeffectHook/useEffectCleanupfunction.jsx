import React, { useEffect, useState } from 'react'

function UseEffectCleanupfunction() {

    const [widthCount,setwidthCount]=useState(window.screen.width);

    const actualWidth=()=>{
        console.log(window.innerWidth);
        setwidthCount(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize",actualWidth);

        return ()=>{
            window.removeEventListener("resize",actualWidth);
        }
    })
    

    

  return (
    <div>
        <p>this is the actual window size</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffectCleanupfunction;
