import {useNavigate} from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate(); //invoke the hook to get navigate function
    return (
        <div>
           <h1>Home Page</h1>
           <button onClick={() => navigate('order-summary', {replace: true})}>Place order</button>
        </div>
    );
}