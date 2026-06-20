import {use} from "react"
import {UserContext} from './UserContext'

export const Avatar = ({isLoading = true}) => {

    if(isLoading)
        return <p>Loading user data...</p>

    const {user, setUser} = use(UserContext);
    const toggleTheme = () => {
        setUser({
            ...user,
            theme: user.theme === "dark" ? "light" : "dark"
        })
    }
    return (
        <div>
             <p>User: {user.name}</p>
             <p>Current theme: {user.theme}</p>
             <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}