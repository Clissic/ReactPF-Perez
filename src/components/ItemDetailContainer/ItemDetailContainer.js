import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProductById } from "../../components/asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h2 className='altTitle'>Cargando...</h2>
    }

    return (
        <div>
            <h2>Detalles del producto:</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer