
import React from 'react';
import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./cardwidget.css"

const CardWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  let quantity = totalQuantity()
  
  return (
    <Link to="/cart" className={ quantity >= 1 ? "cartwidget cart-green" : "cartwidget" }>
      <RiShoppingCartFill size={40} />
      <p className="number">{ quantity >=1 && quantity } </p>
    </Link>
  );
}

export default CardWidget;




