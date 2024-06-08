import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import "./itemlistcontainer.css";
import { collection, getDocs,query,where } from 'firebase/firestore';
import db from "../../db/db.js";
const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState (false)
  const { idCategory } = useParams()
  const getProducts = () => {
    const productsRef = collection(db,"products")
    getDocs(productsRef)
    .then((productsDb)=> {
     const data = productsDb.docs.map ( (product)=> {
        return { id: product.id, ...product.data() }
      }) 
      setProducts(data)
    })
  }
  const getProductsByCategory = () => {
   const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", idCategory) )
    getDocs(q)
      .then((productsDb)=> {
        const data = productsDb.docs.map( (product)=> {
          return { id: product.id, ...product.data() }
        }) 

        setProducts(data)
      })
      
  }

 
  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    } else{
       getProducts()
    }
   
  }, [idCategory]);
 
  return (
    <div className="item-list-container">
      <h1>{idCategory ? `Filtrado por categoria: ${idCategory}`: "Bienvenidos a Zona Outlet"}</h1>
      {
        loading ? <div>Cargando...</div> : <ItemList products={ products }/>
      }
      
    </div>
  ); 
};

export default ItemListContainer;