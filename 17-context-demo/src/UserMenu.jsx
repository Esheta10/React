import {useState} from "react"

export const UserMenu = ({user}) => {
    return (
        <div>
            <h4>User Menu</h4>
            <p>User: {user.name}</p>
        </div>
    );
}