import {useState} from "react"

export const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    console.log("Render phase: Component Rendering with count: ", count);

    const handleClick = () => {
        console.log("Before setCount, count is: ", count);
        setCount(count+1);
        console.log("Still in trigger phase, after setCount, count is: ", count);
    }

    return (
      <div>
        <div>Count : {count}</div>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}