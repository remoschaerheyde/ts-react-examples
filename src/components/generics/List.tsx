import { ReactNode } from "react"

type ListPropType<T> = {
    items: T[]
    onClick: (value: T) => void
}

const List = <T extends {}>({items, onClick}: ListPropType<T>) => {
    return (
        <div>
             <h1>List of Items</h1>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item as ReactNode}
                    </div>
                )
            })}

        </div>
    )
}

export default List