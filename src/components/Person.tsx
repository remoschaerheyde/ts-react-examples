import { PersonProps } from "./Person.types";


const Person: React.FC<PersonProps> = ({ name}) => {
    return (
    <div>
        {name.first} {name.last}
    </div>
    )
};

export default Person;