import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from 'react'
import moment from 'moment';
import ReactExport from "react-data-export";

function table() {
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
  useEffect(() => {
    let data = [];
    for (let index = 0; index < 3; index++) {

      var arr = [
        { value: "aaaa" },
        { value: "bbbb" },
        { value: "cccc" },
        { value: "dddd" },
      ];
      data.push(arr);
    }
    var excelHead = [
      {
        columns: [
          { title: "Date", style: { font: { sz: "12", bold: true }, fill: { patternType: "solid", fgColor: { rgb: "657DA1" } } } },//pixels width 
          { title: "Time", style: { font: { sz: "12", bold: true }, fill: { patternType: "solid", fgColor: { rgb: "657DA1" } } } },//char width 
          { title: "DTX", style: { font: { sz: "12", bold: true }, fill: { patternType: "solid", fgColor: { rgb: "657DA1" } } } },
          { title: "Detail", style: { font: { sz: "12", bold: true }, fill: { patternType: "solid", fgColor: { rgb: "657DA1" } } } },
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
                            <div className="text-center text-sm text-gray-900">PO 00001 </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">12/03/63  </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">00000001 </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">00000001</div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">13/03/63 </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">13/04/63  </div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">อาคารสะอาด</div>   </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-center text-sm text-gray-900">สมศักดิ์   </div>   </td>


                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => setisClose(false)} >
                              <svg class=" text-pink-700 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

                            </button>
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
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่ใบสั่งซื้อ <label className="ml-5">00001</label></div>

            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">กำหนดส่งมอบ <label className="ml-5">12/03/63</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">วันที่ออกใบสั่งซื้อ <label className="ml-5">13/04/63</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">สถาที่ส่งมอบ <label className="ml-5">อาคารสะอาด</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่สัญญา <label className="ml-5">00001</label></div>

            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">รหัสผู้จำหน่าย <label className="ml-5">00001</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">ใบขออนุมัติซื้อ <label className="ml-5">00001</label></div>
            <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">ชื่อผู้จำหน่าย <label className="ml-5">สมศักดิ์</label></div>
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
                      <tr>
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
                          <div className="text-center text-sm text-gray-900">1000 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">2 </div>   </td>
                      </tr>
                      <tr>

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
                          <div className="text-center text-sm text-gray-900">1000 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">2 </div>   </td>





                      </tr>     <tr>

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
                          <div className="text-center text-sm text-gray-900">1000 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">2 </div>   </td>





                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <div class="grid grid-cols-1 gap-3 mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม (ไม่รวม VAT) <input id="VAT_AMOUNT" value="3000" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - เปอร์เซ็นต์ <input id="VAT_AMOUNT" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - บาท <input id="VAT_AMOUNT" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">VAT <input id="VAT_AMOUNT" value="30" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม <input id="VAT_AMOUNT" value="3030" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
            </div> </div></>
      }


    </Layout>
  );
}

export default table;
