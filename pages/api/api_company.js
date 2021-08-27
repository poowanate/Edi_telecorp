import React from 'react'
import axios from 'axios';

  
  export const EDI_COMPANYinfo = data => {

    return axios({
        method: 'GET',   
        url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION`,
        headers: {
      
            'Content-Type': 'application/json'
        },
   
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }


  export const deleteEDI_COMPANYinfo = data => {

    return axios({
        method: 'DELETE',   
        url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION/`+data,
        headers: {
      
            'Content-Type': 'application/json'
        },
   
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }

  export const insertEDI_COMPANYinfo = data => {

    return axios({
        method: 'POST',   
        url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION/`,
        headers: {
      
            'Content-Type': 'application/json'
        },
        data:data
   
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }
  
  export const getcompanyadmin = (id) => {

    return axios({
        method: 'GET',   
        url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION/`+id,
        headers: {
      
            'Content-Type': 'application/json'
        },

   
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }

  export const updatecompanyadmin = (data) => {
//console.log(data)
    return axios({
        method: 'PUT',   
        url: `http://192.168.7.17:5555/api/EDI_COMPANY_INFORMATION/`+8,
        headers: {
      
            'Content-Type': 'application/json'
        },data:data

   
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }
  
  export const putthenapicompany = id => {

    return axios({
        method: 'PUT',   
        url: `http://192.168.7.17:5555/api/EDI_ASN/UpdateASNStatus/`+id,
        headers: {
          
            'Content-Type':'application/json'
        },
       
    }).then((result) => {
        //console.log('hasil axios', result.data)
        return result.data
  
    }).catch(err => {
        //console.log(err);
        return { error: 'Error......' }
    });
  }

  export const postapicompany = data => {

    return axios({
        method: 'post',   
        url: `http://192.168.7.12:5000/api/APIEDI/EDIToDrug_InvoiceDocument`,
        headers: {
          
            'Content-Type':'application/json'
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

