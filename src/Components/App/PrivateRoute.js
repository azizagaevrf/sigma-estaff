import React from "react";
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({children, ...rest}) {
  return (
    <Route {...rest}
           render={({location}) =>
/*
             const url = 'http://localhost:8080/api/auth/login'

             const headers = new Headers();
             headers.set('Content-Type', 'form/multipart;charset=utf-8')

             const url = 'http://localhost:8080/public/auth/regisration';
             fetch(url, {
               method: 'POST',
               headers,
               body
             })
               .then(response => {
                 if (response.ok) alert('регистрация прошла успешно')
                 else if (response.status === 400) alert('такой пользователь уже существует');
                 else throw new Error('invalid response')
               })
               .catch(error => console.log(error))
*/
             localStorage.getItem('user:pass') ?
               (children) :
               (<Redirect to={{
                   pathname: "/sign-in",
                   state: {from: location}
                 }}
                 />
               )
           }
    />
  );
}

export default PrivateRoute;