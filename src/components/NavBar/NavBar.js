import CartWidget from '../Cart/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>A.Exclusive</h1>
            <button>OUTLET</button>
            <button>ENVÍOS</button>
            <button>CONTACTO</button>
        <CartWidget />
        </div>
    )
}

export default NavBar;