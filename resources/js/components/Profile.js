import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createTicket } from './TicketFunctions'
import { getTicket } from './TicketFunctions'
import { removeTicket } from './TicketFunctions'
import { updateStatusTicket } from './TicketFunctions'
import { getUserTickets } from './TicketFunctions'
import { getUser } from './AuthFunctions'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress'




const useStyles = makeStyles((theme) =>({
  table: {
    minWidth: 650,
  },
  header:{
    padding: '1em',
    marginBottom: '2em',
    background: '#fff5f8' 
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    position: 'relative'
  },
  buttonAdd: {
    position: 'absolute',
    right: '0px',
    bottom: '0px'
  },
  divTable:{
    width: '70%',
    margin: 'auto'
  },
  margin: {
    margin: theme.spacing(1),
  },
  statusTrue:{
    backgroundColor: '#34a53494',
    color: 'white',
    padding: '3px',
    '&:hover, &:focus':{
      backgroundColor: '#34a53494',
    }
  },
  statusFalse:{
    backgroundColor: '#f44336',
    color: 'white',
    padding: '3px',
    '&:hover, &:focus':{
      backgroundColor: '#f44336',
    }
  },
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Profile() {
  let history = useHistory();

  if (localStorage.getItem('rol') != "user") history.push("/profile-admin");
  
  const classes = useStyles();
  const [rows, setRows] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [issue, setIssue] = React.useState('');
  const [ticketId, setTicketId] = React.useState('');
  const [update, setUpdate] = React.useState(0);
  const [showProgress, setShowProgress] = React.useState(true);
  const [user, setUser] = React.useState({
      id: null,
      first_name: null,
      last_name: null,
      email: null
  });
  
  React.useEffect(() => {
  
      userTickets()
  
      async function userTickets() {
  
          setShowProgress(true);
          getUser().then((user) => {
              console.log(user)
              setUser(user)
  
              getUserTickets(user.id).then(tickets => {
  
                  console.log(tickets);
                  setRows(tickets)
                  setShowProgress(false);
              })
          })
  
  
      }
  
  
  }, [update]);
  
  const setValues = () => {
  
      setIssue('')
      setOpen(false);
      setOpenEdit(false);
  
  }
  
  const handleClickOpen = () => {
      setOpen(true);
  };
  
  const handleClose = () => {
      setValues()
  };
  
  
  
  const handleCreateTicket = () => {
  
      const ticket = {
          issue: issue,
          user_id: user.id
      }
      setShowProgress(true);
      createTicket(ticket).then(() => {
          setShowProgress(false);
      })
      setValues()
      setUpdate(update + 1);
  
  };
  
  const handleChangeStatus = (id, status) => {
  
      console.log(id);
      if (status == 1) status = 0;
      else status = 1;
  
      const ticket = {
          id: id,
          status: status
      }
      setShowProgress(true);
      updateStatusTicket(ticket).then(() => {
          setShowProgress(false);
      })
      setValues()
      setUpdate(update + 1);
  };
  
  
  const handleChangeIssue = (event) => {
      setIssue(event.target.value);
  };
  
return (
  <div>
     {showProgress && 
     <LinearProgress color="secondary" />
     }
     <Typography className={classes.header} variant="h4" gutterBottom marked="left" align="left">
        Tickets 
     </Typography>
     <div className={classes.divTable}>
        <TableContainer component={Paper}>
           <Table className={classes.table} aria-label="simple table">
              <TableHead>
                 <TableRow>
                    <TableCell>Asunto</TableCell>
                    <TableCell>Creado</TableCell>
                    <TableCell className={classes.root}>
                       Estado
                       <Fab size="small" className={classes.buttonAdd} color="primary" aria-label="add" onClick={handleClickOpen}>
                          <AddIcon />
                       </Fab>
                    </TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                 {rows.map((row) => (
                 <TableRow key={row.id}>
                    <TableCell>{row.issue}</TableCell>
                    <TableCell>{row.created}</TableCell>
                    <TableCell>
                       {row.status ? 
                       <Chip  onClick={()=>
                       handleChangeStatus(row.id, row.status)} label="Pendiente" className={classes.statusFalse} /> : 
                       <Chip  onClick={()=>
                       handleChangeStatus(row.id, row.status)} label="Recibido" className={classes.statusTrue} />
                       }
                    </TableCell>
                 </TableRow>
                 ))}
              </TableBody>
           </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth="600px">
           <DialogTitle id="form-dialog-title">Agregar Ticket</DialogTitle>
           <DialogContent>
              <TextField
                 autoFocus
                 margin="dense"
                 id="issue"
                 value={issue}
                 onChange={handleChangeIssue}
                 label="Asunto"
                 type="text"
                 fullWidth
                 />
           </DialogContent>
           <DialogActions>
              <Button onClick={handleClose} color="primary">
              Cancelar
              </Button>
              <Button onClick={handleCreateTicket} color="primary">
              Agregar
              </Button>
           </DialogActions>
        </Dialog>
     </div>
  </div>
  );
    }

export default Profile