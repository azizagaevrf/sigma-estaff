import React from "react"
import './Select.scss'


function Select({title, options, value, setValue, className}) {
  const optionsTemplate = options.map((option) =>
    <option className={'Select__option'} key={option}>
      {option}
    </option>
  )

  return (
    <div className={'Select ' + className}>
      <label className={'Select__label'}>{title}</label>
      <select className={'Select__select'}
              value={value}
              onChange={(e) => setValue(e.target.value)}>
        {optionsTemplate}
      </select>
    </div>
  )
}


export default Select