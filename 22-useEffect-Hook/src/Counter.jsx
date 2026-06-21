import {useState} from "react"
import {useEffect} from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </div>
    );
}