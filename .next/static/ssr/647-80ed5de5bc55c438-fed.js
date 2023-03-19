"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(473);

const Home = (props)=>{
    const { joke  } = props;
    console.log("[ui-auth] [Home] --- props ", props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "This is from UI Auth SSR App"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: joke.value
            })
        ]
    });
};
Home.getInitialProps = async (ctx)=>{
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await res.json();
    console.log("[ui-auth] [Home][getInitialProps] --- joke ", joke);
    return {
        joke
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ 473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// this is needed to ensure webpack does not attempt to tree shake unused modules. Since these should always come from host
__webpack_require__(497);
__webpack_require__(137);
__webpack_require__(868);
__webpack_require__(453);
__webpack_require__(839);
__webpack_require__(108);
__webpack_require__(479);
__webpack_require__(590);
__webpack_require__(882);
if (false) {}
module.exports = {};
//# sourceMappingURL=include-defaults.js.map

/***/ })

};
;