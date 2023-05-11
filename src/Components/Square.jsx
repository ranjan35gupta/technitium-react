import React from 'react'
import "./Square.css"

export function Square(props) {
  return (
    <div onClick={props.onClick} className="square">
        <h5 className='heading' >{props.value}</h5>
    </div>
  )
}
