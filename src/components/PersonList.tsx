import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[]
}

const PersonList: React.FC<PersonListProps> = ({names}) => {
    return (
    <div>
        {names.map(name => `${name.first} ${name.last} `)}
    </div>
    )
};

export default PersonList;