import React from 'react'
import './Square.css'

function Square({value, selected}) {
  return (
    <div className='square' onClick={selected}>
       {value}
    </div>
  )
}

export default Square