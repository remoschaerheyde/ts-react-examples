type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'right'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}


export const Toast: React.FC<ToastProps> = ({position}: ToastProps) => {
    return <div>Toast Notifaction Position - {position}</div>
}