type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function renderSwitch(status: string): string {
    switch (status) {
        case 'loading':
            return 'is loading';
        case 'error':
            return 'has an error';
        case 'success':
            return 'operation was successfull';
        default:
            throw new Error(`Unknown status: ${status}`);
    }

}

const Status: React.FC<StatusProps> = ({ status  }) => {

    return (
    <div>
        <p>Status:</p>
        {
            renderSwitch(status)
        }

    </div>
    )
};

export default Status;