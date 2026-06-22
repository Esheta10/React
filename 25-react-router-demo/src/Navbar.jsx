import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink> <br/>
            <NavLink to='/about'>About</NavLink> <br/>
            <NavLink to='/products'>Products</NavLink>
        </nav>
    );
}