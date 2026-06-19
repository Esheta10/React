import {useState} from "react"

export const Avatar = ({user}) => {

    return (
        <div>
            <h5>Avatar</h5>
            <p>User : {user.name}</p>
        </div>
    );
}