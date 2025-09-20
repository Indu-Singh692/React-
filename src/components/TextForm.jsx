import React,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState();
  // text="nvjd"; worng way to change the text;
  // setText="helllo;"  correct way to change the text;

  const handelUpCase =()=>{
// console.log("handel upper case");
let newText= text.toUpperCase();
setText(newText);
  }
  const handelOnChange=(event)=>{
    // console.log("on change");
    
    setText(event.target.value);
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        
        <textarea type='text' name='name' placeholder='Enter text here' value={text} className='form-control' id='name' onChange={handelOnChange} />
      </div>
      <button onClick={handelUpCase} >Convert Lower to Upper case</button>
      
    </div>
  )
}
