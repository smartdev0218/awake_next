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
        alert(res.user);
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
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "We sent you an SMS code on number."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "phonenumber",
            children: phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_form__WEBPACK_IMPORTED_MODULE_6__["VerificationForm"], {
            fields: 4,
            onComplete: handleVerifyCode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            title: "Re-send code",
            onClick: handleClickResend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZlcmlmaWNhdGlvbi50c3giXSwibmFtZXMiOlsiVmVyaWZpY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQXV0aCIsImNvbmZpcm1TTVMiLCJ1c2VVc2VySW5mbyIsInNldFBob25lTnVtYmVyIiwidXNlck5hbWUiLCJ2ZXJpZmljYXRpb25Db2RlIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tSZXNlbmQiLCJwdXNoIiwiaGFuZGxlVmVyaWZ5Q29kZSIsImNvZGUiLCJzbXNDb2RlIiwidmVyaWZpY2F0aW9uSWQiLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJ1c2VybmFtZSIsImFsZXJ0IiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLEdBQU07QUFBQTs7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEbUMsaUJBRVpDLDREQUFPLEVBRks7QUFBQSxNQUUzQkMsVUFGMkIsWUFFM0JBLFVBRjJCOztBQUFBLHFCQUdpQ0MscUVBQVcsRUFINUM7QUFBQSxNQUczQkMsY0FIMkIsZ0JBRzNCQSxjQUgyQjtBQUFBLE1BR1hDLFFBSFcsZ0JBR1hBLFFBSFc7QUFBQSxNQUdEQyxnQkFIQyxnQkFHREEsZ0JBSEM7QUFBQSxNQUdpQkMsV0FIakIsZ0JBR2lCQSxXQUhqQjs7QUFJbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTiw2REFBWjs7QUFFQSxNQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJOLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FMLFVBQU0sQ0FBQ1ksSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFFBQUlSLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkgsZ0JBQVUsQ0FBQztBQUNUWSxlQUFPLEVBQUVELElBREE7QUFFVEUsc0JBQWMsRUFBRVQsZ0JBRlA7QUFHVEMsbUJBQVcsRUFBRUE7QUFISixPQUFELENBQVYsQ0FLR1MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxlQUFPLENBQUNDLEdBQVIsQ0FBWVEsR0FBWjtBQUNELE9BUEgsV0FRUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUyxLQUFaO0FBQ0QsT0FWSDtBQVdELEtBWkQsTUFhSztBQUNIaEIsZ0JBQVUsQ0FBQztBQUNUWSxlQUFPLEVBQUVELElBREE7QUFFVEUsc0JBQWMsRUFBRVQsZ0JBRlA7QUFHVEMsbUJBQVcsRUFBRUEsV0FISjtBQUlUWSxnQkFBUSxFQUFFZDtBQUpELE9BQUQsQ0FBVixDQU1HVyxJQU5ILENBTVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULGVBQU8sQ0FBQ0MsR0FBUixDQUFZUSxHQUFaO0FBQ0FHLGFBQUssQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQUw7QUFDRCxPQVRILFdBVVMsVUFBQ0gsS0FBRCxFQUFXO0FBQ2hCVixlQUFPLENBQUNDLEdBQVIsQ0FBWVMsS0FBWjtBQUNELE9BWkg7QUFhRDtBQUNGLEdBN0JEOztBQStCQSxzQkFDRSxxRUFBQyx3REFBRDtBQUFBLDJCQUNFLHFFQUFDLDJEQUFEO0FBQVcsY0FBUSxFQUFDLElBQXBCO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFDLGFBQWI7QUFBQSxzQkFBNEJYO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSxxRUFBQyxnRUFBRDtBQUFrQixrQkFBTSxFQUFFLENBQTFCO0FBQTZCLHNCQUFVLEVBQUVLO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSxxRUFBQyx3REFBRDtBQUFRLGlCQUFLLEVBQUMsY0FBZDtBQUE2QixtQkFBTyxFQUFFRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGlDQUNFO0FBQUEsOENBQ2lCLEdBRGpCLGVBRUU7QUFDRSx1QkFBUyxFQUFDLGFBRFo7QUFFRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1YLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZLFNBQVosQ0FBTjtBQUFBLGVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXFCRSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBckVEOztHQUFNYixZO1VBQ1dFLHFELEVBQ1FDLG9ELEVBQzZDRSw2RDs7O0tBSGhFTCxZO0FBdUVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZXJpZmljYXRpb24uYTRmZTcxNWQxNTU0MGEwYjBjNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9hdXRoJ1xuaW1wb3J0IHsgdXNlVXNlckluZm8gfSBmcm9tICdjb250ZXh0L3VzZXItaW5mbydcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBUZXh0MTIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IFZlcmlmaWNhdGlvbkZvcm0gfSBmcm9tICdjb21wb25lbnRzL2Zvcm0nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL2xheW91dCdcblxuY29uc3QgVmVyaWZpY2F0aW9uOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjb25maXJtU01TIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyBzZXRQaG9uZU51bWJlciwgdXNlck5hbWUsIHZlcmlmaWNhdGlvbkNvZGUsIHBob25lTnVtYmVyIH0gPSB1c2VVc2VySW5mbygpXG4gIGNvbnNvbGUubG9nKHVzZVVzZXJJbmZvKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1Jlc2VuZCA9ICgpID0+IHtcbiAgICBzZXRQaG9uZU51bWJlcignJylcbiAgICByb3V0ZXIucHVzaCgnL3Bob25lJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZlcmlmeUNvZGUgPSAoY29kZSkgPT4ge1xuICAgIGlmICh1c2VyTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlybVNNUyh7XG4gICAgICAgIHNtc0NvZGU6IGNvZGUsXG4gICAgICAgIHZlcmlmaWNhdGlvbklkOiB2ZXJpZmljYXRpb25Db2RlLFxuICAgICAgICBwaG9uZU51bWJlcjogcGhvbmVOdW1iZXIsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uZmlybVNNUyh7XG4gICAgICAgIHNtc0NvZGU6IGNvZGUsXG4gICAgICAgIHZlcmlmaWNhdGlvbklkOiB2ZXJpZmljYXRpb25Db2RlLFxuICAgICAgICBwaG9uZU51bWJlcjogcGhvbmVOdW1iZXIsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICBhbGVydChyZXMudXNlcilcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlZlcmlmaWNhdGlvbjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+V2Ugc2VudCB5b3UgYW4gU01TIGNvZGUgb24gbnVtYmVyLjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBob25lbnVtYmVyXCI+e3Bob25lTnVtYmVyfTwvcD5cbiAgICAgICAgICAgIDxWZXJpZmljYXRpb25Gb3JtIGZpZWxkcz17NH0gb25Db21wbGV0ZT17aGFuZGxlVmVyaWZ5Q29kZX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJSZS1zZW5kIGNvZGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1Jlc2VuZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDYW4ndCBsb2dpbj8g4oCieycgJ31cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmFuZ2UtdGV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8VGV4dDEyIHRleHQ9eydQcml2YWN5IHBvbGljeSAtIFRlcm1zIG9mIHVzZSd9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=