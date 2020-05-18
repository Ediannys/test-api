import axios from 'axios'

export const createTicket = newTicket => {

  return axios
    .post('api/ticket/create', {
      user_id: newTicket.user_id,
      issue: newTicket.issue,
      status: 0, 
    })
    .then(response => {
      console.log('Ticket Guardado')
    })
}


export const getTickets = function () {
    return axios
      .get('api/ticket/list')
      .then(response => {
        console.log(response.data);
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }

  
export const getTicket = id => {
    return axios
      .get('api/ticket/find/'+id)
      .then(response => {
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }

  export const getAllUserTickets = () => {
    return axios
      .get('api/ticket/all_user_tickets')
      .then(response => {
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }


  export const getUserTickets = id => {
    return axios
      .get('api/ticket/user_tickets/'+id)
      .then(response => {
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }

  
export const getUsers = () => {
  return axios
    .get('api/ticket/list_users')
    .then(response => {
      return response.data
    }).catch(err => {
      console.log(err)
    })
}

  export const updateStatusTicket = ticket => {
    return axios
      .put('api/ticket/update_status/'+ ticket.id, {
        status:  ticket.status
      })
      .then(response => {
        console.log('Estado de ticket actualizado')
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }


  export const updateTicket = ticket => {
    return axios
      .put('api/ticket/update/'+ ticket.id, {
        user_id: ticket.user_id,
        issue: ticket.issue, 
      })
      .then(response => {
        console.log('Ticket actualizado')
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }



  export const removeTicket = id => {
    return axios
      .delete('api/ticket/delete/'+id)
      .then(response => {
        console.log('Ticket Eliminado')
        return response.data
      }).catch(err => {
        console.log(err)
      })
  }