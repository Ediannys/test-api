import React, { Component } from 'react'
import Profile from './Profile'
import ReactDOM from 'react-dom';

import ProfileNavbar from './ProfileNavbar'

class UserComponent extends Component {
  render() {
    return (
    <React.Fragment>
       <ProfileNavbar/>
       <Profile />
    </React.Fragment>
    
    )
  }
}

export default UserComponent
if (document.getElementById('user')) {
  ReactDOM.render(<UserComponent />, document.getElementById('user'));
}