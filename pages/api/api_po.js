import React from 'react'
import axios from 'axios';

export const edi_po = data => {

    return axios({
        method: 'POST',
        url: `http://192.168.7.15:5555/api/EDI_PO`,
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



  export const getedi_po = data => {

    return axios({
        method: 'GET',
        url: `http://192.168.7.15:5555/api/EDI_PRODUCT/GETBYPRODUCT_NO?PRODUCT_NO=`+data,
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



  export const GETEDI_ASN = (invoice,product) => {
  
    return axios({
        method: 'GET',
        url: `   http://192.168.7.15:5555/api/EDI_ASN/GETEDI_ASN_PO?INVOICE_NO=`+invoice+`&PRODUCT_NO=`+product,
        // url: `  http://192.168.7.15:5555/api/EDI_ASN/GETEDI_ASN?INVOICE_NO=` +data,
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
  

