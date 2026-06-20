import {createContext} from "react"

export const UserContext = createContext({
    // default value
    user: {  name: "Bruce Wayne",
           role: "admin",
           theme: "dark"
        },
    setUser: () => {}

});
