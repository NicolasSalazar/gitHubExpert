import React, { Component } from 'react'
import Form from '../components/Form'

class AgregarProducto extends Component {
  constructor () {
    super()
    this.state = {
      Nombre: '',
      Marca: '',
      Precio: ''
    }
    this.addProduct = this.addProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async addProduct () {
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

  handleChange (ev) {
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div className='card mt-5 py-5'>
        <Form
          Titulo='Crear Producto'
          Nombre={this.state.nombre}
          Marca={this.state.marca}
          Precio={this.state.precio}
          handleChange={this.handleChange}
          addProduct={this.addProduct}
        />
      </div>
    )
  }
}

export default AgregarProducto
