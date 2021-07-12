import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from "react";
import { set } from "js-cookie";
import {edi_po,getedi_po,GETEDI_ASN} from '../api/api_po'
import {edi_asn,ediproduct,getediasn,getediasnbyinvoice,asnupdate,deleteasn} from '../api/api_asn'
import * as XLSX from 'xlsx';
import moment from "moment";
import Swal from 'sweetalert2'
// import template from '../../public/download/template.xlsx';
 
function table() {

  const [isCheck, setIsCheck] = useState([]);
  const handleClick = e => {
    
    const { id, checked } = e.target;
    console.log(checked)
    console.log(id)
    console.log(isCheck.includes(id))
    setIsCheck([...isCheck, id]);
    console.log(isCheck)
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };
  const [checklength,setchecklength] = useState([
  ])
  const [isClose, setisClose] = useState(false);
  const [isCloseedit, setisCloseedit] = useState(false);
  const [upload, setupload] = useState(true);
  const [isClosef, setisClosef] = useState(1);
  const [mapp, setmapp] = useState([]);
  const [deletedOrderItemIds, setdeletedOrderItemIds] = useState('');
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
    c13: "",
    id: 0,
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
      console.log(dataf)
 
   }
   await  setshowtable(dataf) 
  }
  
 
  
})
}

const callmoney = (item)=>{
  
  let totalamount=0
  let asdsa = item
  console.log(asdsa,item.length)
  if(item.length>0){
    for (let index = 0; index <   item.length; index++) {
      totalamount = totalamount + Number(item[index].c12)
     
    }
    console.log(totalamount)
    itemdata['totaL_AMOUNT'] = totalamount
     
     if(itemdata['discounT_PERCENTAGE']!=''){
    
    
    
  
       itemdata['discounT_BAHT'] =  itemdata['totaL_AMOUNT'] * itemdata['discounT_PERCENTAGE'] /100
       let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
       itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
     }  //มา
     if(itemdata['discounT_BAHT']!=''){
     itemdata['discounT_PERCENTAGE'] =  (itemdata['discounT_BAHT']*100) /  itemdata['totaL_AMOUNT'] 
     let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
     itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
     //มา
    }

   setitemdata({...itemdata})

  }

}

const setChecked =(e,index,g)=>{
  console.log(g,index)
  if(e == undefined){
  
    mapp[index].checked = true

 

    setchecklength( [...checklength,{id:index}]); 
  }
  if(e){
    mapp[index].checked = false
   

    
    setchecklength(checklength.filter(({ id }) => id !== index));
  
   
  }
  if(!e){
    mapp[index].checked = true
    setchecklength( [...checklength,{id:index}]); //เอาไปเช็คทำซ้ำ
  


  }
  setmapp([...mapp])
  console.log(checklength)
}

const edittable = (idx,id)=>{
  setisCloseedit(true)
const temp = [...mapp];
console.log(idx,id,temp[idx])
itemtable['c1'] = temp[idx].c1
itemtable['c2'] = temp[idx].c2
itemtable['c3'] = temp[idx].c3
itemtable['c4'] = temp[idx].c4
itemtable['c5'] = temp[idx].c5
itemtable['c6'] = temp[idx].c6
itemtable['c7'] = temp[idx].c7
itemtable['c8'] = temp[idx].c8
itemtable['c9'] = temp[idx].c9
itemtable['c10'] = temp[idx].c10
itemtable['c11'] = temp[idx].c11
itemtable['c12'] = temp[idx].c12
itemtable['c13'] = temp[idx].c13

itemtable['id'] = temp[idx].id
itemtable['idx']= idx
}

const dupplicate = async()=>{
  
  let gebvalue = []
  let gebcodevalue = []
  if(checklength.length>0){
    for (let index = 0; index < checklength.length; index++) {
      console.log(mapp[checklength[index].id].c1,checklength[index])
const ggwp = {
c1:  mapp[checklength[index].id].c1,
c2: mapp[checklength[index].id].c2,
c3: mapp[checklength[index].id].c3,
c4: mapp[checklength[index].id].c4,
c5: mapp[checklength[index].id].c5,
c6: mapp[checklength[index].id].c6,
c7: mapp[checklength[index].id].c7,
c8: mapp[checklength[index].id].c8,
c9: mapp[checklength[index].id].c9,
c10: mapp[checklength[index].id].c10,
c11: mapp[checklength[index].id].c11,
c12: mapp[checklength[index].id].c12,
c13: mapp[checklength[index].id].c13,
checked: false,
id:0
        }
      
        gebvalue.push(ggwp)
        setmapp(mapp => [...mapp, ggwp]); 
        callmoney([...mapp, ggwp])
    }
    console.log(gebvalue)  
   
    console.log(mapp)  
  
  }
  else if(checklength.length == 0){
    console.log('non')
  }

}


  const [itemdata, setitemdata] = useState({
    id:null,
    invoicE_NO: ""  ,
        invoicE_DATE: "" ,   
        remark: "" ,
        discounT_PERCENTAGE: null ,
        discounT_BAHT: null ,
        vat: 7 ,
        totaL_AMOUNT: null ,
        producT_NO: "" ,
        pO_NO: "" ,
        total: "" ,
        vendoR_NAME: "" ,
        location: "" 
  });
  


  const editall = async (e)=>{
    console.log(mapp)
let mo = []
    for (let index = 0; index < mapp.length; index++) {
      var c7 = moment(mapp[index].c7).format('YYYY-MM-DD')
      var c8 = moment(mapp[index].c8).format('YYYY-MM-DD')

      console.log(c7,c8)
      let datatable = {  
    producT_ID: String(mapp[index].c6) ,
    codE_GPU: String(mapp[index].c1) ,
    codE_UNSPSC: String(mapp[index].c2) ,
    codE_TMT: String(mapp[index].c3) ,
    baR_CODE: String(mapp[index].c4) ,
    producT_NO:String(itemdata.producT_NO) ,
    producT_NAME: String(mapp[index].c5) ,
    qty: Number(mapp[index].c9) ,
    uom:  String(mapp[index].c10) ,
    uniT_PRICE:  Number(mapp[index].c11) ,
    batcH_LOT_NO: 1 , 
    mfG_DATE: c7,
    exP_DATE: c8,
 
    amount: Number(mapp[index].c12) ,
    total: Number(mapp[index].c13) ,
    id : Number(mapp[index].id) , 
      }
      mo.push(datatable)
 
}


const data = {
  id: e,
  pO_NO: itemdata.pO_NO,
  vendoR_NAME: itemdata.vendoR_NAME,
  invoicE_NO: itemdata.invoicE_NO,
  invoicE_DATE: itemdata.invoicE_DATE,
  ship_to: itemdata.location,
  discounT_PERCENTAGE: itemdata.discounT_PERCENTAGE,
  discounT_BAHT: itemdata.discounT_BAHT,
  vat: 7,
  totaL_AMOUNT: itemdata.totaL_AMOUNT,
  remark: itemdata.remark,
  total: itemdata.total,
  producT_NO: itemdata.producT_NO,
  deletedOrderItemIds:deletedOrderItemIds,
  orderdetails: mo

}


console.log(JSON.stringify(data))
    await asnupdate(e,data).then(() => {
      Swal.fire({
        title: 'สำเร็จ',
        text: "บันทึกข้อมูลสำเร็จ!! ",
        icon: 'success',
     
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
  
        confirmButtonText: 'ยืนยัน'
      }).then((result) => {
        if (result.isConfirmed) {
          closef1refresh(1)
        }
      })
 

  }).catch(err => {
      console.log(err);
     
  })
    
 
   } 
 

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
   
    if(e==1){
     await fetchData()
    }
  } 

// edit3
  const handleedit =async (invoice,product)  => {
    setisClosef(2)

    GETEDI_ASN(invoice,product).then(async data=>{
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
                  itemdata['vat'] =   7
                  itemdata['total'] =   data[0].total
                  itemdata['id'] =   data[0].id
                  
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
                c13 :data[0].orderdetails[index].total,
                id :data[0].orderdetails[index].id,
                
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
  //  console.log(edataheader)
  //  const value = moment(edataheader[3],'DD-MM-YYYY').format('YYYY-MM-DD')
  //  console.log(edataheader[3])
  //  var date = Date.parse(edataheader[3].toString());
  //  var datez = new Date(edataheader[3]); 
  //  console.log(value,date,datez)
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
          c12: tabledata[index][11],
          c13: tabledata[index][12]
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
      itemdata['vat'] = 7
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
    const temp = [...mapp];
    console.log(temp)

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    setmapp(temp);
  };

  const handleRemoveItem2 = (idx,id) => {
    // assigning the list to temp variable
    const temp = [...mapp];
    console.log(id)
    let ggwp = deletedOrderItemIds
    if(id != 0){
      ggwp = ggwp+','+ id
      console.log(ggwp)
     setdeletedOrderItemIds(ggwp)
    }
  
    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    console.log(temp)
    setmapp(temp)
    callmoney([...temp])

    
      //  itemdata['totaL_AMOUNT'] =  itemdata['totaL_AMOUNT'] - mapp[idx].c12
        
      
      //   setitemdata({ ...itemdata })
      //   console.log( itemdata['totaL_AMOUNT'])
      
      
     
    

    
  
  };

  const deleteinvoietable =(invoice,id) =>{

console.log(id)
    Swal.fire({
      title: 'ต้องการที่จะลบใช่หรือไม่?',
      text: "Invoice ที่จะลบคือ "+invoice,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.isConfirmed) {

        deleteasn(id).then(async data=>{
          if(data.error){
            Swal.fire(
              'ไม่สำเร็จ',
            
              'error'
            )
          }
          else{
            Swal.fire(
              'Deleted!',
              'ลบการการที่เลือกสำเร็จ',
              'success'
            )
          await  fetchData()
          }
        })
      
      }
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      await settable([]);
    };

    fetchData();
  }, []);

   const cleardataedit = ()=>{
    setisCloseedit(false)
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
      c13: "",
      id: 0,
      idx:"",
    })
    setchecklength([])
  }




  const savetableedit = async (e) => {
    e.preventDefault();
    
    console.log(itemtable.idx);
    mapp[itemtable.idx].c1 = itemtable.c1 
    mapp[itemtable.idx].c2 = itemtable.c2 
    mapp[itemtable.idx].c3 = itemtable.c3 
    mapp[itemtable.idx].c4 = itemtable.c4 
    mapp[itemtable.idx].c5 = itemtable.c5 
    mapp[itemtable.idx].c6 = itemtable.c6 
    mapp[itemtable.idx].c7 = itemtable.c7 
    mapp[itemtable.idx].c8 = itemtable.c8 
    mapp[itemtable.idx].c9 = itemtable.c9 
    mapp[itemtable.idx].c10 = itemtable.c10
    mapp[itemtable.idx].c11 = itemtable.c11
    mapp[itemtable.idx].c12 = itemtable.c12
    mapp[itemtable.idx].c13 = itemtable.c13
    mapp[itemtable.idx].id = itemtable.id 
   
    // valuechk = getRandomInt(3000)

  
    // settable(itemtable)
 
   
    cleardataedit()
    callmoney([...mapp])
  }


  const savetable = async (e) => {
    e.preventDefault();
    
    console.log(e);

    // valuechk = getRandomInt(3000)
    let zaza = itemtable;
  console.log(zaza)
 
    // settable(itemtable)
  //  await setmapp([...mapp,itemtable]);
  await setmapp([...mapp, itemtable]); 
   let forcalsave = [...mapp, itemtable]
   await callmoney(forcalsave)
    // setitemtable({
    //   c1: "",
    //   c2: "",
    //   c3: "",
    //   c4: "",
    //   c5: "",
    //   c6: "",
    //   c7: "",
    //   c8: "",
    //   c9: "",
    //   c10: "",
    //   c11: "",
    //   c12: "",
    //   id: 0,
    // })
 //แก้บัน


    // if(mapp.length>0){
    //    itemdata['totaL_AMOUNT'] = itemdata['totaL_AMOUNT'] + itemtable.c12
     
    //    if(itemdata['discounT_PERCENTAGE']!=''){
       
       
       
     
    //       itemdata['discounT_BAHT'] =  itemdata['totaL_AMOUNT'] * itemdata['discounT_PERCENTAGE'] /100
    //       let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
    //       itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
    //     }  //มา
    //     if(itemdata['discounT_BAHT']!=''){
    //     itemdata['discounT_PERCENTAGE'] =  (itemdata['discounT_BAHT']*100) /  itemdata['totaL_AMOUNT'] 
    //     let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
    //     itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
    //     //มา
    //    }
   
    //   setitemdata({...itemdata})
    // }
    // else{
    //   itemdata['totaL_AMOUNT'] = 0
    //   itemdata['totaL_AMOUNT'] = itemtable.c12
    //   setitemdata({...itemdata})
    // }
    setisClose(false)

  };
  const [tableza, settable] = useState([]);


  const handleChange = (name, e) => {
    itemtable[name] = e.target.value;
    
    if(name = 'c9' !='' && itemtable[name]!=''){
      itemtable['c12'] = itemtable['c9'] * itemtable['c11']
      setitemtable({ ...itemtable })
    }
    if(name = '11' !='' && itemtable[name]!=''){
      itemtable['c12'] = itemtable['c9'] * itemtable['c11']
      setitemtable({ ...itemtable })
    }
    console.log(mapp);
  };
 
  const handleChangedata = (name, e) => {
    console.log(e)
    itemdata[name] = e.target.value;
    console.log(itemdata);
    if(name =="discounT_BAHT"){
      itemdata['discounT_PERCENTAGE'] =  (e.target.value*100) /  itemdata['totaL_AMOUNT'] 
      let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
      itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
    } 
    if(name =="discounT_PERCENTAGE"){
      itemdata['discounT_BAHT'] =  itemdata['totaL_AMOUNT'] * e.target.value /100
      let i =  ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT'])*  itemdata['vat'] /100
      itemdata['total'] =   ( itemdata['totaL_AMOUNT'] - itemdata['discounT_BAHT']) + i
    }  //มา
    setitemdata({ ...itemdata })
  };
const cleardata = () => {
  setupload(true)
  setitemdata( {invoicE_NO: ""  ,
  itemdata:"",
  invoicE_DATE: "" ,
  remark: "" ,
  discounT_PERCENTAGE: "" ,
  discounT_BAHT: "" ,
  vat: 7 ,
  totaL_AMOUNT: "" ,
  producT_NO: "" ,
  pO_NO: "" ,
  total: "" ,
  vendoR_NAME: "" ,
  location: "" })
setmapp([])
setchecklength([])
}

const cleardataback = () => {
  setupload(true)
  setitemdata( {invoicE_NO: ""  ,
  itemdata:"",
  invoicE_DATE: "" ,
  remark: "" ,
  discounT_PERCENTAGE: "" ,
  discounT_BAHT: "" ,
  vat: 7 ,
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
    let vat =7
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
      vat: 7,
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
      let i = mapp.length-1;
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
      total: Number(mapp[index].c13) ,
        }
        console.log(JSON.stringify(datatable))
       await ediproduct(datatable).then(async data => {
console.log(data);
// Router.push('/register/information')
if (data.error) {
   console.log('ggwp')
} else {
  if(i==index){
    Swal.fire({
      title: 'สำเร็จ',
      text: "บันทึกข้อมูลสำเร็จ!! ",
      icon: 'success',
   
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
  
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.isConfirmed) {
        closef1refresh(1)
      }
    })
  }
 
 

}
})
  }
}
  else{
    console.log('ผิดผลาด')
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
                          <input  autoComplete="off"   className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
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
                          <input  autoComplete="off"   className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
                          <label className="inline-flex items-center ml-2 text-pink-800">
                            to{" "}
                          </label>
                          <input  autoComplete="off"   className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mt-2">
                          <label className="inline-flex items-center  text-pink-800">
                            Status{" "}
                          </label>
                          <select className="form-select ml-2 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 ">
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                          <label className="inline-flex items-center ml-2 text-pink-800">
                            Place
                          </label>
                          <select className="form-select   ml-2 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 ">
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
                          {moment(data.invoicE_DATE).format('DD/MM/yyyy') } 
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
                          <button onClick={()=>handleedit(data.invoicE_NO,data.producT_NO) } class="rounded-full bg-pink-500 text-white h-9 w-9 flex-row items-center justify-center">
                            <svg 
                              className="  w-7 h-7 ml-1"
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
                          <button onClick={(e)=>deleteinvoietable(data.invoicE_NO,data.id)} class="rounded-full bg-red-400 text-white h-9 w-9 flex-row items-center justify-center" >
                         <svg class=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
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
                  วันที่ใบส่งของ <label className="ml-5"> {moment(itemdata.invoicE_DATE).format('DD/MM/yyyy') }</label>
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
                       onClick={() => setisClosef(4)}
                      className="bg-pink-500 ml-2  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => setisClosef(4)}
                      className="bg-pink-500 ml-2  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      ลบ
                    </button>
                  </div>
                  
                  <div className="py-2 overflow-x-auto  ">
                    <div className="shadow  border-gray-200 sm:rounded-lg">
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
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวนที่สั่งซื้อ
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
                                                           <div className="text-center text-sm text-gray-900">{moment(data.c7).format('DD/MM/yyyy') } </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{moment(data.c8).format('DD/MM/yyyy') } </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                                                           <td className="px-6 py-4   whitespace-nowrap">
                                                           <div className="text-center text-sm text-gray-900">{data.c13} </div>   </td>
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
        } 
        else if (isClosef == 3) {   
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
        <input  autoComplete="off"   type='file' onChange={handleUpload} className="hidden" />
    </label>) : ''}
   
</div>

<a id="downloadexcel" href="../download/template.xlsx" hidden download> file_name </a>  
                <button id="my_iframe"  onClick={Download} className="ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                ดาวน์โหลด
                </button>
              </div>
              <div className="content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ">
                ใบรับของ (IN)
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบสั่งซื้อ
              
                  <input  autoComplete="off"        onChange={(e) => handleChangedata("invoicE_NO", e)}
                    id="เลขที่ใบสั่งซื้อ" 
                    value={itemdata.invoicE_NO} 
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
              
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ{" "}
                  <input  autoComplete="off"        value={itemdata.producT_NO} 
                    id="เลขที่ใบส่งของ"  onChange={(e) => handleChangedata("producT_NO", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย{" "}
                  <input  autoComplete="off"     value={itemdata.pO_NO} 
                    id="รหัสผู้จำหน่าย"  onChange={(e) => handleChangedata("pO_NO", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ{" "}
                  <input  autoComplete="off"     value={moment(itemdata.invoicE_DATE,'DD-MM-YYYY').format('YYYY-MM-DD')} 
                    id="วันที่ใบส่งของ" type="date"    onChange={(e) => handleChangedata("invoicE_DATE", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย{" "}
                  <input  autoComplete="off"     value={itemdata.vendoR_NAME}   onChange={(e) => handleChangedata("vendoR_NAME", e)}
                    id="ชื่อผู้จำหน่าย"
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ{" "}
                  <input  autoComplete="off"    value={itemdata.location}  
                    id="สถาที่ส่งมอบ"  onChange={(e) => handleChangedata("location", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
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
                  <div className="py-2 overflow-x-auto  ">
                    <div className="shadow  border-gray-200 sm:rounded-lg">
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
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวนที่สั่งซื้อ
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
                           <div className="text-center text-sm text-gray-900">{moment(data.c7).format('DD/MM/yyyy') } </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{moment(data.c8).format('DD/MM/yyyy') } </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c13} </div>   </td>
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
                        className="w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                        onChange={(e) => handleChangedata("remark", e)}
                     
                     >
                        
                      </textarea>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม (ไม่รวม VAT){" "}
                      <input  autoComplete="off"   type="number" disabled    value={itemdata.totaL_AMOUNT}   onChange={(e) => handleChangedata("totaL_AMOUNT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - เปอร์เซ็นต์{" "}
                      <input  autoComplete="off"   type="number"   value={itemdata.discounT_PERCENTAGE}
                        id="เลขที่ใบสั่งซื้อ"  onChange={(e) => handleChangedata("discounT_PERCENTAGE", e)}
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - บาท
                      <input  autoComplete="off"    type="number"  value={itemdata.discounT_BAHT} onChange={(e) => handleChangedata("discounT_BAHT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      VAT{" "}
                      <input  autoComplete="off"   type="number"   value={itemdata.vat}  onChange={(e) => handleChangedata("vat", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม{" "}
                      <input  autoComplete="off"   disabled type="number"  value={itemdata.total}    onChange={(e) => handleChangedata("total", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
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
        else if (isClosef == 4) {   
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
              {/* {upload ? ( <label className="flex items-center px-4 py-6 bg-pink-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-pink-700 ">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="ml-2 text-base leading-normal">อัพโหลด</span>
        <input  autoComplete="off"   type='file' onChange={handleUpload} className="hidden" />
    </label>) : ''} */}
   
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
              
                  <input  autoComplete="off"            onChange={(e) => handleChangedata("invoicE_NO", e)}
                    id="เลขที่ใบสั่งซื้อ" 
                    value={itemdata.invoicE_NO} 
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
              
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ{" "}
                  <input  autoComplete="off"        value={itemdata.producT_NO} 
                    id="เลขที่ใบส่งของ"  onChange={(e) => handleChangedata("producT_NO", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย{" "}
                  <input  autoComplete="off"     value={itemdata.pO_NO} 
                    id="รหัสผู้จำหน่าย"  onChange={(e) => handleChangedata("pO_NO", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ{" "}
                  <input  autoComplete="off"     value={moment(itemdata.invoicE_DATE,'DD-MM-YYYY').format('YYYY-MM-DD')}
                    id="วันที่ใบส่งของ"  type="date"   onChange={(e) => handleChangedata("invoicE_DATE", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย{" "}
                  <input  autoComplete="off"     value={itemdata.vendoR_NAME}   onChange={(e) => handleChangedata("vendoR_NAME", e)}
                    id="ชื่อผู้จำหน่าย"
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ{" "}
                  <input  autoComplete="off"    value={itemdata.location}  
                    id="สถาที่ส่งมอบ"  onChange={(e) => handleChangedata("location", e)}
                    
                    className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                  />
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <div className=" ">
                  <div className=" flex justify-end  mr-10 mt-5">
               

                  <button
                      onClick={() => dupplicate()}
                      className="bg-pink-500 ml-3  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      ทำซ้ำ
                    </button>
                    <button
                      onClick={() => setisClose(true)}
                      className="bg-pink-500 ml-3  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      เพิ่มข้อมูลตาราง
                    </button>
                  </div>
                  <div className="py-2 overflow-x-auto  ">
                    <div className="shadow  border-gray-200 sm:rounded-lg">
                      <table className="min-w-full w-full">
                          <tr className="bg-gray-50">
                          <th
                              scope="col"
                              className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider"
                            >
                           
                            </th>
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
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider"
                            >
                              จำนวนที่สั่งซื้อ
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                            
                              </th>
                          </tr>
                          
                    
                       
                         

{
  mapp.map((data,index)=>(
<tr key={index} className="bg-white ">
<td className="px-6 py-4  border-r whitespace-nowrap">
<label class="inline-flex items-center mt-3"> 
                <input  autoComplete="off"   type="checkbox" id={data.id}     checked={data.checked}
        onChange={(e) => setChecked(data.checked,index,e)} class="form-checkbox h-6 w-6 text-gray-600" />
            </label>
                       </td>
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
                           <div className="text-center text-sm text-gray-900">{moment(data.c7).format('DD/MM/yyyy') } </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{moment(data.c8).format('DD/MM/yyyy') }</div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                           <td className="px-6 py-4   whitespace-nowrap">
                           <div className="text-center text-sm text-gray-900">{data.c13} </div>   </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                           <button onClick={(e)=>handleRemoveItem2(index,data.id)} className="rounded-full bg-red-400 text-white h-9 w-9 flex items-center justify-center" >
                         <svg class=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button> 
                      
                      
                          <button onClick={(e)=>edittable(index,data.id)} class="rounded-full bg-green-400 text-white h-9 w-9 flex-row items-center justify-center" >
                          <svg class=" w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                       </button>
                        </td>
                   
                         
                       
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
                        className="w-full bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                        onChange={(e) => handleChangedata("remark", e)}
                     
                     >
                        
                      </textarea>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม (ไม่รวม VAT){" "}
                      <input  autoComplete="off"   type="number"  disabled  value={itemdata.totaL_AMOUNT}   onChange={(e) => handleChangedata("totaL_AMOUNT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - เปอร์เซ็นต์{" "}
                      <input  autoComplete="off"    type="number"  value={itemdata.discounT_PERCENTAGE}
                        id="เลขที่ใบสั่งซื้อ"  onChange={(e) => handleChangedata("discounT_PERCENTAGE", e)}
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - บาท
                      <input  autoComplete="off"   type="number"  value={itemdata.discounT_BAHT} onChange={(e) => handleChangedata("discounT_BAHT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      VAT{" "}
                      <input  autoComplete="off"   type="number"  value={itemdata.vat}  onChange={(e) => handleChangedata("vat", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม{" "}
                      <input  autoComplete="off"    disabled type="number" value={itemdata.total}    onChange={(e) => handleChangedata("total", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        
                        className="ml-4 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <button onClick={(e)=>editall(itemdata.id)} className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    บันทึก
                  </button>
                  <button onClick={() => closef1refresh(1) }  className="bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
                      
                      className="w-full pearance-nonebg-gray-200 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส UNSPSC
                    <input
                      onChange={(e) => handleChange("c2", e)}
                      id="UNSPSC"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส TMT
                    <input
                      onChange={(e) => handleChange("c3", e)}
                      id="TMT"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    BAR CODE
                    <input
                      onChange={(e) => handleChange("c4", e)}
                      id="BAR_CODE"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ชื่อยา / เวชภัณท์
                    <input
                      onChange={(e) => handleChange("c5", e)}
                      id="namemedi"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัสผลิต
                    <input
                      onChange={(e) => handleChange("c6", e)}
                      id="codeex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่ผลิต
                    <input
                      onChange={(e) => handleChange("c7", e)}
                      type="date"
                      id="dateex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่หมดอายุ
                    <input
                      onChange={(e) => handleChange("c8", e)}
                      type="date"
                      id="dateendex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    จำนวน
                    <input  autoComplete="off"   type="number"
                      onChange={(e) => handleChange("c9", e)}
                      id="cout"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    หน่วย
                    <input
                      onChange={(e) => handleChange("c10", e)}
                      id="ex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700   "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ราคาต่อหน่วย
                    <input  autoComplete="off"   type="number"
                      onChange={(e) => handleChange("c11", e)}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>

                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  จำนวนเงิน
                    <input  autoComplete="off"    disabled value={itemtable.c12}
                      onChange={(e) => handleChange("c12", e)}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  จำนวนที่สั่งซื้อ
                    <input  autoComplete="off"    
                      onChange={(e) => handleChange("c13", e)}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
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
          {isCloseedit ? (
        <>
          <div id="myModal" className="modal">
            <form >
              <div className="modal-content">
                <span className="close" onClick={() => cleardataedit()}>
                  &times;
                </span>

                <div className="content-center text-center justify-items-center text-3xl mt-5 text-pink-800 ">
                  แก้ไขข้อมูลตาราง
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส GPU
                    <input
                      onChange={(e) => handleChange("c1", e)}
                      id="GPU"
                      value = {itemtable.c1}
                      
                      className=" w-full bg-white shadow-md rounded border-pink-700 border  text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส UNSPSC
                    <input
                      onChange={(e) => handleChange("c2", e)}
                      value = {itemtable.c2}
                      id="UNSPSC"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัส TMT
                    <input
                      onChange={(e) => handleChange("c3", e)}
                      value = {itemtable.c3}
                      id="TMT"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    BAR CODE
                    <input
                      onChange={(e) => handleChange("c4", e)}
                      value = {itemtable.c4}
                      id="BAR_CODE"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ชื่อยา / เวชภัณท์
                    <input
                      onChange={(e) => handleChange("c5", e)}
                      value = {itemtable.c5}
                      id="namemedi"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    รหัสผลิต
                    <input
                      onChange={(e) => handleChange("c6", e)}
                      value = {itemtable.c6}
                      id="codeex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่ผลิต
                    <input
                      onChange={(e) => handleChange("c7", e)}
                      value = {   moment(itemtable.c7).format("YYYY-MM-DD")}
                      type="date"
                      id="dateex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    วันที่หมดอายุ
                    <input
                      onChange={(e) => handleChange("c8", e)}
                      value = {   moment(itemtable.c8).format("YYYY-MM-DD")}
                      type="date"
                      id="dateendex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    จำนวน
                    <input  autoComplete="off"   type="number"
                      onChange={(e) => handleChange("c9", e)}
                      value = {itemtable.c9}
                      id="cout"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    หน่วย
                    <input
                      onChange={(e) => handleChange("c10", e)}
                      value = {itemtable.c10}
                      id="ex"
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700   "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                    ราคาต่อหน่วย
                    <input  autoComplete="off"   type="number"
                      onChange={(e) => handleChange("c11", e)}
                      value = {itemtable.c11}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>

                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  จำนวนเงิน
                    <input  autoComplete="off"    disabled value={itemtable.c12}
                      onChange={(e) => handleChange("c12", e)}
                      value = {itemtable.c12}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  จำนวนที่สั่งซื้อ
                    <input  autoComplete="off"    
                      onChange={(e) => handleChange("c13", e)}
                      value = {itemtable.c13}
                      id="extcount "
                      
                      className=" w-full  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700  "
                    />
                  </div>
                </div>  

                <div className="flex justify-center mt-6">
                  <button 
                     onClick={(e) => savetableedit(e)}
                    className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    บันทึก
                  </button>
                  <button
                    onClick={() => cleardataedit()}
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
