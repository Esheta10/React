import {createContext} from "react"

export const UserContext = createContext({
    // default value
    name: "Guest",
    role: "visitor",
    theme: "light"
});