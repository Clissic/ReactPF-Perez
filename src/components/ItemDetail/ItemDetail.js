import './ItemDetail.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({name, img, price, stock}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img className='imgCard' src={img} alt={name}/>
            <h3>Precio: ${price}</h3>
            <h3>Stock: {stock}</h3>
            <Counter stock={stock}/>
        </div>
    )
}

export default ItemDetail;