type HeadingProps = {
    children: string;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
    <header>
        {children}
    </header>
    )
};

export default Heading;