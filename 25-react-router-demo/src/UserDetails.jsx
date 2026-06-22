import { useParams } from "react-router-dom";

export const UserDetails = () => {

    const params = useParams();
    const userId = params.userId;

    return (
        <div>
            <h4>Details about User : {userId}</h4>
        </div>
    );
}