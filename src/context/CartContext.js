import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const cartAddItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    }
  }

  const removeItem = (id) => {
    const cartUpdate = cart.filter(prod => prod.id !== id)
    setCart(cartUpdate)
  }

  const getTotalQuantity = () => {
    let totalQuantity = 0
    cart.forEach(prod => {
        totalQuantity += prod.count
    });
    return totalQuantity
  }
  const totalQuantity = getTotalQuantity()

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        total += prod.count * prod.price
    })
    return total
}

const total = getTotal()

const clearCart = () => {
    setCart([])
}

    return (
      <CartContext.Provider value={{cart, cartAddItem, removeItem, totalQuantity, total, clearCart}}>
        {children}
      </CartContext.Provider>
    )
}