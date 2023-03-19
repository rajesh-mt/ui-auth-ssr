"use strict";
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 5042:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

__webpack_require__(4473);
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


/***/ })

};
;