webpackHotUpdate_N_E("pages/components/invoicelistsell",{

/***/ "./pages/components/invoicelistsell.js":
/*!*********************************************!*\
  !*** ./pages/components/invoicelistsell.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_edigod_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_edigod_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/Layout */ "./pages/Layout/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_api_po__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/api_po */ "./pages/api/api_po.js");
/* harmony import */ var _api_api_asn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api_asn */ "./pages/api/api_asn.js");






var _jsxFileName = "D:\\edigod\\pages\\components\\invoicelistsell.js",
    _s = $RefreshSig$();







function table() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isClose = _useState[0],
      setisClose = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      isClosef = _useState2[0],
      setisClosef = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      mapp = _useState3[0],
      setmapp = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(Math.random()),
      nn = _useState4[0],
      setn = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
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
    c11: ""
  }),
      itemtable = _useState5[0],
      setitemtable = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    invoicE_NO: "",
    invoicE_DATE: "",
    remark: "",
    discounT_PERCENTAGE: null,
    discounT_BAHT: null,
    vat: null,
    totaL_AMOUNT: null,
    producT_NO: "",
    pO_NO: "",
    total: "",
    vendoR_NAME: "",
    location: ""
  }),
      itemdata = _useState6[0],
      setitemdata = _useState6[1];

  var valuechk = 0;

  var handleRemoveItem = function handleRemoveItem(idx) {
    // assigning the list to temp variable
    var temp = Object(D_edigod_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(itemtable); // removing the element using splice


    temp.splice(idx, 1); // updating the list

    setitemtable(temp);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(D_edigod_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return settable([]);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var savetable = /*#__PURE__*/function () {
    var _ref2 = Object(D_edigod_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var zaza;
      return D_edigod_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              console.log(e); // valuechk = getRandomInt(3000)

              zaza = itemtable; // settable(itemtable)

              setmapp([].concat(Object(D_edigod_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(mapp), [itemtable]));
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
                c11: ""
              });
              setisClose(false);
              console.log(mapp);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function savetable(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      tableza = _useState7[0],
      settable = _useState7[1];

  var handleChange = function handleChange(name, e) {
    itemtable[name] = e.target.value;
    console.log(itemtable);
  };

  var handleChangedata = function handleChangedata(name, e) {
    itemdata[name] = e.target.value;
    console.log(itemdata);
  };

  var saveapipo = function saveapipo() {
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
    if (map.length > 0) {
      for (var index = 0; index < array.length; index++) {
        var element = array[index];
        var data = {
          producT_ID: itemdata.invoicE_NO,
          codE_GPU: itemtable.c1,
          codE_UNSPSC: itemtable.c2,
          codE_TMT: itemtable.c3,
          baR_CODE: itemtable.c4,
          producT_NO: itemtable.c6,
          producT_NAME: itemtable.c5,
          qty: itemtable.c9,
          uniT_PRICE: itemtable.c10,
          amount: itemtable.c11,
          batcH_LOT_NO: 1,
          mfG_DATE: itemtable.c7,
          exP_DATE: itemtable.c8,
          uom: 1
        };
      }
    } else {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
    }

    console.log(mapp, mapp.length);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [function () {
      if (isClosef == 1) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ",
            children: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-3xl mt-2 text-gray-600 ",
            children: "Invoice send list"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-right justify-items-end text-4xl mt-5 mr-5 ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-2xl hover:text-pink  text-pink-700 font-bold underline",
              onClick: function onClick() {
                return setisClosef(3);
              },
              children: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 +"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ml-5  mt-2   mr-5 ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "border-solid border-2 border-black rounded-lg  w-full ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: " m-2 item-center justify-between",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "mt-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "radio",
                          className: "form-radio h-4 w-4 ",
                          name: "accountType",
                          value: "personal"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-2 text-pink-800",
                          children: "Current data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "mt-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "radio",
                          className: "form-radio h-4 w-4 ",
                          name: "accountType",
                          value: "personal"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 203,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-2 text-pink-800",
                          children: "from"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center ml-2 text-pink-800",
                        children: ["to", " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "mt-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center  text-pink-800",
                        children: ["Status", " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                        className: "form-select ml-2 ",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "Active"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 224,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "Inactive"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center ml-2 text-pink-800",
                        children: "Place"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                        className: "form-select   ml-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "No data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "No data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 232,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-grow-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
                      children: "Search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col mt-10",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                        className: "bg-gray-50",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider ",
                            children: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 252,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 282,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "relative px-6 py-3",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "sr-only",
                              children: "Edit"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 295,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 294,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 251,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["PO 00001", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 315,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 314,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["00001", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 320,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 319,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["00000001", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 325,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 324,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: "00000001"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 330,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["13/03/63", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 335,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["\u0E2D\u0E32\u0E04\u0E32\u0E23\u0E2A\u0E30\u0E2D\u0E32\u0E14", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 341,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 340,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                              children: "Active"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 346,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 345,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              onClick: function onClick() {
                                return setisClosef(2);
                              },
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                                "class": "text-pink-800  w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 360,
                                  columnNumber: 37
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 366,
                                  columnNumber: 37
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 353,
                                columnNumber: 35
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 352,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 351,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 300,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 15
          }, _this)]
        }, void 0, true);
      } else if (isClosef == 2) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "relative ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "absolute mt-5 ml-10 left-0 top-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return setisClosef(1);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    "class": "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 400,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ",
            children: "\u0E43\u0E1A\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07 (IN)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 36
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 421,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "12/12/12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "\u0E2A\u0E21\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "\u0E15\u0E36\u0E01\u0E2A\u0E30\u0E2D\u0E32\u0E14"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col mt-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: " ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "shadow overflow-hidden border-gray-200 sm:rounded-lg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                    className: "min-w-full w-full ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                      className: "bg-gray-50",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A GPU"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 445,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A UNSPSC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 451,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A TMT"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 457,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "Bar code"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 463,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2",
                          children: "\u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E32 / \u0E40\u0E27\u0E0A\u0E20\u0E31\u0E13\u0E17\u0E4C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 469,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 475,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 482,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 488,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E08\u0E33\u0E19\u0E27\u0E19"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 495,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 502,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 509,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 444,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 443,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      className: "bg-white ",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 520,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 519,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 525,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 524,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 530,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 529,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 535,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 534,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 540,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 539,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 545,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 544,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 550,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 549,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 555,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 554,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 560,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 559,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 565,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 564,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 570,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 569,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 518,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 578,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 577,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 583,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 582,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 588,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 587,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 593,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 592,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 598,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 597,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 603,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 602,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 608,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 607,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 613,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 612,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 618,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 617,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 623,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 622,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 628,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 627,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 576,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 636,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 635,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 641,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 640,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 646,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 645,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 651,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 650,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 656,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 655,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 661,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 660,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 666,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 665,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 671,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 670,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 676,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 675,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 681,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 680,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 686,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 685,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 634,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 517,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 442,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 441,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 440,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col mb-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "grid grid-cols-2 gap-3 ml-5 mt-5 mr-10",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-left justify-items-center text-base mt-5 font-bold  ",
                children: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38 -"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 699,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 (\u0E44\u0E21\u0E48\u0E23\u0E27\u0E21 VAT)", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  value: "3000",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 704,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 702,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 698,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "grid grid-cols-1 gap-3 mt-5 mr-10",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 - \u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19\u0E15\u0E4C", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 715,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 713,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 - \u0E1A\u0E32\u0E17", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 723,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 721,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["VAT", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  value: "30",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 731,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 729,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  value: "3030",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 740,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 738,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 712,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 697,
            columnNumber: 15
          }, _this)]
        }, void 0, true);
      } else if (isClosef == 3) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "relative ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "absolute mt-5 ml-10 left-0 top-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return setisClosef(1);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "rounded-full h-11 w-11 bg-pink-800 flex items-center justify-center",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    "class": "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 766,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 759,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 757,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 756,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 755,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 754,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " flex justify-end  mr-10 mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
              children: "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 778,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
              children: "\u0E14\u0E32\u0E27\u0E2B\u0E4C\u0E42\u0E2B\u0E25\u0E14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 781,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 777,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ",
            children: "\u0E43\u0E1A\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07 (IN)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 785,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "grid grid-cols-3 gap-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return handleChangedata("invoicE_NO", e);
                },
                id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 792,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 790,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07",
                onChange: function onChange(e) {
                  return handleChangedata("producT_NO", e);
                },
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 801,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 799,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22",
                onChange: function onChange(e) {
                  return handleChangedata("pO_NO", e);
                },
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 809,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 807,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07",
                onChange: function onChange(e) {
                  return handleChangedata("invoicE_DATE", e);
                },
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 817,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 815,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return handleChangedata("vendoR_NAME", e);
                },
                id: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22",
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 825,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 823,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A",
                onChange: function onChange(e) {
                  return handleChangedata("location", e);
                },
                autoComplete: "false",
                className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 834,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 832,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 789,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col mt-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: " ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: " flex justify-end  mr-10 mt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return setisClose(true);
                  },
                  className: "bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
                  children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E23\u0E32\u0E07"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 845,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 844,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "shadow overflow-hidden border-gray-200 sm:rounded-lg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                    className: "min-w-full w-full ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                      className: "bg-gray-50",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center border-b border-r text-base font-medium  text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A GPU"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 857,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A UNSPSC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 863,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A TMT"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 869,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "Bar code"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 875,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2",
                          children: "\u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E32 / \u0E40\u0E27\u0E0A\u0E20\u0E31\u0E13\u0E17\u0E4C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 881,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 887,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 894,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 900,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E08\u0E33\u0E19\u0E27\u0E19"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 907,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 914,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 921,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 856,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 855,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      className: "bg-white ",
                      children: mapp.map(function (data) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c1, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 948,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 947,
                            columnNumber: 1
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c2, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 950,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 949,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c3, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 952,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 951,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c4, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 954,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 953,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c5, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 956,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 955,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c6, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 958,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 957,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c7, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 960,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 959,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c8, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 962,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 961,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: data.c9
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 964,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 963,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c10, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 966,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 965,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c11, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 968,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 967,
                            columnNumber: 28
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 946,
                          columnNumber: 1
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 929,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 854,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 853,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 852,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 843,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 842,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col mb-10 ml-10 mr-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "grid grid-cols-2 gap-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "row-span-5 ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: " text-left  text-base mt-5 font-bold  ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "content-center text-right justify-items-center text-base mt-5 font-bold ",
                    children: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1014,
                    columnNumber: 23
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    cols: "60",
                    rows: "5",
                    className: "w-full border-pink-700 border bg-white shadow-md rounded ",
                    onChange: function onChange(e) {
                      return handleChangedata("remark", e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1017,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1013,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1012,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "col-span-1",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                  children: ["\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 (\u0E44\u0E21\u0E48\u0E23\u0E27\u0E21 VAT)", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return handleChangedata("total", e);
                    },
                    id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                    autoComplete: "false",
                    className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1031,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1029,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                  children: ["\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 - \u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19\u0E15\u0E4C", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                    onChange: function onChange(e) {
                      return handleChangedata("discounT_PERCENTAGE", e);
                    },
                    autoComplete: "false",
                    className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1039,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1037,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                  children: ["\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 - \u0E1A\u0E32\u0E17", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return handleChangedata("discounT_BAHT", e);
                    },
                    id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                    autoComplete: "false",
                    className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1047,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1045,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                  children: ["VAT", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return handleChangedata("vat", e);
                    },
                    id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                    autoComplete: "false",
                    className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1055,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1053,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                  children: ["\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return handleChangedata("total", e);
                    },
                    id: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",
                    autoComplete: "false",
                    className: "ml-4 border-pink-700 border bg-white shadow-md rounded   text-gray-900  "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1063,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1061,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1028,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1011,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "flex justify-center ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: saveapipo,
                className: "bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1072,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1075,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1071,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1010,
            columnNumber: 15
          }, _this)]
        }, void 0, true);
      }
    }(), isClose ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "myModal",
        "class": "modal",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: savetable,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "modal-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "class": "close",
              onClick: function onClick() {
                return setisClose(false);
              },
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1090,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-3xl mt-5 text-pink-800 ",
              children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E23\u0E32\u0E07"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1094,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "grid grid-cols-4 gap-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E2B\u0E31\u0E2A GPU", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c1", e);
                  },
                  id: "GPU",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1100,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1098,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E2B\u0E31\u0E2A UNSPSC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c2", e);
                  },
                  id: "UNSPSC",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1109,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1107,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E2B\u0E31\u0E2A TMT", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c3", e);
                  },
                  id: "TMT",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1118,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1116,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["BAR CODE", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c4", e);
                  },
                  id: "BAR_CODE",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1127,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1125,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E32 / \u0E40\u0E27\u0E0A\u0E20\u0E31\u0E13\u0E17\u0E4C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c5", e);
                  },
                  id: "namemedi",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1136,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1134,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E25\u0E34\u0E15", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c6", e);
                  },
                  id: "codeex",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1145,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1143,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E34\u0E15", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c7", e);
                  },
                  type: "date",
                  id: "dateex",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1154,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1152,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c8", e);
                  },
                  type: "date",
                  id: "dateendex",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1164,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1162,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E08\u0E33\u0E19\u0E27\u0E19", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c9", e);
                  },
                  id: "cout",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1174,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1172,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E2B\u0E19\u0E48\u0E27\u0E22", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c10", e);
                  },
                  id: "ex",
                  autoComplete: "false",
                  className: " w-full  bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1183,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1181,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    return handleChange("c11", e);
                  },
                  id: "extcount ",
                  autoComplete: "false",
                  className: " w-full bg-white shadow-md rounded  border-pink-700 border  text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1192,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1190,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1097,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "flex justify-center mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1202,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return setisClose(false);
                },
                className: "bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1208,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1201,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1089,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1088,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1087,
        columnNumber: 11
      }, this), " "]
    }, void 0, true) : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, this);
}

_s(table, "8ovqJcg58hBEZsGxHeuEEyHQJOg=");

/* harmony default export */ __webpack_exports__["default"] = (table);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9pbnZvaWNlbGlzdHNlbGwuanMiXSwibmFtZXMiOlsidGFibGUiLCJ1c2VTdGF0ZSIsImlzQ2xvc2UiLCJzZXRpc0Nsb3NlIiwiaXNDbG9zZWYiLCJzZXRpc0Nsb3NlZiIsIm1hcHAiLCJzZXRtYXBwIiwiTWF0aCIsInJhbmRvbSIsIm5uIiwic2V0biIsImMxIiwiYzIiLCJjMyIsImM0IiwiYzUiLCJjNiIsImM3IiwiYzgiLCJjOSIsImMxMCIsImMxMSIsIml0ZW10YWJsZSIsInNldGl0ZW10YWJsZSIsImludm9pY0VfTk8iLCJpbnZvaWNFX0RBVEUiLCJyZW1hcmsiLCJkaXNjb3VuVF9QRVJDRU5UQUdFIiwiZGlzY291blRfQkFIVCIsInZhdCIsInRvdGFMX0FNT1VOVCIsInByb2R1Y1RfTk8iLCJwT19OTyIsInRvdGFsIiwidmVuZG9SX05BTUUiLCJsb2NhdGlvbiIsIml0ZW1kYXRhIiwic2V0aXRlbWRhdGEiLCJ2YWx1ZWNoayIsImhhbmRsZVJlbW92ZUl0ZW0iLCJpZHgiLCJ0ZW1wIiwic3BsaWNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic2V0dGFibGUiLCJzYXZldGFibGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiemF6YSIsInRhYmxlemEiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VkYXRhIiwic2F2ZWFwaXBvIiwibWFwIiwibGVuZ3RoIiwiaW5kZXgiLCJhcnJheSIsImVsZW1lbnQiLCJkYXRhIiwicHJvZHVjVF9JRCIsImNvZEVfR1BVIiwiY29kRV9VTlNQU0MiLCJjb2RFX1RNVCIsImJhUl9DT0RFIiwicHJvZHVjVF9OQU1FIiwicXR5IiwidW5pVF9QUklDRSIsImFtb3VudCIsImJhdGNIX0xPVF9OTyIsIm1mR19EQVRFIiwiZXhQX0RBVEUiLCJ1b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QU0sMEJBQVg7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFTLEVBQUMseUVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFPRTtBQUNFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTTdDLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsaUJBRFg7QUFFRSx5QkFBUyxFQUFDLDBFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQW1JUyxHQW5JVDtBQUFBLG9CQURNLEdBdUlOLEVBcmlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBpQ0Q7O0dBaHNDUUgsSzs7QUFrc0NNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wb25lbnRzL2ludm9pY2VsaXN0c2VsbC43ZTU3MzhlMDE3NzYyMWRjOGYyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHtlZGlfcG99IGZyb20gJy4uL2FwaS9hcGlfcG8nXHJcbmltcG9ydCB7ZWRpX2Fzbn0gZnJvbSAnLi4vYXBpL2FwaV9hc24nXHJcblxyXG5cclxuZnVuY3Rpb24gdGFibGUoKSB7XHJcbiAgY29uc3QgW2lzQ2xvc2UsIHNldGlzQ2xvc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Nsb3NlZiwgc2V0aXNDbG9zZWZdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW21hcHAsIHNldG1hcHBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbbm4sIHNldG5dID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSk7XHJcbiAgY29uc3QgW2l0ZW10YWJsZSwgc2V0aXRlbXRhYmxlXSA9IHVzZVN0YXRlKHtcclxuICAgIGMxOiBcIlwiLFxyXG4gICAgYzI6IFwiXCIsXHJcbiAgICBjMzogXCJcIixcclxuICAgIGM0OiBcIlwiLFxyXG4gICAgYzU6IFwiXCIsXHJcbiAgICBjNjogXCJcIixcclxuICAgIGM3OiBcIlwiLFxyXG4gICAgYzg6IFwiXCIsXHJcbiAgICBjOTogXCJcIixcclxuICAgIGMxMDogXCJcIixcclxuICAgIGMxMTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2l0ZW1kYXRhLCBzZXRpdGVtZGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbnZvaWNFX05POiBcIlwiICAsXHJcbiAgICAgICAgaW52b2ljRV9EQVRFOiBcIlwiICxcclxuICAgICAgICByZW1hcms6IFwiXCIgLFxyXG4gICAgICAgIGRpc2NvdW5UX1BFUkNFTlRBR0U6IG51bGwgLFxyXG4gICAgICAgIGRpc2NvdW5UX0JBSFQ6IG51bGwgLFxyXG4gICAgICAgIHZhdDogbnVsbCAsXHJcbiAgICAgICAgdG90YUxfQU1PVU5UOiBudWxsICxcclxuICAgICAgICBwcm9kdWNUX05POiBcIlwiICxcclxuICAgICAgICBwT19OTzogXCJcIiAsXHJcbiAgICAgICAgdG90YWw6IFwiXCIgLFxyXG4gICAgICAgIHZlbmRvUl9OQU1FOiBcIlwiICxcclxuICAgICAgICBsb2NhdGlvbjogXCJcIiAsXHJcbiAgfSk7XHJcbiAgXHJcblxyXG5cclxuXHJcbiAgbGV0IHZhbHVlY2hrID0gMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChpZHgpID0+IHtcclxuICAgIC8vIGFzc2lnbmluZyB0aGUgbGlzdCB0byB0ZW1wIHZhcmlhYmxlXHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLml0ZW10YWJsZV07XHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgdGhlIGVsZW1lbnQgdXNpbmcgc3BsaWNlXHJcbiAgICB0ZW1wLnNwbGljZShpZHgsIDEpO1xyXG5cclxuICAgIC8vIHVwZGF0aW5nIHRoZSBsaXN0XHJcbiAgICBzZXRpdGVtdGFibGUodGVtcCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgc2V0dGFibGUoW10pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNhdmV0YWJsZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAvLyB2YWx1ZWNoayA9IGdldFJhbmRvbUludCgzMDAwKVxyXG4gICAgbGV0IHphemEgPSBpdGVtdGFibGU7XHJcbiAgICAvLyBzZXR0YWJsZShpdGVtdGFibGUpXHJcbiAgICBzZXRtYXBwKFsuLi5tYXBwLGl0ZW10YWJsZV0pO1xyXG4gICAgc2V0aXRlbXRhYmxlKHtcclxuICAgICAgYzE6IFwiXCIsXHJcbiAgICAgIGMyOiBcIlwiLFxyXG4gICAgICBjMzogXCJcIixcclxuICAgICAgYzQ6IFwiXCIsXHJcbiAgICAgIGM1OiBcIlwiLFxyXG4gICAgICBjNjogXCJcIixcclxuICAgICAgYzc6IFwiXCIsXHJcbiAgICAgIGM4OiBcIlwiLFxyXG4gICAgICBjOTogXCJcIixcclxuICAgICAgYzEwOiBcIlwiLFxyXG4gICAgICBjMTE6IFwiXCIsXHJcbiAgICB9KVxyXG4gICAgc2V0aXNDbG9zZShmYWxzZSlcclxuICAgIGNvbnNvbGUubG9nKG1hcHApO1xyXG4gIH07XHJcbiAgY29uc3QgW3RhYmxlemEsIHNldHRhYmxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUsIGUpID0+IHtcclxuICAgIGl0ZW10YWJsZVtuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coaXRlbXRhYmxlKTtcclxuICB9O1xyXG4gXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlZGF0YSA9IChuYW1lLCBlKSA9PiB7XHJcbiAgICBpdGVtZGF0YVtuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coaXRlbWRhdGEpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBzYXZlYXBpcG8gPSAoKSA9PiB7XHJcbi8vICAgICBsZXQgZGF0YSA9IHtcclxuLy8gICAgICAgaW52b2ljRV9OTzogaXRlbWRhdGEuaW52b2ljRV9OTyxcclxuLy8gICAgICAgaW52b2ljRV9EQVRFOiBpdGVtZGF0YS5pbnZvaWNFX0RBVEUsXHJcbi8vICAgICAgIHJlbWFyazogaXRlbWRhdGEucmVtYXJrLFxyXG4vLyAgICAgICBkaXNjb3VuVF9QRVJDRU5UQUdFOiBOdW1iZXIoaXRlbWRhdGEuZGlzY291blRfUEVSQ0VOVEFHRSksXHJcbi8vICAgICAgIGRpc2NvdW5UX0JBSFQ6IE51bWJlcihpdGVtZGF0YS5kaXNjb3VuVF9CQUhUKSxcclxuLy8gICAgICAgdmF0OiBOdW1iZXIoaXRlbWRhdGEudmF0KSxcclxuLy8gICAgICAgdG90YUxfQU1PVU5UOiBOdW1iZXIoaXRlbWRhdGEudG90YUxfQU1PVU5UKSxcclxuLy8gICAgICAgcHJvZHVjVF9OTzogaXRlbWRhdGEucHJvZHVjVF9OTyxcclxuLy8gICAgICAgcE9fTk86IGl0ZW1kYXRhLnBPX05PLFxyXG4vLyAgICAgICB0b3RhbDogTnVtYmVyKGl0ZW1kYXRhLnRvdGFsKSxcclxuLy8gICAgICAgdmVuZG9SX05BTUU6IGl0ZW1kYXRhLnZlbmRvUl9OQU1FLFxyXG4vLyAgICAgICBsb2NhdGlvbjogaXRlbWRhdGEubG9jYXRpb24sXHJcbi8vICAgICB9XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuLy8gIGVkaV9hc24oZGF0YSkudGhlbihkYXRhID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAvLyBSb3V0ZXIucHVzaCgnL3JlZ2lzdGVyL2luZm9ybWF0aW9uJylcclxuLy8gICBpZiAoZGF0YS5lcnJvcikge1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKCdnZ3dwJylcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc29sZS5sb2coJzU1JylcclxuLy8gICB9XHJcbi8vIH0pXHJcbiAgICBpZihtYXAubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBwcm9kdWNUX0lEOiBpdGVtZGF0YS5pbnZvaWNFX05PICxcclxuICAgICAgICBjb2RFX0dQVTogaXRlbXRhYmxlLmMxICxcclxuICAgICAgICBjb2RFX1VOU1BTQzogaXRlbXRhYmxlLmMyICxcclxuICAgICAgICBjb2RFX1RNVDogaXRlbXRhYmxlLmMzICxcclxuICAgICAgICBiYVJfQ09ERTogaXRlbXRhYmxlLmM0ICxcclxuICAgICAgICBwcm9kdWNUX05POiBpdGVtdGFibGUuYzYgLFxyXG4gICAgICAgIHByb2R1Y1RfTkFNRTogaXRlbXRhYmxlLmM1ICxcclxuICAgICAgICBxdHk6IGl0ZW10YWJsZS5jOSAsXHJcbiAgICAgICAgdW5pVF9QUklDRTogaXRlbXRhYmxlLmMxMCAsXHJcbiAgICAgICAgYW1vdW50OiBpdGVtdGFibGUuYzExICxcclxuICAgICAgICBiYXRjSF9MT1RfTk86IDEgLFxyXG4gICAgICAgIG1mR19EQVRFOiBpdGVtdGFibGUuYzcgLFxyXG4gICAgICAgIGV4UF9EQVRFOiBpdGVtdGFibGUuYzggLFxyXG4gICAgICAgIHVvbTogMSAsXHJcbiAgICBcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIDw+PC8+XHJcbiAgICB9XHJcbmNvbnNvbGUubG9nKG1hcHAsbWFwcC5sZW5ndGgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0Nsb3NlZiA9PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC00eGwgbXQtNSB0ZXh0LXBpbmstODAwIFwiPlxyXG4gICAgICAgICAgICAgICAg4Lij4Liy4Lii4LiB4Liy4Lij4Liq4LmI4LiH4LiC4Lit4LiHXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC0zeGwgbXQtMiB0ZXh0LWdyYXktNjAwIFwiPlxyXG4gICAgICAgICAgICAgICAgSW52b2ljZSBzZW5kIGxpc3RcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1lbmQgdGV4dC00eGwgbXQtNSBtci01IFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgaG92ZXI6dGV4dC1waW5rICB0ZXh0LXBpbmstNzAwIGZvbnQtYm9sZCB1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlZigzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg4Liq4Lij4LmJ4Liy4LiH4Lij4Liy4Lii4LiB4Liy4LijICtcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgIG10LTIgICBtci01IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbS0yIGl0ZW0tY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZXJzb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXBpbmstODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1sLTNcIiB0eXBlPVwiZGF0ZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZXJzb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXBpbmstODAwXCI+ZnJvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtbC0zXCIgdHlwZT1cImRhdGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbWwtMiB0ZXh0LXBpbmstODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtbC0zXCIgdHlwZT1cImRhdGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciAgdGV4dC1waW5rLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBtbC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW5hY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG1sLTIgdGV4dC1waW5rLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgICBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vIGRhdGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Tm8gZGF0YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwICBob3ZlcjpiZy1waW5rLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4olxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guIdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4p+C4seC4meC4l+C4teC5iOC5g+C4muC4quC5iOC4h+C4guC4reC4h1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKrguJbguLLguJnguLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEphbmUgQ29vcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIGphbmUuY29vcGVyQGV4YW1wbGUuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUE8gMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMvMDMvNjN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguK3guLLguITguLLguKPguKrguLDguK3guLLguJR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlZigyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1waW5rLTgwMCAgdy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQ2xvc2VmID09IDIpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIG10LTUgbWwtMTAgbGVmdC0wIHRvcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldGlzQ2xvc2VmKDEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1mdWxsIGgtMTEgdy0xMSBiZy1waW5rLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNiBoLTYgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDE5bC03LTcgNy03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtNHhsIG10LTUgdGV4dC1waW5rLTgwMCBcIj5cclxuICAgICAgICAgICAgICAgIOC5g+C4muC4o+C4seC4muC4guC4reC4hyAoSU4pXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC5gOC4peC4guC4l+C4teC5iOC5g+C4muC4quC4seC5iOC4h+C4i+C4t+C5ieC4rSA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNVwiPjAwMDAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+MDAwMDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4oiA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNVwiPjAwMDAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guIcgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTVcIj4xMi8xMi8xMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4LiK4Li34LmI4Lit4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4LiiIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+4Liq4Lih4Lio4Lix4LiB4LiU4Li04LmMPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+4LiV4Li24LiB4Liq4Liw4Lit4Liy4LiUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG92ZXJmbG93LWhpZGRlbiBib3JkZXItZ3JheS0yMDAgc206cm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIEdQVVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguKvguLHguKogVU5TUFNDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBUTVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFyIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHctMS8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiK4Li34LmI4Lit4Lii4LiyIC8g4LmA4Lin4LiK4Lig4Lix4LiT4LiX4LmMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4peC4tOC4lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lin4Lix4LiZ4LiX4Li14LmI4Lic4Lil4Li04LiVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiAgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4iOC4s+C4meC4p+C4mVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lir4LiZ4LmI4Lin4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguJXguYjguK3guKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4luC4uOC4h+C4oeC4t+C4rXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC8xMC82NHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLzEwLzY0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiW4Li44LiH4Lih4Li34Lite1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLzEwLzY0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAvMTAvNjR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguJbguLjguIfguKHguLfguK17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAvMTAvNjR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC8xMC82NHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgbWwtNSBtdC01IG1yLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1sZWZ0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lir4Lih4Liy4Lii4LmA4Lir4LiV4Li4IC1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4suC4hOC4suC4o+C4p+C4oSAo4LmE4Lih4LmI4Lij4Lin4LihIFZBVCl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVkFUX0FNT1VOVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xIGdhcC0zIG10LTUgbXItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4LmA4Lib4Lit4Lij4LmM4LmA4LiL4LmH4LiZ4LiV4LmMe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVkFUX0FNT1VOVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4Lia4Liy4LiXe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJWQVRfQU1PVU5UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICBWQVR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlZBVF9BTU9VTlRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Liy4LiE4Liy4Lij4Lin4Lihe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJWQVRfQU1PVU5UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzAzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNDbG9zZWYgPT0gMykge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgbXQtNSBtbC0xMCBsZWZ0LTAgdG9wLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0aXNDbG9zZWYoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgaC0xMSB3LTExIGJnLXBpbmstODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTlsLTctNyA3LTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1lbmQgIG1yLTEwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4reC4seC4nuC5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTIgYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4lOC4suC4p+C4q+C5jOC5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LTR4bCBtdC01IHRleHQtcGluay04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICDguYPguJrguKPguLHguJrguILguK3guIcgKElOKVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImludm9pY0VfTk9cIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guId7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcInByb2R1Y1RfTk9cIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4Liq4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4Liie1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIuC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4olwiICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZWRhdGEoXCJwT19OT1wiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guId7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4Lin4Lix4LiZ4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHXCIgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwiaW52b2ljRV9EQVRFXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4iuC4t+C5iOC4reC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4ontcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGlucHV0ICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidmVuZG9SX05BTUVcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCLguIrguLfguYjguK3guJzguLnguYnguIjguLPguKvguJnguYjguLLguKJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKrguJbguLLguJfguLXguYjguKrguYjguIfguKHguK3guJp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImxvY2F0aW9uXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1lbmQgIG1yLTEwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguILguYnguK3guKHguLnguKXguJXguLLguKPguLLguIdcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1ncmF5LTIwMCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1yIHRleHQtYmFzZSBmb250LW1lZGl1bSAgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguKvguLHguKogR1BVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBVTlNQU0NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIFRNVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXIgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdy0xLzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguIrguLfguYjguK3guKLguLIgLyDguYDguKfguIrguKDguLHguJPguJfguYxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4Liq4Lic4Lil4Li04LiVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguJzguKXguLTguJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iICB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4p+C4seC4meC4l+C4teC5iOC4q+C4oeC4lOC4reC4suC4ouC4uFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiI4Liz4LiZ4Lin4LiZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4suC4hOC4suC4leC5iOC4reC4q+C4meC5iOC4p+C4olxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAodGFibGV6YSAhPSB1bmRlZmluZWQpID9cclxuICAgICAgICB0YWJsZXphLm1hcChwcm9qZWN0cyA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6JydcclxuICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gIHRhYmxlemEubWFwKHNkc2Q9PihcclxuICAgIDw+PC8+XHJcbiAgKSlcclxufSAqL31cclxue1xyXG4gIG1hcHAubWFwKChkYXRhKT0+KFxyXG48dHI+XHJcbjx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzF9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzJ9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzN9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzR9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzV9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzZ9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntkYXRhLmM3fSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57ZGF0YS5jOH0gPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzl9PC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzEwfSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57ZGF0YS5jMTF9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgKSlcclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjAwMDAxIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MDAwMDEgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj4wMDAwMSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjAwMDAxIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+4LiW4Li44LiH4Lih4Li34LitIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MDAwMDEgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAvMTAvNjQgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAvMTAvNjQgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAwMDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjIgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MiA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0xMCBtbC0xMCBtci0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1zcGFuLTUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1sZWZ0ICB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDguKvguKHguLLguKLguYDguKvguJXguLhcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCI2MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwicmVtYXJrXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Lij4Liy4LiE4Liy4Lij4Lin4LihICjguYTguKHguYjguKPguKfguKEgVkFUKXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZWRhdGEoXCJ0b3RhbFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4LmA4Lib4Lit4Lij4LmM4LmA4LiL4LmH4LiZ4LiV4LmMe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4Lix4LmI4LiH4LiL4Li34LmJ4LitXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImRpc2NvdW5UX1BFUkNFTlRBR0VcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguKrguYjguKfguJnguKXguJQgLSDguJrguLLguJdcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwiZGlzY291blRfQkFIVFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVkFUe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidmF0XCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIuC5gOC4peC4guC4l+C4teC5iOC5g+C4muC4quC4seC5iOC4h+C4i+C4t+C5ieC4rVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguKPguKfguKF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidG90YWxcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4Lix4LmI4LiH4LiL4Li34LmJ4LitXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVhcGlwb30gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwICBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguJrguLHguJnguJfguLbguIFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBtbC00ICBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lii4LiB4LmA4Lil4Li04LiBXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCl9XHJcblxyXG4gICAgICB7aXNDbG9zZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZldGFibGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0aXNDbG9zZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LTN4bCBtdC01IHRleHQtcGluay04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC5gOC4nuC4tOC5iOC4oeC4guC5ieC4reC4oeC4ueC4peC4leC4suC4o+C4suC4h1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIEdQVVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjMVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiR1BVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBVTlNQU0NcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzJcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlVOU1BTQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIFRNVFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjM1wiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVE1UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICBCQVIgQ09ERVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQkFSX0NPREVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4iuC4t+C5iOC4reC4ouC4siAvIOC5gOC4p+C4iuC4oOC4seC4k+C4l+C5jFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZW1lZGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4peC4tOC4lVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNlwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZWV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguJzguKXguLTguJVcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzdcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcImM4XCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlZW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4iOC4s+C4meC4p+C4mVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjOVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lir4LiZ4LmI4Lin4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcImMxMFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCAgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguJXguYjguK3guKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzExXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleHRjb3VudCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4muC4seC4meC4l+C4tuC4gVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldGlzQ2xvc2UoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgbWwtNCAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguKLguIHguYDguKXguLTguIFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9