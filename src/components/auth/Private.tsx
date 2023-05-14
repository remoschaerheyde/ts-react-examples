import { Login } from "./Login"
import { ProfilePropType } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfilePropType>
}


export const Private:React.FC<PrivateProps> = ({isLoggedIn, component: Component}: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Remo'/>
    } else {
        return <Login/>
    }
}