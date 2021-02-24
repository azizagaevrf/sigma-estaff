import React from 'react'
import {Route, Switch, useRouteMatch} from "react-router-dom";
import './Workspace.scss'
import BreadCrumbs from '../BreadCrumbs'


function Workspace({activeTab, tabsInformation}) {
  const {path} = useRouteMatch();


  return (
    <div className="workspace">
      <Switch>
        {tabsInformation.map((tabInfo) =>
          <Route path={path + tabInfo.path} children={<tabInfo.main/>}/>
        )}
      </Switch>
    </div>
  )
}


export default Workspace