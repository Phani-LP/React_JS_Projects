import React, { useState } from "react";
import { Fragment } from "react";

function CounterAPP() {
  const [c, setC] = useState(0);

  return (<>
        <p>Count: {c}</p>
        <button onClick={()=>setC(c+1)}>Increment</button><p>{" "}</p>
        <button onClick={()=>setC(c-1)}>Decrement</button>
  </>);
}

export default CounterAPP;