import React from 'react'
import BreadCrumbs from "./BreadCrumbs";
import {Route, Switch, useRouteMatch} from "react-router";
import {Link} from "react-router-dom";


function List({tabs,title}) {
  let {path} = useRouteMatch()
  let linksTemplate = <ul className="list"> {
    tabs.map((tab) => (
      <li className="list__item" key={tab.id}>
        <img className="list__icon" src={tab.icon}/>
        <div className="list__info">
          <div className="list__title">{tab.title}</div>
          <div className="list__description">{tab.description}</div>
        </div>
        <Link className="list__link" to={`${path}${tab.path}`}>
          <button className="list__btn">Перейти</button>
        </Link>
      </li>
    ))
  }</ul>;
  let routesTemplate = tabs.map((tab) =>
    <Route
      path={`${path}${tab.path}`}
      children={() => <tab.main/>}
      key={tab.id}
    />
  )


  return (
    <div>
      <div className="workspace__header">{title}</div>
      <BreadCrumbs title={title}/>
      <Switch>
        <Route exact path={`${path}/`} children={() => linksTemplate}/>
        {routesTemplate}
      </Switch>
    </div>
  )
}


export default List