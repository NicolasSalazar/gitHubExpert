import React from 'react'

function ListadoProds ({ products, detail, handleRemove, handleEdit }) {
  return (
    <div className='card mt-5 py-5'>
      <table className='table table-hover table-light table-responsive'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => {
              return (
                <tr key={product._id}>
                  <td>{product.Nombre}</td>
                  <td>{product.Marca}</td>
                  <td>{product.Precio}</td>
                  <td>
                    <button onClick={handleRemove.bind(this, product._id)}>
                      Delete
                    </button>
                    <button
                      onClick={handleEdit.bind(this, product)}
                    >
                      { detail ? 'Crear' : 'Editar' }
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListadoProds
