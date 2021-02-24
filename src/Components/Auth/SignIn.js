import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './SignIn.scss'
import logo from '../../img/logo.svg'

function SignIn() {
  const history = useHistory();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function isValid(data) {
    const regExp = /[0-9a-zA-Z]{3,}/g;
    return regExp.test(data) ? 1 : 0;
  }

  function authentication(e) {
    e.preventDefault();

    if (!isValid(username) || !isValid(password)) {
      alert('неправильное имя пользователя или пароль | пароль должен состоять ' +
        'из символов: a-z, A-Z, 0-9, и содержать не менее трех символов');
      return;
    }

    const userPassInBase64 = btoa(username + ':' + password);

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + userPassInBase64)

    const url = 'http://sigma.simsim.ftp.sh:80/api/auth/login'
    fetch(url, {
      method: 'GET',
      headers
    })
      .then(response => {
        if (response.ok) {
          localStorage.setItem('user:pass', userPassInBase64);
          history.push('/');
        } else if (response.status === 401) {
          alert('не существует пользователя с таким именем и паролем')
        } else {
          throw new Error('invalid response')
        }
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
          <div className="dialog-box__header">Вход</div>
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
                  onClick={e => authentication(e)}>
            Войти
          </button>
          <div className="dialog-box__footer">
            <Link to="/sign-up"
                  className="dialog-box__link">
              Забыли пароль?
            </Link>
            <Link to="/sign-up"
                  className="dialog-box__link">
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignIn;