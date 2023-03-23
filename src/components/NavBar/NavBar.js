import CartWidget from '../Cart/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1><Link to="/" className='webTitle'>iCommerce</Link></h1>
            <Link to="/category/computadora" className="navButton">COMPUTADORAS</Link>
            <Link to="/category/reloj" className="navButton">RELOJES</Link>
            <Link to="/category/celular" className="navButton">CELULARES</Link>
        <CartWidget />
        </div>
    )
}

export default NavBar;