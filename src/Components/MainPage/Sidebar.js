import React from 'react'
import './Sidebar.scss'
import btnSidebar from '../../img/btn-sidebar.svg'
import {NavLink, useRouteMatch} from "react-router-dom";


function Sidebar({tabsInformation}) {
  const [sidebarClassName, setSidebarClassName] = React.useState('sidebar');
  const {path} = useRouteMatch();
  const tabs = tabsInformation.map(tabInfo =>
    <li key={tabInfo.id}>
      <NavLink className="sidebar__tab"
               activeClassName={'sidebar__tab_active'}
               to={path + tabInfo.path}>
        <img className="sidebar__tab-icon"
             src={tabInfo.icon}
             alt={tabInfo.title + ' иконка'}/>
        <span className="sidebar__tab-title">{tabInfo.title}</span>
      </NavLink>
    </li>
  );


  function toggleSidebar() {
    if (sidebarClassName.includes('sidebar_hidden')) {
      setSidebarClassName('sidebar');
    } else {
      setSidebarClassName(sidebarClassName + ' sidebar_hidden')
    }
  }


  return (
    <aside className={sidebarClassName}>
      <img className="btn_sigma"
           src={btnSidebar}
           alt="sidebar button"
           onClick={toggleSidebar}/>
      <nav>
        <ul className="sidebar__tabs">
          {tabs}
        </ul>
      </nav>
    </aside>
  )
}


export default Sidebar