import {useState} from 'react';
import childA from './childA';
import childB from './childB';
const Parent =()=>{
  const[count, setCount]=useState(0);
  const increment =()=>{
    setCount(c=>c+1);
  };
  return(
   <div>
    <childA/>
    <childB count={count} increment={increment}/>
   </div>
  )
};
export default Parent;