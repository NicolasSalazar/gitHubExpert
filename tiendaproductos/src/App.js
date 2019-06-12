import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header';
import AgregarProducto from './components/AgregarProducto';
import ListadoProds from './components/ListadoProds';

class App extends Component {
  props = {};
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6'>
            <AgregarProducto />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6' />
          <ListadoProds />
        </div>
      </div>
    );
  }
}

export default App;
