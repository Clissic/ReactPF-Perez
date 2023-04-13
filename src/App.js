import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './notification/NotificationService';

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Listado de productos:"}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por categoría:"}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
