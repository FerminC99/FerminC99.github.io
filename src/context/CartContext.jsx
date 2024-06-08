import React, { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProducts = (newProduct) => {
        const condition = inCart(newProduct.id);
        if (condition) {
            const modifiedProducts = cart.map((productCart) => {
                if (productCart.id === newProduct.id) {
                    return { ...productCart, quantity: productCart.quantity + newProduct.quantity };
                } else {
                    return productCart;
                }
            });
    
            setCart(modifiedProducts);
        } else {
            setCart([...cart, newProduct]);
        }
    };
    

    const totalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    const totalPrice = () => {
        const totalPurchase = cart.reduce ( (total, productCart)=> total + ( productCart.price * productCart.quantity ), 0 )
        return totalPurchase
    }

    const deleteAll = () => {
        setCart ([])
    }
    const deleteProductById = (idProduct) => {
        const productFilter = cart.filter ((productCart) => productCart.id !== idProduct )
        setCart (productFilter)

    }

    const inCart = (idProduct) => {
        const condition = cart.some ((productCart)=> productCart.id === idProduct )
        return condition
    }

    return (
        <CartContext.Provider value={{ cart, addProducts, totalQuantity, deleteAll, deleteProductById, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
