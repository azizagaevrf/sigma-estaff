import React from "react"
import './TextArea.scss'


function TextArea({title, value, setValue, className}) {
  let classes = className === undefined ?
    'TextArea' : 'TextArea ' + className;


  return (
    <div className={classes}>
      <label className={'TextArea__label'}>
        {title}
      </label>
      <textarea
        className={'TextArea__input'}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}


export default TextArea