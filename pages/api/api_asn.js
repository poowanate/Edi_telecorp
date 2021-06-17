import React from 'react'
import axios from 'axios';

export const edi_asn = data => {

    return axios({
        method: 'POST',
        url: `  http://103.245.164.54:5003/api/EDI_ASN`,
        headers: {
      
            'Content-Type': 'application/json'
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


  export const ediproduct = data => {

    return axios({
        method: 'POST',
        url: `http://103.245.164.54:5003/api/EDI_PRODUCT`,
        headers: {
      
            'Content-Type': 'application/json'
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
  

  export const getediasn = data => {

    return axios({
        method: 'GET',  
        url: `http://103.245.164.54:5003/api/EDI_ASN`,
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


  export const getediasnbyinvoice = data => {

    return axios({
        method: 'GET',  
        url: `  http://103.245.164.54:5003/api/EDI_ASN/GETBYINVOICE_NO?INVOICE_NO=`+data,
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


  export const asnupdate = (id,data) => {

    return axios({
        method: 'PUT',  
        url: ` http://103.245.164.54:5003/api/EDI_ASN/UpdateASN/`+id,
        headers: {
      
            'Content-Type': 'application/json'
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


  export const deleteasn = data => {

    return axios({
        method: 'DELETE',  
        url: `  http://103.245.164.54:5003/api/EDI_ASN/`+data,
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

 