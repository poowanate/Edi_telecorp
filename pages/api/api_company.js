import React from 'react'
import axios from 'axios';

  
  export const EDI_COMPANYinfo = data => {

    return axios({
        method: 'GET',   
        url: `http://192.168.7.15:5555/api/EDI_COMPANY_INFORMATION`,
        headers: {
      
            'Content-Type': 'application/json'
        },
   
    }).then((result) => {
        console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        console.log(err);
        return { error: 'Error......' }
    });
  }


  export const deleteEDI_COMPANYinfo = data => {

    return axios({
        method: 'DELETE',   
        url: `http://192.168.7.15:5555/api/EDI_COMPANY_INFORMATION/`+data,
        headers: {
      
            'Content-Type': 'application/json'
        },
   
    }).then((result) => {
        console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        console.log(err);
        return { error: 'Error......' }
    });
  }