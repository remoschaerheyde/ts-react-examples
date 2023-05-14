export type ProfilePropType = {
    name:string
}

export const Profile: React.FC<ProfilePropType> = ({name}: ProfilePropType) => {
    return <div>Private: My name is: {name}</div>
}