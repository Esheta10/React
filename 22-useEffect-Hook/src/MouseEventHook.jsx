import {useState, useEffect} from "react"

export const MouseEventHook = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            console.log("component umounting code");
            window.removeEventListener("mousemove", logMousePosition);
        }
    },[])

    return (
        <div>
            <p>X - {x}</p>
            <p>Y - {y}</p>
        </div>
    );
}