type ContainerProps = {
    styles: React.CSSProperties
}


const Container: React.FC<ContainerProps> = ({styles}) => {
    return (
        <div style={styles}>

        </div>
    )
}

export default Container