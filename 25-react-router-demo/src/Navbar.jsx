import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink> <br/>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
}