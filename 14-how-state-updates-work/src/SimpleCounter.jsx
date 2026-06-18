import {useState} from "react"

export const SimpleCounter = () => {

    console.log("Simple Counter Component Rendered");
    
    const [count, setCount] = useState(0);

    return (
      <div>
        <div>Count : {count}</div>
        <button onClick={() => {setCount(count+1)}}>Increment</button>
      </div>
    );
}