import Layout from "../Layoutza/Layout"
import React, { useMemo, useState, useEffect, useRef } from "react";
import { set } from "js-cookie";
import { edi_po, getedi_po, GETEDI_ASN, GETEDI_ASN_todrug, getdataedipobypo } from '../api/api_po'
import ReactExport from "react-data-export";
import { edi_asn, ediproduct, getediasn, getediasnbyinvoice, asnupdate, deleteasn } from '../api/api_asn'
import * as XLSX from 'xlsx';
import moment from "moment";
import { useRouter } from 'next/router'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { useBarcode } from '@createnextapp/react-barcode';
import { postapicompany, putthenapicompany } from '../api/api_company'
// import template from '../../public/download/template.xlsx';

function table() {
  const Router = useRouter();
  const [code1, setcode1] = useState("11");
  const [code2, setcode2] = useState("2222");
  const [mapp, setmapp] = useState([]);
  const fetchData = async () => {
    let invoice = localStorage.getItem('datainvoice')
    let product = localStorage.getItem('dataproduct')
    console.log(invoice, product)
    GETEDI_ASN(invoice, product).then(async data => {
      console.log(data)
      if (data.length > 0) {
        console.log(data[0].invoicE_NO)
        console.log(data[0].orderdetails.length)
        itemdata['invoicE_NO'] = data[0].invoicE_NO
        itemdata['producT_NO'] = data[0].producT_NO
        itemdata['pO_NO'] = data[0].pO_NO
        itemdata['invoicE_DATE'] = data[0].invoicE_DATE
        itemdata['vendoR_NAME'] = data[0].vendoR_NAME
        itemdata['location'] = data[0].ship_to
        itemdata['remark'] = data[0].remark
        itemdata['totaL_AMOUNT'] = data[0].totaL_AMOUNT
        itemdata['discounT_PERCENTAGE'] = data[0].discounT_PERCENTAGE
        itemdata['discounT_BAHT'] = data[0].discounT_BAHT
        itemdata['vat'] = data[0].vat
        itemdata['total'] = data[0].total
        itemdata['id'] = data[0].id

        setitemdata({ ...itemdata })
        console.log(data[0].pO_NO.substring(1))
        console.log(data[0].invoicE_NO)
        setcode1(data[0].pO_NO.substring(1))
        setcode2(data[0].invoicE_NO)
        if (data[0].orderdetails.length > 0) {
          let ggwp = []
          for (let index = 0; index < data[0].orderdetails.length; index++) {
            const form = {
              c1: data[0].orderdetails[index].codE_GPU,
              c2: data[0].orderdetails[index].codE_UNSPSC,
              c3: data[0].orderdetails[index].codE_TMT,
              c4: data[0].orderdetails[index].baR_CODE,
              c6: data[0].orderdetails[index].batcH_LOT_NO,
              c5: data[0].orderdetails[index].producT_NAME,
              c9: data[0].orderdetails[index].qty,
              c10: data[0].orderdetails[index].uom,
              c11: data[0].orderdetails[index].uniT_PRICE,
              c7: data[0].orderdetails[index].mfG_DATE,
              c8: data[0].orderdetails[index].exP_DATE,
              c12: data[0].orderdetails[index].amount,
              c13: data[0].orderdetails[index].total,
              c14: data[0].orderdetails[index].producT_CODE,

              id: data[0].orderdetails[index].id,

            }
            ggwp.push(form)
            console.log(form)
          }
          setmapp(mapp.concat(ggwp))
          console.log(mapp)
        }

      }


    })
    // barcode1()
    // barcode2()
    setTimeout(() => {
      localStorage.removeItem('datainvoice');
      localStorage.removeItem('dataproduct');
      window.print()
    }, 1000);
  }
  // barcodegen
  // const { inputRef } = useBarcode({value: 'createnextapp',options: { background: '#ccffff',}});
  // const { inputRef } = useBarcode({ value: 'fb.com' });

  // return <svg ref={inputRef} />;
  const [itemdata, setitemdata] = useState({
    id: null,
    invoicE_NO: "",
    invoicE_DATE: "",
    remark: "",
    discounT_PERCENTAGE: null,
    discounT_BAHT: null,
    vat: "",
    totaL_AMOUNT: null,
    producT_NO: "",
    pO_NO: "",
    total: "",
    vendoR_NAME: "",
    location: ""
  });
  useEffect(() => {
    fetchData();
  }, []);
  function barcode1() {
    const { inputRef } = useBarcode({
      value: code1,
      options: {
        displayValue: true,
      }
    });

    return <svg className="w-auto h-20" ref={inputRef} />;
  };
  function barcode2() {
    const { inputRef } = useBarcode({
      value: code2,
      options: {
        displayValue: true,
      }
    });

    return <svg className="w-auto h-20" ref={inputRef} />;
  };
  return (
    <div className="a4 section">
      {/* <div className="content-center text-center justify-items-center text-4xl mt-5 text-blue-800 ">
                ใบรับของ (IN)
              </div> */}
      <div className="w-full flex flex-col h-full">
        <div className="flex flex-col h-56">
          <div className="flex flex-row">
            <div className="w-1/3 flex flex-row">
              <div className="w-full">
                {barcode1()}
              </div>
              {/* <svg ref={inputRef} /> */}
              {/* <Image width={200} height={100}
                src="/images/barcode.png"
                alt="profile"
                className="mx-auto"
              /> */}
              {/* <Image width={200} height={100}
                src="/images/barcode.png"
                alt="profile"
                className="mx-auto"
              /> */}
            </div>
            <div className="content-center w-1/3 text-center flex justify-center items-center text-xl font-bold mt-5 text-blue-700 ">
              ใบส่งของ (OUT)
            </div>
            <div className="flex w-1/3 justify-end items-end mr-5">
                {barcode2()}
              {/* <svg ref={inputRef} /> */}
              {/* <button onClick={() => window.print()} className="ml-2 print_d_none bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">PrintPDF</button> */}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row mt-5  ">
                <div className="w-36 text-base  font-bold text-right ">เลขที่ใบสั่งซื้อ </div>
                <label className="ml-5 w-auto text-left">{itemdata.pO_NO}</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-36 text-base  font-bold text-right ">รหัสผู้จำหน่าย </div>
                <label className="ml-5 w-auto text-left">{itemdata.producT_NO}</label>
              </div>
              <div className="flex flex-row mt-5 ">
                <div className="w-36 text-base  font-bold text-right ">ชื่อผู้จำหน่าย </div>
                <label className="ml-5 w-auto text-left">{itemdata.vendoR_NAME}</label>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">เลขที่ใบส่งของ </div>
                <label className="ml-5 w-1/2 text-left">{itemdata.invoicE_NO}</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className=" text-base  font-bold text-right w-80">วันที่ใบส่งของ </div>
                <label className="ml-5 w-1/2 text-left">{moment(itemdata.invoicE_DATE).format('DD/MM/yyyy')}</label>
              </div>
              <div className="flex flex-row mt-5">
                <div className="text-base  font-bold text-right w-80">สถานที่ส่งมอบ </div>
                <label className="ml-5 w-1/2 text-left">{itemdata.location}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-start pt-10">
          <div className="flex flex-col mt-5">
            <div className=" ">
              <div className="py-2 overflow-x-auto  ">
                <div className="shadow  border-gray-200 sm:rounded-lg">
                  <table className="min-w-full w-full">
                    <tr className="bg-gray-50">
                      {/* <th
                        scope="col"
                        className="px-1 py-3 text-center border-b border-r text-base font-medium  text-blue-800 uppercase tracking-wider"
                      >
                        รหัส GPU
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        รหัส UNSPSC
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        รหัส TMT
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        รหัสสินค้า
                      </th>

                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        Bar code
                      </th> */}
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        ชื่อยา / เวชภัณท์
                      </th>
                      {/* <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        รหัสผลิต
                      </th>

                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        วันที่ผลิต
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b  text-blue-800 uppercase tracking-wider"
                      >
                        วันที่หมดอายุ
                      </th> */}

                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        จำนวน
                      </th>

                      {/* <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        หน่วย
                      </th> */}

                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        ราคาต่อหน่วย
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        ราคารวม vat
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        จำนวนเงิน
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider"
                      >
                        จำนวนที่สั่งซื้อ
                      </th>
                    </tr>


                    {
                      (mapp.length > 0) ? (
                        mapp.map((data, index) => (
                          <tr key={index} className="bg-white ">
                            {/* <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c1} </div>   </td>
                            <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c2} </div>   </td>
                            <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c3} </div>   </td>
                            <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c14} </div>   </td>

                            <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c4} </div>   </td> */}
                            <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c5} </div>   </td>
                            {/* <td className="px-1 py-4  border-r whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c6} </div>   </td>
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{moment(data.c7).format('DD/MM/yyyy')} </div>   </td>
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{moment(data.c8).format('DD/MM/yyyy')} </div>   </td> */}
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c9}</div>   </td>
                            {/* <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c10} </div>   </td> */}
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c11} </div>   </td>
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{((data.c12 * 7) / 100 + data.c12).toFixed(2)}</div>   </td>
                            <td className="px-1 py-4   whitespace-nowrap">
                              <div className="text-center text-sm text-gray-900">{data.c12} </div>   </td>
                            <td className="px-1 py-4   whitespace-nowrap">
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
          <div className="flex flex-col mb-10 items-end justify-center">
            <div className="flex flex-row w-full">
              <div className="flex flex-row mt-5 ml-5 w-1/2 justify-start">
                <div className="content-center text-right justify-items-center text-base font-bold  ">หมายเหตุ</div>
                <label className="ml-3 w-20 text-right">{itemdata.remark}</label>
              </div>
              <div className="flex flex-row mt-5 mr-10 w-1/2 justify-end">
                <div className="content-center text-right justify-items-center text-base font-bold  ">ราคารวม (ไม่รวม VAT)</div>
                <label className=" w-20 text-right">{itemdata.totaL_AMOUNT}</label>
              </div>
            </div>
            <div className="flex flex-row mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base font-bold  ">ส่วนลด - เปอร์เซ็นต์</div>
              <label className=" w-20 text-right">{itemdata.discounT_PERCENTAGE}</label>
            </div>
            <div className="flex flex-row mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base font-bold  ">ส่วนลด - บาท</div>
              <label className=" w-20 text-right">{itemdata.discounT_BAHT}</label>
            </div>
            <div className="flex flex-row mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base font-bold  ">VAT</div>
              <label className=" w-20 text-right">{itemdata.vat}</label>
            </div>
            <div className="flex flex-row mt-5 mr-10">
              <div className="content-center text-right justify-items-center text-base font-bold  ">ราคารวม </div>
              <label className=" w-20 text-right">{itemdata.total}</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20">
          <div className="w-full flex flex-row text-center mt-10">
            <div className="w-1/3 mx-5">
              <div className="w-full border-t border-dotted border-black">ผู้จัดการ</div>
            </div>
            <div className="w-1/3 mx-5">
              <div className="w-full border-t border-dotted border-black">ผู้ส่งของ / วันที่</div>
            </div>
            <div className="w-1/3 mx-5">
              <div className="w-full border-t border-dotted border-black">ผู้รับของ / วันที่</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default table;
