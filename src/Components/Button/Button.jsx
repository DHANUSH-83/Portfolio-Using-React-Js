import React from 'react'
import './Button.scss'

function Button({text ,blue=true}) {
  return (
    <div className='Button'>
      <button className={`${blue ? 'blue':""}`}>{text}</button>
    </div>
  )
}

export default Button;