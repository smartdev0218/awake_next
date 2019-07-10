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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZlcmlmaWNhdGlvbi50c3giXSwibmFtZXMiOlsiVmVyaWZpY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQXV0aCIsImNvbmZpcm1TTVMiLCJ1c2VVc2VySW5mbyIsInNldFBob25lTnVtYmVyIiwidXNlck5hbWUiLCJ2ZXJpZmljYXRpb25Db2RlIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tSZXNlbmQiLCJwdXNoIiwiaGFuZGxlVmVyaWZ5Q29kZSIsImNvZGUiLCJzbXNDb2RlIiwidmVyaWZpY2F0aW9uSWQiLCJ0aGVuIiwicmVzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFzQixHQUFHLFNBQXpCQSxZQUF5QixHQUFNO0FBQUE7O0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1DLGlCQUVaQyw0REFBTyxFQUZLO0FBQUEsTUFFM0JDLFVBRjJCLFlBRTNCQSxVQUYyQjs7QUFBQSxxQkFHaUNDLHFFQUFXLEVBSDVDO0FBQUEsTUFHM0JDLGNBSDJCLGdCQUczQkEsY0FIMkI7QUFBQSxNQUdYQyxRQUhXLGdCQUdYQSxRQUhXO0FBQUEsTUFHREMsZ0JBSEMsZ0JBR0RBLGdCQUhDO0FBQUEsTUFHaUJDLFdBSGpCLGdCQUdpQkEsV0FIakI7O0FBSW5DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sNkRBQVo7O0FBRUEsTUFBTU8saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCTixrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBTCxVQUFNLENBQUNZLElBQVAsQ0FBWSxRQUFaO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBVTtBQUNqQ1gsY0FBVSxDQUFDO0FBQ1RZLGFBQU8sRUFBRUQsSUFEQTtBQUVURSxvQkFBYyxFQUFFVCxnQkFGUDtBQUdUQyxpQkFBVyxFQUFFQSxXQUhKO0FBSVRGLGNBQVEsRUFBRUE7QUFKRCxLQUFELENBQVYsQ0FNR1csSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxhQUFPLENBQUNDLEdBQVIsQ0FBWVEsR0FBWjtBQUNELEtBUkgsV0FTUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUyxLQUFaO0FBQ0QsS0FYSDtBQVlELEdBYkQ7O0FBZUEsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUcscUJBQVMsRUFBQyxhQUFiO0FBQUEsc0JBQTRCWDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBa0Isa0JBQU0sRUFBRSxDQUExQjtBQUE2QixzQkFBVSxFQUFFSztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0UscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxFQUFDLGNBQWQ7QUFBNkIsbUJBQU8sRUFBRUY7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxpQ0FDRTtBQUFBLDhDQUNpQixHQURqQixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxhQURaO0FBRUUscUJBQU8sRUFBRTtBQUFBLHVCQUFNWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQSxlQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkUscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXJERDs7R0FBTWIsWTtVQUNXRSxxRCxFQUNRQyxvRCxFQUM2Q0UsNkQ7OztLQUhoRUwsWTtBQXVEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVyaWZpY2F0aW9uLmM2NzhmN2MzNzAyY2M0NzA3NzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvYXV0aCdcbmltcG9ydCB7IHVzZVVzZXJJbmZvIH0gZnJvbSAnY29udGV4dC91c2VyLWluZm8nXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgVGV4dDEyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBWZXJpZmljYXRpb25Gb3JtIH0gZnJvbSAnY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IFZlcmlmaWNhdGlvbjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY29uZmlybVNNUyB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IHsgc2V0UGhvbmVOdW1iZXIsIHVzZXJOYW1lLCB2ZXJpZmljYXRpb25Db2RlLCBwaG9uZU51bWJlciB9ID0gdXNlVXNlckluZm8oKVxuICBjb25zb2xlLmxvZyh1c2VVc2VySW5mbyk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tSZXNlbmQgPSAoKSA9PiB7XG4gICAgc2V0UGhvbmVOdW1iZXIoJycpXG4gICAgcm91dGVyLnB1c2goJy9waG9uZScpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWZXJpZnlDb2RlID0gKGNvZGUpID0+IHtcbiAgICBjb25maXJtU01TKHtcbiAgICAgIHNtc0NvZGU6IGNvZGUsXG4gICAgICB2ZXJpZmljYXRpb25JZDogdmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgIHBob25lTnVtYmVyOiBwaG9uZU51bWJlcixcbiAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlZlcmlmaWNhdGlvbjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+V2Ugc2VudCB5b3UgYW4gU01TIGNvZGUgb24gbnVtYmVyLjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBob25lbnVtYmVyXCI+e3Bob25lTnVtYmVyfTwvcD5cbiAgICAgICAgICAgIDxWZXJpZmljYXRpb25Gb3JtIGZpZWxkcz17NH0gb25Db21wbGV0ZT17aGFuZGxlVmVyaWZ5Q29kZX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJSZS1zZW5kIGNvZGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1Jlc2VuZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDYW4ndCBsb2dpbj8g4oCieycgJ31cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmFuZ2UtdGV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8VGV4dDEyIHRleHQ9eydQcml2YWN5IHBvbGljeSAtIFRlcm1zIG9mIHVzZSd9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=