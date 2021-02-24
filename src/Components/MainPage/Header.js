import React from 'react'
import './Header.scss'
import logo from '../../img/logo.svg'
import logout from '../../img/icon-logout.svg'
import {useHistory} from 'react-router-dom'

function Header() {
  const history = useHistory();

  return (
    <header className="header">
      <div className="logo header__logo">
        <img className="logo__svg logo__svg_top" src={logo} alt="logo"/>
        <img className="logo__svg logo__svg_bottom" src={logo} alt="logo"/>
        <p className="logo__label">Staff</p>
      </div>
      <div className="header__label">Sigma STAFF</div>
      <img className="header__logout"
           src={logout}
           alt="logout"
           onClick={() => {
             localStorage.removeItem('user:pass')
             history.push('/')
           }}
      />
    </header>
  )
}

export default Header