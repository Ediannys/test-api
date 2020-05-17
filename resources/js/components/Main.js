import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeComponent from './HomeComponent'
import RegisterComponent from './RegisterComponent'
import ReactDOM from 'react-dom';


class Main extends Component {

  render() {
    return (

      <BrowserRouter>
        <Switch>
        <div className="App">
          <Route exact path="/" component={HomeComponent} />
          <div className="container">
            <Route exact path="/register" component={RegisterComponent} />
            
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