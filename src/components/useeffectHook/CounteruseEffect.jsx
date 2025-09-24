import React, { useEffect, useState } from 'react'

function CounteruseEffect() {

    const [count,setCount]=useState(0);
    const [Fruites,setFruites]=useState("Mango");

    useEffect(()=>{
        console.log("count increased");
    },[Fruites]);

    function changeFruit(){
        setFruites("Grapes");
    }
    function updateCount(){
        setCount(count+1);
    }
  return (
    <div>

        <h2>{count}</h2>
        <button onClick={updateCount}>Click me </button>
        <p>{Fruites}</p>
        <button onClick={changeFruit}>Click</button>
      
    </div>
  )
}

export default CounteruseEffect
