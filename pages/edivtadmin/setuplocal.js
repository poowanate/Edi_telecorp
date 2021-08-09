import React,{useEffect,useState} from 'react'
import {EDI_COMPANYinfo,deleteEDI_COMPANYinfo,getcompanyadmin,updatecompanyadmin,insertEDI_COMPANYinfo} from '../api/api_company'
import jscookie from 'js-cookie';
import Swal from 'sweetalert2'
import Layout from "../Layoutza/Layout"
import { Formik, ErrorMessage } from 'formik';
function sweeterror(){
  Swal.fire({
    icon: 'error',
    title: 'Login ไม่สำเร็จ',
    text: 'USERNAME หรือ PASSWORD ผิดผลาดกรุณาลองอีกครั้ง',
   
  })
}



const setuplocal = () => {

  const handleKeyDown = (event)=>  {
    if(event.keyCode === 13) { 
        console.log('Enter key pressed')
  }
  }
  const [bindedit,setbindedit] = useState({
    vendoR_NO: "",
    vendoR_NAME: "",
    shipto: "",
    address: "",
    taxid: "",
    phonenumber: "",
    username: "",
    password: "",
    id:0,
  });
    const [companydata,setcompanydata] = useState([]);
    const [companydata2,setcompanydata2] = useState([]);
    const [editorinsert,seteditorinsert] = useState('');
    const [isClose,setisClose] = useState(false);
  

    const fetchdata = ()=>{
    
     
        EDI_COMPANYinfo().then(async data => {
            // console.log(data)
            if (data.error) {
    
            } else {
               
               

                if(jscookie.get('admintype') == '1'){
                  if(  jscookie.get('vendoR_NO') =='TL001'){
                    await setcompanydata(data)
                  await setcompanydata(data)
                  }
                  else{
                    await  setcompanydata(data.filter(x => x.vendoR_NO ==     jscookie.get('vendoR_NO') ))
                  await setcompanydata2(data.filter(x => x.vendoR_NO ==     jscookie.get('vendoR_NO') ))
                  }
                
                 
                 }  
                 else{
               
                 }
            }
    
        })
    }
    
    useEffect(() => {
        fetchdata()
    }, [])
const insert = ()=>{
  console.log('insert')
  insertEDI_COMPANYinfo(bindedit).then(async data=>{
    if (data.error) {
      Swal.fire('เพิ่มข้อมูลไม่สำเร็จ', '', 'info')
    } else {
     await fetchdata()
   
     await cleardata()
  
     Swal.fire('บันทึกสำเร็จ', '', 'success')
    }
}
  )}
  const update = ()=>{
    console.log('update')
    updatecompanyadmin(bindedit).then(async data=>{
      if (data.error) {
        Swal.fire('แก้ไขไม่สำเร็จ', '', 'info')
      } else {
       await fetchdata()
     
       await cleardata()
  
       Swal.fire('บันทึกสำเร็จ', '', 'success')
      }
  })
  }

  const insertdata =()=>{
    setisClose(true)
    seteditorinsert('insert')
    
      
    
  }

    const editdata =(id)=>{
      setisClose(true)
      seteditorinsert('update')
      getcompanyadmin(id).then(data=>{
        if(data.error){
          console.log('no')

        }
        else{
          setbindedit({   
            vendoR_NO: data.vendoR_NO,
            phonenumber: data.phonenumber,
            username: data.username,
            password: data.password,
            vendoR_NAME: data.vendoR_NAME,
            shipto: data.shipto,
            address: data.address,
            taxid: data.taxid,
            id:data.id
        })
        }
      })
    }
    const handleChangedata = (name, e) => {
      // console.log(e.target.value)
      // console.log(bindedit)
      bindedit[name] = e.target.value;
      setbindedit({ ...bindedit })
      }
const save =(e)=>{
  e.preventDefault();
  // console.log(JSON.stringify(bindedit))
  if(editorinsert=='insert'){
    insert()
  }
  if(editorinsert=='update'){
    update()
  }
  
}

const cleardata =()=>{
 setisClose(false)
  setbindedit({
    vendoR_NO: "",
    vendoR_NAME: "",
    shipto: "",
    address: "",
    taxid: "",
    phonenumber: "",
    username: "",
    password: "",
    id:0,
  })
}

    const confirmdelete =(e)=>{

      Swal.fire({
        title: 'ยืนยันการลบข้อมูลใช่หรือไม่ ?',
        showDenyButton: true,
        showConfirmButton: false,
        showCancelButton: true,
        denyButtonText: `ลบ`,
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
       
     if (result.isDenied) {
      deleteEDI_COMPANYinfo(e).then(async result=>{
        if (result.error) {
          Swal.fire('ทำการลบไม่สำเร็จ', '', 'info')
        } else {
         await fetchdata()
        await cleardata()
         await Swal.fire('ลบข้อมูลสำเร็จ', '', 'success')
        }

      
      })
         
        }
      })
      
    }
  

    return (
      <Layout>
        <div>
            <div className="grid grid-cols-6 gap-4">
  <div className="p-3 place-self-center" ><h2 className="text-xl blod"> Setup Locations</h2></div>
  <div className="col-span-4 p-3">
  <div className="">
  <div className="bg-gray-100 flex items-center rounded-full shadow-xl">
    <input className="bg-gray-100 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
    
    <div className="">
      <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      </div>
    </div>
  </div>


  </div>
  <div  className="p-3 place-self-center"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export Excel</button></div>
</div> 

<div className="py-2 w-fulls  mt-5 ">
                    <div className="shadow  border-gray-200 sm:rounded-lg">

                    <table className="border-collapse w-full">
    <thead>
        <tr>
        
            <th className="p-3 font-bold uppercase bg-green-500 text-white border  hidden lg:table-cell hover:bg-green-800" onClick={() => insertdata()}>เพิ่มข้อมูล</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border hidden lg:table-cell">vendoR_NO</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border  hidden lg:table-cell">vendoR_NAME</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border  hidden lg:table-cell">shipto</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border  hidden lg:table-cell">address</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border  hidden lg:table-cell">taxid</th>
            <th className="p-3 font-bold uppercase bg-indigo-800  text-white border  hidden lg:table-cell">แก้ไข</th>
       
        </tr>
    </thead>
    <tbody>
    {
    (companydata.length > 0) ? (
        companydata.map((data, index) => ( <>
       <tr id={index} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">เพิ่มข้อมูล</span>
                {data.id}
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">vendoR_NO</span>
                {data.vendoR_NO} 
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">vendoR_NAME</span>
                {data.vendoR_NAME}
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">shipto</span>
                {data.shipto}
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">address</span>
                {data.address}
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">taxid</span>
                {data.taxid}
            </td>
   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">แก้ไข</span>
                <button        onClick={() => editdata(data.id)} className="rounded-full bg-green-500 text-white h-9 w-9 flex-row items-center justify-center">
              <svg className=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                </button>
                                 <button onClick={() => confirmdelete(data.id)} className="rounded-full bg-red-400 text-white h-9 w-9 flex-row items-center justify-center" >
                                  <svg className=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
            </td>
   </tr>
   </>
          ))): <></>
        }
         </tbody>
</table>

     </div>
                  </div>
              
                  {isClose ? (
        <>
   
          <div id="myModal" className="modal">
            {/* <form onSubmit={savetable}> */}
      
            <form onSubmit={save} >
              <div className="modal-content">
                <span className="close" onClick={() => cleardata()}>
                  &times;
                </span>
              
                <div className="content-center text-center justify-items-center text-3xl mt-5 text-blue-800 ">
                  แก้ไขข้อมูล
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  vendoR_NO
                    <input
                   value={bindedit.vendoR_NO}
                   onChange={(e) => handleChangedata("vendoR_NO", e)}
                      id="vendoR_NO"

                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  vendoR_NAME
                    <input
                   value={bindedit.vendoR_NAME}
                   onChange={(e) => handleChangedata("vendoR_NAME", e)}
                      id="vendoR_NO"

                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  shipto
                    <input
                   value={bindedit.shipto}
                   onChange={(e) => handleChangedata("shipto", e)}
                      id="shipto"
                  

                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  address
                    <input
                   value={bindedit.address}
                   onChange={(e) => handleChangedata("address", e)}
                      id="address"

                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  taxid
                    <input
                   value={bindedit.taxid}
                   onChange={(e) => handleChangedata("taxid", e)}
                      id="taxid"


                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  phonenumber
                    <input
                   value={bindedit.phonenumber}
                   onChange={(e) => handleChangedata("phonenumber", e)}
                      id="phonenumber"


                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  username
                    <input
                   value={bindedit.username}
                   onChange={(e) => handleChangedata("username", e)}
                      id="username"


                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  password
                    <input
                   value={bindedit.password}
                   onChange={(e) => handleChangedata("password", e)}
                      id="password"


                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-blue-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-700 "
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button 
                    type="submit"
                    className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    บันทึก
                  </button>
                  <button
                    onClick={() => cleardata()}
                    className="bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </form>
          </div>{" "}
        </>
      ) : (
        ""
      )}
        </div>
        </Layout>
    )
}

export default setuplocal
