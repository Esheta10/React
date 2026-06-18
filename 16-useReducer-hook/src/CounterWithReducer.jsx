import {useReducer} from "react"

const initialState = 0;

// 1. Reducer function accepts the current state and returns a new state
// 2. action parameter is like instruction to the useReducer function, based on what action specifies,
// useReducer makes the necessary changes
const reducer = (state, action) => {
    
    switch(action){
        case "increment": 
            return state + 1;
        case "decrement": 
            return state - 1;
        case "reset": 
            return initialState;
        default: 
            return state;
    }
}
export const CounterWithReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}