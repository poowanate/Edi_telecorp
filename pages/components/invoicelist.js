import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from 'react'
import moment from "moment";
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
  const exceldownload = async (ex) => {
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
    ];
    datasum.push(head);
    var head1 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่ใบสั่งซื้อ", style: { font: { bold: true } } },
      { value: exhead.pO_NO||"", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "เลขที่ใบส่งของ", style: { font: { bold: true } } },
      { value: exhead.invoicE_NO||"", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head1);
    var head2 = [

      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "รหัสผู้จำหน่าย", style: { font: { bold: true } } },
      { value: exhead.producT_NO||"", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "วันที่ใบส่งของ ", style: { font: { bold: true } } },
      { value: moment(exhead.invoicE_DATE).format('DD/MM/yyyy')||"", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(head2);
    var head3 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ชื่อผู้จำหน่าย", style: { font: { bold: true } } },
      { value: exhead.vendoR_NAME||"", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "สถานที่ส่งมอบ", style: { font: { bold: true } } },
      { value: exhead.ship_to||"", style: { font: { bold: true } } },
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
      { value: "รหัส GPU", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัส UNSPSC", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัส TMT", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัส สินค้า", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "BAR CODE", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ชื่อยา / เวชภัณท์", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "รหัส ผลิต", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "วันที่ผลิต", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "วันที่หมดอายุ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวน", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "หน่วย", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ราคาต่อหน่วย", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "ราคารวม VAT", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวนเงิน", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
      { value: "จำนวนที่สั่งซื้อ", style: { font: { bold: true, color: { rgb: "BE185D" } } } },
    ];
    datasum.push(arr1);
    for (let index = 0; index < exdetail.length; index++) {

      var arr2 = [
        { value: exdetail[index].codE_GPU||"" },
        { value: exdetail[index].codE_UNSPSC||"" },
        { value: exdetail[index].codE_TMT||"" },
        { value: exdetail[index].producT_CODE||"" },
        { value: exdetail[index].baR_CODE||"" },
        { value: exdetail[index].producT_NAME||"" },
        { value: exdetail[index].batcH_LOT_NO||"" },
        { value: moment(exdetail[index].mfG_DATE).format('DD/MM/yyyy')||"" },
        { value: moment(exdetail[index].exP_DATE).format('DD/MM/yyyy')||"" },
        { value: exdetail[index].qty||"" },
        { value: exdetail[index].uom||"" },
        { value: exdetail[index].uniT_PRICE||"" },
        { value: ((exdetail[index].amount * 7) / 100 + exdetail[index].amount).toFixed(2)||"" },
        { value: exdetail[index].amount||"" },
        { value: exdetail[index].total||"" },
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
      { value: "", style: { font: { bold: true } } },
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
      { value: "หมายเหตุ", style: { font: { bold: true } } },
      { value: exhead.remark||0, style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ราคารวม(ไม่รวม VAT)", style: { font: { bold: true } } },
      { value: exhead.totaL_AMOUNT||0, style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot1);
    var foot2 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ส่วนลด-เปอร์เซ็นต์ ", style: { font: { bold: true } } },
      { value: exhead.discounT_PERCENTAGE||0, style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot2);
    var foot3 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ส่วนลด-บาท", style: { font: { bold: true } } },
      { value: exhead.discounT_BAHT||0, style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot3);
    var foot4 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "VAT", style: { font: { bold: true } } },
      { value: exhead.vat||0, style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
    ];
    datasum.push(foot4);
    var foot5 = [
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "", style: { font: { bold: true } } },
      { value: "ราคารวม", style: { font: { bold: true } } },
      { value: exhead.total||0, style: { font: { bold: true } } },
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
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "ใบรับของ (IN)", style: { font: { sz: "28", bold: true, color: { rgb: "BE185D" } } } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
          { title: "", style: { font: { sz: "12", bold: true }, } },
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
  const dateChange = (name, e) => {
    date[name] = e.target.value;
    console.log(date[name]);
    setdate({ ...date, [name]: e.target.value || null });
  }
  return (
    <Layout>
      {isClose ? (<>
        <div className="content-center text-center justify-items-center text-2xl mt-2 text-pink-800 ">
          รายการรับของ
        </div>
        <div className="content-center text-center justify-items-center text-xl mt-1 text-gray-600">

          Invoice list
        </div>

        <div className="ml-5  mt-10   mr-5 ">
          <div className="border-solid border-2 border-black rounded-lg  w-full ">
            <div className=" m-2 item-center justify-between">
              <div className="flex ">
                <div className="flex-grow">

                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
                      <span className="ml-2 text-pink-800">เฉพาะวันที่</span>
                    </label>
                    <input value={date.Ddate} onChange={(e) => dateChange('Ddate', e)} className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
                  </div>
                </div>
                <div className="flex-grow">  <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
                    <span className="ml-2 text-pink-800">ตั้งแต่วันที่</span>
                  </label>
                  <input value={date.Sdate} onChange={(e) => dateChange('Sdate', e)} className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
                  <label className="inline-flex items-center ml-2 text-pink-800">ถึงวันที่</label>
                  <input value={date.Edate} onChange={(e) => dateChange('Edate', e)} className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
                </div></div>
                <div className="flex-grow">
                  <div className="mt-1">
                    <label className="inline-flex items-center  text-pink-800">สถานะ </label>
                    <select className="form-select ml-2 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                    <label className="inline-flex items-center ml-2 text-pink-800">คลัง</label>
                    <select className="form-select   ml-2 ppearance-nonebg-gray-200 text-gray-700 border border-pink-500 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
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
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider ">เลขที่ใบสั่งซื้อ</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">รหัสผู้จำหน่าย</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">ผู้จำหน่าย</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">เลขที่ใบส่งของ</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">วันที่ใบส่งของ</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">สถานที่ส่งมอบ</th>
                        <th scope="col" className="px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider">สถานะ</th>
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
                          <div className="text-sm text-gray-900">PO 00001 </div>   </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">00001 </div>   </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">00000001 </div>   </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">00000001</div>   </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">13/03/63 </div>   </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">อาคารสะอาด   </div>   </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => setisClose(false)} >
                            <svg class="text-pink-800  w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

                          </button>  </td>
                      </tr>


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>


      </>) :
        <>
          <div class="relative ">
            <div class="absolute mt-5 ml-10 left-0 top-0">
              <a onClick={() => setisClose(true)}>
                <div class="rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>

                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3"></div>
            <div className="content-center w-1/3 text-center flex justify-center items-center text-xl font-bold mt-5 text-pink-700 ">
            ใบรับของ (IN)
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
                <label className="ml-5 w-1/2 text-left">00001</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-1/2 text-base  font-bold text-right ">รหัสผู้จำหน่าย </div>
                <label className="ml-5 w-1/2 text-left">00001</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-1/2 text-base  font-bold text-right ">ชื่อผู้จำหน่าย </div>
                <label className="ml-5 w-1/2 text-left">สมศักดิ์</label>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">เลขที่ใบส่งของ </div>
                <label className="ml-5 w-1/2 text-left">00001</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">วันที่ใบส่งของ </div>
                <label className="ml-5 w-1/2 text-left">12/12/12</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className="text-base  font-bold text-right w-80">สถานที่ส่งมอบ </div>
                <label className="ml-5 w-1/2 text-left">ตึกสะอาด</label>
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
                        <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider">รหัส GPU</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">รหัส UNSPSC</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">รหัส TMT</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">Bar code</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2">ชื่อยา / เวชภัณท์</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">รหัสผลิต</th>

                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">วันที่ผลิต</th>
                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider">วันที่หมดอายุ</th>

                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">จำนวน</th>

                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">หน่วย</th>

                        <th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider">ราคาต่อหน่วย</th>


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
                          <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">1000</div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">คู่ </div>   </td>
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
                          <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">1000</div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">คู่ </div>   </td>
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
                          <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">1000</div>   </td>
                        <td className="px-6 py-4   whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">คู่ </div>   </td>
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
            <div class="grid grid-cols-2 gap-3 ml-5 mt-5 mr-10">
              <div className="content-center text-left justify-items-center text-base mt-5 font-bold  ">หมายเหตุ -
              </div>
              <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม (ไม่รวม VAT) <input id="VAT_AMOUNT" value="3000" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  " />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3 mt-5 mr-10">
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
