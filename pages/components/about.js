import React, { useMemo, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";



function about() {
    const [mapp, setmapp] = useState('');
    const [dropdownOpen, setdropdownOpen] = useState(false);


   
      const { register, handleSubmit } = useForm();
      const onSubmit = data => console.log(data);
      const ggg =()=>{
        //console.log('sss')
        setdropdownOpen(!dropdownOpen)

      }
    return (
      
        <div>
         

            
           </div>
    )
}

export default about
