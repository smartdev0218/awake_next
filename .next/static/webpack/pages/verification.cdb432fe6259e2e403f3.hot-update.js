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

  console.log(context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"]);

  var handleClickResend = function handleClickResend() {
    setPhoneNumber('');
    router.push('/phone');
  };

  var handleVerifyCode = function handleVerifyCode(code) {
    if (userName === null) {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber
      }).then(function (res) {
        console.log(res);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber,
        username: userName
      }).then(function (res) {
        console.log(res);
      })["catch"](function (error) {
        console.log(error);
      });
    }
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
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "We sent you an SMS code on number."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "phonenumber",
            children: phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_form__WEBPACK_IMPORTED_MODULE_6__["VerificationForm"], {
            fields: 4,
            onComplete: handleVerifyCode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            title: "Re-send code",
            onClick: handleClickResend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZlcmlmaWNhdGlvbi50c3giXSwibmFtZXMiOlsiVmVyaWZpY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQXV0aCIsImNvbmZpcm1TTVMiLCJ1c2VVc2VySW5mbyIsInNldFBob25lTnVtYmVyIiwidXNlck5hbWUiLCJ2ZXJpZmljYXRpb25Db2RlIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tSZXNlbmQiLCJwdXNoIiwiaGFuZGxlVmVyaWZ5Q29kZSIsImNvZGUiLCJzbXNDb2RlIiwidmVyaWZpY2F0aW9uSWQiLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLEdBQU07QUFBQTs7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEbUMsaUJBRVpDLDREQUFPLEVBRks7QUFBQSxNQUUzQkMsVUFGMkIsWUFFM0JBLFVBRjJCOztBQUFBLHFCQUdpQ0MscUVBQVcsRUFINUM7QUFBQSxNQUczQkMsY0FIMkIsZ0JBRzNCQSxjQUgyQjtBQUFBLE1BR1hDLFFBSFcsZ0JBR1hBLFFBSFc7QUFBQSxNQUdEQyxnQkFIQyxnQkFHREEsZ0JBSEM7QUFBQSxNQUdpQkMsV0FIakIsZ0JBR2lCQSxXQUhqQjs7QUFJbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTiw2REFBWjs7QUFFQSxNQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJOLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FMLFVBQU0sQ0FBQ1ksSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFFBQUlSLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkgsZ0JBQVUsQ0FBQztBQUNUWSxlQUFPLEVBQUVELElBREE7QUFFVEUsc0JBQWMsRUFBRVQsZ0JBRlA7QUFHVEMsbUJBQVcsRUFBRUE7QUFISixPQUFELENBQVYsQ0FLR1MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxlQUFPLENBQUNDLEdBQVIsQ0FBWVEsR0FBWjtBQUNELE9BUEgsV0FRUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxLQUFaO0FBQ0QsT0FWSDtBQVdELEtBWkQsTUFhSztBQUNIaEIsZ0JBQVUsQ0FBQztBQUNUWSxlQUFPLEVBQUVELElBREE7QUFFVEUsc0JBQWMsRUFBRVQsZ0JBRlA7QUFHVEMsbUJBQVcsRUFBRUEsV0FISjtBQUlUWSxnQkFBUSxFQUFFZDtBQUpELE9BQUQsQ0FBVixDQU1HVyxJQU5ILENBTVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULGVBQU8sQ0FBQ0MsR0FBUixDQUFZUSxHQUFaO0FBQ0QsT0FSSCxXQVNTLFVBQUNDLEtBQUQsRUFBVztBQUNoQlYsZUFBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7QUFDRCxPQVhIO0FBWUQ7QUFDRixHQTVCRDs7QUE4QkEsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUcscUJBQVMsRUFBQyxhQUFiO0FBQUEsc0JBQTRCWDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBa0Isa0JBQU0sRUFBRSxDQUExQjtBQUE2QixzQkFBVSxFQUFFSztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0UscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLGNBQWQ7QUFBNkIsbUJBQU8sRUFBRUY7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxpQ0FDRTtBQUFBLDhDQUNpQixHQURqQixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxhQURaO0FBRUUscUJBQU8sRUFBRTtBQUFBLHVCQUFNWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQSxlQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkUscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBFRDs7R0FBTWIsWTtVQUNXRSxxRCxFQUNRQyxvRCxFQUM2Q0UsNkQ7OztLQUhoRUwsWTtBQXNFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVyaWZpY2F0aW9uLmNkYjQzMmZlNjI1OWUyZTQwM2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvYXV0aCdcbmltcG9ydCB7IHVzZVVzZXJJbmZvIH0gZnJvbSAnY29udGV4dC91c2VyLWluZm8nXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgVGV4dDEyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBWZXJpZmljYXRpb25Gb3JtIH0gZnJvbSAnY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IFZlcmlmaWNhdGlvbjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY29uZmlybVNNUyB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IHsgc2V0UGhvbmVOdW1iZXIsIHVzZXJOYW1lLCB2ZXJpZmljYXRpb25Db2RlLCBwaG9uZU51bWJlciB9ID0gdXNlVXNlckluZm8oKVxuICBjb25zb2xlLmxvZyh1c2VVc2VySW5mbyk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tSZXNlbmQgPSAoKSA9PiB7XG4gICAgc2V0UGhvbmVOdW1iZXIoJycpXG4gICAgcm91dGVyLnB1c2goJy9waG9uZScpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWZXJpZnlDb2RlID0gKGNvZGUpID0+IHtcbiAgICBpZiAodXNlck5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpcm1TTVMoe1xuICAgICAgICBzbXNDb2RlOiBjb2RlLFxuICAgICAgICB2ZXJpZmljYXRpb25JZDogdmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbmZpcm1TTVMoe1xuICAgICAgICBzbXNDb2RlOiBjb2RlLFxuICAgICAgICB2ZXJpZmljYXRpb25JZDogdmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgICAgICB1c2VybmFtZTogdXNlck5hbWVcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5WZXJpZmljYXRpb248L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPldlIHNlbnQgeW91IGFuIFNNUyBjb2RlIG9uIG51bWJlci48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwaG9uZW51bWJlclwiPntwaG9uZU51bWJlcn08L3A+XG4gICAgICAgICAgICA8VmVyaWZpY2F0aW9uRm9ybSBmaWVsZHM9ezR9IG9uQ29tcGxldGU9e2hhbmRsZVZlcmlmeUNvZGV9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiUmUtc2VuZCBjb2RlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tSZXNlbmR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2FuJ3QgbG9naW4/IOKAonsnICd9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JhbmdlLXRleHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnbnVwJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIHVwIGZvciBuZXcgdXNlclxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPFRleHQxMiB0ZXh0PXsnUHJpdmFjeSBwb2xpY3kgLSBUZXJtcyBvZiB1c2UnfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpY2F0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9