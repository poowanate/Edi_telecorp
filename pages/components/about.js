import React, { useMemo, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";



function about() {
    const [mapp, setmapp] = useState('');
   

      const { register, handleSubmit } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div>
       
       
        </div>
    )
}

export default about
