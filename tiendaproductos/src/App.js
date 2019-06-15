import React, { Component } from 'react'
import './App.css'
import './assets/css/bootstrap.min.css'
import Header from './components/Header'
import AgregarProducto from './screens/AgregarProducto'
import EditarProducto from './screens/EditarProducto'
import ListadoProds from './screens/ListadoProds'

class App extends Component {
  constructor () {
    super()
    this.initialState = {
      products: [],
      detail: false,
      productDetail: {}
    }
    this.state = this.initialState
    this.fetchProduct = this.fetchProduct.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  componentDidMount () {
    this.fetchProduct()
  }
  fetchProduct () {
    fetch('http://localhost:3030/productsAll')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data })
      })
  }
  async handleRemove (id) {
    const response = await fetch(`http://localhost:3030/productDelete/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      this.fetchProduct()
    }
  }
  handleEdit (product) {
    if (product) {
      this.setState({
        detail: true,
        productDetail: product
      })
    } else {
      this.setState({
        detail: false
      })
    }
  }
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6'>
            {
              this.state.detail
                ? <EditarProducto product={this.state.productDetail} />
                : <AgregarProducto handleList={this.fetchProduct} />
            }
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6'>
            <ListadoProds
              detail={this.state.detail}
              products={this.state.products}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
