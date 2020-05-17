import axios from 'axios'

export const register = newUser => {
  console.log(newUser);
  return axios
    .post('api/auth/register', {
      role_id: 2,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
      
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
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}