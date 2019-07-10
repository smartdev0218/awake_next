webpackHotUpdate_N_E("pages/verification",{

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
  console.log(context);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvdXNlci1pbmZvLnRzeCJdLCJuYW1lcyI6WyJVc2VySW5mb0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJVc2VySW5mb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwic2V0VmVyaWZpY2F0aW9uQ29kZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ2YWx1ZSIsInVzZU1lbW8iLCJ1c2VVc2VySW5mbyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXTyxJQUFNQSxlQUFlLGdCQUFHQywyREFBYSxDQUMxQyxFQUQwQyxDQUFyQztBQUlQRCxlQUFlLENBQUNFLFdBQWhCLEdBQThCLGlCQUE5QjtBQUVPLElBQU1DLGdCQUFvQixHQUFHLFNBQXZCQSxnQkFBdUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQWdCLElBQWhCLENBRE07QUFBQSxNQUM3Q0MsV0FENkM7QUFBQSxNQUNoQ0MsY0FEZ0M7O0FBQUEsbUJBRUpGLHNEQUFRLENBQWdCLElBQWhCLENBRko7QUFBQSxNQUU3Q0csZ0JBRjZDO0FBQUEsTUFFM0JDLG1CQUYyQjs7QUFBQSxtQkFHcEJKLHNEQUFRLENBQWdCLElBQWhCLENBSFk7QUFBQSxNQUc3Q0ssUUFINkM7QUFBQSxNQUduQ0MsV0FIbUM7O0FBS3BELE1BQU1DLEtBQUssR0FBR0MscURBQU8sQ0FDbkI7QUFBQSxXQUFPO0FBQ0xQLGlCQUFXLEVBQVhBLFdBREs7QUFFTEMsb0JBQWMsRUFBZEEsY0FGSztBQUdMQyxzQkFBZ0IsRUFBaEJBLGdCQUhLO0FBSUxDLHlCQUFtQixFQUFuQkEsbUJBSks7QUFLTEMsY0FBUSxFQUFSQSxRQUxLO0FBTUxDLGlCQUFXLEVBQVhBO0FBTkssS0FBUDtBQUFBLEdBRG1CLEVBU25CLENBQ0VMLFdBREYsRUFFRUMsY0FGRixFQUdFQyxnQkFIRixFQUlFQyxtQkFKRixFQUtFQyxRQUxGLEVBTUVDLFdBTkYsQ0FUbUIsQ0FBckI7QUFtQkEsc0JBQ0UscUVBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVDLEtBQWpDO0FBQUEsY0FDR1I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTdCTTs7R0FBTUQsZ0I7O0tBQUFBLGdCO0FBK0JOLElBQU1XLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQXdCO0FBQUE7O0FBRWpELE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ2hCLGVBQUQsQ0FBMUI7QUFDQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaOztBQUNBLE1BQUlBLE9BQU8sS0FBS0ksU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJQyxLQUFKLENBQ0osbUVBREksQ0FBTjtBQUdEOztBQUNELFNBQU9MLE9BQVA7QUFDRCxDQVZNOztJQUFNRCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlcmlmaWNhdGlvbi42NjBkM2ZlNmUwMDIyN2Y1MDgxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VySW5mb0NvbnRleHQge1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0UGhvbmVOdW1iZXI6IChwaG9uZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG4gIHVzZXJOYW1lOiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0VXNlck5hbWU6ICh1c2VyTmFtZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG4gIHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZyB8IG51bGxcclxuICBzZXRWZXJpZmljYXRpb25Db2RlOiAodmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm9Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVXNlckluZm9Db250ZXh0PihcclxuICB7fSBhcyBJVXNlckluZm9Db250ZXh0XHJcbilcclxuXHJcblVzZXJJbmZvQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVc2VySW5mb0NvbnRleHQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm9Qcm92aWRlcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFt2ZXJpZmljYXRpb25Db2RlLCBzZXRWZXJpZmljYXRpb25Db2RlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgc2V0UGhvbmVOdW1iZXIsXHJcbiAgICAgIHZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHNldFZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHVzZXJOYW1lLFxyXG4gICAgICBzZXRVc2VyTmFtZSxcclxuICAgIH0pLFxyXG4gICAgW1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgc2V0UGhvbmVOdW1iZXIsXHJcbiAgICAgIHZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHNldFZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHVzZXJOYW1lLFxyXG4gICAgICBzZXRVc2VyTmFtZSxcclxuICAgIF1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckluZm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckluZm9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJJbmZvID0gKCk6IElVc2VySW5mb0NvbnRleHQgPT4ge1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VySW5mb0NvbnRleHQpXHJcbiAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAndXNlVXNlckluZm8gaG9vayBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVXNlckluZm9Qcm92aWRlciBjb21wb25lbnQnXHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==