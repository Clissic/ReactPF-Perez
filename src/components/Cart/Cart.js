import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

const Cart = ({greeting}) => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext)

    return (
        <div className="cart">
            <div>
                <h2 className="greetingTitle">{greeting}</h2>
            </div>
            <div> {
                    cart.map(prod => {
                        return (
                            <div className="itemCartCard" key={prod.id}>
                                <img src={prod.img} alt="producto" className="itemCartCardImg"></img>
                                <p className="itemCartCardName"><strong>{prod.name}</strong></p>
                                <p className="itemCartCardCount">Cantidad: <strong>{prod.count}</strong></p>
                                <p className="itemCartCardPrice">Precio: <strong>${prod.price}</strong></p>
                                <p className="itemCartCardSubTotal">Subtotal: <strong>${prod.price*prod.count}</strong></p>
                                <button className="removeItemFromCart" onClick={() => removeItem(prod.id)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                {cart.length > 0 ? (
                    <div>
                        <p className="totalItemsPrice">Total: <strong>${total}</strong></p>
                        <div className="cartFooterButtons">
                            <Link className="cartFinalizarCompraButton" to='/checkout'><p>Finalizar compra</p></Link>
                            <p className="vaciarCarritoButton" onClick={clearCart}>Vaciar carrito</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h3>¡Tu carrito esta vacío!</h3>
                        <img className="carritoImg" alt="cart" src="https://cdn.iclasspro.com/portal/8a9a3ac/assets/images/shared/illustration-empty-cart.svg"></img>
                    </div>               
                )}
            </footer>
        </div>
    )
}

export default Cart;