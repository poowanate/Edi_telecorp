import React, { useMemo, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
function about() {
    const [mapp, setmapp] = useState('');
   

    
    let mydata = {
        "ArrayBotones": [
          {
            "descripcion": "123",
            "ubicacion": "sonidos/impacto.mp3"
          },
          {
            "descripcion": "222",
            "ubicacion": "sonidos/holasoyfede.wav"
          },
          {
            "descripcion": "224",
            "ubicacion": "sonidos/wiuwiu.wav"
          },
          {
            "descripcion": "225",
            "ubicacion": "sonidos/3carajos.wav"
          },
          {
            "descripcion": "2n6",
            "ubicacion": "sonidos/apuratejose.wav"
          },
          {
            "descripcion": "227",
            "ubicacion": "sonidos/nonose.wav"
          }
        ]
      };
      
    
      
      const find =(e)=>{
          console.log(e.target.value)    
        let result = mydata.ArrayBotones.filter(  t => t.descripcion.toLowerCase().includes(e.target.value.toLowerCase()) || e.target.value === '');
        console.log(result);
        if(result != ''){
            setmapp(result[0].descripcion)
        }
             
      } 
      const { register, handleSubmit } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div>
       
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>

    
            <input onChange={(e)=>find(e)} ></input>
            {mapp}
        </div>
    )
}

export default about
