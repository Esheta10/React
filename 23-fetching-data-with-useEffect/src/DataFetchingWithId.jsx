import {useState, useEffect} from "react"
import axios from 'axios'

export const DataFetchingWithId = () => {

    const [post, setPost] = useState({}) ; // empty object for individual post
    const [id, setId] = useState(1);
    const[idFromButton, setIdFromButton] = useState(1);

    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res => {
        console.log(res);
        setPost(res.data);
        })
        .catch(err => console.log(err));
    }, [idFromButton]);

    const handleClick = () => {
        setIdFromButton(id);
    }
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>  
    );
}