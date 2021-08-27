import React from 'react'
import axios from 'axios';







export const login = data => {

  return axios({
      method: 'POST',
      
      url: `http://192.168.7.17:5555/api/EMPLOYEE_AUTHORIZED_CENTER/login`,
      headers: {
    
          'Content-Type': 'application/json'
      },
      data: data
  }).then((result) => {
      //console.log('hasil axios', result.data)
      return result.data

  }).catch(err => {
      //console.log(err);
      return { error: 'Error......' }
  });
}

export const loginadmin = data => {

  return axios({
      method: 'POST',
      
      url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION/Login`,
      headers: {
    
          'Content-Type': 'application/json'
      },
      data: data
  }).then((result) => {
      //console.log('hasil axios', result.data)
      return result.data

  }).catch(err => {
      //console.log(err);
      return { error: 'Error......' }
  });
}


export const Authenticate = (data, next) => {
  // //console.log(data);
  // setCookie('token', data.users.token)
  // setLocalStorage('user', data.users)
  next()
}
