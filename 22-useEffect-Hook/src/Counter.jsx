import {useState} from "react"
import {useEffect} from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);


    useEffect(() => {
        console.log("Updating - document title");
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange = {e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </div>
    );
}