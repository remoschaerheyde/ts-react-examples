type RandomNumberValType = {
    value: number
}

type isPositive = RandomNumberValType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type isNegative = RandomNumberValType & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}

type isZero = RandomNumberValType & {
    isPositive: never
    isNegative?: never
    isZero?: boolean
}

type RandomNumberPropType = isPositive | isNegative | isZero

export const RandomNumber:React.FC<RandomNumberPropType> = ({value, isPositive, isNegative, isZero}: RandomNumberPropType) => {
    return (
        <div>{value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'} </div>
    )
}