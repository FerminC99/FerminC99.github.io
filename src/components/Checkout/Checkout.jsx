import React, { useState } from 'react'
import Formulario from './Formulario'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc,collection,doc,setDoc } from 'firebase/firestore'
import db from '../../db/db.js'
const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email:"",

    });
    const [idOrden, setIdOrden] = useState(null);
    const { cart, totalPrice,deleteAll } = useContext(CartContext)

    const handleChangeInput = (event) =>{
        setDatosForm ({...datosForm, [event.target.name]: event.target.value })
    }
    const handleSubmitForm =(event) => {
        event.preventDefault();
        
        const orden = {
            comprador: {...datosForm},
            productos: [...cart], 
            fecha: Timestamp.fromDate(new Date()),
            total: totalPrice(),
        };
        generateOrder(orden)
    };

    const generateOrder = (orden) => { 
        const ordenesRef = collection (db, "ordenes")
        addDoc(ordenesRef,orden)
            .then ((respuesta)=> setIdOrden(respuesta.id))
            .catch((error)=> console.log(error))
            .finally(()=>{
                updateStock()
                deleteAll()

      })
    };
    const updateStock = () => {
        cart.map((productCart)=>{
            let quantity = productCart.quantity
            delete productCart.quantity

            const productRef = doc(db,"products",productCart.id)
            setDoc(productRef,{...productCart, stock: productCart.stock - quantity})
            .then(()=> console.log("stock actualizado"))
            .catch((error)=> console.log(error))
        })
    }
  return (
    <div>
        {
            idOrden ? (
                        <div>
                            <h2>Orden generada!</h2>
                            <p> Guarde el CODIGO de su orden: {idOrden} </p>
                        </div>
            ):(<Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm ={handleSubmitForm} />)}
    </div>
  )
};

export default Checkout

