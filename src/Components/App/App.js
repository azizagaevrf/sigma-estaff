import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import MainPage from '../MainPage/MainPage';
import PrivateRoute from "./PrivateRoute";
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/sign-in">
          <SignIn/>
        </Route>

        <Route path="/sign-up">
          <SignUp/>
        </Route>

        <PrivateRoute path="/">
          <MainPage/>
        </PrivateRoute>

      </Switch>
    </div>
  );
}


export default App;