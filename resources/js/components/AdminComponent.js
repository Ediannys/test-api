import React, { Component } from 'react'
import ProfileAdmin from './ProfileAdmin'
import ReactDOM from 'react-dom';
import ProfileNavbar from './ProfileNavbar'

class AdminComponent extends Component {
  render() {
    return (
    <React.Fragment>
       <ProfileNavbar/>
       <ProfileAdmin />
    </React.Fragment>
    
    )
  }
}

export default AdminComponent
if (document.getElementById('admin')) {
  ReactDOM.render(<AdminComponent />, document.getElementById('admin'));
}