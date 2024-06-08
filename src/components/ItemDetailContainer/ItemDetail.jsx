import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {

  const { addProducts } = useContext(CartContext)

const addProduct = (count) => {
const productCart = {...product, quantity: count}
addProducts(productCart)
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
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  );
};
export default ItemDetail;