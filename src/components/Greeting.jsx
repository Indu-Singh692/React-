//child component

import React from "react";

// function Greeting(props){
//   return <h2>Helllo,{props.name}</h2>
// }


//Desturing props 


function Greeting({ name, age }) {
  return <h3>Hello, {name}! You are {age} years old.</h3>;
}

export default Greeting;

