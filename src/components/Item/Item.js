import {Link} from 'react-router-dom';

const Item = ({name, id, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>Precio: ${price}</h3>
            <Link to={`/item/${id}`}>DETALLES</Link>
        </div>
    )
}

export default Item;