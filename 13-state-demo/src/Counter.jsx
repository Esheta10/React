import {useState} from 'react'

export const Counter = () => {

    // currentValue, setterFunction = useState(initialValue)
    // const [count, setCount] = useState(0);
    
    // currentValue, setterFunction = useState(fn)
    // Function pass kiya -> lazy initialization
    const [count, setCount] = useState(() =>{
        console.log("Initial state function called");
        return 0;
    })

    console.log("Counter component rendered with count: ", count);

    const handleClick = () => {
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    );
} 
