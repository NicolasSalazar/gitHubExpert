import React, { Component } from 'react';

class AgregarProducto extends Component {
  props = {};
  render() {
    return (
      <div className='card mt-5 py-5'>
        <form className='card-body'>
          <h2 className='card-title text-center mb-5'>Digita el formulario</h2>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Nombre</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                type='text'
                className='form-control'
                placeholder='Arroz'
                required
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Marca</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                type='text'
                className='form-control'
                placeholder='Exito'
                required
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Precio</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                type='number'
                className='form-control'
                placeholder='25000'
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AgregarProducto;
