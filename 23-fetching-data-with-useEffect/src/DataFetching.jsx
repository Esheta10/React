import {useState, useEffect} from "react"
import axios from 'axios'

export const DataFetching = () => {
    const [posts, setPosts] = useState([]); //we take empty array as initialValue

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data);
        })
        .catch(err => console.log(err));
    },[]) // empty dependency -> does not depend on props and variables 
    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        return <li key = {post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    );
}