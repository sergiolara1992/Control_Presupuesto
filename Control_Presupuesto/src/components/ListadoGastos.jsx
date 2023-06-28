import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='Listado-gastos contenedor'>
     <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>

     {gastos.map( gasto => (
        <Gastos
        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
        />
     ))}
    </div>
  )
}

export default ListadoGastos
