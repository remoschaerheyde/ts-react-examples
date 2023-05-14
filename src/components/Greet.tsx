type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet: React.FC<GreetProps> = ({ name, messageCount = 0, isLoggedIn }) => {
    return (
    <div>
        <h2> 
        {
            isLoggedIn ? `Hello, ${name}! You have ${messageCount} messages` : `Welcome Guest`
        }
        </h2>
    </div>
    )
};

export default Greet;