import Layout from "../Layout/Layout";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { set } from "js-cookie";
import {edi_po,getedi_po,GETEDI_ASN} from '../api/api_po'
import {edi_asn,ediproduct,getediasn,getediasnbyinvoice} from '../api/api_asn'
import * as XLSX from 'xlsx';
import moment from "moment";


 
function table() {
  const [isClose, setisClose] = useState(false);
  const [upload, setupload] = useState(true);
  const [isClosef, setisClosef] = useState(1);
  const [mapp, setmapp] = useState([]);
  const [showtable, setshowtable] = useState([]);
  const [nn, setn] = useState(Math.random());
  const [itemtable, setitemtable] = useState({
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
  });

  useEffect(async() => {
    setitemdata({ ...itemdata })
    fetchData()
   
}, [])
  
const fetchData = async ()=>{
  let dataf = [];
 await getediasn().then(async data   => { 
  
  // Router.push('/register/information')
  if (data.error) {
  
  } else {
    for (let index = 0; index < data.length; index++) {
      dataf.push(data[index])
     
   }
   await  setshowtable(dataf) 
  }
  
 
  
})
}

  const [itemdata, setitemdata] = useState({
    invoicE_NO: ""  ,
        invoicE_DATE: "" ,   
        remark: "" ,
        discounT_PERCENTAGE: null ,
        discounT_BAHT: null ,
        vat: null ,
        totaL_AMOUNT: null ,
        producT_NO: "" ,
        pO_NO: "" ,
        total: "" ,
        vendoR_NAME: "" ,
        location: "" 
  });
  



  let valuechk = 0;

  const [uploadfile, setuploadfile] = useState();

  const onFileChange = async event => {
    
    // Update the state
  await  setuploadfile({ selectedFile: event.target.files[0] });
  console.log(uploadfile)
  if(uploadfile){
    await  console.log(uploadfile.selectedFile)
    
  }
  };

  const closef1refresh = async (e)=>{
   await cleardata()
    setisClosef(e)

  } 

// edit3
  const handleedit =async (event)  => {
    setisClosef(2)
console.log(event)
    GETEDI_ASN('1306610001').then(async data=>{
      console.log(data)

      if(data.length>0){
       console.log(data[0].invoicE_NO) 
       console.log(data[0].orderdetails.length)
        itemdata['invoicE_NO'] =  data[0].invoicE_NO
                  itemdata['producT_NO'] =  data[0].producT_NO
                  itemdata['pO_NO'] =  data[0].pO_NO
                  itemdata['invoicE_DATE'] =  data[0].invoicE_DATE
                  itemdata['vendoR_NAME'] =  data[0].vendoR_NAME
                  itemdata['location'] =  data[0].ship_to
                  itemdata['remark'] =  data[0].remark
                  itemdata['totaL_AMOUNT'] =  data[0].totaL_AMOUNT
                  itemdata['discounT_PERCENTAGE'] =  data[0].discounT_PERCENTAGE
                  itemdata['discounT_BAHT'] =  data[0].discounT_BAHT
                  itemdata['vat'] =   data[0].vat
                  itemdata['total'] =   data[0].total
                setitemdata({ ...itemdata })
                
                if(data[0].orderdetails.length>0){
                  let ggwp=[]
            for (let index = 0; index < data[0].orderdetails.length; index++) {
               const form = {
                c1 :data[0].orderdetails[index].codE_GPU,
                c2 :data[0].orderdetails[index].codE_UNSPSC,
                c3 :data[0].orderdetails[index].codE_TMT,
                c4 :data[0].orderdetails[index].baR_CODE,
                c6 :data[0].orderdetails[index].producT_NO,
                c5 :data[0].orderdetails[index].producT_NAME,
                c9 :data[0].orderdetails[index].qty,
                c10 :data[0].orderdetails[index].uom,
                c11 :data[0].orderdetails[index].uniT_PRICE,
                c7 :data[0].orderdetails[index].mfG_DATE,
                c8 :data[0].orderdetails[index].exP_DATE,
                c12 :data[0].orderdetails[index].amount,
                
                
    }
    ggwp.push(form)
    console.log(form)   
            }
            setmapp(mapp.concat(ggwp))
            console.log(mapp)   
          }

                }
    
              
    })

    
//  getedi_po(event).then(async data1  => {
//   if(data1.error){

//   }
//   else{
//     await  getediasnbyinvoice(event).then(data2=>{
//       if(data2.error){

//       }
//       else{
//         if(data2.length>0){
//           itemdata['invoicE_NO'] =  data2[0].invoicE_NO
//           itemdata['producT_NO'] =  data2[0].producT_NO
//           itemdata['pO_NO'] =  data2[0].pO_NO
//           itemdata['invoicE_DATE'] =  data2[0].invoicE_DATE
//           itemdata['vendoR_NAME'] =  data2[0].vendoR_NAME
//           itemdata['location'] =  data2[0].location
//           itemdata['remark'] =  data2[0].remark
//           itemdata['totaL_AMOUNT'] =  data2[0].totaL_AMOUNT
//           itemdata['discounT_PERCENTAGE'] =  data2[0].discounT_PERCENTAGE
//           itemdata['discounT_BAHT'] =  data2[0].discounT_BAHT
//           itemdata['vat'] =   data2[0].vat
//           itemdata['total'] =   data2[0].total
//         setitemdata({ ...itemdata })
//         let ggwp=[]
//           if(data1.length>0){
//             for (let index = 0; index < data1.length; index++) {
//                const form = {
//                 c1 :data1[index].codE_GPU,
//                 c2 :data1[index].codE_UNSPSC,
//                 c3 :data1[index].codE_TMT,
//                 c4 :data1[index].baR_CODE,
//                 c6 :data1[index].producT_NO,
//                 c5 :data1[index].producT_NAME,
//                 c9 :data1[index].qty,
//                 c10 :data1[index].uom,
//                 c11 :data1[index].uniT_PRICE,
//                 c7 :data1[index].mfG_DATE,
//                 c8 :data1[index].exP_DATE,
//                 c12 :data1[index].amount,
                
                
//     }
//     ggwp.push(form)
//     console.log(form)   
//             }
//             setmapp(mapp.concat(ggwp))
//             console.log(mapp)   
//           }
       
         
          
        
        
//         }
      

//         console.log(itemdata)
//       }
//     })
//   }
//  }
 
//   )
  }


  //f = file


  const handleUpload = (e) => {
    
    e.preventDefault();
    cleardata()
  
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload=(event)=>{
    

      const bstr = event.target.result
      const workbook = XLSX.read(bstr,{type:"binary"})
      const worksheetname = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetname]

       const fileData = XLSX.utils.sheet_to_json(worksheet,{header:1})

    
   
       if(worksheetname == "PO_IN"){
        fileData.splice(0,1)
        const dataheader = fileData[0]
            var edataheader =deleteempty(dataheader)
   
      if(edataheader.length>0){
        itemdata['invoicE_NO'] = edataheader[0]
        itemdata['producT_NO'] = edataheader[1]
        itemdata['pO_NO'] = edataheader[2]
        itemdata['invoicE_DATE'] = edataheader[3]
        itemdata['vendoR_NAME'] = edataheader[4]
        itemdata['location'] = edataheader[5]
        // itemdata['remark'] = edataheader[6]
        // itemdata['totaL_AMOUNT'] = edataheader[7]
        // itemdata['discounT_PERCENTAGE'] = edataheader[8]
        // itemdata['discounT_BAHT'] = edataheader[9]
        // itemdata['vat'] = edataheader[10]
        // itemdata['total'] = edataheader[11]
          setitemdata({ ...itemdata })
      }
      fileData.splice(0,1)
      // fileData.splice(0,6)
      let i = 0;
      
      for (let index = 0; index < fileData.length; index++) {
 
        for (let indexz = 0; indexz < fileData.length; indexz++) {
         if(fileData[index] === undefined  || fileData[index].length == 0){
          //  console.log(index)
           fileData.splice(index,1)
         
           
         }
         else  if(fileData[index][0] === 'รหัส GPU' ){
          fileData.splice(index,1)
         }
         else{
     
         }
        }
        
      }
      
   


      const tabledata = []; 
      if(fileData.length>0){
         for (let index = 0; index < fileData.length; index++) {
           tabledata.push(fileData[index])
           
         }
      }
      console.log(tabledata)
      let ggwp = []
      console.log(ggwp)
for (let index = 0; index < tabledata.length; index++) {

  if(tabledata[index][0] !== '' && tabledata[index][1] !== '' && tabledata[index][2] !== '' && tabledata[index][3] !== '' && tabledata[index][4] !== '' && tabledata[index][5] !== '' && tabledata[index][6] !== '' && tabledata[index][7] !== '' && tabledata[index][8] !== '' && tabledata[index][9] !== '' && tabledata[index][0] !== undefined && tabledata[index][1] !== undefined && tabledata[index][2] !== undefined && tabledata[index][3] !== undefined && tabledata[index][4] !== undefined && tabledata[index][5] !== undefined && tabledata[index][6] !== undefined && tabledata[index][7] !== undefined && tabledata[index][8] !== undefined && tabledata[index][9] !== undefined){
    const form = {
      c1: tabledata[index][0],
          c2: tabledata[index][1],
          c3: tabledata[index][2],
          c4: tabledata[index][3],
          c5: tabledata[index][4],
          c6: tabledata[index][5],
          c7: tabledata[index][6],
          c8: tabledata[index][7],
          c9: tabledata[index][8],
          c10: tabledata[index][9],
          c11: tabledata[index][10], 
          c12: tabledata[index][11]
    }
    
    ggwp.push(form)
   setmapp(mapp.concat(ggwp))
  }
   else if( tabledata[index][0] == undefined && tabledata[index][1] == undefined && tabledata[index][2] == undefined && tabledata[index][3] == undefined && tabledata[index][4] == undefined && tabledata[index][5] == undefined && tabledata[index][6] == undefined && tabledata[index][7] == undefined && tabledata[index][8] == undefined ){
     if(tabledata[index][9] == 'ราคารวม (ไม่รวม VAT)'){
      itemdata['totaL_AMOUNT'] = tabledata[index][11]
        
     }
     if(tabledata[index][9] == 'ส่วนลด - เปอร์เซ็นต์'){
      itemdata['discounT_PERCENTAGE'] = tabledata[index][11]
    }
    if(tabledata[index][9] == 'ส่วนลด - บาท'){
      itemdata['discounT_BAHT'] = tabledata[index][11]
    }
    if(tabledata[index][9] == 'VAT'){
      itemdata['vat'] = tabledata[index][11]
    }
    if(tabledata[index][9] == 'ราคารวม'){
      itemdata['total'] = tabledata[index][11]
    }
    setitemdata({ ...itemdata })
       
        
  
   }
   else if( tabledata[index][0] == 'หมายเหตุ'){
    itemdata['remark'] = tabledata[index][1]
    setitemdata({ ...itemdata })
   }

  }

}

        
setupload(false)
    }
reader.readAsBinaryString(file)
e.target.value = null;
}

const deleteempty = (data) =>{
var send =   data.filter(function (el) {
    return el != null;
  })
  return send
}
function Download() {
  document.getElementById('downloadexcel').click();
}

  const handleRemoveItem = (idx) => {
    // assigning the list to temp variable
    const temp = [...itemtable];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    setitemtable(temp);
  };

  useEffect(() => {
    const fetchData = async () => {
      await settable([]);
    };

    fetchData();
  }, []);

  const savetable = async (e) => {
    e.preventDefault();
    console.log(e);

    // valuechk = getRandomInt(3000)
    let zaza = itemtable;
    // settable(itemtable)
    setmapp([...mapp,itemtable]);
    setitemtable({
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      c8: "",
      c9: "",
      c10: "",
      c11: "",
      c12: "",
    })
    setisClose(false)
    console.log(mapp);
  };
  const [tableza, settable] = useState([]);

  const handleChange = (name, e) => {
    itemtable[name] = e.target.value;
    console.log(itemtable);
 
  };
 
  const handleChangedata = (name, e) => {
    itemdata[name] = e.target.value;
    console.log(itemdata);
    setitemdata({ ...itemdata })
  };
const cleardata = () => {
  setupload(true)
  setitemdata( {invoicE_NO: ""  ,
  invoicE_DATE: "" ,
  remark: "" ,
  discounT_PERCENTAGE: "" ,
  discounT_BAHT: "" ,
  vat: "" ,
  totaL_AMOUNT: "" ,
  producT_NO: "" ,
  pO_NO: "" ,
  total: "" ,
  vendoR_NAME: "" ,
  location: "" })
setmapp([])

}

  const saveapipo = async () => {
  
    var date = moment(itemdata.invoicE_DATE, 'DD-MM-YYYY')
    let discounT_BAHT = itemdata.discounT_BAHT
    let discounT_PERCENTAGE = itemdata.discounT_PERCENTAGE
    let vat =itemdata.vat
    let totaL_AMOUNT = itemdata.totaL_AMOUNT
    let total = itemdata.total
    if (isNaN(discounT_PERCENTAGE)) {
      discounT_PERCENTAGE = 0
    }
    if (isNaN(discounT_BAHT)) {
      discounT_BAHT = 0
    }
   
  
    let data = {
      invoicE_NO: String(itemdata.invoicE_NO),
      invoicE_DATE: date.format('YYYY-MM-DD'),
      remark: String(itemdata.remark),
      discounT_PERCENTAGE: Number(discounT_PERCENTAGE),
      discounT_BAHT: Number(discounT_BAHT),
      vat: Number(vat),
      totaL_AMOUNT: Number(totaL_AMOUNT),
      producT_NO: String(itemdata.producT_NO),
      pO_NO:  String(itemdata.pO_NO),
      total: Number(total),
      vendoR_NAME:  String(itemdata.vendoR_NAME),
      location:  String(itemdata.location),
    }
    console.log(JSON.stringify(data))
 await edi_asn(data).then(async data   => { 
  console.log(data);
  // Router.push('/register/information')
  if (data.error) {
     console.log('ggwp')
  } else {
    if(mapp.length > 0){
      for (let index = 0; index < mapp.length; index++) {
        var c7 = moment(mapp[index].c7, 'DD-MM-YYYY')
        var c8 = moment(mapp[index].c7, 'DD-MM-YYYY')

        console.log(String(itemdata.invoicE_NO))
        let datatable = {  
      producT_ID: String(index) ,
      codE_GPU: String(mapp[index].c1) ,
      codE_UNSPSC: String(mapp[index].c2) ,
      codE_TMT: String(mapp[index].c3) ,
      baR_CODE: String(mapp[index].c4) ,
      producT_NO: String(itemdata.producT_NO) ,
      producT_NAME: String(mapp[index].c5) ,
      qty: Number(mapp[index].c9) ,
      uom:  String(mapp[index].c10) ,
      uniT_PRICE:  Number(mapp[index].c11) ,
      batcH_LOT_NO: 1 , 
      mfG_DATE: c7.format('YYYY-MM-DD'),
      exP_DATE: c8.format('YYYY-MM-DD'),
     
      amount: Number(mapp[index].c12) ,
        }
        console.log(JSON.stringify(datatable))
       await ediproduct(datatable).then(async data => {
console.log(data);
// Router.push('/register/information')
if (data.error) {
   console.log('ggwp')
} else {
  await fetchData();
  setisClosef(1)
  cleardata()
  
  console.log('55')
}
})
  }
}
  else{
    console.log('555')
  }
  }
})
   
console.log(mapp,mapp.length)
  };
  
  return (
    <Layout>
      {(() => {
        if (isClosef == 1) {
          return (
            <>
              <div className="content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ">
                รายการส่งของ
              </div>

              <div className="content-center text-center justify-items-center text-3xl mt-2 text-gray-600 ">
                Invoice send list
              </div>
              <div className="content-center text-right justify-items-end text-4xl mt-5 mr-5 ">
                <a
                  className="text-2xl hover:text-pink  text-pink-700 font-bold underline"
                  onClick={() => setisClosef(3)}
                >
                  สร้างรายการ +
                </a>
              </div>
              <div className="ml-5  mt-2   mr-5 ">
                <div className="border-solid border-2 border-black rounded-lg  w-full ">
                  <div className=" m-2 item-center justify-between">
                    <div className="flex ">
                      <div className="flex-grow">
                        <div className="mt-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio h-4 w-4 "
                              name="accountType"
                              value="personal"
                            />
                            <span className="ml-2 text-pink-800">
                              Current data
                            </span>
                          </label>
                          <input className="ml-3" type="date"></input>
                        </div>
                      </div>
                      <div className="flex-grow">
                        {" "}
                        <div className="mt-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio h-4 w-4 "
                              name="accountType"
                              value="personal"
                            />
                            <span className="ml-2 text-pink-800">from</span>
                          </label>
                          <input className="ml-3" type="date"></input>
                          <label className="inline-flex items-center ml-2 text-pink-800">
                            to{" "}
                          </label>
                          <input className="ml-3" type="date"></input>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mt-2">
                          <label className="inline-flex items-center  text-pink-800">
                            Status{" "}
                          </label>
                          <select className="form-select ml-2 ">
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                          <label className="inline-flex items-center ml-2 text-pink-800">
                            Place
                          </label>
                          <select className="form-select   ml-2">
                            <option>No data</option>
                            <option>No data</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex-grow-0">
                        <button className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tr className="bg-gray-50">
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider "
                              >
                                เลขที่ใบสั่งซื้อ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                รหัสผู้จำหน่าย
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                ผู้จำหน่าย
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                เลขที่ใบส่งของ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                วันที่ใบส่งของ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                สถาที่ส่งมอบ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider"
                              >
                                สถานะ
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                        
                          
                         
                          { showtable.map((data,index)=>(
< >      <tr key={index} className="bg-white divide-y divide-gray-200">
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {data.invoicE_NO}
                          </div>{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                          {data.pO_NO}
                          </div>{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                          {data.vendoR_NAME}
                          </div>{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                          {data.producT_NO}
                          </div>{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                          {data.invoicE_DATE}
                          </div>{" "}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                          {data.location}
                          </div>{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={()=>handleedit(data.producT_NO)}>
                            <svg
                              className="text-pink-800  w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                          </button>{" "}
                        </td>
                      </tr>
            </>
                      ))
                    }
                      
                        
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        } else if (isClosef == 2) {
          return (
            <>
              <div className="relative ">
                <div className="absolute mt-5 ml-10 left-0 top-0">
                  <a onClick={() => closef1refresh(1)}>
                    <div className="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center">
                      {" "}
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ">
                ใบรับของ (IN)
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบสั่งซื้อ <label className="ml-5">{itemdata.invoicE_NO}</label>
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ <label className="ml-5">{itemdata.producT_NO}</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย <label className="ml-5">{itemdata.pO_NO}</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ <label className="ml-5">{itemdata.invoicE_DATE}</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย <label className="ml-5">{itemdata.vendoR_NAME}</label>
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ <label className="ml-5">{itemdata.location}</label>
                </div>
              </div>

              <div className="flex flex-col mt-10">
              {/* kkkk */}
                <div className=" ">
                <div className=" flex justify-end  mr-10 mt-5">
                    <button
                      onClick={() => setisClose(true)}
                      className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      ทำซ้ำ
                    </button>
                    <button
                      onClick={() => setisClose(true)}
                      className="bg-pink-500 ml-2  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => setisClose(true)}
                      className="bg-pink-500 ml-2  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      ลบ
                    </button>
                  </div>
                  
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                      <table className="min-w-full w-full">
                    <tr className="bg-gray-50">
                            <th
                              scope="col"
                              className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider"
                            >
                              รหัส GPU
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัส UNSPSC
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัส TMT
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              Bar code
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2"
                            >
                              ชื่อยา / เวชภัณท์
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัสผลิต
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              วันที่ผลิต
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider"
                            >
                              วันที่หมดอายุ
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวน
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              หน่วย
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              ราคาต่อหน่วย
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวนเงิน
                            </th>
                          </tr>
                       
                       
                            {
                            (mapp.length>0) ? (
                              mapp.map((data,index)=>(
                                <tr key={index} className="bg-white ">
                                <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c1} </div>   </td>
                                                           <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c2} </div>   </td>
                                                           <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c3} </div>   </td>
                                                           <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c4} </div>   </td>
                                                           <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c5} </div>   </td>
                                                           <td className="px-6 py-4  border-r whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c6} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c7} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c8} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                                                           </tr>
                                  ))
                                
                            ) : <></>
                              // ByeBye!
        }
 
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <div className="grid grid-cols-2 gap-3 ml-5 mt-5 mr-10">
                  <div className="content-center text-left justify-items-center text-base mt-5 font-bold  ">
                    หมายเหตุ      <label className="ml-5">{itemdata.remark}</label>
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ราคารวม (ไม่รวม VAT)
                
                   <label className="ml-5">{itemdata.totaL_AMOUNT}</label>
               
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 mt-5 mr-10">
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ส่วนลด - เปอร์เซ็นต์{" "}
                    <label className="ml-5">{itemdata.discounT_PERCENTAGE}</label>
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ส่วนลด - บาท{" "}
                    <label className="ml-5">{itemdata.discounT_BAHT}</label>
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    VAT{" "}
                    <label className="ml-5">{itemdata.vat}</label>
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ราคารวม{" "}
                    <label className="ml-5">{itemdata.total}</label>
                  </div>
                </div>{" "}
              </div>
            </>
          );
        } else if (isClosef == 3) {   
          return (
            <>
              <div className="relative ">
                <div className="absolute mt-5 ml-10 left-0 top-0">
                  <a onClick={() => closef1refresh(1) }>
                    <div className="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center">
                      {" "}
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className=" flex justify-end  mr-10 mt-5">
              <div className="">
              {upload ? ( <label className="flex items-center px-4 py-6 bg-pink-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-pink-700 ">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="ml-2 text-base leading-normal">อัพโหลด</span>
        <input type='file' onChange={handleUpload} className="hidden" />
    </label>) : ''}
   
</div>
<a id="downloadexcel" href="http://localhost:3000/download/template.xlsx" hidden download> file_name </a>  
                <button id="my_iframe"  onClick={Download} className="ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  ดาวห์โหลด
                </button>
              </div>
              <div className="content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ">
                ใบรับของ (IN)
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบสั่งซื้อ
              
                  <input          onChange={(e) => handleChangedata("invoicE_NO", e)}
                    id="เลขที่ใบสั่งซื้อ" 
                    value={itemdata.invoicE_NO} 
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
              
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ{" "}
                  <input      value={itemdata.producT_NO} 
                    id="เลขที่ใบส่งของ"  onChange={(e) => handleChangedata("producT_NO", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย{" "}
                  <input   value={itemdata.pO_NO} 
                    id="รหัสผู้จำหน่าย"  onChange={(e) => handleChangedata("pO_NO", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ{" "}
                  <input   value={itemdata.invoicE_DATE} 
                    id="วันที่ใบส่งของ"    onChange={(e) => handleChangedata("invoicE_DATE", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย{" "}
                  <input   value={itemdata.vendoR_NAME}   onChange={(e) => handleChangedata("vendoR_NAME", e)}
                    id="ชื่อผู้จำหน่าย"
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ{" "}
                  <input  value={itemdata.location}  
                    id="สถาที่ส่งมอบ"  onChange={(e) => handleChangedata("location", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <div className=" ">
                  <div className=" flex justify-end  mr-10 mt-5">
                    <button
                      onClick={() => setisClose(true)}
                      className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      เพิ่มข้อมูลตาราง
                    </button>
                  </div>
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                      <table className="min-w-full w-full">
                          <tr className="bg-gray-50">
                            <th
                              scope="col"
                              className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider"
                            >
                              รหัส GPU
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัส UNSPSC
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัส TMT
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              Bar code
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2"
                            >
                              ชื่อยา / เวชภัณท์
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              รหัสผลิต
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              วันที่ผลิต
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider"
                            >
                              วันที่หมดอายุ
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวน
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              หน่วย
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              ราคาต่อหน่วย
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวนเงิน
                            </th>
                          </tr>
                       
                       
                         
{
  mapp.map((data,index)=>(
<tr key={index} className="bg-white ">
<td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c1} </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c2} </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c3} </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c4} </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c5} </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c6} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c7} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c8} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                           </tr>
  ))
}
                          {/* <tr>
                      
                          <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">ถุงมือ </div>   </td>
                           <td className="px-6 py-4  border-r whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">1000</div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">2 </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">2 </div>   </td>
           
                         
           
                     
                       </tr>
                    */}
                     
                      </table>

                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10 ml-10 mr-10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="row-span-5 ">
                    <div className=" text-left  text-base mt-5 font-bold  ">
                      <label className="content-center text-right justify-items-center text-base mt-5 font-bold ">
                        หมายเหตุ
                      </label>{" "}
                      <textarea
                        cols="60"   value={itemdata.remark} 
                        rows="5"
                        className="w-full border-pink-700 border bg-white shadow-md rounded "
                        onChange={(e) => handleChangedata("remark", e)}
                     
                     >
                        
                      </textarea>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม (ไม่รวม VAT){" "}
                      <input    value={itemdata.totaL_AMOUNT}   onChange={(e) => handleChangedata("totaL_AMOUNT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - เปอร์เซ็นต์{" "}
                      <input    value={itemdata.discounT_PERCENTAGE}
                        id="เลขที่ใบสั่งซื้อ"  onChange={(e) => handleChangedata("discounT_PERCENTAGE", e)}
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - บาท
                      <input   value={itemdata.discounT_BAHT} onChange={(e) => handleChangedata("discounT_BAHT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      VAT{" "}
                      <input   value={itemdata.vat}  onChange={(e) => handleChangedata("vat", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม{" "}
                      <input   value={itemdata.total}    onChange={(e) => handleChangedata("total", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <button onClick={saveapipo} className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    บันทึก
                  </button>
                  <button onClick={(e)=>cleardata()}  className="bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    ยกเลิก
                  </button>
                </div>
              </div>
            </>
          );
        }
      })()}

      {isClose ? (
        <>
          <div id="myModal" className="modal">
            <form onSubmit={savetable}>
              <div className="modal-content">
                <span className="close" onClick={() => setisClose(false)}>
                  &times;
                </span>

                <div className="content-center text-center justify-items-center text-3xl mt-5 text-pink-800 ">
                  เพิ่มข้อมูลตาราง
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส GPU
                    <input
                      onChange={(e) => handleChange("c1", e)}
                      id="GPU"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส UNSPSC
                    <input
                      onChange={(e) => handleChange("c2", e)}
                      id="UNSPSC"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส TMT
                    <input
                      onChange={(e) => handleChange("c3", e)}
                      id="TMT"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    BAR CODE
                    <input
                      onChange={(e) => handleChange("c4", e)}
                      id="BAR_CODE"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ชื่อยา / เวชภัณท์
                    <input
                      onChange={(e) => handleChange("c5", e)}
                      id="namemedi"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัสผลิต
                    <input
                      onChange={(e) => handleChange("c6", e)}
                      id="codeex"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่ผลิต
                    <input
                      onChange={(e) => handleChange("c7", e)}
                      type="date"
                      id="dateex"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่หมดอายุ
                    <input
                      onChange={(e) => handleChange("c8", e)}
                      type="date"
                      id="dateendex"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    จำนวน
                    <input
                      onChange={(e) => handleChange("c9", e)}
                      id="cout"
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    หน่วย
                    <input
                      onChange={(e) => handleChange("c10", e)}
                      id="ex"
                      autoComplete="false"
                      className=" w-full  bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ราคาต่อหน่วย
                    <input
                      onChange={(e) => handleChange("c11", e)}
                      id="extcount "
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                    />
                  </div>

                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  จำนวนเงิน
                    <input
                      onChange={(e) => handleChange("c12", e)}
                      id="extcount "
                      autoComplete="false"
                      className=" w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
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
                    onClick={() => setisClose(false)}
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
    </Layout>
  );
}

export default table;
