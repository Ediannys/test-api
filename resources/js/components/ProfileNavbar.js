import React, { Component } from 'react'
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { getUser } from './AuthFunctions'
import { logout } from './AuthFunctions'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Redirect } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#e85380',
    height: '80px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    }},
    menu: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    button:{
      marginTop:'10px'
    },
    header:{
      marginTop: '8px'
    },
    progress: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },

}));


function ProfileNavbar() {

let history = useHistory();
  const classes = useStyles();
  const [showProgress, setShowProgress]= React.useState(true);
  const [redirect, setRedirect]= React.useState(null);
  const [user, setUser] = React.useState({
    id:null,
    first_name: null,
    last_name: null,
    email: null
  }
  );

  const handleLogOut = () => {
    logout(localStorage.getItem('usertoken')).then(()=>{
      localStorage.removeItem('usertoken')
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('rol')
      localStorage.removeItem('userId')
      setRedirect("/");
    }) 

    

};

React.useEffect(() => {

  userTickets()

  async function userTickets() {

    getUser().then((user)=>{
      setUser(user)
      setShowProgress(false);

    })  
  }
}, []);

  return (

    <div className={classes.root}>
      <div className={classes.progress}>
   
    </div>
      <AppBar position="static">
        <Toolbar >
          <div className={classes.menu}>

          <Typography className={classes.header} variant="button" display="block" gutterBottom marked="left" align="left">
          <PersonIcon style={{position: 'relative', top:'3px'}}/>
            <span style={{margin: '12px'}}>{user.first_name}</span>
            <span>{user.last_name} </span>
          </Typography>
          
                
           
            <Button className={classes.button} onClick={handleLogOut} color="inherit">Cerrar Sesión</Button>
            {redirect && <Redirect to={redirect} />}
           
          </div>
        </Toolbar>
      </AppBar>
      {showProgress && <LinearProgress color="secondary" /> }
    </div>
  )
}


export default ProfileNavbar