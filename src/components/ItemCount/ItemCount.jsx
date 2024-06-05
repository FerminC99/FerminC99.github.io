import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickrestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClicksumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    addProduct(count)
  };

  return (
    <div className="count">
      <div className="controls-count">
        <button className="button-controls" onClick={handleClickrestar} >-</button>
        <p>{count}</p>
        <button className="button-controls" onClick={handleClicksumar}>+</button>
      </div>
      <button className="submit-count" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount; 