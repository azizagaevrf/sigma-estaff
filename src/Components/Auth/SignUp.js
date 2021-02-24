import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../img/logo.svg"


function SignUp() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  function isValid(data) {
    const regExp = /[0-9a-zA-Z]{3,}/g;
    return regExp.test(data) ? 1 : 0;
  }

  function registration(e) {
    e.preventDefault();

    if (!isValid(username) || !isValid(password)) {
      alert('неправильное имя пользователя или пароль | пароль должен состоять ' +
        'из символов: a-z, A-Z, 0-9, и содержать не менее трех символов');
      return;
    }

    const body = new FormData();
    body.set('username', username);
    body.set('password', password);

    const url = 'http://sigma.simsim.ftp.sh:80/public/auth/registration'
    fetch(url, {
      method: 'POST',
      body
    })
      .then(response => {
        if (response.ok) alert('регистрация прошла успешно')
        else if (response.status === 400) alert('такой пользователь уже существует');
        else throw new Error('invalid response')
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="background">
      <header className="header-auth">
        <div className="header-auth__inner">
          <div className="logo-auth header-auth__logo">
            <img className="logo-auth__svg logo-auth__svg_top" src={logo} alt="logo"/>
            <img className="logo-auth__svg logo-auth__svg_bottom" src={logo} alt="logo"/>
            <p className="logo-auth__label">Staff</p>
          </div>
          <div className="header-auth__label">Sigma Staff</div>
        </div>
      </header>
      <div className="wrap">
        <div className="dialog-box">
          <div className="dialog-box__header">Регистрация</div>
          <input className="input dialog-box__input"
                 name="username"
                 value={username}
                 placeholder="Логин"
                 onChange={e => setUsername(e.target.value)}/>
          <input className="input dialog-box__input"
                 name="password"
                 value={password}
                 type="password"
                 placeholder="Пароль"
                 onChange={e => setPassword(e.target.value)}/>
          <button className="btn dialog-box__btn"
                  onClick={e => registration(e)}>
            Зарегистрироваться
          </button>
          <div className="dialog-box__footer">
            <Link to="/sign-in"
                  className="dialog-box__link">
              Вход
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignUp;