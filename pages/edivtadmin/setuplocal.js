import React,{useEffect,useState} from 'react'
import {EDI_COMPANYinfo} from '../api/api_company'



const setuplocal = () => {


    const [companydata,setcompanydata] = useState([]);

    const fetchdata = ()=>{
    
     
        EDI_COMPANYinfo().then(async data => {
            console.log(data)
            if (data.error) {
    
            } else {
               
                setcompanydata(data)
            }
    
        })
    }
    
    useEffect(() => {
        fetchdata()
    }, [])




    return (
        <div>
            <div class="grid grid-cols-6 gap-4">
  <div className="p-3 place-self-center" ><h2 class="text-xl blod"> Setup Locations</h2></div>
  <div className="col-span-4 p-3">
  <div class="">
  <div class="bg-gray-100 flex items-center rounded-full shadow-xl">
    <input class="bg-gray-100 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
    
    <div class="">
      <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      </div>
    </div>
  </div>


  </div>
  <div  className="p-3 place-self-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export Excel</button></div>
</div> 


<div className="py-2 overflow-x-auto  mt-5 ">
                    <div className="shadow  border-gray-200 sm:rounded-lg">
                      <table className="min-w-full w-full">
                        <tr className="bg-gray-50">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-green-500 text-base font-medium  text-white uppercase tracking-wider"
                          >
                            เพิ่มข้อมูล
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                           BUILDING
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                           FLOOR
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                         LOCATION_ID
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                         LOCATION_NAME
                          </th>
                       
                        

                        
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium   text-white uppercase tracking-wider"
                          >
                           พิมพ์
                          </th>
                     
                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                           แก้ไข
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-center bg-indigo-800 text-base font-medium text-white uppercase tracking-wider"
                          >
                          ลบ
                          </th>

                       
                         
                        
                        
                        </tr>
                      
{
    (companydata.length > 0) ? (
        companydata.map((data, index) => (
            <tr key={index}  className="bg-white ">
            <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">{data.id} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">{data.vendoR_NO} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap"> 
              <div className="text-center text-sm text-gray-900">{data.vendoR_NAME} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">{data.shipto} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">{data.address} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">{data.taxid} </div>   </td>
              <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">   
           
              <button  class="rounded-full bg-green-500 text-white h-9 w-9 flex-row items-center justify-center">
              <svg class=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                </button>
           
           </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
              <div className="text-center text-sm text-gray-900">
              <button  class="rounded-full bg-red-400 text-white h-9 w-9 flex-row items-center justify-center" >
                                  <svg class=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                  </div>   </td>
              </tr>
        )
        )): <></>
}
                        {/* {
                          (mapp.length > 0) ? (
                            mapp.map((data, index) => (
                              <tr key={index} className="bg-white ">
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c1} </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c2} </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c3} </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c14} </div>   </td>

                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c4} </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c5} </div>   </td>
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c6} </div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{moment(data.c7).format('DD/MM/yyyy')} </div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{moment(data.c8).format('DD/MM/yyyy')} </div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                                  <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{((data.c12*7)/100+data.c12).toFixed(2)}</div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                                <td className="px-6 py-4   whitespace-nowrap">
                                  <div className="text-center text-sm text-gray-900">{data.c13} </div>   </td>
                              </tr>
                            ))

                          ) : <></>
                          // ByeBye!
                        } */}

                      </table>
                    </div>
                  </div>
              
        </div>
    )
}

export default setuplocal
