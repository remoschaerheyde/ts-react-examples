import { useContext } from "react"
import { AuthUser, UserContext } from "./UserContext"

export const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
 
            userContext.setUser({
                name: 'Remo',
                email: 'remo@gmail.com'
            })
        

    }
    const handleLogout = () => { 
            userContext.setUser({} as AuthUser)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is: {userContext.user.name}</div>
            <div>email is: {userContext.user.email}</div>

        </div>
    )

}