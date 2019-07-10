webpackHotUpdate_N_E("pages/signup",{

/***/ "./src/context/user-info.tsx":
/*!***********************************!*\
  !*** ./src/context/user-info.tsx ***!
  \***********************************/
/*! exports provided: UserInfoContext, UserInfoProvider, useUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoContext", function() { return UserInfoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoProvider", function() { return UserInfoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserInfo", function() { return useUserInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\context\\user-info.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var UserInfoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
UserInfoContext.displayName = 'UserInfoContext';
var UserInfoProvider = function UserInfoProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      phoneNumber = _useState[0],
      setPhoneNumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      verificationCode = _useState2[0],
      setVerificationCode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      userName = _useState3[0],
      setUserName = _useState3[1];

  var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      phoneNumber: phoneNumber,
      setPhoneNumber: setPhoneNumber,
      verificationCode: verificationCode,
      setVerificationCode: setVerificationCode,
      userName: userName,
      setUserName: setUserName
    };
  }, [phoneNumber, setPhoneNumber, verificationCode, setVerificationCode, userName, setUserName]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserInfoContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(UserInfoProvider, "AaDo0qLXJ5cRkS7WyGyOYwPVADI=");

_c = UserInfoProvider;
var useUserInfo = function useUserInfo() {
  _s2();

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(UserInfoContext);

  if (context === undefined) {
    throw new Error('useUserInfo hook must be used within a UserInfoProvider component');
  }

  return context;
};

_s2(useUserInfo, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "UserInfoProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvdXNlci1pbmZvLnRzeCJdLCJuYW1lcyI6WyJVc2VySW5mb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJVc2VySW5mb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwic2V0VmVyaWZpY2F0aW9uQ29kZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ2YWx1ZSIsInVzZU1lbW8iLCJ1c2VVc2VySW5mbyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdPLElBQU1BLGVBQWUsZ0JBQUdDLDJEQUFhLENBQzFDLEVBRDBDLENBQXJDO0FBSVBELGVBQWUsQ0FBQ0UsV0FBaEIsR0FBOEIsaUJBQTlCO0FBRU8sSUFBTUMsZ0JBQW9CLEdBQUcsU0FBdkJBLGdCQUF1QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FETTtBQUFBLE1BQzdDQyxXQUQ2QztBQUFBLE1BQ2hDQyxjQURnQzs7QUFBQSxtQkFFSkYsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FGSjtBQUFBLE1BRTdDRyxnQkFGNkM7QUFBQSxNQUUzQkMsbUJBRjJCOztBQUFBLG1CQUdwQkosc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FIWTtBQUFBLE1BRzdDSyxRQUg2QztBQUFBLE1BR25DQyxXQUhtQzs7QUFLcEQsTUFBTUMsS0FBSyxHQUFHQyxxREFBTyxDQUNuQjtBQUFBLFdBQU87QUFDTFAsaUJBQVcsRUFBWEEsV0FESztBQUVMQyxvQkFBYyxFQUFkQSxjQUZLO0FBR0xDLHNCQUFnQixFQUFoQkEsZ0JBSEs7QUFJTEMseUJBQW1CLEVBQW5CQSxtQkFKSztBQUtMQyxjQUFRLEVBQVJBLFFBTEs7QUFNTEMsaUJBQVcsRUFBWEE7QUFOSyxLQUFQO0FBQUEsR0FEbUIsRUFTbkIsQ0FDRUwsV0FERixFQUVFQyxjQUZGLEVBR0VDLGdCQUhGLEVBSUVDLG1CQUpGLEVBS0VDLFFBTEYsRUFNRUMsV0FORixDQVRtQixDQUFyQjtBQW1CQSxzQkFDRSxxRUFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRUMsS0FBakM7QUFBQSxjQUNHUjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBN0JNOztHQUFNRCxnQjs7S0FBQUEsZ0I7QUErQk4sSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBd0I7QUFBQTs7QUFFakQsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDaEIsZUFBRCxDQUExQjs7QUFDQSxNQUFJZSxPQUFPLEtBQUtFLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSUMsS0FBSixDQUNKLG1FQURJLENBQU47QUFHRDs7QUFDRCxTQUFPSCxPQUFQO0FBQ0QsQ0FUTTs7SUFBTUQsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuN2YyY2UyMDRmMmNiMjZiMGQ2MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlckluZm9Db250ZXh0IHtcclxuICBwaG9uZU51bWJlcjogc3RyaW5nIHwgbnVsbFxyXG4gIHNldFBob25lTnVtYmVyOiAocGhvbmU6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxuICB1c2VyTmFtZTogc3RyaW5nIHwgbnVsbFxyXG4gIHNldFVzZXJOYW1lOiAodXNlck5hbWU6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxuICB2ZXJpZmljYXRpb25Db2RlOiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0VmVyaWZpY2F0aW9uQ29kZTogKHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVVzZXJJbmZvQ29udGV4dD4oXHJcbiAge30gYXMgSVVzZXJJbmZvQ29udGV4dFxyXG4pXHJcblxyXG5Vc2VySW5mb0NvbnRleHQuZGlzcGxheU5hbWUgPSAnVXNlckluZm9Db250ZXh0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvUHJvdmlkZXI6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtwaG9uZU51bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbdmVyaWZpY2F0aW9uQ29kZSwgc2V0VmVyaWZpY2F0aW9uQ29kZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgIHNldFBob25lTnVtYmVyLFxyXG4gICAgICB2ZXJpZmljYXRpb25Db2RlLFxyXG4gICAgICBzZXRWZXJpZmljYXRpb25Db2RlLFxyXG4gICAgICB1c2VyTmFtZSxcclxuICAgICAgc2V0VXNlck5hbWUsXHJcbiAgICB9KSxcclxuICAgIFtcclxuICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgIHNldFBob25lTnVtYmVyLFxyXG4gICAgICB2ZXJpZmljYXRpb25Db2RlLFxyXG4gICAgICBzZXRWZXJpZmljYXRpb25Db2RlLFxyXG4gICAgICB1c2VyTmFtZSxcclxuICAgICAgc2V0VXNlck5hbWUsXHJcbiAgICBdXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJJbmZvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJJbmZvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVc2VySW5mbyA9ICgpOiBJVXNlckluZm9Db250ZXh0ID0+IHtcclxuXHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckluZm9Db250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ3VzZVVzZXJJbmZvIGhvb2sgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFVzZXJJbmZvUHJvdmlkZXIgY29tcG9uZW50J1xyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=