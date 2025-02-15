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

import React, { useReducer } from 'react';
import appleFruit from './apple.jpg'; // Adjust the path if needed

// reducer function to track number of apples
function appleReduce(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'EAT_APPLE':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appleReduce);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Apple Counter</h1>
      <div style={{ marginTop: '20px' }}>
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
      </div>
      <p>Number of apples: {state}</p>
      <button onClick={() => dispatch({ type: 'ADD_APPLE' })}>ADD APPLE</button>
      <button onClick={() => dispatch({ type: 'EAT_APPLE' })}>EAT APPLE</button>
    </div>
  );
}

export default App;

