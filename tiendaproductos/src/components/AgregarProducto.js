import React, { Component } from 'react';

class AgregarProducto extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.addProduct = this.addProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async addProduct() {
    const response = await fetch('http://localhost:3030/newProduct', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      this.props.handleList()
    }
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className='card mt-5 py-5'>
        <form className='card-body'>
          <h2 className='card-title text-center mb-5'>Digita el formulario</h2>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Nombre</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                name="Nombre"
                type='text'
                className='form-control'
                placeholder='Arroz'
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Marca</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                name="Marca"
                type='text'
                className='form-control'
                placeholder='Exito'
                required
                onChange={this.handleChange}
              
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2'>Precio</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                name="Precio"
                type='number'
                className='form-control'
                placeholder='25000'
                required
                onChange={this.handleChange}
              />
            </div>
          <button type="button" onClick={this.addProduct}>Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AgregarProducto;
