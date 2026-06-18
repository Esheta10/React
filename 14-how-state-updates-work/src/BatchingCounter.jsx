import {useState} from "react"

export const BatchingCounter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);

    console.log("Render Phase: Component Rendering");

    const handleClick = () => {

        setCount((prev) => prev + 1)

        setCount((prev) => prev + 5)

        setCount((prev) => prev + 10)

        setName("Updated")

        setIsActive(true)
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <p>Name: {name}</p>
            <p>Active: {isActive ? "Yes" : "No" }</p>
            <button onClick={handleClick}> Update all 3 </button>
        </div>
    );
}