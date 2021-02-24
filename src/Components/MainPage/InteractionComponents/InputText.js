import React from "react"
import './InputText.scss'


function InputText({title, value, setValue, className, deleteElement}) {
  let classes = className === undefined ?
    'InputText' : 'InputText ' + className;
  let cross = deleteElement !== undefined ?
    <div className={'InputText__cross'} onClick={() => deleteElement()}>
      <div className={'InputText__cross-inner'}>
        <div className={'InputText__hor-line'}/>
        <div className={'InputText__vert-line'}/>
      </div>
    </div> : undefined;

  return (
    <div className={classes}>
      <label className={'InputText__label'}>
        {title}
      </label>
      <input
        className={'InputText__input'}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {cross}
    </div>
  )
}


export default InputText