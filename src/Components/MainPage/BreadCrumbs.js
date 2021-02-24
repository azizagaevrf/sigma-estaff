import React from 'react'


function BreadCrumbs({title}) {


  return(
    <div className="bread-crumbs">
      <div className="bread-crumbs__bread-crumb">
        <div className="bread-crumbs__title">{title}</div>
        <hr className="bread-crumbs__line" />
      </div>
    </div>
  )
}


export default BreadCrumbs