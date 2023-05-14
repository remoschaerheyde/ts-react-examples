import {createContext, useState} from 'react'

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps) => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}