import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  const [ocultarCount, setOcultarCount] = useState(false);
  const { addProducts } = useContext(CartContext)

const addProduct = (count) => {
const productCart = {...product, quantity: count}
addProducts(productCart);
setOcultarCount(true);

}
  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {ocultarCount ? (
          <Link className="button" to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;