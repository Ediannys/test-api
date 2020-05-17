import React, { Component } from 'react'
import Register from './Register'

import Navbar from './Navbar'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";

class RegisterComponent extends Component {
  render() {
    return (
    <React.Fragment>
       <Navbar/>
       <Register />
    </React.Fragment>
    
    )
  }
}
export default withRouter(RegisterComponent)
if (document.getElementById('register')) {
  ReactDOM.render(<RegisterComponent />, document.getElementById('register'));
}