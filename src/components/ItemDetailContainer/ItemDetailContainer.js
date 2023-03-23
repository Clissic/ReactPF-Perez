import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProductById } from "../../components/asyncMock";
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div>
            <h2>Detalles del producto:</h2>
            <Item {...product}/>
        </div>
    )
}

export default ItemDetailContainer