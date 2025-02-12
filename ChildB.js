import { memo } from "react";
const childB=({count ,increment})=>{
    console.log("childB rendered")
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};
export default childB;
