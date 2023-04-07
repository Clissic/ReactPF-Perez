import './ItemDetail.css';

const ItemDetail = ({name, img, price, stock}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img className='imgCard' src={img} alt={name}/>
            <h3>Precio: ${price}</h3>
            <h3>Stock: {stock}</h3> 
        </div>
    )
}

export default ItemDetail;