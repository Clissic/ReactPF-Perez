import { useState } from 'react'
 
const Counter = ({stock, initial = 1, addItem}) => {
    const [count, setCount] = useState(initial)

    const counterPlus = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const counterMinus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={counterMinus}>-</button>
                <p>{count}</p>
                <button onClick={counterPlus}>+</button>
            </div>
            <div>
                <button onClick={() => addItem(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter;