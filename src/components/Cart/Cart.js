import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({greeting}) => {
    const { cart, clearCart } = useContext(CartContext)

    return (
        <div>
            <div>
                <h2>{greeting}</h2>
            </div>
            <div> {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                {prod.name}
                                {prod.img}
                                {prod.price}
                                {prod.count}
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                {cart.length > 0 ? (
                    <div>
                        <Link to='/checkout'><button>Finalizar compra</button></Link>
                        <button onClick={clearCart}>Vaciar carrito</button>
                    </div>
                ) : (
                    <div>
                        <h3>Hay un carrito que llenar</h3>
                    </div>               
                )}
            </footer>
        </div>
    )
}

export default Cart;