import React from 'react'
import axios from 'axios';

  
  export const EDI_COMPANYinfo = data => {

    return axios({
        method: 'GET',   
        url: `http://103.245.164.54:5003/api/EDI_COMPANY_INFORMATION`,
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
        url: `http://103.245.164.54:5003/api/EDI_COMPANY_INFORMATION/`+data,
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



  export const postapicompany = data => {

    return axios({
        method: 'post',   
        url: `http://203.154.39.28:5000/api/APIEDI/EDIToDrug_InvoiceDocument`,
        headers: {
          
            'Content-Type':'application/json'
        },
        data: data
    }).then((result) => {
        console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        console.log(err);
        return { error: 'Error......' }
    });
  }

