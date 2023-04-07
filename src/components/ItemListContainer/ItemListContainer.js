import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h2 className='altTitle'>Cargando...</h2>
    }

    if(products && products.length === 0) {
        return <h2 className='altTitle'>No hay productos.</h2>
    }

    return (
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;