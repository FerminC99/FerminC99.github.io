import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { cart, deleteAll, deleteProductById,totalPrice } = useContext (CartContext)
    if(cart.length === 0){
        return(
            <div>
                <h1> El carrito esta vacio</h1>
                <Link to="/" >Ver Productos</Link>
            </div>
        )
    }
    return (
    <div>
        <h1>Carrito de Compras</h1>
        { 
            cart.map ((productsCart)=>(
            <div key={productsCart}>
                <img src={productsCart.image} width={200}></img>
                <h3>{productsCart.name}</h3>
                <h3> Cantidad: {productsCart.quantity}</h3>
                <h3>Precio Unitario: {productsCart.price}</h3>
                <h3>Precio Parcial: {productsCart.price * productsCart.quantity}</h3>
                <button onClick={ () => deleteProductById(productsCart.id)}>Borrar</button>
            </div>
                
            ))
        }
        <h2>Precio Total : ${totalPrice()}</h2>
        <Link to = "/checkout" >Continuar con mi compra</Link>
        <button onClick={deleteAll}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart