import Layout from "../Layout/Layout";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { set } from "js-cookie";
import {edi_po} from '../api/api_po'
import {edi_asn,ediproduct} from '../api/api_asn'


function table() {
  const [isClose, setisClose] = useState(false);
  const [isClosef, setisClosef] = useState(1);
  const [mapp, setmapp] = useState([]);

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
  });

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
        location: "" ,
  });
  



  let valuechk = 0;

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
  };


  const saveapipo = () => {
//     let data = {
//       invoicE_NO: itemdata.invoicE_NO,
//       invoicE_DATE: itemdata.invoicE_DATE,
//       remark: itemdata.remark,
//       discounT_PERCENTAGE: Number(itemdata.discounT_PERCENTAGE),
//       discounT_BAHT: Number(itemdata.discounT_BAHT),
//       vat: Number(itemdata.vat),
//       totaL_AMOUNT: Number(itemdata.totaL_AMOUNT),
//       producT_NO: itemdata.producT_NO,
//       pO_NO: itemdata.pO_NO,
//       total: Number(itemdata.total),
//       vendoR_NAME: itemdata.vendoR_NAME,
//       location: itemdata.location,
//     }
//     // console.log(JSON.stringify(data))
//  edi_asn(data).then(data => {
//   console.log(data);
//   // Router.push('/register/information')
//   if (data.error) {
//      console.log('ggwp')
//   } else {
//     console.log('55')
//   }
// })
    if(mapp.length > 0){
        for (let index = 0; index < mapp.length; index++) {
        
          let datatable = {  
        producT_ID: mapp[index].invoicE_NO ,
        codE_GPU: mapp[index].c1 ,
        codE_UNSPSC: mapp[index].c2 ,
        codE_TMT: mapp[index].c3 ,
        baR_CODE: mapp[index].c4 ,
        producT_NO: mapp[index].c6 ,
        producT_NAME: mapp[index].c5 ,
        qty: Number(mapp[index].c9) ,
        uniT_PRICE:  Number(mapp[index].c10) ,
        amount:  Number(mapp[index].c11) ,
        batcH_LOT_NO: 1 ,
        mfG_DATE: mapp[index].c7 ,
        exP_DATE: mapp[index].c8 ,
        uom: 1 ,
    
          }
           ediproduct(datatable).then(data => {
  console.log(data);
  // Router.push('/register/information')
  if (data.error) {
     console.log('ggwp')
  } else {
    console.log('55')
  }
})
    }
  }
    else{
        <></>
    }
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
                          <thead className="bg-gray-50">
                            <tr>
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
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
               
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td> */}
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  PO 00001{" "}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  00001{" "}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  00000001{" "}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  00000001
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  13/03/63{" "}
                                </div>{" "}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  อาคารสะอาด{" "}
                                </div>{" "}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => setisClosef(2)}>
                                  <svg
                                    class="text-pink-800  w-6 h-6"
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
                          </tbody>
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
              <div class="relative ">
                <div class="absolute mt-5 ml-10 left-0 top-0">
                  <a onClick={() => setisClosef(1)}>
                    <div class="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center">
                      {" "}
                      <svg
                        class="w-6 h-6 text-white"
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

              <div class="grid grid-cols-2 gap-3">
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบสั่งซื้อ <label className="ml-5">00001</label>
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ <label className="ml-5">00001</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย <label className="ml-5">00001</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ <label className="ml-5">12/12/12</label>
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย <label className="ml-5">สมศักดิ์</label>
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ <label className="ml-5">ตึกสะอาด</label>
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <div className=" ">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                      <table className="min-w-full w-full ">
                        <thead className="bg-gray-50">
                          <tr>
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
                          </tr>
                        </thead>
                        <tbody className="bg-white ">
                          <tr>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                ถุงมือ{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                1000
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                ถุงมือ{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                1000
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                ถุงมือ{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                00001{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                10/10/64{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                1000
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                            <td className="px-6 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">
                                2{" "}
                              </div>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <div class="grid grid-cols-2 gap-3 ml-5 mt-5 mr-10">
                  <div className="content-center text-left justify-items-center text-base mt-5 font-bold  ">
                    หมายเหตุ -
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ราคารวม (ไม่รวม VAT){" "}
                    <input  
                      id="VAT_AMOUNT"
                      value="3000"
                      autoComplete="false"
                      className="ml-4 bg-white shadow-md rounded   text-gray-900  "
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-3 mt-5 mr-10">
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ส่วนลด - เปอร์เซ็นต์{" "}
                    <input 
                      id="VAT_AMOUNT"
                      autoComplete="false"
                      className="ml-4 bg-white shadow-md rounded   text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ส่วนลด - บาท{" "}
                    <input
                      id="VAT_AMOUNT"
                      autoComplete="false"
                      className="ml-4 bg-white shadow-md rounded   text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    VAT{" "}
                    <input
                      id="VAT_AMOUNT"
                      value="30"
                      autoComplete="false"
                      className="ml-4 bg-white shadow-md rounded   text-gray-900  "
                    />
                  </div>
                  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                    ราคารวม{" "}
                    <input
                      id="VAT_AMOUNT"
                      value="3030"
                      autoComplete="false"
                      className="ml-4 bg-white shadow-md rounded   text-gray-900  "
                    />
                  </div>
                </div>{" "}
              </div>
            </>
          );
        } else if (isClosef == 3) {
          return (
            <>
              <div class="relative ">
                <div class="absolute mt-5 ml-10 left-0 top-0">
                  <a onClick={() => setisClosef(1)}>
                    <div class="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center">
                      {" "}
                      <svg
                        class="w-6 h-6 text-white"
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
                <button className="bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  อัพโหลด
                </button>
                <button className="ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  ดาวห์โหลด
                </button>
              </div>
              <div className="content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ">
                ใบรับของ (IN)
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบสั่งซื้อ{" "}
                  <input               onChange={(e) => handleChangedata("invoicE_NO", e)}
                    id="เลขที่ใบสั่งซื้อ"
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  เลขที่ใบส่งของ{" "}
                  <input
                    id="เลขที่ใบส่งของ"  onChange={(e) => handleChangedata("producT_NO", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  รหัสผู้จำหน่าย{" "}
                  <input
                    id="รหัสผู้จำหน่าย"  onChange={(e) => handleChangedata("pO_NO", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  วันที่ใบส่งของ{" "}
                  <input
                    id="วันที่ใบส่งของ"    onChange={(e) => handleChangedata("invoicE_DATE", e)}
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>
                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  ชื่อผู้จำหน่าย{" "}
                  <input   onChange={(e) => handleChangedata("vendoR_NAME", e)}
                    id="ชื่อผู้จำหน่าย"
                    autoComplete="false"
                    className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  />
                </div>

                <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">
                  สถาที่ส่งมอบ{" "}
                  <input
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
                      <table className="min-w-full w-full ">
                        <thead className="bg-gray-50">
                          <tr>
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
                          </tr>
                        </thead>
                        <tbody className="bg-white ">
                          {/* {
        (tableza != undefined) ?
        tableza.map(projects => (
            <div>
            
               </div>
          ))
          :''
      } */}
                          {/* {
  tableza.map(sdsd=>(
    <></>
  ))
} */}
{
  mapp.map((data)=>(
<tr>
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
                        </tbody>
                      </table>

                            
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10 ml-10 mr-10">
                <div class="grid grid-cols-2 gap-3">
                  <div class="row-span-5 ">
                    <div className=" text-left  text-base mt-5 font-bold  ">
                      <label className="content-center text-right justify-items-center text-base mt-5 font-bold ">
                        หมายเหตุ
                      </label>{" "}
                      <textarea
                        cols="60"
                        rows="5"
                        className="w-full border-pink-700 border bg-white shadow-md rounded "
                        onChange={(e) => handleChangedata("remark", e)}
                     
                     >
                        
                      </textarea>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม (ไม่รวม VAT){" "}
                      <input    onChange={(e) => handleChangedata("total", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - เปอร์เซ็นต์{" "}
                      <input
                        id="เลขที่ใบสั่งซื้อ"  onChange={(e) => handleChangedata("discounT_PERCENTAGE", e)}
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ส่วนลด - บาท
                      <input  onChange={(e) => handleChangedata("discounT_BAHT", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      VAT{" "}
                      <input   onChange={(e) => handleChangedata("vat", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                    <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">
                      ราคารวม{" "}
                      <input    onChange={(e) => handleChangedata("total", e)}
                        id="เลขที่ใบสั่งซื้อ"
                        autoComplete="false"
                        className="ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center ">
                  <button onClick={saveapipo} className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    บันทึก
                  </button>
                  <button className="bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
          <div id="myModal" class="modal">
            <form onSubmit={savetable}>
              <div class="modal-content">
                <span class="close" onClick={() => setisClose(false)}>
                  &times;
                </span>

                <div className="content-center text-center justify-items-center text-3xl mt-5 text-pink-800 ">
                  เพิ่มข้อมูลตาราง
                </div>
                <div class="grid grid-cols-4 gap-4">
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
                </div>

                <div class="flex justify-center mt-6">
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
