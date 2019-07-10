webpackHotUpdate_N_E("pages/verification",{

/***/ "./src/pages/verification.tsx":
/*!************************************!*\
  !*** ./src/pages/verification.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/auth */ "./src/context/auth.tsx");
/* harmony import */ var context_user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/user-info */ "./src/context/user-info.tsx");
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common */ "./src/components/common/index.ts");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/form */ "./src/components/form/index.ts");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.ts");


var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\verification.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Verification = function Verification() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useAuth = Object(context_auth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])(),
      confirmSMS = _useAuth.confirmSMS;

  var _useUserInfo = Object(context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"])(),
      setPhoneNumber = _useUserInfo.setPhoneNumber,
      userName = _useUserInfo.userName,
      verificationCode = _useUserInfo.verificationCode,
      phoneNumber = _useUserInfo.phoneNumber;

  console.log(context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"]); // const handleClickResend = () => {
  //   setPhoneNumber('')
  //   router.push('/phone')
  // }

  var handleVerifyCode = function handleVerifyCode(code) {
    confirmSMS({
      smsCode: code,
      verificationId: verificationCode,
      phoneNumber: phoneNumber,
      userName: userName
    }).then(function (res) {
      console.log(res);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      maxWidth: "sm",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "title",
            children: "Verification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "We sent you an SMS code on number."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "phonenumber",
            children: phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_form__WEBPACK_IMPORTED_MODULE_6__["VerificationForm"], {
            fields: 4,
            onComplete: handleVerifyCode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            title: "Re-send code",
            onClick: handleClickResend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bottom-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Can't login? \u2022", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "orange-text",
              onClick: function onClick() {
                return router.push('/signup');
              },
              children: "Sign up for new user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(Verification, "OudQ7dMw7wQc8s2x7klwb7g/5iY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], context_auth__WEBPACK_IMPORTED_MODULE_3__["useAuth"], context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"]];
});

_c = Verification;
/* harmony default export */ __webpack_exports__["default"] = (Verification);

var _c;

$RefreshReg$(_c, "Verification");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZlcmlmaWNhdGlvbi50c3giXSwibmFtZXMiOlsiVmVyaWZpY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQXV0aCIsImNvbmZpcm1TTVMiLCJ1c2VVc2VySW5mbyIsInNldFBob25lTnVtYmVyIiwidXNlck5hbWUiLCJ2ZXJpZmljYXRpb25Db2RlIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVmVyaWZ5Q29kZSIsImNvZGUiLCJzbXNDb2RlIiwidmVyaWZpY2F0aW9uSWQiLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJoYW5kbGVDbGlja1Jlc2VuZCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFzQixHQUFHLFNBQXpCQSxZQUF5QixHQUFNO0FBQUE7O0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1DLGlCQUVaQyw0REFBTyxFQUZLO0FBQUEsTUFFM0JDLFVBRjJCLFlBRTNCQSxVQUYyQjs7QUFBQSxxQkFHaUNDLHFFQUFXLEVBSDVDO0FBQUEsTUFHM0JDLGNBSDJCLGdCQUczQkEsY0FIMkI7QUFBQSxNQUdYQyxRQUhXLGdCQUdYQSxRQUhXO0FBQUEsTUFHREMsZ0JBSEMsZ0JBR0RBLGdCQUhDO0FBQUEsTUFHaUJDLFdBSGpCLGdCQUdpQkEsV0FIakI7O0FBSW5DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sNkRBQVosRUFKbUMsQ0FNbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDakNULGNBQVUsQ0FBQztBQUNUVSxhQUFPLEVBQUVELElBREE7QUFFVEUsb0JBQWMsRUFBRVAsZ0JBRlA7QUFHVEMsaUJBQVcsRUFBRUEsV0FISjtBQUlURixjQUFRLEVBQUVBO0FBSkQsS0FBRCxDQUFWLENBTUdTLElBTkgsQ0FNUSxVQUFDQyxHQUFELEVBQVM7QUFDYlAsYUFBTyxDQUFDQyxHQUFSLENBQVlNLEdBQVo7QUFDRCxLQVJILFdBU1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtBQUNELEtBWEg7QUFZRCxHQWJEOztBQWVBLHNCQUNFLHFFQUFDLHdEQUFEO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFHLHFCQUFTLEVBQUMsYUFBYjtBQUFBLHNCQUE0QlQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLGdFQUFEO0FBQWtCLGtCQUFNLEVBQUUsQ0FBMUI7QUFBNkIsc0JBQVUsRUFBRUc7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLHFFQUFDLHdEQUFEO0FBQVEsaUJBQUssRUFBQyxjQUFkO0FBQTZCLG1CQUFPLEVBQUVPO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0U7QUFBQSw4Q0FDaUIsR0FEakIsZUFFRTtBQUNFLHVCQUFTLEVBQUMsYUFEWjtBQUVFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWxCLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQSxlQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkUscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXJERDs7R0FBTXBCLFk7VUFDV0UscUQsRUFDUUMsb0QsRUFDNkNFLDZEOzs7S0FIaEVMLFk7QUF1RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlcmlmaWNhdGlvbi5jZjI0MTdlYTljNDkyNWUwMzg5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdjb250ZXh0L2F1dGgnXG5pbXBvcnQgeyB1c2VVc2VySW5mbyB9IGZyb20gJ2NvbnRleHQvdXNlci1pbmZvJ1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIFRleHQxMiB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgVmVyaWZpY2F0aW9uRm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvZm9ybSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBWZXJpZmljYXRpb246IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNvbmZpcm1TTVMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7IHNldFBob25lTnVtYmVyLCB1c2VyTmFtZSwgdmVyaWZpY2F0aW9uQ29kZSwgcGhvbmVOdW1iZXIgfSA9IHVzZVVzZXJJbmZvKClcbiAgY29uc29sZS5sb2codXNlVXNlckluZm8pO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrUmVzZW5kID0gKCkgPT4ge1xuICAvLyAgIHNldFBob25lTnVtYmVyKCcnKVxuICAvLyAgIHJvdXRlci5wdXNoKCcvcGhvbmUnKVxuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlVmVyaWZ5Q29kZSA9IChjb2RlKSA9PiB7XG4gICAgY29uZmlybVNNUyh7XG4gICAgICBzbXNDb2RlOiBjb2RlLFxuICAgICAgdmVyaWZpY2F0aW9uSWQ6IHZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICBwaG9uZU51bWJlcjogcGhvbmVOdW1iZXIsXG4gICAgICB1c2VyTmFtZTogdXNlck5hbWVcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5WZXJpZmljYXRpb248L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPldlIHNlbnQgeW91IGFuIFNNUyBjb2RlIG9uIG51bWJlci48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwaG9uZW51bWJlclwiPntwaG9uZU51bWJlcn08L3A+XG4gICAgICAgICAgICA8VmVyaWZpY2F0aW9uRm9ybSBmaWVsZHM9ezR9IG9uQ29tcGxldGU9e2hhbmRsZVZlcmlmeUNvZGV9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiUmUtc2VuZCBjb2RlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tSZXNlbmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2FuJ3QgbG9naW4/IOKAonsnICd9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JhbmdlLXRleHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnbnVwJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIHVwIGZvciBuZXcgdXNlclxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPFRleHQxMiB0ZXh0PXsnUHJpdmFjeSBwb2xpY3kgLSBUZXJtcyBvZiB1c2UnfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpY2F0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9