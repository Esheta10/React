import {useState} from "react" 

export const PreviousStateCounter = () => {

    const [count, setCount] = useState(0);
    console.log("Rendering phase: Component rendering with count: ", count)

    const handleClick = () => {

        setCount((prev) =>{
            console.log("First updater function, prev count is: ", prev)
            return prev + 1;
        }); // updater functions

        setCount((prev) =>{
            console.log("Second updater function, prev count is ", prev)
            return prev + 5;
        }); // updater functions

        setCount((prev) => {
            console.log("Third updater function, prev count is ", prev)
            return prev + 10;
        }); // updater functions
        
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}