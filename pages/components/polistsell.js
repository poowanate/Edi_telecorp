import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from 'react'
import moment from 'moment';
import ReactExport from "react-data-export";
import {getdataedipo,getdataedipobypo} from '../api/api_po'
function table() {
  const [datatable,setdatatable] = useState([])
  const [datapodetail,setdatapodetail] = useState([])
  const [datapodetailtable,setdatapodetailtable] = useState([])
  const [ordertable,setordertable] = useState([])
  const [excelEX, setexcelEX] = useState({ excelHead: null });
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const [isClose, setisClose] = useState(true);
  const [date, setdate] = useState({
    Ddate: moment(new Date()).format("YYYY-MM-DD"),
    Sdate: moment(new Date()).format("YYYY-MM-DD"),
    Edate: moment(new Date()).format("YYYY-MM-DD"),
  });
  const dateChange = (name, e) => {
    date[name] = e.target.value;
    console.log(date[name]);
    setdate({ ...date, [name]: e.target.value || null });
  }

  const fetchdata = ()=>{
    getdataedipo().then( data=>{

      if (data.error) {

      } else {
          
        setdatatable(data)

        
      }
    })
  }
useEffect(async() => {
 await fetchdata()
}, [])

const binddatapo = (e) => {
  getdataedipobypo(e).then(data=>{
    if(data.error){

    }else{
  
        setisClose(false)
        if(data.length>0){
          datapodetail['contracT_NO']= data[0].contracT_NO
          datapodetail['deliveR_DATE']= data[0].deliveR_DATE
          datapodetail['discounT_BAHT']= data[0].discounT_BAHT
          datapodetail['discounT_PERCENTAGE']= data[0].discounT_PERCENTAGE
          datapodetail['pO_DATE']= data[0].pO_DATE
          datapodetail['pO_NO']= data[0].pO_NO
          datapodetail['pO_TYPE']= data[0].pO_TYPE
          datapodetail['referencE1']= data[0].referencE1
          datapodetail['referencE2']= data[0].referencE2
          datapodetail['referencE3']= data[0].referencE3
          datapodetail['requesT_DATE']= data[0].requesT_DATE
          datapodetail['requesT_NO']= data[0].requesT_NO
          datapodetail['shiP_TO']= data[0].shiP_TO
          datapodetail['totaL_AMOUNT']= data[0].totaL_AMOUNT
          datapodetail['vat']= data[0].vat
          datapodetail['vendoR_NAME']= data[0].vendoR_NAME
          datapodetail['vendoR_NO']= data[0].vendoR_NO

          if(data[0].pO_DETAILs.length>0){
            let datapush = []
            for (let index = 0; index < data[0].pO_DETAILs.length; index++) {
              let datatable = {
                amount: Number(data[0].pO_DETAILs[index].amount),
                baR_CODE: String(data[0].pO_DETAILs[index].baR_CODE),
                codE_GPU: String(data[0].pO_DETAILs[index].codE_GPU),
                codE_TMT: String(data[0].pO_DETAILs[index].codE_TMT),
                codE_UNSPSC: String(data[0].pO_DETAILs[index].codE_UNSPSC),
                producT_CODE: String(data[0].pO_DETAILs[index].producT_CODE),
                producT_NAME: String(data[0].pO_DETAILs[index].producT_NAME),
                qty: Number(data[0].pO_DETAILs[index].qty),
                uniT_PRICE: Number(data[0].pO_DETAILs[index].uniT_PRICE),
              }  
              datapush.push(datatable)
            }
            
            setdatapodetailtable(datapush)
            
            
                    }
          
        }
    
    }

   
  })

}


  useEffect(() => {
    let data = [];
    let datasum = [];
    var head = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head);
    var head1 = [
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่ใบสั่งซื้อ", style: { font: { bold: true } } },
      { value: "00001", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "กำหนดส่งมอบ", style: { font: { bold: true } } },
      { value: "12/03/63", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head1);
    var head2 = [
      { value: "", style: { font: { bold: true } } },
      { value: "วันที่ออกใบสั่งซื้อ", style: { font: { bold: true } } },
      { value: "13/04/63", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "สถาที่ส่งมอบ", style: { font: { bold: true } } },
      { value: "อาคารสะอาด", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head2);
    var head3 = [
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่สัญญา", style: { font: { bold: true } } },
      { value: "00001", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "รหัสผู้จำหน่าย", style: { font: { bold: true } } },
      { value: "00001", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head3);
    var head4 = [
      { value: "", style: { font: { bold: true } } },
      { value: "ใบขออนุมัติซื้อ", style: { font: { bold: true } } },
      { value: "00001", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ชื่อผู้จำหน่าย", style: { font: { bold: true } } },
      { value: "สมศักดิ์", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head4);
    var head5 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head5);
    var arr1 = [
      { value: "รหัสGPU", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัสUNSPSC", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัสTMT", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "BARCODE", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ชื่อยา /เวชภัณท์", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวน", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ราคาต่อหน่วย", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
    ];
    datasum.push(arr1);
    for (let index = 0; index < 3; index++) {

      var arr2 = [
        { value: "aaaa" },
        { value: "bbbb" },
        { value: "cccc" },
        { value: "dddd" },
        { value: "eeee" },
        { value: "ffff" },
        { value: "gggg" },
      ];
      datasum.push(arr2);
    }
    var foot = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot);
    var foot1 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ราคารวม(ไม่รวม VAT)", style: { font: { bold: true } } },
      { value: "3000", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot1);
    var foot2 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ส่วนลด-เปอร์เซ็นต์ ", style: { font: { bold: true } } },
      { value: "10%", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot2);
    var foot3 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ส่วนลด-บาท", style: { font: { bold: true } } },
      { value: "5", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot3);
    var foot4 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "VAT", style: { font: { bold: true } } },
      { value: "30", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot4);
    var foot5 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ราคารวม", style: { font: { bold: true } } },
      { value: "3030", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot5);
    data = datasum
    var excelHead = [
      {
        columns: [
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "ใบสั่งซื้อ (PO)", style: { font: { sz: "28", bold: true, color: { rgb: "BE185D" } } } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
        ],
        data: data

      }
    ];
    excelEX.excelHead = excelHead;
    setexcelEX(excelEX);

  }, [])
  return (
    <Layout>
      {isClose ? (
        <>

          <div className="content-center text-center justify-items-center text-2xl mt-2 text-pink-800 ">
            รายการสั่งซื้อทั้งหมด
          </div>
          <div className="content-center text-center justify-items-center text-xl mt-1 text-gray-600 ">

            Puschasing order list
          </div>

          <div className="ml-5  mt-10   mr-5 ">
            <div className="border-solid border-2 border-black rounded-lg  w-full ">
              <div className=" m-2 item-center justify-between">
                <div className="flex ">
                  <div className="flex-grow">

                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
                        <span className="ml-2 text-pink-700">เฉพาะวันที่</span>
                      </label>
                      <input value={date.Ddate} onChange={(e) => dateChange('Ddate', e)} className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
                    </div>
                  </div>
                  <div className="flex-grow">  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
                      <span className="ml-2 text-pink-700">ตั้งแต่วันที่</span>
                    </label>
                    <input value={date.Sdate} onChange={(e) => dateChange('Sdate', e)} className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
                    <label className="inline-flex items-center ml-2 text-pink-700">ถึงวันที่ </label>
                    <input value={date.Edate} onChange={(e) => dateChange('Edate', e)} className="ml-3  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 " type="date"></input>
                  </div></div>
                  <div className="flex-grow">
                    <div className="mt-2">
                      <label className="inline-flex items-center  text-pink-700">สถานะ </label>
                      <select className="form-select ml-2  bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 ">
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      <label className="inline-flex items-center ml-2 text-pink-700">คลัง</label>
                      <select className="form-select   ml-2 bg-white text-gray-900 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 ">
                        <option>No data</option>
                        <option>No data</option>
                      </select>
                    </div></div>
                  <div className="flex-grow-0">
                    <button className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                      ค้นหา</button></div>

                </div>

              </div>
            </div>

            <div className="flex flex-col mt-10">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className=" min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3  text-center text-base font-medium text-pink-700 uppercase tracking-wider ">เลขที่ใบสั่งซื้อ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">วันที่ออกใบสั่งซื้อ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">เลขที่สัญญา</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">ใบขออนุมัติซื้อ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">วันที่ขอซื้อ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">กำหนดส่งมอบ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">สถาที่ส่งมอบ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-700 uppercase tracking-wider">ชื่อผู้จำหน่าย</th>

                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        {
                            datatable.map((data, index) => (
                              <tr key={index} className="bg-white ">
     <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.pO_NO} </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.pO_DATE}  </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.contracT_NO} </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.requesT_NO}</div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{moment(data.requesT_DATE).format("DD-MM-YYYY")}</div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{moment(data.deliveR_DATE).format("DD-MM-YYYY")} </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.shiP_TO}</div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">{data.vendoR_NAME}  </div>   </td>


                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => binddatapo(data.pO_NO)} >
                              <svg class=" text-pink-700 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

                            </button>
                          </td>
                              </tr>
                            ))
                        }
                    
                          
                     
                     


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </>

      ) :
        <>
          <div class="relative ">
            <div class="absolute mt-5 ml-10 left-0 top-0">
              <a onClick={() => setisClose(true)}>
                <div class="rounded-full h-11 w-11 bg-pink-700 flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>

                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3"></div>
            <div className="content-center w-1/3 text-center flex justify-center items-center text-4xl mt-5 text-pink-700 ">
              ใบสั่งซื้อ (PO)
            </div>
            <div className="flex w-1/3 justify-end items-end mr-5">

          
              <ExcelFile element={<button className="bk_blue ct br_1 py-1 px-3 btn_h ml-3 text-white bg-pink-700">Download</button>}>
                <ExcelSheet dataSet={excelEX.excelHead} name="report" />
              </ExcelFile></div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่ใบสั่งซื้อ <label className="ml-5">{datapodetail.pO_NO}</label></div>

            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">กำหนดส่งมอบ <label className="ml-5">{datapodetail.requesT_DATE}</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">วันที่ออกใบสั่งซื้อ <label className="ml-5">{datapodetail.pO_DATE}</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">สถาที่ส่งมอบ <label className="ml-5">{datapodetail.shiP_TO}</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่สัญญา <label className="ml-5">{datapodetail.requesT_NO}</label></div>

            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">รหัสผู้จำหน่าย <label className="ml-5">{datapodetail.vendoR_NO}</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">ใบขออนุมัติซื้อ <label className="ml-5">ไม่ทราบ</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">ชื่อผู้จำหน่าย <label className="ml-5">{datapodetail.vendoR_NAME}</label></div>
          </div>



          <div className="flex flex-col mt-10">
            <div className=" ">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                  <table className="min-w-full w-full ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-700 uppercase tracking-wider">รหัส GPU</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-700 uppercase tracking-wider">รหัส UNSPSC</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-700 uppercase tracking-wider">รหัส TMT</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-700 uppercase tracking-wider">Bar code</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-700 uppercase tracking-wider w-1/2">ชื่อยา / เวชภัณท์</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-700 uppercase tracking-wider">จำนวน</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b  text-pink-700 uppercase tracking-wider">ราคาต่อหน่วย</th>


                      </tr>
                    </thead>
                    <tbody className="bg-white ">

                    {
                            datapodetailtable.map((data, index) => (

                              <tr key={index} className="bg-white ">
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.codE_GPU} </div>   </td>
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.codE_UNSPSC}  </div>   </td>
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.codE_TMT}  </div>   </td>
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.baR_CODE}  </div>   </td>
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.producT_NAME}  </div>   </td>
                        <td className="px-6 py-4  border-r whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.amount}  </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">{data.qty}  </div>   </td>
                              </tr>
                            ))
                          }

                  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <div class="grid grid-cols-1 gap-3 mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม (ไม่รวม VAT)<label className="ml-5">{datapodetail.totaL_AMOUNT-datapodetail.vat}</label> 
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - เปอร์เซ็นต์<label className="ml-5">{datapodetail.discounT_PERCENTAGE}</label> 
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - บาท<label className="ml-5">{datapodetail.discounT_BAHT}</label>  
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">VAT<label className="ml-5">{datapodetail.vat}</label> 
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม <label className="ml-5">{datapodetail.totaL_AMOUNT}</label> 
              </div>
            </div> </div></>
      }


    </Layout>
  );
}

export default table;
