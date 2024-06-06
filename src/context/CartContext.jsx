import React, { Children, useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext () 
  
const CartProvider = ({Children}) => {
    const [cart, setCart] = useState ([])
    return (
        <CartContext.Provider value = {{ cart}}>
            {Children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}