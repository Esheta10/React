import { UserInfo } from "./UserInfo";

export const UserCard = (props) => {
    return (
        <div>
            <h1> User Details:</h1>
            <UserInfo {...props} />
        </div>
    );
}