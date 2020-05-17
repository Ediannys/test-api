import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { withRouter } from "react-router-dom";

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Home />
    </React.Fragment>
    
    )
  }
}

export default withRouter(HomeComponent) ;
