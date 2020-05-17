import React, { Component } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import ReactDOM from 'react-dom';

class LoginComponent extends Component {
  render() {
    return (
    <React.Fragment>
       <Navbar/>
       <Login />
    </React.Fragment>
    
    )
  }
}

export default LoginComponent
if (document.getElementById('login')) {
  ReactDOM.render(<LoginComponent />, document.getElementById('login'));
}