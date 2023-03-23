import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import {Link, useParams} from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <div>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h3>{prod.name}</h3>
                            <Link to={`/item/${prod.id}`}>DETALLES</Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ItemListContainer;