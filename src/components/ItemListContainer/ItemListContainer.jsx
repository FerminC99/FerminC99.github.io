import React, { useState, useEffect, useCallback } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import "./itemlistcontainer.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from "../../db/db.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
  const { idCategory } = useParams();

  const getProducts = useCallback(async () => {
    
    setLoading(true);
    
    try {
      const productsRef = collection(db, "products");
      const productsDb = await getDocs(productsRef);
      const data = productsDb.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      setProducts(data);
             } catch (error) {
      console.error("Error fetching products:", error);
            } finally {
      setLoading(false);
    }
  }, []);

  const getProductsByCategory = useCallback(async () => {
    setLoading(true);
     try {
          const productsRef = collection(db, "products");
          const q = query(productsRef, where("category", "==", idCategory));
              const productsDb = await getDocs(q);
            const data = productsDb.docs.map((product) => ({
              id: product.id,
              ...product.data(),
      }));
      setProducts(data);
            } catch (error) {
      console.error("Error fetching products by category:", error);
              } finally {
      setLoading(false);
    }
  }, [idCategory]);

    useEffect(() => {
        if (idCategory) {
      getProductsByCategory();
               } else {
      getProducts();
    }
  }, [idCategory, getProducts, getProductsByCategory]);

  return (
    <div className="item-list-container">
      <h1>{idCategory ? `Filtrado por categoria: ${idCategory}` : "Bienvenidos a Zona Outlet"}</h1>
      {loading ? <div>Cargando...</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
