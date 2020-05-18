import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeComponent from './HomeComponent'
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent'
import UserComponent from './UserComponent'
import AdminComponent from './AdminComponent'
import ReactDOM from 'react-dom';
import { isAuthenticated } from "./auth";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


class Main extends Component {

  render() {
    return (

      <BrowserRouter>
        <Switch>
        <div className="App">
          <Route exact path="/" component={HomeComponent} />
          <div className="container">
            <Route exact path="/register" component={RegisterComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <PrivateRoute exact path="/profile_user" component={UserComponent} />
            <PrivateRoute  exact path="/profile_admin" component={AdminComponent} />
            
          </div>
        </div>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default Main
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
  }