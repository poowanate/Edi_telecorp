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
    var data = {
      invoicE_NO: itemdata.invoicE_NO,
      invoicE_DATE: itemdata.invoicE_DATE,
      remark: itemdata.remark,
      discounT_PERCENTAGE: Number(itemdata.discounT_PERCENTAGE),
      discounT_BAHT: Number(itemdata.discounT_BAHT),
      vat: Number(itemdata.vat),
      totaL_AMOUNT: Number(itemdata.totaL_AMOUNT),
      producT_NO: itemdata.producT_NO,
      pO_NO: itemdata.pO_NO,
      total: Number(itemdata.total),
      vendoR_NAME: itemdata.vendoR_NAME,
      location: itemdata.location
    }; // console.log(JSON.stringify(data))

    Object(_api_api_asn__WEBPACK_IMPORTED_MODULE_8__["edi_asn"])(data).then(function (data) {
      console.log(data); // Router.push('/register/information')

      if (data.error) {
        console.log('ggwp');
      } else {
        console.log('55');
      }
    });
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
            lineNumber: 139,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-3xl mt-2 text-gray-600 ",
            children: "Invoice send list"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
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
              lineNumber: 147,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
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
                          lineNumber: 161,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-2 text-pink-800",
                          children: "Current data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
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
                          lineNumber: 178,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-2 text-pink-800",
                          children: "from"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center ml-2 text-pink-800",
                        children: ["to", " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "ml-3",
                        type: "date"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
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
                        lineNumber: 195,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                        className: "form-select ml-2 ",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "Active"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 199,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "Inactive"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 200,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        className: "inline-flex items-center ml-2 text-pink-800",
                        children: "Place"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                        className: "form-select   ml-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "No data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                          children: "No data"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 207,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-grow-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
                      children: "Search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
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
                            lineNumber: 227,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 233,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 239,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "px-6 py-3 text-left text-base font-medium text-pink-800 uppercase tracking-wider",
                            children: "\u0E2A\u0E16\u0E32\u0E19\u0E30"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 263,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            scope: "col",
                            className: "relative px-6 py-3",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "sr-only",
                              children: "Edit"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 270,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 226,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
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
                              lineNumber: 290,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 289,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["00001", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 295,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 294,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["00000001", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 300,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 299,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: "00000001"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 305,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["13/03/63", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 310,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 309,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-sm text-gray-900",
                              children: ["\u0E2D\u0E32\u0E04\u0E32\u0E23\u0E2A\u0E30\u0E2D\u0E32\u0E14", " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 316,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 315,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                              children: "Active"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 321,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 320,
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
                                  lineNumber: 335,
                                  columnNumber: 37
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 341,
                                  columnNumber: 37
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 328,
                                columnNumber: 35
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 327,
                              columnNumber: 33
                            }, _this), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 326,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 275,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
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
                      lineNumber: 375,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ",
            children: "\u0E43\u0E1A\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07 (IN)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
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
                lineNumber: 392,
                columnNumber: 36
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 396,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "00001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E2D\u0E07 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "12/12/12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "\u0E2A\u0E21\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-base mt-5 font-bold  ",
              children: ["\u0E2A\u0E16\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "ml-5",
                children: "\u0E15\u0E36\u0E01\u0E2A\u0E30\u0E2D\u0E32\u0E14"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 390,
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
                          lineNumber: 420,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A UNSPSC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 426,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A TMT"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 432,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "Bar code"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 438,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2",
                          children: "\u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E32 / \u0E40\u0E27\u0E0A\u0E20\u0E31\u0E13\u0E17\u0E4C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 444,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 450,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 457,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 463,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E08\u0E33\u0E19\u0E27\u0E19"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 470,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 477,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 484,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 419,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 418,
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
                            lineNumber: 495,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 494,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 500,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 499,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 505,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 504,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 510,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 509,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 515,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 514,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 535,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 534,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 545,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 544,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 493,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 553,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 552,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 558,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 557,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 563,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 562,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 568,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 567,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 573,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 572,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 593,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 592,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 603,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 602,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 551,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 611,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 610,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 616,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 615,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 621,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 620,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["00001", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 626,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 625,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4  border-r whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["\u0E16\u0E38\u0E07\u0E21\u0E37\u0E2D", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 631,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 630,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["10/10/64", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: "1000"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 651,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 650,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
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
                          className: "px-6 py-4   whitespace-nowrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-900",
                            children: ["2", " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 661,
                            columnNumber: 31
                          }, _this), " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 660,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 609,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 492,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 417,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 415,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
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
                lineNumber: 674,
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
                  lineNumber: 679,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 677,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 673,
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
                  lineNumber: 690,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 688,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content-center text-right justify-items-center text-base mt-5 font-bold  ",
                children: ["\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 - \u0E1A\u0E32\u0E17", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "VAT_AMOUNT",
                  autoComplete: "false",
                  className: "ml-4 bg-white shadow-md rounded   text-gray-900  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 698,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 696,
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
                  lineNumber: 706,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 704,
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
                  lineNumber: 715,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 713,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 687,
              columnNumber: 17
            }, _this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 672,
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
                      lineNumber: 741,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 734,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 732,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 731,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 730,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 729,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " flex justify-end  mr-10 mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
              children: "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 753,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "ml-2 bg-pink-500  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",
              children: "\u0E14\u0E32\u0E27\u0E2B\u0E4C\u0E42\u0E2B\u0E25\u0E14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 756,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 752,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-center text-center justify-items-center text-4xl mt-5 text-pink-800 ",
            children: "\u0E43\u0E1A\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07 (IN)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 760,
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
                lineNumber: 767,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 765,
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
                lineNumber: 776,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 774,
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
                lineNumber: 784,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 782,
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
                lineNumber: 792,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 790,
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
                lineNumber: 800,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 798,
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
                lineNumber: 809,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 807,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 764,
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
                  lineNumber: 820,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 819,
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
                          lineNumber: 832,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A UNSPSC"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 838,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A TMT"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 844,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "Bar code"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 850,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider w-1/2",
                          children: "\u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E32 / \u0E40\u0E27\u0E0A\u0E20\u0E31\u0E13\u0E17\u0E4C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 856,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 862,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E34\u0E15"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 869,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b  text-pink-800 uppercase tracking-wider",
                          children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 875,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E08\u0E33\u0E19\u0E27\u0E19"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 882,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 889,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          scope: "col",
                          className: "px-6 py-3 text-center text-base font-medium border-b border-r text-pink-800 uppercase tracking-wider",
                          children: "\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 896,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 831,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 830,
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
                              lineNumber: 923,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 922,
                            columnNumber: 1
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c2, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 925,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 924,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c3, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 927,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 926,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c4, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 929,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 928,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c5, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 931,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 930,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4  border-r whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c6, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 933,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 932,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c7, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 935,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 934,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c8, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 937,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 936,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: data.c9
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 939,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 938,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c10, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 941,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 940,
                            columnNumber: 28
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "px-6 py-4   whitespace-nowrap",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "text-center text-sm text-gray-900",
                              children: [data.c11, " "]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 943,
                              columnNumber: 28
                            }, _this), "   "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 942,
                            columnNumber: 28
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 921,
                          columnNumber: 1
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 904,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 829,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 828,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 827,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 818,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 817,
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
                    lineNumber: 989,
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
                    lineNumber: 992,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 988,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 987,
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
                    lineNumber: 1006,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1004,
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
                    lineNumber: 1014,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1012,
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
                    lineNumber: 1022,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1020,
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
                    lineNumber: 1030,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1028,
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
                    lineNumber: 1038,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1036,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1003,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 986,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "flex justify-center ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: saveapipo,
                className: "bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1047,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1050,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1046,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 985,
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
              lineNumber: 1065,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content-center text-center justify-items-center text-3xl mt-5 text-pink-800 ",
              children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E23\u0E32\u0E07"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1069,
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
                  lineNumber: 1075,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1073,
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
                  lineNumber: 1084,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1082,
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
                  lineNumber: 1093,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1091,
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
                  lineNumber: 1102,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1100,
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
                  lineNumber: 1111,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1109,
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
                  lineNumber: 1120,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1118,
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
                  lineNumber: 1129,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1127,
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
                  lineNumber: 1139,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1137,
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
                  lineNumber: 1149,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1147,
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
                  lineNumber: 1158,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1156,
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
                  lineNumber: 1167,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1165,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1072,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "flex justify-center mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1177,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return setisClose(false);
                },
                className: "bg-red-500 ml-4  hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                children: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1183,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1176,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1064,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1063,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1062,
        columnNumber: 11
      }, this), " "]
    }, void 0, true) : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9pbnZvaWNlbGlzdHNlbGwuanMiXSwibmFtZXMiOlsidGFibGUiLCJ1c2VTdGF0ZSIsImlzQ2xvc2UiLCJzZXRpc0Nsb3NlIiwiaXNDbG9zZWYiLCJzZXRpc0Nsb3NlZiIsIm1hcHAiLCJzZXRtYXBwIiwiTWF0aCIsInJhbmRvbSIsIm5uIiwic2V0biIsImMxIiwiYzIiLCJjMyIsImM0IiwiYzUiLCJjNiIsImM3IiwiYzgiLCJjOSIsImMxMCIsImMxMSIsIml0ZW10YWJsZSIsInNldGl0ZW10YWJsZSIsImludm9pY0VfTk8iLCJpbnZvaWNFX0RBVEUiLCJyZW1hcmsiLCJkaXNjb3VuVF9QRVJDRU5UQUdFIiwiZGlzY291blRfQkFIVCIsInZhdCIsInRvdGFMX0FNT1VOVCIsInByb2R1Y1RfTk8iLCJwT19OTyIsInRvdGFsIiwidmVuZG9SX05BTUUiLCJsb2NhdGlvbiIsIml0ZW1kYXRhIiwic2V0aXRlbWRhdGEiLCJ2YWx1ZWNoayIsImhhbmRsZVJlbW92ZUl0ZW0iLCJpZHgiLCJ0ZW1wIiwic3BsaWNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwic2V0dGFibGUiLCJzYXZldGFibGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiemF6YSIsInRhYmxlemEiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VkYXRhIiwic2F2ZWFwaXBvIiwiZGF0YSIsIk51bWJlciIsImVkaV9hc24iLCJ0aGVuIiwiZXJyb3IiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUNSQyxPQURRO0FBQUEs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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREEsZUFHMkI7QUFBSSxxQ0FBUyxFQUFDLHVDQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9EZ0QsSUFBSSxDQUFDL0MsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIM0IsZUFLMkI7QUFBSSxxQ0FBUyxFQUFDLHVDQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9EK0MsSUFBSSxDQUFDOUMsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FMM0IsZUFPMkI7QUFBSSxxQ0FBUyxFQUFDLHVDQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9EOEMsSUFBSSxDQUFDN0MsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FQM0IsZUFTMkI7QUFBSSxxQ0FBUyxFQUFDLHVDQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9ENkMsSUFBSSxDQUFDNUMsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FUM0IsZUFXMkI7QUFBSSxxQ0FBUyxFQUFDLHVDQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9ENEMsSUFBSSxDQUFDM0MsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FYM0IsZUFhMkI7QUFBSSxxQ0FBUyxFQUFDLCtCQUFkO0FBQUEsb0RBQ0E7QUFBSyx1Q0FBUyxFQUFDLG1DQUFmO0FBQUEseUNBQW9EMkMsSUFBSSxDQUFDMUMs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QTtBQUFBO0FBQUEsc0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBbUlTLEdBbklUO0FBQUEsb0JBRE0sR0F1SU4sRUFyaUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMGlDRDs7R0F2cUNRSCxLOztBQXlxQ01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudHMvaW52b2ljZWxpc3RzZWxsLmQ4ODQxYTFjNjZiMGY2MzRhNDg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQge2VkaV9wb30gZnJvbSAnLi4vYXBpL2FwaV9wbydcclxuaW1wb3J0IHtlZGlfYXNufSBmcm9tICcuLi9hcGkvYXBpX2FzbidcclxuXHJcblxyXG5mdW5jdGlvbiB0YWJsZSgpIHtcclxuICBjb25zdCBbaXNDbG9zZSwgc2V0aXNDbG9zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2xvc2VmLCBzZXRpc0Nsb3NlZl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbWFwcCwgc2V0bWFwcF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtubiwgc2V0bl0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpKTtcclxuICBjb25zdCBbaXRlbXRhYmxlLCBzZXRpdGVtdGFibGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYzE6IFwiXCIsXHJcbiAgICBjMjogXCJcIixcclxuICAgIGMzOiBcIlwiLFxyXG4gICAgYzQ6IFwiXCIsXHJcbiAgICBjNTogXCJcIixcclxuICAgIGM2OiBcIlwiLFxyXG4gICAgYzc6IFwiXCIsXHJcbiAgICBjODogXCJcIixcclxuICAgIGM5OiBcIlwiLFxyXG4gICAgYzEwOiBcIlwiLFxyXG4gICAgYzExOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbaXRlbWRhdGEsIHNldGl0ZW1kYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGludm9pY0VfTk86IFwiXCIgICxcclxuICAgICAgICBpbnZvaWNFX0RBVEU6IFwiXCIgLFxyXG4gICAgICAgIHJlbWFyazogXCJcIiAsXHJcbiAgICAgICAgZGlzY291blRfUEVSQ0VOVEFHRTogbnVsbCAsXHJcbiAgICAgICAgZGlzY291blRfQkFIVDogbnVsbCAsXHJcbiAgICAgICAgdmF0OiBudWxsICxcclxuICAgICAgICB0b3RhTF9BTU9VTlQ6IG51bGwgLFxyXG4gICAgICAgIHByb2R1Y1RfTk86IFwiXCIgLFxyXG4gICAgICAgIHBPX05POiBcIlwiICxcclxuICAgICAgICB0b3RhbDogXCJcIiAsXHJcbiAgICAgICAgdmVuZG9SX05BTUU6IFwiXCIgLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIlwiICxcclxuICB9KTtcclxuICBcclxuXHJcblxyXG5cclxuICBsZXQgdmFsdWVjaGsgPSAwO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKGlkeCkgPT4ge1xyXG4gICAgLy8gYXNzaWduaW5nIHRoZSBsaXN0IHRvIHRlbXAgdmFyaWFibGVcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uaXRlbXRhYmxlXTtcclxuXHJcbiAgICAvLyByZW1vdmluZyB0aGUgZWxlbWVudCB1c2luZyBzcGxpY2VcclxuICAgIHRlbXAuc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgLy8gdXBkYXRpbmcgdGhlIGxpc3RcclxuICAgIHNldGl0ZW10YWJsZSh0ZW1wKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBzZXR0YWJsZShbXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2F2ZXRhYmxlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIC8vIHZhbHVlY2hrID0gZ2V0UmFuZG9tSW50KDMwMDApXHJcbiAgICBsZXQgemF6YSA9IGl0ZW10YWJsZTtcclxuICAgIC8vIHNldHRhYmxlKGl0ZW10YWJsZSlcclxuICAgIHNldG1hcHAoWy4uLm1hcHAsaXRlbXRhYmxlXSk7XHJcbiAgICBzZXRpdGVtdGFibGUoe1xyXG4gICAgICBjMTogXCJcIixcclxuICAgICAgYzI6IFwiXCIsXHJcbiAgICAgIGMzOiBcIlwiLFxyXG4gICAgICBjNDogXCJcIixcclxuICAgICAgYzU6IFwiXCIsXHJcbiAgICAgIGM2OiBcIlwiLFxyXG4gICAgICBjNzogXCJcIixcclxuICAgICAgYzg6IFwiXCIsXHJcbiAgICAgIGM5OiBcIlwiLFxyXG4gICAgICBjMTA6IFwiXCIsXHJcbiAgICAgIGMxMTogXCJcIixcclxuICAgIH0pXHJcbiAgICBzZXRpc0Nsb3NlKGZhbHNlKVxyXG4gICAgY29uc29sZS5sb2cobWFwcCk7XHJcbiAgfTtcclxuICBjb25zdCBbdGFibGV6YSwgc2V0dGFibGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSwgZSkgPT4ge1xyXG4gICAgaXRlbXRhYmxlW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtdGFibGUpO1xyXG4gIH07XHJcbiBcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VkYXRhID0gKG5hbWUsIGUpID0+IHtcclxuICAgIGl0ZW1kYXRhW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtZGF0YSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHNhdmVhcGlwbyA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBpbnZvaWNFX05POiBpdGVtZGF0YS5pbnZvaWNFX05PLFxyXG4gICAgICBpbnZvaWNFX0RBVEU6IGl0ZW1kYXRhLmludm9pY0VfREFURSxcclxuICAgICAgcmVtYXJrOiBpdGVtZGF0YS5yZW1hcmssXHJcbiAgICAgIGRpc2NvdW5UX1BFUkNFTlRBR0U6IE51bWJlcihpdGVtZGF0YS5kaXNjb3VuVF9QRVJDRU5UQUdFKSxcclxuICAgICAgZGlzY291blRfQkFIVDogTnVtYmVyKGl0ZW1kYXRhLmRpc2NvdW5UX0JBSFQpLFxyXG4gICAgICB2YXQ6IE51bWJlcihpdGVtZGF0YS52YXQpLFxyXG4gICAgICB0b3RhTF9BTU9VTlQ6IE51bWJlcihpdGVtZGF0YS50b3RhTF9BTU9VTlQpLFxyXG4gICAgICBwcm9kdWNUX05POiBpdGVtZGF0YS5wcm9kdWNUX05PLFxyXG4gICAgICBwT19OTzogaXRlbWRhdGEucE9fTk8sXHJcbiAgICAgIHRvdGFsOiBOdW1iZXIoaXRlbWRhdGEudG90YWwpLFxyXG4gICAgICB2ZW5kb1JfTkFNRTogaXRlbWRhdGEudmVuZG9SX05BTUUsXHJcbiAgICAgIGxvY2F0aW9uOiBpdGVtZGF0YS5sb2NhdGlvbixcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gZWRpX2FzbihkYXRhKS50aGVuKGRhdGEgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIFJvdXRlci5wdXNoKCcvcmVnaXN0ZXIvaW5mb3JtYXRpb24nKVxyXG4gIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgY29uc29sZS5sb2coJ2dnd3AnKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnNTUnKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnNvbGUubG9nKG1hcHAsbWFwcC5sZW5ndGgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0Nsb3NlZiA9PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC00eGwgbXQtNSB0ZXh0LXBpbmstODAwIFwiPlxyXG4gICAgICAgICAgICAgICAg4Lij4Liy4Lii4LiB4Liy4Lij4Liq4LmI4LiH4LiC4Lit4LiHXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC0zeGwgbXQtMiB0ZXh0LWdyYXktNjAwIFwiPlxyXG4gICAgICAgICAgICAgICAgSW52b2ljZSBzZW5kIGxpc3RcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1lbmQgdGV4dC00eGwgbXQtNSBtci01IFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgaG92ZXI6dGV4dC1waW5rICB0ZXh0LXBpbmstNzAwIGZvbnQtYm9sZCB1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlZigzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg4Liq4Lij4LmJ4Liy4LiH4Lij4Liy4Lii4LiB4Liy4LijICtcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgIG10LTIgICBtci01IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbS0yIGl0ZW0tY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZXJzb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXBpbmstODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1sLTNcIiB0eXBlPVwiZGF0ZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZXJzb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXBpbmstODAwXCI+ZnJvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtbC0zXCIgdHlwZT1cImRhdGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbWwtMiB0ZXh0LXBpbmstODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtbC0zXCIgdHlwZT1cImRhdGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciAgdGV4dC1waW5rLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBtbC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW5hY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG1sLTIgdGV4dC1waW5rLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgICBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vIGRhdGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Tm8gZGF0YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwICBob3ZlcjpiZy1waW5rLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4olxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guIdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4p+C4seC4meC4l+C4teC5iOC5g+C4muC4quC5iOC4h+C4guC4reC4h1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKrguJbguLLguJnguLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEphbmUgQ29vcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIGphbmUuY29vcGVyQGV4YW1wbGUuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUE8gMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMvMDMvNjN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguK3guLLguITguLLguKPguKrguLDguK3guLLguJR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlZigyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1waW5rLTgwMCAgdy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQ2xvc2VmID09IDIpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIG10LTUgbWwtMTAgbGVmdC0wIHRvcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldGlzQ2xvc2VmKDEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1mdWxsIGgtMTEgdy0xMSBiZy1waW5rLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNiBoLTYgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDE5bC03LTcgNy03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtNHhsIG10LTUgdGV4dC1waW5rLTgwMCBcIj5cclxuICAgICAgICAgICAgICAgIOC5g+C4muC4o+C4seC4muC4guC4reC4hyAoSU4pXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC5gOC4peC4guC4l+C4teC5iOC5g+C4muC4quC4seC5iOC4h+C4i+C4t+C5ieC4rSA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNVwiPjAwMDAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+MDAwMDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4oiA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNVwiPjAwMDAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guIcgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTVcIj4xMi8xMi8xMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4LiK4Li34LmI4Lit4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4LiiIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+4Liq4Lih4Lio4Lix4LiB4LiU4Li04LmMPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01XCI+4LiV4Li24LiB4Liq4Liw4Lit4Liy4LiUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG92ZXJmbG93LWhpZGRlbiBib3JkZXItZ3JheS0yMDAgc206cm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIEdQVVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguKvguLHguKogVU5TUFNDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBUTVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFyIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHctMS8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiK4Li34LmI4Lit4Lii4LiyIC8g4LmA4Lin4LiK4Lig4Lix4LiT4LiX4LmMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4peC4tOC4lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lin4Lix4LiZ4LiX4Li14LmI4Lic4Lil4Li04LiVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiAgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4iOC4s+C4meC4p+C4mVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lir4LiZ4LmI4Lin4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguJXguYjguK3guKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4luC4uOC4h+C4oeC4t+C4rXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC8xMC82NHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLzEwLzY0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiW4Li44LiH4Lih4Li34Lite1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLzEwLzY0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAvMTAvNjR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguJbguLjguIfguKHguLfguK17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAxe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAvMTAvNjR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC8xMC82NHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgbWwtNSBtdC01IG1yLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1sZWZ0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lir4Lih4Liy4Lii4LmA4Lir4LiV4Li4IC1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4suC4hOC4suC4o+C4p+C4oSAo4LmE4Lih4LmI4Lij4Lin4LihIFZBVCl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVkFUX0FNT1VOVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xIGdhcC0zIG10LTUgbXItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4LmA4Lib4Lit4Lij4LmM4LmA4LiL4LmH4LiZ4LiV4LmMe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVkFUX0FNT1VOVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4Lia4Liy4LiXe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJWQVRfQU1PVU5UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICBWQVR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlZBVF9BTU9VTlRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Liy4LiE4Liy4Lij4Lin4Lihe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJWQVRfQU1PVU5UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzAzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNDbG9zZWYgPT0gMykge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgbXQtNSBtbC0xMCBsZWZ0LTAgdG9wLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0aXNDbG9zZWYoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgaC0xMSB3LTExIGJnLXBpbmstODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTlsLTctNyA3LTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1lbmQgIG1yLTEwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4reC4seC4nuC5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTIgYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4lOC4suC4p+C4q+C5jOC5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LTR4bCBtdC01IHRleHQtcGluay04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICDguYPguJrguKPguLHguJrguILguK3guIcgKElOKVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImludm9pY0VfTk9cIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguYDguKXguILguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guId7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcInByb2R1Y1RfTk9cIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4Liq4Lic4Li54LmJ4LiI4Liz4Lir4LiZ4LmI4Liy4Liie1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIuC4o+C4q+C4seC4quC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4olwiICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZWRhdGEoXCJwT19OT1wiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguYPguJrguKrguYjguIfguILguK3guId7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4Lin4Lix4LiZ4LiX4Li14LmI4LmD4Lia4Liq4LmI4LiH4LiC4Lit4LiHXCIgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwiaW52b2ljRV9EQVRFXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4iuC4t+C5iOC4reC4nOC4ueC5ieC4iOC4s+C4q+C4meC5iOC4suC4ontcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGlucHV0ICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidmVuZG9SX05BTUVcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCLguIrguLfguYjguK3guJzguLnguYnguIjguLPguKvguJnguYjguLLguKJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguKrguJbguLLguJfguLXguYjguKrguYjguIfguKHguK3guJp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwi4Liq4LiW4Liy4LiX4Li14LmI4Liq4LmI4LiH4Lih4Lit4LiaXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImxvY2F0aW9uXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1lbmQgIG1yLTEwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRpc0Nsb3NlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgIGhvdmVyOmJnLXBpbmstNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguILguYnguK3guKHguLnguKXguJXguLLguKPguLLguIdcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1ncmF5LTIwMCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1yIHRleHQtYmFzZSBmb250LW1lZGl1bSAgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKPguKvguLHguKogR1BVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBVTlNQU0NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIFRNVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXIgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdy0xLzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguIrguLfguYjguK3guKLguLIgLyDguYDguKfguIrguKDguLHguJPguJfguYxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4Liq4Lic4Lil4Li04LiVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguJzguKXguLTguJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iICB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4p+C4seC4meC4l+C4teC5iOC4q+C4oeC4lOC4reC4suC4ouC4uFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGJvcmRlci1iIGJvcmRlci1yIHRleHQtcGluay04MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiI4Liz4LiZ4Lin4LiZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWIgYm9yZGVyLXIgdGV4dC1waW5rLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LW1lZGl1bSBib3JkZXItYiBib3JkZXItciB0ZXh0LXBpbmstODAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4o+C4suC4hOC4suC4leC5iOC4reC4q+C4meC5iOC4p+C4olxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAodGFibGV6YSAhPSB1bmRlZmluZWQpID9cclxuICAgICAgICB0YWJsZXphLm1hcChwcm9qZWN0cyA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6JydcclxuICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gIHRhYmxlemEubWFwKHNkc2Q9PihcclxuICAgIDw+PC8+XHJcbiAgKSlcclxufSAqL31cclxue1xyXG4gIG1hcHAubWFwKChkYXRhKT0+KFxyXG48dHI+XHJcbjx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzF9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzJ9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzN9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzR9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzV9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzZ9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntkYXRhLmM3fSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57ZGF0YS5jOH0gPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzl9PC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYzEwfSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57ZGF0YS5jMTF9IDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgKSlcclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjAwMDAxIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MDAwMDEgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgYm9yZGVyLXIgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj4wMDAwMSA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00ICBib3JkZXItciB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjAwMDAxIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+4LiW4Li44LiH4Lih4Li34LitIDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgIGJvcmRlci1yIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MDAwMDEgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAvMTAvNjQgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAvMTAvNjQgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MTAwMDwvZGl2PiAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgICB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPjIgPC9kaXY+ICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+MiA8L2Rpdj4gICA8L3RkPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0xMCBtbC0xMCBtci0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1zcGFuLTUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1sZWZ0ICB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDguKvguKHguLLguKLguYDguKvguJXguLhcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCI2MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwicmVtYXJrXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Lij4Liy4LiE4Liy4Lij4Lin4LihICjguYTguKHguYjguKPguKfguKEgVkFUKXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZWRhdGEoXCJ0b3RhbFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Liq4LmI4Lin4LiZ4Lil4LiUIC0g4LmA4Lib4Lit4Lij4LmM4LmA4LiL4LmH4LiZ4LiV4LmMe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4Lix4LmI4LiH4LiL4Li34LmJ4LitXCIgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlZGF0YShcImRpc2NvdW5UX1BFUkNFTlRBR0VcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguKrguYjguKfguJnguKXguJQgLSDguJrguLLguJdcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwiZGlzY291blRfQkFIVFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCLguYDguKXguILguJfguLXguYjguYPguJrguKrguLHguYjguIfguIvguLfguYnguK1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVkFUe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidmF0XCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIuC5gOC4peC4guC4l+C4teC5iOC5g+C4muC4quC4seC5iOC4h+C4i+C4t+C5ieC4rVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBib3JkZXItcGluay03MDAgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguKPguKfguKF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VkYXRhKFwidG90YWxcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwi4LmA4Lil4LiC4LiX4Li14LmI4LmD4Lia4Liq4Lix4LmI4LiH4LiL4Li34LmJ4LitXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJvcmRlci1waW5rLTcwMCBib3JkZXIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVhcGlwb30gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwICBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguJrguLHguJnguJfguLbguIFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBtbC00ICBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lii4LiB4LmA4Lil4Li04LiBXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCl9XHJcblxyXG4gICAgICB7aXNDbG9zZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZldGFibGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0aXNDbG9zZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LTN4bCBtdC01IHRleHQtcGluay04MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC5gOC4nuC4tOC5iOC4oeC4guC5ieC4reC4oeC4ueC4peC4leC4suC4o+C4suC4h1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIEdQVVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjMVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiR1BVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4qiBVTlNQU0NcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzJcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlVOU1BTQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lij4Lir4Lix4LiqIFRNVFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjM1wiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVE1UXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICBCQVIgQ09ERVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQkFSX0NPREVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4iuC4t+C5iOC4reC4ouC4siAvIOC5gOC4p+C4iuC4oOC4seC4k+C4l+C5jFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZW1lZGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4o+C4q+C4seC4quC4nOC4peC4tOC4lVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjNlwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZWV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICDguKfguLHguJnguJfguLXguYjguJzguKXguLTguJVcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzdcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcImM4XCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlZW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UgbXQtNSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4iOC4s+C4meC4p+C4mVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJjOVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkICBib3JkZXItcGluay03MDAgYm9yZGVyICB0ZXh0LWdyYXktOTAwICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtYmFzZSBtdC01IGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lir4LiZ4LmI4Lin4LiiXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcImMxMFwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCAgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgIGJvcmRlci1waW5rLTcwMCBib3JkZXIgIHRleHQtZ3JheS05MDAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgdGV4dC1iYXNlIG10LTUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgICAgICDguKPguLLguITguLLguJXguYjguK3guKvguJnguYjguKfguKJcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwiYzExXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleHRjb3VudCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCAgYm9yZGVyLXBpbmstNzAwIGJvcmRlciAgdGV4dC1ncmF5LTkwMCAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4muC4seC4meC4l+C4tuC4gVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldGlzQ2xvc2UoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgbWwtNCAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguKLguIHguYDguKXguLTguIFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9