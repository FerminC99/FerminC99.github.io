import React from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CardWidget = () => {
  const { cart  } = useContext (CartContext)
  return (
    <><div><RiShoppingCartFill color="brown" size={40} /></div>
    <p> 1 </p></>
  )
}

export default CardWidget