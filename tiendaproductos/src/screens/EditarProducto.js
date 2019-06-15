/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'

function EditarProducto ({ product, handleEdit }) {
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [precio, setPrecio] = useState('')
  const [flat, setFlat] = useState(false)
  useEffect(() => {
    if (!flat) {
      setNombre(product.Nombre)
      setMarca(product.Marca)
      setPrecio(product.Precio)
      setFlat(true)
    }
  })
  const handleChange = (producto) => {
    switch (producto.target.name) {
      case 'nombre':
        setNombre(producto.target.value)
        break
      case 'marca':
        setMarca(producto.target.value)
        break
      case 'precio':
        setPrecio(producto.target.value)
        break
    }
  }
  const editProduct = async () => {
    const response = await fetch(`http://localhost:3030/productEdit/${product._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        Nombre: nombre,
        Marca: marca,
        Precio: precio
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      handleEdit()
    }
  }
  return (
    <div className='card mt-5 py-5'>
      <Form
        Titulo='Editar Producto'
        Nombre={nombre}
        Marca={marca}
        Precio={precio}
        handleChange={handleChange}
        addProduct={editProduct}
      />
    </div>
  )
}

export default EditarProducto
