import {useState} from "react"
import { MouseEventHook} from "./MouseEventHook"

export const MouseContainer = () => {

    const [display, setDisplay] = useState(false);

    return (
        <div>
            <button onClick={() => {setDisplay(!display)}}>Toogle</button>
            {display && <MouseEventHook/>}
        </div>
    );
}
