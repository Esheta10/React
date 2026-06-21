import {useReducer, useEffect} from "react"
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {

    switch(action.type){
        case "FETCH_SUCCESS": return {
            loading: false,
            error: '',
            post:action.payload
        }
        case "FERTCH_ERROR": return {
            loading: false,
            error: "Something went wrong...",
            post: {}
        }
        default: 
            return state;
    }
}
export const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"})
        })
    },[])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? error : null}
        </div>
    );
}