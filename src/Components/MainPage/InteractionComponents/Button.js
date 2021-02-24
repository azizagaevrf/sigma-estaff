import React from "react";
import './Button.scss'


function Button({title, clickHandler}) {
  return (
    <button 
      className={'Button'}
      onClick={clickHandler}>
      {title}
    </button>
  )
}


export default Button