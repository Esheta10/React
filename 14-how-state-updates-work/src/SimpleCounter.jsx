import {useState} from "react"

export const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    console.log("Render phase: Component Rendering with count: ", count);

    const handleClick = () => {
      
        setCount(count+1);
        console.log("After setCount(count + 1), count is: ", count);

        setCount(count+5);
        console.log("After setCount(count + 5), count is: ", count);

        setCount(count+10);
        console.log("After setCount(count + 10), count is: ", count);
    }

    return (
      <div>
        <div>Count : {count}</div>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}