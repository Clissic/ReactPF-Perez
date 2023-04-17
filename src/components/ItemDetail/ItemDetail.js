import './ItemDetail.css';
import { useContext, useState } from 'react';
import Counter from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, img, price, stock}) => {

    const [count, setCount] = useState(0)
    const {cartAddItem} = useContext(CartContext)
    const {setNotification} = useNotification()

    const handleAddItem = (count) => {
        const productToAdd = {
            id, name, img, price, count
        }
        setCount(count)
        cartAddItem(productToAdd)
        console.log(productToAdd)
        setNotification('succes', `Se agrego correctamente ${count} ${name} al carrito`)
    } 

    return (
        <div>
            <h2>{name}</h2>
            <img className='imgCard' src={img} alt={name}/>
            <h3>Precio: ${price}</h3>
            <h3>Stock: {stock}</h3>
            <footer>
                {count > 0 ? (
                    <Link to='/cart'>Finalizar compra</Link>
                ) : (
                    stock === 0 ? <h3>Sin stock</h3> : <Counter stock={stock} addItem={handleAddItem}/>
                )}
            </footer>
        </div>
    )
}

export default ItemDetail;