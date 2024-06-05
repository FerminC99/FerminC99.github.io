import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const cambiarDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
   const usuario = {nombre, direccion}
    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Dirección:", direccion);
  };

  return (
    <form onSubmit={enviarFormulario}>
      <label htmlFor='nombre'>Nombre: </label>
      <input 
        type='text' 
        id='nombre' 
        value={nombre} 
        onChange={cambiarNombre}
      />

      <label htmlFor='direccion'>Dirección: </label>
      <input 
        type='text' 
        id='direccion' 
        value={direccion} 
        onChange={cambiarDireccion}
      />

      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Formulario;
