import {Link} from 'react-router-dom';
import '../Item/Item.css'

const Item = ({name, img, id, price}) => {
    return (
        <div className='itemCard'>
            <img className='imgCard' src={img} alt={name}/>
            <h3 className='itemName'>{name}</h3>
            <h3 className='itemPrice'>Precio: ${price}</h3>
            <Link className='itemDetailsButton' to={`/item/${id}`}>VER DETALLES</Link>
        </div>
    )
}

export default Item;