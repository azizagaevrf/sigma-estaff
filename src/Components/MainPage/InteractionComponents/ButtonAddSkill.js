import React from "react"
import './ButtonAddSkill.scss'


function ButtonAddSkill({title, addElement, className}) {
  let classes = className === undefined ?
    'ButtonAddSkill' : 'ButtonAddSkill ' + className;

  return (
    <button
      className={classes}
      onClick={() => addElement()}>
      <div className={'ButtonAddSkill__title'}>
        {title}
      </div>
      <div className={'ButtonAddSkill__plus'}>
        <div className={'ButtonAddSkill__hor-line'}/>
        <div className={'ButtonAddSkill__vert-line'}/>
      </div>
    </button>
  )
}


export default ButtonAddSkill