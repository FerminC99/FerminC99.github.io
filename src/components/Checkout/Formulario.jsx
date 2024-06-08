import React from 'react';
import './formulario.css';

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" name="apellido" value={datosForm.apellido} onChange={handleChangeInput} />
      </div>
      <div>
        <label>Telefono</label>
        <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
      </div>
      <div>
        <label>Confirmar Email</label>
        <input type="email" name="confirmEmail" value={datosForm.confirmEmail} onChange={handleChangeInput} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
