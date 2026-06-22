import { Link, Outlet } from "react-router-dom";

export const Products = () => {
    return (
        <div>
            <input type="text" placeholder="Search Products"/>
            <nav>
                <Link to='featured'>Featured</Link> <br/>
                <Link to='new'>New</Link>
            </nav>
        <Outlet/>
        </div>
    );
}