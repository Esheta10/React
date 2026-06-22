import { Outlet } from "react-router-dom";

export const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <Outlet/> {/*to render child components */}
        </div>
    );
}