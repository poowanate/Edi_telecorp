import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { getediasn1, getediasnbyinvoice1 } from "../api/api_asn"
import { data } from "autoprefixer";
import moment from "moment";
import ReactExport from "react-data-export";
function table() {
  const [excelEX, setexcelEX] = useState({ excelHead: null });
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const [isClose, setisClose] = useState(true);
  const [showtable, setshowtable] = useState([]);
  const [searchtxt, setsearchtxt] = useState('');
  const [radio, setradio] = useState('invoiceno')
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
  const [orderlist, setorderlist] = useState({

    producT_NO: '',
    codE_GPU: '',
    producT_NAME: '',
    batcH_LOT_NO: 0,
    producT_ID: '',
    invoicE_DATE: '',
    location: '',
    qty: 0,
    total: '',
    balance: 0


  })
  const [itemtable, setitemtable] = useState(

    {
      invoicE_NO: '',
      producT_NO: '',
      invoicE_DATE: '',
      pO_NO: '',
      vendoR_NAME: '',
      deletedOrderItemIds: '',
      orderdetails: orderlist,
    }
  );

  const [itemtablez, setitemtablez] = useState([]


  );
  const exceldownload = (ex) => {
    let exhead = ex[0]
    let exdetail = ex[0].orderdetails
    console.log(exhead)
    console.log(exdetail)
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
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head);
    var head1 = [
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่ใบสั่งซื้อ", style: { font: { bold: true } } },
      { value: exhead.invoicE_NO || "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่สัญญา", style: { font: { bold: true } } },
      { value: exhead.invoicE_NO || "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head1);
    var head2 = [
      { value: "", style: { font: { bold: true } } },
      { value: "กำหนดส่งมอบ", style: { font: { bold: true } } },
      { value: moment(exhead.invoicE_DATE).format('DD/MM/yyyy') || "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "รหัสผู้จำหน่าย", style: { font: { bold: true } } },
      { value: exhead.producT_NO || "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head2);
    var head3 = [
      { value: "", style: { font: { bold: true } } },
      { value: "ชื่อผู้จำหน่าย", style: { font: { bold: true } } },
      { value: exhead.vendoR_NAME || "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head3);
    var head5 = [
      { value: "", style: { font: { bold: true } } },
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
      { value: "IN", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "วันที่ส่งของ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "สถานที่ส่งมอบ	", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ลำดับ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัสสินค้า", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ชื่อเวชภัณท์", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวนรับ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวนทั้งหมด	", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "สถานะ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
    ];
    datasum.push(arr1);
    for (let index = 0; index < exdetail.length; index++) {

      var arr2 = [
        { value: exdetail[index].producT_NO || "" },
        { value: moment(exdetail.invoicE_DATE).format('DD/MM/yyyy') || "" },
        { value: exdetail[index].location || "" },
        { value: exdetail[index].batcH_LOT_NO || "" },
        { value: exdetail[index].producT_CODE || "" },
        { value: exdetail[index].producT_NAME || "" },
        { value: exdetail[index].qty || "" },
        { value: exdetail[index].total || "" },
        { value: exdetail[index].status || "" },
      ];
      datasum.push(arr2);
    }
    data = datasum
    var excelHead = [
      {
        columns: [
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "รายละเอียดรับสินค้า", style: { font: { sz: "28", bold: true, color: { rgb: "BE185D" } } } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
        ],
        data: data

      }
    ];
    excelEX.excelHead = excelHead;
    setexcelEX(excelEX);
  }
  const sdsad = async () => {
    console.log(itemtable.length)
    if (itemtable.length > 0) {
      for (let index = 0; index < itemtable.length; index++) {
        let gebvaluebytop = []

        if (itemtable[index].orderdetails.length > 0) {
          let gebvaluebytopz = itemtable[index].orderdetails
          for (let indexx = 0; indexx < itemtable[index].orderdetails.length; indexx++) {
            const data = [
              { sizes: 'big,small' },
              { sizes: 'medium,small' },
              { sizes: 'small,big' },
              { sizes: 'big' },
              { sizes: 'medium' }
            ];

            const filterOptions = ['00212'];
            console.log(gebvaluebytopz)
            //   let res = gebvaluebytopz.filter(
            //     i => i.gebvaluebytopz.producT_ID.split(",").some(
            //         size => filterOptions.includes(size)
            //     )
            // );

            // console.log(res);
            gebvaluebytop.push({
              balance: itemtable[index].orderdetails[index].balance,
              batcH_LOT_NO: itemtable[index].orderdetails[index].batcH_LOT_NO,
              codE_GPU: itemtable[index].orderdetails[index].codE_GPU,
              invoicE_DATE: itemtable[index].orderdetails[index].invoicE_DATE,
              location: itemtable[index].orderdetails[index].location,
              producT_ID: itemtable[index].orderdetails[index].producT_ID,
              producT_NAME: itemtable[index].orderdetails[index].producT_NAME,
              producT_NO: itemtable[index].orderdetails[index].producT_NO,
              qty: itemtable[index].orderdetails[index].qty,
              total: itemtable[index].orderdetails[index].total,
              check: itemtable[index].orderdetails[index].qty,
            })

          }

        }
        setitemtablez(gebvaluebytop)

      }
    }
  }
  const [datatable2, setdatatable2] = useState([])
  const fetchdata = async () => {

    let dataf = [];
    await getediasn1().then(async data => {

      // Router.push('/register/information')
      if (data.error) {

      } else {
        for (let index = 0; index < data.length; index++) {
          dataf.push(data[index])
          console.log(dataf)

        }
        await setshowtable(dataf)
        await setdatatable2(dataf)
        
      }



    })
  }

  const scansearch =()=>{
console.log(searchtxt)
    if(radio === 'now'){
      // if(datatable2.length>0){  
      //   setshowtable(datatable2.filter(x => moment(x.pO_DATE).format('DD-MM-yyyy') == moment(date.Ddate).format('DD-MM-yyyy') )) 
      // }
       //ใช้ได้
    }
    if(radio === 'invoiceno'){
      if(datatable2.length>0){
        if(searchtxt == ''){
          setshowtable(datatable2)
        }
        else{
          setshowtable(datatable2.filter(x => x.invoicE_NO == searchtxt )) 
        }
       
      }
    }
     
      // let search=datatable.sort((a, b) => a.requesT_NO.localeCompare(640004386))
      
     
    
    }

  const asnbyinvoice = async (invoice) => {

    console.log(invoice)

    await getediasnbyinvoice1(invoice).then(async data => {
      console.log(data)
      // Router.push('/register/information')
      if (data.error) {

      } else {
        exceldownload(data)
        await setitemtable(data)
        await setitemtablez(data)
        await setisClose(false)


      }



    })
  }
  useEffect(() => {
    fetchdata()

  }, [])
  useEffect(() => {
    sdsad()

  }, [itemtable])

  return (
    <Layout>
      {isClose ? (
        <>

          <div className="content-center text-center justify-items-center text-2xl mt-2 text-pink-800 ">
            ภาพรวมรับสินค้า
          </div>
          {/* <div className="content-center text-center justify-items-center text-3xl mt-1 text-gray-600 ">

   Puschasing order list
 </div> */}

          <div className="ml-5  mt-10   mr-5 ">
            <div className="border-solid border-2 border-black rounded-lg  w-full ">
              <div className=" m-2 item-center justify-between">
                <div className="flex ">
                  <div className="flex-grow">

                    <div className="mt-1">
                      <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal"    checked={radio === 'invoiceno'}
                                   onChange={()=>setradio('invoiceno')} />
                        <span className="ml-2 text-pink-800">เลขที่การสั่งซื้อ</span>
                      </label>
                      <input onChange={(e)=>setsearchtxt(e.target.value)} className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " type="text"></input>
                    </div>
                  </div>
                  <div className="flex-grow">  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal"    checked={radio === 'now'}
                                   onChange={()=>setradio('now')} />
                      <span className="ml-2 text-pink-800">เฉพาะวันที่</span>
                    </label>
                    <input value={date.Ddate} onChange={(e) => dateChange('Ddate', e)} className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
                  </div></div>
                  <div className="flex-grow">
                    <div className="mt-1">
                      <label className="inline-flex items-center  text-pink-800">สถานะ </label>
                      <select className="form-select ml-2  ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>สำเร็จ</option>
                        <option>กำลังจัดส่ง</option>
                        <option>ไม่สำเร็จ</option>
                      </select>

                    </div></div>
                  <div className="flex-grow-0">
                    <button onClick={()=>scansearch()} className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
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
                          <th scope="col" className="px-6 py-3  text-center text-base font-medium text-pink-800 uppercase tracking-wider ">เลขที่ใบสั่งซื้อ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">รหัสผู้จำหน่าย</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">ชื่อผู้จำหน่าย</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">เลขที่ใบส่งของ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">วันที่ส่งของ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">สถานที่ส่งมอบ</th>
                          <th scope="col" className="px-6 py-3 text-center text-base font-medium text-pink-800 uppercase tracking-wider">สถานะ</th>

                        </tr>
                      </thead>
                      <tbody className="bg-white ">
                        {showtable.map((data, index) => (
                          < >
                            <tr onClick={() => asnbyinvoice(data.invoicE_NO)} key={index} className="bg-white divide-y pointer hover:bg-pink-200  divide-gray-200">

                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {data.pO_NO}</div> {" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {data.producT_NO}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {data.vendoR_NAME}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {data.invoicE_NO}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {moment(data.invoicE_DATE).format("YYYY-MM-DD")}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  {data.location}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {data.status}
                                </span>
                              </td>
                              {/* 
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
                     */}

                            </tr>
                          </>
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
                <div class="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>

                </div>
              </a>
            </div>
          </div>
          {/* <button onClick={()=>console.log(itemtablez)}>ss</button> */}
          <div className="flex flex-row">
            <div className="w-1/3"></div>
            <div className="content-center w-1/3 text-center flex justify-center items-center text-xl font-bold mt-5 text-pink-700 ">
              รายละเอียดรับสินค้า
            </div>
            <div className="flex w-1/3 justify-end items-end mr-5">


              <ExcelFile element={<button className="ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Download</button>}>
                <ExcelSheet dataSet={excelEX.excelHead} name="report" />
              </ExcelFile>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 pl-28">
              <div className="flex flex-row mt-5  ">
                <div className="w-1/2 text-base  font-bold text-right ">เลขที่ใบสั่งซื้อ </div>
                <label className="ml-5 w-1/2 text-left">{itemtable[0].invoicE_NO}</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-1/2 text-base  font-bold text-right ">กำหนดส่งมอบ </div>
                <label className="ml-5 w-1/2 text-left">{moment(itemtable[0].invoicE_DATE).format("YYYY-MM-DD")}</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-1/2 text-base  font-bold text-right ">ชื่อผู้จำหน่าย </div>
                <label className="ml-5 w-1/2 text-left">{itemtable[0].vendoR_NAME}</label>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">เลขที่สัญญา </div>
                <label className="ml-5 w-1/2 text-left">{itemtable[0].invoicE_NO}</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">รหัสผู้จำหน่าย </div>
                <label className="ml-5 w-1/2 text-left">{itemtable[0].producT_NO}</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className="text-base  font-bold text-right w-80"> </div>
                <label className="ml-5 w-1/2 text-left"></label>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <div className=" ">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                  <table className="min-w-full w-full ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">in</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">วันที่ส่งของ</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">สถานที่ส่งมอบ</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">ลำดับ</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">รหัสสินค้า</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">ชื่อเวชภัณท์</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">จำนวนรับ</th>
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">จำนวนทั้งหมด</th>
                        {/* <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">ราคา</th> */}
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">สถานะ</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white ">


                      {itemtable[0].orderdetails.map((data, index) => (
                        < >      <tr key={index} className="bg-white divide-y divide-gray-200">

                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">   {data.producT_NO}</div>   </td>


                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">

                              {moment(data.invoicE_DATE).format("YYYY-MM-DD")}
                            </div>{" "}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.location}
                            </div>{" "}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.batcH_LOT_NO}
                            </div>{" "}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.producT_CODE}
                            </div>{" "}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.producT_NAME}
                            </div>{" "}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.qty}
                            </div>{" "}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">
                              {data.total}
                            </div>{" "}
                          </td>

                          {/* <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">
                          {data.balance}
                          </div>{" "}
                        </td> */}

                          {
                            (data.balance == "0") ?
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  ครบแล้ว
                                </div>{" "}
                              </td>
                              :
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-center text-sm text-gray-900">
                                  ยังไม่ครับ
                                </div>{" "}
                              </td>
                          }

                        </tr>
                        </>
                      ))
                      }





                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      }


    </Layout>
  );
}

export default table;
