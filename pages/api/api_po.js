import React from 'react'
import axios from 'axios';

export const edi_po = data => {

    return axios({
        method: 'POST',
        url: `http://103.245.164.54:5003/api/EDI_PO`,
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

