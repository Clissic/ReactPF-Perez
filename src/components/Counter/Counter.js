import { useState } from 'react';
import '../Counter/Counter.css';
 
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
        <div className='counterContainer'>
            <div className='counterButtons'>
                <button className='counterButton' onClick={counterMinus}>-</button>
                <p className='countNumber'>{count}</p>
                <button className='counterButton' onClick={counterPlus}>+</button>
            </div>
            <div>
                <button className='counterAddToCart' onClick={() => addItem(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter;