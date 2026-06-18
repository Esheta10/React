import {useState} from "react"

const initialItems = [
    {
        id:1,
        text:"Learn React",
        done: false
    },
    {
        id:2,
        text:"Build an app",
        done: false
    }
]
export const TodoList = () => {

    const [items, setItems] = useState(initialItems);

    const addItem = () => {
        setItems((prev) => [...prev, {id:Date.now(), text:"Deploy on production", done:false}]);
    }

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    const toggleDone = (id) => {
        setItems((prev) => prev.map((item) => item.id === id ? {...item, done: !item.done} : item))
    }
    return (
        <div>
            <ul>
                {
                    items.map(({id, text, done}) => {
                        return (
                           <div>
                                <li key = {id}>
                                <span style={{textDecoration: done ? "line-through" : "none"}}>
                                    {text}
                                </span>
                                <button onClick={() => toggleDone(id)}>{ done ? "Undo" : "Done"}</button> <br/>
                                <button onClick={() => removeItem(id)}>Remove</button>
                                </li>
                           </div>
                        );
                    })
                }
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}