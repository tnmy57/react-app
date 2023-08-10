import React from 'react'
import "./border.css"


const Border = (props) => {
  return (
    <div className='border'>{props.children}</div>
  )
}

export default Border