import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProductHeroLayout from './ProductHeroLayout';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom'

const backgroundImage =
  'https://infinited.com/wp-content/uploads/2017/12/raffle-or-lottery-ticket-stub-pile-2-colors_7kqkscm5__F0001.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
    }
},
})
)


function Home(props)  {

  const classes = useStyles();
  const { history } = props;

  function handleClick() {
    history.push("/register");
  }

  
  
    return (
      <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Test
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        React Js con Laravel
      </Typography>

      <Router>
              
        <Link className={classes.link} to="/register" color="inherit" >
        <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={handleClick}
      >
        Registrarse
      </Button>
          </Link>
      </Router>
      
      </ProductHeroLayout>
    )
  
}

export default Home