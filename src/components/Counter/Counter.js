import { useState } from 'react'
 
const Counter = (props) => {
    const [count, setCount] = useState(0)

    const counterPlus = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
        console.log(count)
    }

    const counterMinus = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
        console.log(count)
    }

    return (
        <div>
            <button onClick={counterMinus}>-</button>
            <p>{count}</p>
            <button onClick={counterPlus}>+</button>
        </div>
    )
}

export default Counter;