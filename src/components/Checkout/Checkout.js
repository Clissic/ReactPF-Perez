import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import { collection, documentId, query, where, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";
import { useNavigate } from "react-router-dom";
import "../Checkout/Checkout.css";

const Checkout = ({ greeting }) => {
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useNotification()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleConfirm = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total: total,
            }

            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)

            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.count

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 3000)

            } else {
                setNotification('error', 'La orden contiene productos sin stock')
            }
        } catch (error) {
            setNotification('error', 'Hubo un error al generar la orden')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h2 className='altTitle'>Generando su orden...</h2>
    }

    return (
        <div className="checkout">
            <h2 className="greetingTitle">{greeting}</h2>
            {orderId ? <h3>Se genero orden Nro: <strong>{orderId}</strong></h3> : <Form onConfirm={handleConfirm} />}
        </div>
    )
}

export default Checkout;