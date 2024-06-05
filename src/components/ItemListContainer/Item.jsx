import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ product}) => {
  return (
    

<div className="item">
<img className="image-item" src={product.image} />
<div className="content-item">
  <p>{product.name}</p>
  <Link to={`/detail/${product.id}`} className="button-item-2"> Mostrar </Link>
</div>
</div>
  )
}
