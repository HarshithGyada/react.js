/*import {useState} from 'react';

import ChildA from './ChildA';
import ChildB from './ChildB';
const Parent =()=>{
  const[count, setCount]=useState(0);
  const increment =()=>{
    setCount(c=>c+1);
  };
  return(
   <div>
    <ChildA/>
    <ChildB count={count} increment={increment}/>
   </div>
  )
};
export default Parent;*/
/*import React, {useState, useEffect, useRef} from 'react';

function CounterWithPrev(){
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    //create a ref to store the previous value

    useEffect(()=>{
        prevCount.current = count;
    }, [count])

    return(
        <div>
            <p>Current Counter: {count}</p>
            <p>prevCount: {prevCount.current}</p>

            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default CounterWithPrev;*/

/*function App(){
  const handleClick=()=>{
    alert("Button clicked")
  };
  return(
    <button onClick={handleClick}>Click Me</button>
  )
}
export default App;*/

/*import React ,{useState}from "react";
function App(){
  const[text,setText]=useState("")
  const handleChange=(event)=>{
    setText(event.target.value)
    //update the text state with value input
  }

return(
  <div>
    <input type="text" value ={text} onChange={handleChange}></input>
    <p>Your Text: {text}</p>
  </div>
)
}
export default App;*/
/*import React ,{useState}from "react";
function App(){
  const[isHovered ,setIsHovered]=useState(false);
  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
  };
  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundcolor:"isHovered ?' lightblue' : lightgray , color:isHovered? 'white':'black' " }}>Hover Me</button>
      {isHovered && <p>Mouse is over the button!</p>}
     </div>

  )
}
export default App;*/

import React ,{useState} from "react";
function App(){
  const[Key,setKey]=useState("");
  const handleKeyDown=(event)=>{
    setKey(event.Key);
  };
  return(
    <div className="app">
      <h1> Welcome to Sai It Solutions</h1>
      {Key &&<h2>Pressed Key:{Key} </h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="pressed here"/>
    </div>
  )
}
export default App;
