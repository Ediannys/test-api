import axios from 'axios'

export const register = newUser => {
  console.log(newUser);
  return axios
    .post('api/auth/signup', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password ,
      password_confirmation: newUser.password 
    })
    .then(response => {
      return response.data
    })
}

export const login = user => {
  return axios
    .post('api/auth/login', { 
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('isAuthenticated',true)
      localStorage.setItem('usertoken', response.data.access_token)
      localStorage.setItem('rol', response.data.rol)
      localStorage.setItem('userId', response.data.id)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getUser = () => {
  return axios.get('api/auth/user', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('usertoken')
    }
   }).then(response => {
     //console.log(response.data)
      return response.data
    }).catch(err => {
      console.log(err)
    })
}

export const logout = () => {
  return axios.get('api/auth/logout', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('usertoken')
    }
   }).then(response => {
     //console.log(response.data)
      return response.data
    }).catch(err => {
      console.log(err)
    })
}