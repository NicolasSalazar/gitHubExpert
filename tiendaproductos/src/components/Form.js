import React from 'react'

function Form ({ handleChange, addProduct, Titulo, Nombre, Marca, Precio }) {
  return (
    <form className='card-body'>
      <h2 className='card-title text-center mb-5'>{Titulo}</h2>
      <div className='form-group row'>
        <label className='col-sm-4 col-lg-2'>Nombre</label>
        <div className='col-sm-8 col-lg-10'>
          <input
            name='nombre'
            type='text'
            className='form-control'
            placeholder='Arroz'
            required
            value={Nombre}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 col-lg-2'>Marca</label>
        <div className='col-sm-8 col-lg-10'>
          <input
            name='marca'
            type='text'
            className='form-control'
            placeholder='Exito'
            required
            value={Marca}
            onChange={handleChange}

          />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 col-lg-2'>Precio</label>
        <div className='col-sm-8 col-lg-10'>
          <input
            name='precio'
            type='number'
            className='form-control'
            placeholder='25000'
            required
            value={Precio}
            onChange={handleChange}
          />
        </div>
        <button type='button' onClick={addProduct}>Enviar</button>
      </div>
    </form>
  )
}

export default Form
