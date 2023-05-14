type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton: React.FC<ButtonProps> = ({variant, children, ...rest}: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}