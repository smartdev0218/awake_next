module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/phone.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-phone-input-2/lib/style.css":
/*!********************************************************!*\
  !*** ./node_modules/react-phone-input-2/lib/style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/button.tsx":
/*!******************************************!*\
  !*** ./src/components/common/button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\common\\button.tsx";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  button: theme.button
}));

const Button = Props => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    disabled: Props.disabled,
    type: "submit",
    variant: "contained",
    onClick: e => Props.onClick(e),
    children: Props.title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/common/card.tsx":
/*!****************************************!*\
  !*** ./src/components/common/card.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./src/config/index.ts");



const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"])`
  min-height: 350px;
  padding: 0 30px;
  margin-bottom: 24px;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  flex: 1;

  .form-container {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    padding: 40px 0 32px 0;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-container {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    border-top: solid 1px ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].borderColor};  
  }

  p {
    font-size: 14px;
    line-height: 25.4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    color: ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].textColor};
    text-align: center;
  }

  .title {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].darkBlue}
  }

  .subtitle {
    font-size: 14px;
    line-height: 25.4px;
    color: ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].textColor};
    margin: 8px 0 4px 0;
  }

  .orange-text {
    color: ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].orangeColor};

    &:hover {
      cursor: pointer;
    }
  }

  .phonenumber {
    font-size: 14px;
    line-height: 25.4px;
    font-weight: 500;
    color: ${config__WEBPACK_IMPORTED_MODULE_2__["colors"].darkBlue};
  },
`;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/common/container.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/container.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"])`
  padding: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/common/index.ts":
/*!****************************************!*\
  !*** ./src/components/common/index.ts ***!
  \****************************************/
/*! exports provided: Button, Card, Container, Loading, TextField, Text12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/common/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/components/common/card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./src/components/common/container.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./src/components/common/loading/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text-field */ "./src/components/common/text-field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _text_field__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _text12__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text12 */ "./src/components/common/text12.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text12", function() { return _text12__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/components/common/loading/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/loading/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lottiefiles/react-lottie-player */ "@lottiefiles/react-lottie-player");
/* harmony import */ var _lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-cutter */ "cookie-cutter");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/auth */ "./src/context/auth.tsx");
/* harmony import */ var utils_axios_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/axios-client */ "./src/utils/axios-client.ts");
/* harmony import */ var _loading_animation_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-animation.json */ "./src/components/common/loading/loading-animation.json");
var _loading_animation_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./loading-animation.json */ "./src/components/common/loading/loading-animation.json", 1);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\common\\loading\\index.tsx";






/**
 * App Loading screen.
 */

const Loading = ({
  children
}) => {
  const {
    0: isAuthLoaded,
    1: setAuthLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    jwt,
    fetchUser,
    logout
  } = Object(context_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(utils_axios_client__WEBPACK_IMPORTED_MODULE_5__["findDevServerUrl"])().then(url => {
      cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default.a.set('server-url', url);
      return;
    }).finally(() => {
      setAuthLoaded(true);

      if (utils_axios_client__WEBPACK_IMPORTED_MODULE_5__["loadedUrl"]) {
        if (jwt) {
          fetchUser();
        }
      }
    }).catch(e => {
      var _e$response, _e$response$data;

      console.error('Error on load', e);

      if ((e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.statusCode) === 'unauthorised') {
        logout(); // dispatchModal({
        //     type: 'add',
        //     modal: <ModalError text={getLanguage().youWereLoggedOut} />
        // })
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isAuthLoaded ? children : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "centerLoading",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_2__["Player"], {
        autoplay: true,
        loop: true,
        src: _loading_animation_json__WEBPACK_IMPORTED_MODULE_6__,
        style: {
          height: 400,
          width: 400
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/common/loading/loading-animation.json":
/*!**************************************************************!*\
  !*** ./src/components/common/loading/loading-animation.json ***!
  \**************************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.4.4\",\"fr\":30,\"ip\":0,\"op\":67,\"w\":600,\"h\":600,\"nm\":\"Comp 1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[300,300,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[93.4,0],[62.5,-83],[-5.1,-6.8],[-93.4,0],[-62.5,83],[5.1,6.8]],\"o\":[[-93.4,0],[-5.1,6.8],[62.5,83.1],[93.4,0],[5.1,-6.8],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-240.6,11.5],[0,145.7],[240.6,11.6],[240.6,-11.5]],\"c\":true},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Shape Layer 1').content('Shape 1').content('Path 1').path;\"},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.270588205375,0.270588205375,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":67,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[300,300,0],\"e\":[272,300,0],\"to\":[-4.667,0,0],\"ti\":[4.667,0,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":12,\"s\":[272,300,0],\"e\":[272,300,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":28,\"s\":[272,300,0],\"e\":[300,272,0],\"to\":[4.667,-4.667,0],\"ti\":[-4.667,4.667,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":32,\"s\":[300,272,0],\"e\":[300,272,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":35,\"s\":[300,272,0],\"e\":[328,300,0],\"to\":[4.667,4.667,0],\"ti\":[-4.667,-4.667,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":39,\"s\":[328,300,0],\"e\":[328,300,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":55,\"s\":[328,300,0],\"e\":[300,300,0],\"to\":[-4.667,0,0],\"ti\":[4.667,0,0]},{\"t\":59}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":false,\"mode\":\"f\",\"pt\":{\"a\":0,\"k\":{\"i\":[[27.5,-1.7],[-2.2,33.4],[-27.6,1.8],[2.2,-33.4]],\"o\":[[-33.4,2.1],[1.7,-27.6],[33.4,-2.1],[-1.8,27.7]],\"v\":[[4.1,55.7],[-54.7,-3.1],[-3,-54.8],[55.8,4]],\"c\":true},\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 2\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[51.1,-3.3],[-3.9,62.1],[-51.2,3.2],[3.9,-62.1]],\"o\":[[-62,3.9],[3.2,-51.2],[62,-3.9],[-3.3,51.1]],\"v\":[[6.7,102.6],[-102.6,-6.7],[-6.7,-102.6],[102.6,6.7]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.270588205375,0.270588205375,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":67,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[300,300,0],\"e\":[286,300,0],\"to\":[-2.333,0,0],\"ti\":[2.333,0,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":12,\"s\":[286,300,0],\"e\":[286,300,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":28,\"s\":[286,300,0],\"e\":[300,286,0],\"to\":[2.333,-2.333,0],\"ti\":[-2.333,2.333,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":32,\"s\":[300,286,0],\"e\":[300,286,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":35,\"s\":[300,286,0],\"e\":[314,300,0],\"to\":[2.333,2.333,0],\"ti\":[-2.333,-2.333,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":39,\"s\":[314,300,0],\"e\":[314,300,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":55,\"s\":[314,300,0],\"e\":[300,300,0],\"to\":[-2.333,0,0],\"ti\":[2.333,0,0]},{\"t\":59}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[51.1,-3.3],[-3.9,62.1],[-51.2,3.2],[3.9,-62.1]],\"o\":[[-62,3.9],[3.2,-51.2],[62,-3.9],[-3.3,51.1]],\"v\":[[6.7,102.6],[-102.6,-6.7],[-6.7,-102.6],[102.6,6.7]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.270588205375,0.270588205375,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.454901960784,0.454901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":67,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[300,300,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":4,\"s\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":20,\"s\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":28,\"s\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":47,\"s\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":51,\"s\":[{\"i\":[[93.4,0],[76.575,92.6],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[0.309,4.049],[2.543,-3.424]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.013,0.062],[-58.587,78.875]],\"v\":[[0,105.738],[-240.575,5.15],[-244.425,0.031],[-240.6,5.25],[0,105.7],[240.6,9.1],[244.425,0.094],[240.587,9.125]],\"c\":true}],\"e\":[{\"i\":[[93.4,0],[62.5,-83],[-0.017,-4.102],[-2.533,-3.377],[-93.4,0],[-62.5,83],[-0.009,4.06],[2.559,3.412]],\"o\":[[-93.4,0],[-2.567,3.423],[0.017,4.048],[62.5,83.1],[93.4,0],[2.541,-3.388],[0.009,-4.09],[-62.5,-83.1]],\"v\":[[0,-145.7],[-240.6,-11.6],[-244.425,0.031],[-240.6,11.5],[0,145.7],[240.6,11.6],[244.425,0.094],[240.6,-11.5]],\"c\":true}]},{\"t\":55}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.270588205375,0.270588205375,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":67,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./src/components/common/text-field.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/text-field.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\common\\text-field.tsx";



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "green"
    // },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {// borderColor: theme.palette.orangeColor,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {// borderColor: theme.palette.orangeColor,
    },
    // "& .MuiOutlinedInput-input": {
    //   color: "green"
    // },
    // "&:hover .MuiOutlinedInput-input": {
    //   color: "red"
    // },
    // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    //   color: "purple"
    // },
    // "& .MuiInputLabel-outlined": {
    //   color: "green"
    // },
    // "&:hover .MuiInputLabel-outlined": {
    //   color: "red"
    // },
    '& .MuiInputLabel-outlined.Mui-focused': {// color: theme.palette.orangeColor,
    }
  },
  // textfield: theme.textfield,
  textField: {}
}));

const TextField = props => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.textField, classes.root),
    required: true,
    id: "outlined-required",
    label: "Full name",
    placeholder: props.placeholder,
    variant: "outlined",
    onChange: e => props.onChange(e)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TextField);

/***/ }),

/***/ "./src/components/common/text12.tsx":
/*!******************************************!*\
  !*** ./src/components/common/text12.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\common\\text12.tsx";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  container: {
    fontSize: '12px',
    lineHeight: '14.06px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontColor: '#A3B4BD',
    color: '#A3B4BD',
    textAlign: 'center'
  }
}));

const Text12 = Props => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.container,
    children: Props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Text12);

/***/ }),

/***/ "./src/components/layout/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\layout\\footer.tsx";

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    paddingBottom: 48
  },
  grid: {
    display: 'flex'
  },
  title: {
    fontSize: '12px',
    lineHeight: '14.06px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontColor: '#A3B4BD',
    color: '#A3B4BD',
    textAlign: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.container,
    maxWidth: "xs",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        className: classes.title,
        children: "\xA9 2021 All rights Reserved. Awake Ltd."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/layout/header.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\layout\\header.tsx";

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    paddingTop: '48px'
  },
  grid: {
    display: 'flex'
  },
  logo_titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: -10
  },
  logo_sm: {
    width: '50%',
    alignSelf: 'flex-end'
  }
}));

const Header = () => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.container,
    maxWidth: "xs",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      direction: 'row',
      justify: 'center',
      item: true,
      xs: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo.png",
        height: '98.84'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        className: classes.logo_titles,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/logo-title.png",
          height: '30.79'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/logo-small-title.png",
          className: classes.logo_sm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout/index.ts":
/*!****************************************!*\
  !*** ./src/components/layout/index.ts ***!
  \****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/components/layout/main.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/layout/main.tsx":
/*!****************************************!*\
  !*** ./src/components/layout/main.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/layout/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/layout/footer.tsx");

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\layout\\main.tsx";



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(#343F45 0%, #3D4A51 25.22%, #37454B 42.71%, #2E3C43 74.11%, #1F2B31 100%)'
  }
}));

const Main = ({
  children
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.container,
    maxWidth: false,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/config/breakpoints.ts":
/*!***********************************!*\
  !*** ./src/config/breakpoints.ts ***!
  \***********************************/
/*! exports provided: mobile, tablet, desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablet", function() { return tablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return desktop; });
const mobile = '0px';
const tablet = '640px';
const desktop = '1024px';

/***/ }),

/***/ "./src/config/colors.ts":
/*!******************************!*\
  !*** ./src/config/colors.ts ***!
  \******************************/
/*! exports provided: textColor, borderColor, orangeColor, darkBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return textColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orangeColor", function() { return orangeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkBlue", function() { return darkBlue; });
const textColor = '#546E7A';
const borderColor = '#F1F1F5';
const orangeColor = '#FF7534';
const darkBlue = '#37474F';

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! exports provided: breakpoints, colors, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./src/config/breakpoints.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/config/colors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__; });




const API_URL = 'http://localhost:8080';

/***/ }),

/***/ "./src/context/auth.tsx":
/*!******************************!*\
  !*** ./src/context/auth.tsx ***!
  \******************************/
/*! exports provided: AuthContext, AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-cutter */ "cookie-cutter");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_axios_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/axios-client */ "./src/utils/axios-client.ts");
/* harmony import */ var utils_persisted_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/persisted-state */ "./src/utils/persisted-state.ts");


var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\context\\auth.tsx",
    _getIntialState,
    _initialState$jwt;





const STORAGE_KEY = 'awake-auth';
const defaultState = {};
const initialState = (_getIntialState = Object(utils_persisted_state__WEBPACK_IMPORTED_MODULE_4__["getIntialState"])(STORAGE_KEY)) !== null && _getIntialState !== void 0 ? _getIntialState : defaultState;
Object(utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["setAuthTokenHeaders"])((_initialState$jwt = initialState.jwt) !== null && _initialState$jwt !== void 0 ? _initialState$jwt : '');
const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
AuthContext.displayName = 'AuthContext';
const AuthProvider = ({
  children
}) => {
  var _initialState$user, _initialState$jwt2;

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_initialState$user = initialState.user) !== null && _initialState$user !== void 0 ? _initialState$user : null);
  const {
    0: jwt,
    1: setJwt
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_initialState$jwt2 = initialState.jwt) !== null && _initialState$jwt2 !== void 0 ? _initialState$jwt2 : null);

  const signInWithSMS = data => utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["axiosClient"].post(`send-sms-code`, data);

  const confirmSMS = data => utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["axiosClient"].post(`confirm-sms-code`, data).then(({
    data
  }) => {
    const user = data.user;
    const jwt = data.jwt;
    setUser(user);
    setJwt(jwt);
    cookie_cutter__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', jwt);
    Object(utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["setAuthTokenHeaders"])(jwt);
    return data;
  }).catch(err => {
    alert(err.message);
  });

  const logout = () => {
    cookie_cutter__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', null);
    Object(utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["setAuthTokenHeaders"])(null);
    setJwt(null);
    setUser(null);
    window.location.href = '/';
  };

  const fetchUser = () => {
    utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["axiosClient"].post('fetch-user').then(({
      data
    }) => {
      setUser(data);
    }).catch(() => {
      setUser(null);
    });
  };

  const updateUser = data => {
    utils_axios_client__WEBPACK_IMPORTED_MODULE_3__["axiosClient"].post('update-user', data).then(({
      data
    }) => {
      setUser(data);
    }).catch(err => {
      console.error(err);
      alert(err.message);
    });
  };

  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    user,
    setUser,
    jwt,
    setJwt,
    signInWithSMS,
    confirmSMS,
    logout,
    fetchUser,
    updateUser
  }), [user, setUser, jwt, setJwt, signInWithSMS, confirmSMS, logout, fetchUser, updateUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => Object(utils_persisted_state__WEBPACK_IMPORTED_MODULE_4__["persistState"])(STORAGE_KEY, {
    jwt,
    user
  }), [jwt, user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 10
  }, undefined);
};
const useAuth = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth hook must be used within a AuthProvider component');
  }

  return context;
};

/***/ }),

/***/ "./src/context/user-info.tsx":
/*!***********************************!*\
  !*** ./src/context/user-info.tsx ***!
  \***********************************/
/*! exports provided: UserInfoContext, UserInfoProvider, useUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoContext", function() { return UserInfoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoProvider", function() { return UserInfoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserInfo", function() { return useUserInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\context\\user-info.tsx";

const UserInfoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
UserInfoContext.displayName = 'UserInfoContext';
const UserInfoProvider = ({
  children
}) => {
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: verificationCode,
    1: setVerificationCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: userName,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    phoneNumber,
    setPhoneNumber,
    verificationCode,
    setVerificationCode,
    userName,
    setUserName
  }), [phoneNumber, setPhoneNumber, verificationCode, setVerificationCode, userName, setUserName]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserInfoContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};
const useUserInfo = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(UserInfoContext);

  if (context === undefined) {
    throw new Error('useUserInfo hook must be used within a UserInfoProvider component');
  }

  return context;
};

/***/ }),

/***/ "./src/pages/phone.tsx":
/*!*****************************!*\
  !*** ./src/pages/phone.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2 */ "react-phone-input-2");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/auth */ "./src/context/auth.tsx");
/* harmony import */ var context_user_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/user-info */ "./src/context/user-info.tsx");
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common */ "./src/components/common/index.ts");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.ts");
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ "./node_modules/react-phone-input-2/lib/style.css");
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\phone.tsx";









const Phone = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    signInWithSMS
  } = Object(context_auth__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const {
    userName,
    phoneNumber,
    setPhoneNumber,
    setVerificationCode
  } = Object(context_user_info__WEBPACK_IMPORTED_MODULE_5__["useUserInfo"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userName == '' && typeof router.query.from === 'undefined') router.push('/signup');
  }, []);

  const handleClickContinue = async () => {
    signInWithSMS({
      phoneNumber: phoneNumber
    }).then(({
      data
    }) => {
      setVerificationCode(data.verificationCode);
      router.push('/verification');
    }).catch(err => {
      alert(err.message);
    });
  };

  const handleChangePhoneNumber = phone => {
    setPhoneNumber(phone);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      maxWidth: "sm",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "title",
            children: "Phone number!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "Please enter your phone number so you can get verification code."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default.a, {
            country: 'us',
            value: phoneNumber,
            onChange: handleChangePhoneNumber,
            containerStyle: {
              width: 'fit-content',
              margin: '26px 0'
            },
            inputStyle: {
              height: '48px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            title: "Continue",
            onClick: handleClickContinue,
            disabled: !phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bottom-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Can't login? \u2022", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "orange-text",
              onClick: () => router.push('/signup'),
              children: "Sign up for new user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_6__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Phone);

/***/ }),

/***/ "./src/utils/axios-client.ts":
/*!***********************************!*\
  !*** ./src/utils/axios-client.ts ***!
  \***********************************/
/*! exports provided: loadedUrl, axiosClient, setAuthTokenHeaders, findDevServerUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedUrl", function() { return loadedUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosClient", function() { return axiosClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthTokenHeaders", function() { return setAuthTokenHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDevServerUrl", function() { return findDevServerUrl; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var promise_allsettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! promise.allsettled */ "promise.allsettled");
/* harmony import */ var promise_allsettled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(promise_allsettled__WEBPACK_IMPORTED_MODULE_1__);


promise_allsettled__WEBPACK_IMPORTED_MODULE_1__["shim"]();
const prodUrl = 'http://localhost:8080/api/';
let loadedUrl = false;
const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: prodUrl,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});
const setAuthTokenHeaders = newToken => {
  axiosClient.defaults.headers = {
    authorization: newToken,
    'Content-Type': 'application/json; charset=UTF-8'
  };
};
/**
 * Finds the running dev server, if it's production it instantely sets the url.
 */

const findDevServerUrl = async () => {
  // Shortcut
  return prodUrl;

  if (loadedUrl) {
    return axiosClient.defaults.baseURL;
  }

  if (false) {}

  const urlsToTry = ['http://localhost:8080/api/', 'http://192.168.0.227:8080/api/', 'http://192.168.0.203:8080/api/', 'http://10.0.2.2:8080/api/', 'https://ss.ew.r.appspot.com/api/', prodUrl];
  return await new Promise((resove, reject) => {
    Promise.allSettled(urlsToTry.map(url => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
      timeout: 250
    }))).then(results => {
      if (results.length === 0) {
        console.error('Could not find any dev URL.');
        reject();
        return '';
      } // Filter by success.


      results = results.filter(r => r.status === 'fulfilled'); // Use the first one
      // @ts-ignore

      const baseUrl = results[0].value.config.url;
      axiosClient.defaults.baseURL = baseUrl;
      console.log('Using dev server: ' + baseUrl + ', (of ' + results.length + ' success)');
      loadedUrl = true;
      resove(baseUrl);
    });
  });
};

/***/ }),

/***/ "./src/utils/persisted-state.ts":
/*!**************************************!*\
  !*** ./src/utils/persisted-state.ts ***!
  \**************************************/
/*! exports provided: persistState, getIntialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistState", function() { return persistState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntialState", function() { return getIntialState; });
const persistState = (storageKey, state) => {
  if (false) {}
};
const getIntialState = storageKey => {
  if (false) {}
};

/***/ }),

/***/ "@lottiefiles/react-lottie-player":
/*!***************************************************!*\
  !*** external "@lottiefiles/react-lottie-player" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@lottiefiles/react-lottie-player");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cookie-cutter":
/*!********************************!*\
  !*** external "cookie-cutter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-cutter");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "promise.allsettled":
/*!*************************************!*\
  !*** external "promise.allsettled" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("promise.allsettled");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-phone-input-2":
/*!**************************************!*\
  !*** external "react-phone-input-2" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHQtZmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0MTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9icmVha3BvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L2F1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L3VzZXItaW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Bob25lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXhpb3MtY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wZXJzaXN0ZWQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvdHRpZWZpbGVzL3JlYWN0LWxvdHRpZS1wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1jdXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb21pc2UuYWxsc2V0dGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGhvbmUtaW5wdXQtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwiQnV0dG9uIiwiUHJvcHMiLCJjbGFzc2VzIiwiZGlzYWJsZWQiLCJlIiwib25DbGljayIsInRpdGxlIiwiQ2FyZCIsInN0eWxlZCIsIlBhcGVyIiwiY29sb3JzIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0Q29sb3IiLCJkYXJrQmx1ZSIsIm9yYW5nZUNvbG9yIiwiQ29udGFpbmVyIiwiTVVJQ29udGFpbmVyIiwiTG9hZGluZyIsImNoaWxkcmVuIiwiaXNBdXRoTG9hZGVkIiwic2V0QXV0aExvYWRlZCIsInVzZVN0YXRlIiwiand0IiwiZmV0Y2hVc2VyIiwibG9nb3V0IiwidXNlQXV0aCIsInVzZUVmZmVjdCIsImZpbmREZXZTZXJ2ZXJVcmwiLCJ0aGVuIiwidXJsIiwiY29va2llQ3V0dGVyIiwic2V0IiwiZmluYWxseSIsImxvYWRlZFVybCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzQ29kZSIsImxvYWRpbmdBbmltYXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInJvb3QiLCJ0ZXh0RmllbGQiLCJUZXh0RmllbGQiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY29udGFpbmVyIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250Q29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIlRleHQxMiIsInRleHQiLCJwYWRkaW5nQm90dG9tIiwiZ3JpZCIsImRpc3BsYXkiLCJGb290ZXIiLCJwYWRkaW5nVG9wIiwibG9nb190aXRsZXMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibG9nb19zbSIsImFsaWduU2VsZiIsIkhlYWRlciIsImJhY2tncm91bmQiLCJNYWluIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsIkFQSV9VUkwiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImdldEludGlhbFN0YXRlIiwic2V0QXV0aFRva2VuSGVhZGVycyIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiQXV0aFByb3ZpZGVyIiwidXNlciIsInNldFVzZXIiLCJzZXRKd3QiLCJzaWduSW5XaXRoU01TIiwiYXhpb3NDbGllbnQiLCJwb3N0IiwiY29uZmlybVNNUyIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVwZGF0ZVVzZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJwZXJzaXN0U3RhdGUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiVXNlckluZm9Db250ZXh0IiwiVXNlckluZm9Qcm92aWRlciIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwic2V0VmVyaWZpY2F0aW9uQ29kZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VVc2VySW5mbyIsIlBob25lIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJmcm9tIiwicHVzaCIsImhhbmRsZUNsaWNrQ29udGludWUiLCJoYW5kbGVDaGFuZ2VQaG9uZU51bWJlciIsInBob25lIiwibWFyZ2luIiwiYWxsU2V0dGxlZCIsInByb2RVcmwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwibmV3VG9rZW4iLCJkZWZhdWx0cyIsImF1dGhvcml6YXRpb24iLCJ1cmxzVG9UcnkiLCJQcm9taXNlIiwicmVzb3ZlIiwicmVqZWN0IiwibWFwIiwiZ2V0IiwidGltZW91dCIsInJlc3VsdHMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJyIiwic3RhdHVzIiwiYmFzZVVybCIsImNvbmZpZyIsImxvZyIsInN0b3JhZ2VLZXkiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Bob25lLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xyXG5pbXBvcnQgeyBCdXR0b24gYXMgTVVJQnV0dG9uLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBidXR0b246IHRoZW1lLmJ1dHRvbixcclxufSkpXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBvbkNsaWNrOiBhbnlcclxuICBkaXNhYmxlZD86IGFueVxyXG59XHJcblxyXG5jb25zdCBCdXR0b246IE5leHRQYWdlPFByb3BzPiA9IChQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1VSUJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICBkaXNhYmxlZD17UHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgb25DbGljaz17KGUpID0+IFByb3BzLm9uQ2xpY2soZSl9XHJcbiAgICA+XHJcbiAgICAgIHtQcm9wcy50aXRsZX1cclxuICAgIDwvTVVJQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdjb25maWcnXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoUGFwZXIpYFxuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG5cbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBmbGV4OiAwLjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDQwcHggMCAzMnB4IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgZmxleDogMC4zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1NHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAke2NvbG9ycy5ib3JkZXJDb2xvcn07ICBcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjUuNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICR7Y29sb3JzLnRleHRDb2xvcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBjb2xvcjogJHtjb2xvcnMuZGFya0JsdWV9XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjUuNHB4O1xuICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0Q29sb3J9O1xuICAgIG1hcmdpbjogOHB4IDAgNHB4IDA7XG4gIH1cblxuICAub3JhbmdlLXRleHQge1xuICAgIGNvbG9yOiAke2NvbG9ycy5vcmFuZ2VDb2xvcn07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAucGhvbmVudW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjUuNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICR7Y29sb3JzLmRhcmtCbHVlfTtcbiAgfSxcbmBcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIGFzIE1VSUNvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKE1VSUNvbnRhaW5lcilgXHJcbiAgcGFkZGluZzogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vY2FyZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tICcuL2NvbnRhaW5lcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSAnLi9sb2FkaW5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gJy4vdGV4dC1maWVsZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0MTIgfSBmcm9tICcuL3RleHQxMidcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnQGxvdHRpZWZpbGVzL3JlYWN0LWxvdHRpZS1wbGF5ZXInXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdjb250ZXh0L2F1dGgnXHJcbmltcG9ydCB7IGZpbmREZXZTZXJ2ZXJVcmwsIGxvYWRlZFVybCB9IGZyb20gJ3V0aWxzL2F4aW9zLWNsaWVudCdcclxuXHJcbmltcG9ydCBsb2FkaW5nQW5pbWF0aW9uIGZyb20gJy4vbG9hZGluZy1hbmltYXRpb24uanNvbidcclxuXHJcbi8qKlxyXG4gKiBBcHAgTG9hZGluZyBzY3JlZW4uXHJcbiAqL1xyXG5jb25zdCBMb2FkaW5nID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW2lzQXV0aExvYWRlZCwgc2V0QXV0aExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IGp3dCwgZmV0Y2hVc2VyLCBsb2dvdXQgfSA9IHVzZUF1dGgoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmluZERldlNlcnZlclVybCgpXHJcbiAgICAgIC50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KCdzZXJ2ZXItdXJsJywgdXJsKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aExvYWRlZCh0cnVlKVxyXG4gICAgICAgIGlmIChsb2FkZWRVcmwpIHtcclxuICAgICAgICAgIGlmIChqd3QpIHtcclxuICAgICAgICAgICAgZmV0Y2hVc2VyKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9uIGxvYWQnLCBlKVxyXG4gICAgICAgIGlmIChlPy5yZXNwb25zZT8uZGF0YT8uc3RhdHVzQ29kZSA9PT0gJ3VuYXV0aG9yaXNlZCcpIHtcclxuICAgICAgICAgIGxvZ291dCgpXHJcbiAgICAgICAgICAvLyBkaXNwYXRjaE1vZGFsKHtcclxuICAgICAgICAgIC8vICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgICAgIC8vICAgICBtb2RhbDogPE1vZGFsRXJyb3IgdGV4dD17Z2V0TGFuZ3VhZ2UoKS55b3VXZXJlTG9nZ2VkT3V0fSAvPlxyXG4gICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNBdXRoTG9hZGVkID8gKFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJMb2FkaW5nXCI+XHJcbiAgICAgICAgICA8UGxheWVyXHJcbiAgICAgICAgICAgIGF1dG9wbGF5XHJcbiAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgc3JjPXtsb2FkaW5nQW5pbWF0aW9ufVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUZXh0RmllbGQgYXMgTVVJVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICAvLyBcIiYgLk11aU91dGxpbmVkSW5wdXQtcm9vdCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZVwiOiB7XHJcbiAgICAvLyAgIGJvcmRlckNvbG9yOiBcImdyZWVuXCJcclxuICAgIC8vIH0sXHJcbiAgICAnJjpob3ZlciAuTXVpT3V0bGluZWRJbnB1dC1yb290IC5NdWlPdXRsaW5lZElucHV0LW5vdGNoZWRPdXRsaW5lJzoge1xyXG4gICAgICAvLyBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5vcmFuZ2VDb2xvcixcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Lk11aS1mb2N1c2VkIC5NdWlPdXRsaW5lZElucHV0LW5vdGNoZWRPdXRsaW5lJzoge1xyXG4gICAgICAvLyBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5vcmFuZ2VDb2xvcixcclxuICAgIH0sXHJcbiAgICAvLyBcIiYgLk11aU91dGxpbmVkSW5wdXQtaW5wdXRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJncmVlblwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImOmhvdmVyIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwicmVkXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiYgLk11aU91dGxpbmVkSW5wdXQtcm9vdC5NdWktZm9jdXNlZCAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcInB1cnBsZVwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImIC5NdWlJbnB1dExhYmVsLW91dGxpbmVkXCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJjpob3ZlciAuTXVpSW5wdXRMYWJlbC1vdXRsaW5lZFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAvLyB9LFxyXG4gICAgJyYgLk11aUlucHV0TGFiZWwtb3V0bGluZWQuTXVpLWZvY3VzZWQnOiB7XHJcbiAgICAgIC8vIGNvbG9yOiB0aGVtZS5wYWxldHRlLm9yYW5nZUNvbG9yLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIHRleHRmaWVsZDogdGhlbWUudGV4dGZpZWxkLFxyXG4gIHRleHRGaWVsZDoge30sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBvbkNoYW5nZT86IGFueVxyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFRleHRGaWVsZDogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1VSVRleHRGaWVsZFxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy50ZXh0RmllbGQsIGNsYXNzZXMucm9vdCl9XHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWRcIlxyXG4gICAgICBsYWJlbD1cIkZ1bGwgbmFtZVwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vbkNoYW5nZShlKX1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNC4wNnB4JyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGZvbnRDb2xvcjogJyNBM0I0QkQnLFxyXG4gICAgY29sb3I6ICcjQTNCNEJEJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0MTI6IE5leHRQYWdlPFByb3BzPiA9IChQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+e1Byb3BzLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0MTJcclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IDQ4LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTQuMDZweCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250Q29sb3I6ICcjQTNCNEJEJyxcclxuICAgIGNvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgwqkgMjAyMSBBbGwgcmlnaHRzIFJlc2VydmVkLiBBd2FrZSBMdGQuXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ1RvcDogJzQ4cHgnLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgbG9nb190aXRsZXM6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luTGVmdDogLTEwLFxyXG4gIH0sXHJcbiAgbG9nb19zbToge1xyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgYWxpZ25TZWxmOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249eydyb3cnfSBqdXN0aWZ5PXsnY2VudGVyJ30gaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgaGVpZ2h0PXsnOTguODQnfSAvPlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvX3RpdGxlc30+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLXRpdGxlLnBuZ1wiIGhlaWdodD17JzMwLjc5J30gLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tc21hbGwtdGl0bGUucG5nXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29fc219IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gJy4vbWFpbidcclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICdsaW5lYXItZ3JhZGllbnQoIzM0M0Y0NSAwJSwgIzNENEE1MSAyNS4yMiUsICMzNzQ1NEIgNDIuNzElLCAjMkUzQzQzIDc0LjExJSwgIzFGMkIzMSAxMDAlKScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBNYWluID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBtYXhXaWR0aD17ZmFsc2V9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblxyXG4iLCJleHBvcnQgY29uc3QgbW9iaWxlID0gJzBweCdcbmV4cG9ydCBjb25zdCB0YWJsZXQgPSAnNjQwcHgnXG5leHBvcnQgY29uc3QgZGVza3RvcCA9ICcxMDI0cHgnXG4iLCJleHBvcnQgY29uc3QgdGV4dENvbG9yID0gJyM1NDZFN0EnXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3IgPSAnI0YxRjFGNSdcbmV4cG9ydCBjb25zdCBvcmFuZ2VDb2xvciA9ICcjRkY3NTM0J1xuZXhwb3J0IGNvbnN0IGRhcmtCbHVlID0gJyMzNzQ3NEYnXG4iLCJleHBvcnQgKiBhcyBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzJ1xuZXhwb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJ1xuXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgRkMsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlTWVtbyxcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJ1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ21vZGVscydcclxuaW1wb3J0IHsgYXhpb3NDbGllbnQsIHNldEF1dGhUb2tlbkhlYWRlcnMgfSBmcm9tICd1dGlscy9heGlvcy1jbGllbnQnXHJcbmltcG9ydCB7IGdldEludGlhbFN0YXRlLCBwZXJzaXN0U3RhdGUgfSBmcm9tICd1dGlscy9wZXJzaXN0ZWQtc3RhdGUnXHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdhd2FrZS1hdXRoJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXV0aENvbnRleHQge1xyXG4gIHVzZXI6IFVzZXIgfCBudWxsXHJcbiAgc2V0VXNlcjogKHVzZXI6IFVzZXIgfCBudWxsKSA9PiB2b2lkXHJcbiAgand0OiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0Snd0OiAoand0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgc2lnbkluV2l0aFNNUzogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTxhbnk+XHJcbiAgY29uZmlybVNNUzogKGRhdGE6IGFueSkgPT4gUHJvbWlzZTxhbnk+XHJcbiAgbG9nb3V0OiAoKSA9PiB2b2lkXHJcbiAgZmV0Y2hVc2VyOiAoKSA9PiB2b2lkXHJcbiAgdXBkYXRlVXNlcjogKGRhdGE6IGFueSkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7fVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gZ2V0SW50aWFsU3RhdGUoU1RPUkFHRV9LRVkpID8/IGRlZmF1bHRTdGF0ZVxyXG5cclxuc2V0QXV0aFRva2VuSGVhZGVycyhpbml0aWFsU3RhdGUuand0ID8/ICcnKVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQXV0aENvbnRleHQ+KHt9IGFzIElBdXRoQ29udGV4dClcclxuXHJcbkF1dGhDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0F1dGhDb250ZXh0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KGluaXRpYWxTdGF0ZS51c2VyID8/IG51bGwpXHJcbiAgY29uc3QgW2p3dCwgc2V0Snd0XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KGluaXRpYWxTdGF0ZS5qd3QgPz8gbnVsbClcclxuXHJcbiAgY29uc3Qgc2lnbkluV2l0aFNNUyA9IChkYXRhKSA9PiBheGlvc0NsaWVudC5wb3N0KGBzZW5kLXNtcy1jb2RlYCwgZGF0YSlcclxuXHJcbiAgY29uc3QgY29uZmlybVNNUyA9IChkYXRhKSA9PlxyXG4gICAgYXhpb3NDbGllbnRcclxuICAgICAgLnBvc3QoYGNvbmZpcm0tc21zLWNvZGVgLCBkYXRhKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gZGF0YS51c2VyIGFzIFVzZXJcclxuICAgICAgICBjb25zdCBqd3QgPSBkYXRhLmp3dCBhcyBzdHJpbmdcclxuXHJcbiAgICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAgIHNldEp3dChqd3QpXHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldCgnand0Jywgand0KVxyXG4gICAgICAgIHNldEF1dGhUb2tlbkhlYWRlcnMoand0KVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgICB9KVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBjb29raWVDdXR0ZXIuc2V0KCdqd3QnLCBudWxsKVxyXG4gICAgc2V0QXV0aFRva2VuSGVhZGVycyhudWxsKVxyXG4gICAgc2V0Snd0KG51bGwpXHJcbiAgICBzZXRVc2VyKG51bGwpXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gKCkgPT4ge1xyXG4gICAgYXhpb3NDbGllbnRcclxuICAgICAgLnBvc3QoJ2ZldGNoLXVzZXInKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlciA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGF4aW9zQ2xpZW50XHJcbiAgICAgIC5wb3N0KCd1cGRhdGUtdXNlcicsIGRhdGEpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHNldFVzZXIsXHJcbiAgICAgIGp3dCxcclxuICAgICAgc2V0Snd0LFxyXG4gICAgICBzaWduSW5XaXRoU01TLFxyXG4gICAgICBjb25maXJtU01TLFxyXG4gICAgICBsb2dvdXQsXHJcbiAgICAgIGZldGNoVXNlcixcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgIH0pLFxyXG4gICAgW1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBzZXRVc2VyLFxyXG4gICAgICBqd3QsXHJcbiAgICAgIHNldEp3dCxcclxuICAgICAgc2lnbkluV2l0aFNNUyxcclxuICAgICAgY29uZmlybVNNUyxcclxuICAgICAgbG9nb3V0LFxyXG4gICAgICBmZXRjaFVzZXIsXHJcbiAgICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBdXHJcbiAgKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gcGVyc2lzdFN0YXRlKFNUT1JBR0VfS0VZLCB7IGp3dCwgdXNlciB9KSwgW2p3dCwgdXNlcl0pXHJcblxyXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKTogSUF1dGhDb250ZXh0ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggaG9vayBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQXV0aFByb3ZpZGVyIGNvbXBvbmVudCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VySW5mb0NvbnRleHQge1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0UGhvbmVOdW1iZXI6IChwaG9uZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG4gIHVzZXJOYW1lOiBzdHJpbmcgfCBudWxsXHJcbiAgc2V0VXNlck5hbWU6ICh1c2VyTmFtZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG4gIHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZyB8IG51bGxcclxuICBzZXRWZXJpZmljYXRpb25Db2RlOiAodmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm9Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVXNlckluZm9Db250ZXh0PihcclxuICB7fSBhcyBJVXNlckluZm9Db250ZXh0XHJcbilcclxuXHJcblVzZXJJbmZvQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVc2VySW5mb0NvbnRleHQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm9Qcm92aWRlcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFt2ZXJpZmljYXRpb25Db2RlLCBzZXRWZXJpZmljYXRpb25Db2RlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgc2V0UGhvbmVOdW1iZXIsXHJcbiAgICAgIHZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHNldFZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHVzZXJOYW1lLFxyXG4gICAgICBzZXRVc2VyTmFtZSxcclxuICAgIH0pLFxyXG4gICAgW1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgc2V0UGhvbmVOdW1iZXIsXHJcbiAgICAgIHZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHNldFZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgIHVzZXJOYW1lLFxyXG4gICAgICBzZXRVc2VyTmFtZSxcclxuICAgIF1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckluZm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckluZm9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJJbmZvID0gKCk6IElVc2VySW5mb0NvbnRleHQgPT4ge1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VySW5mb0NvbnRleHQpXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAndXNlVXNlckluZm8gaG9vayBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVXNlckluZm9Qcm92aWRlciBjb21wb25lbnQnXHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUGhvbmVJbnB1dCBmcm9tICdyZWFjdC1waG9uZS1pbnB1dC0yJ1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9hdXRoJ1xuaW1wb3J0IHsgdXNlVXNlckluZm8gfSBmcm9tICdjb250ZXh0L3VzZXItaW5mbydcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBUZXh0MTIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG5pbXBvcnQgJ3JlYWN0LXBob25lLWlucHV0LTIvbGliL3N0eWxlLmNzcydcblxuY29uc3QgUGhvbmU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHNpZ25JbldpdGhTTVMgfSA9IHVzZUF1dGgoKVxuICBjb25zdCB7XG4gICAgdXNlck5hbWUsXG4gICAgcGhvbmVOdW1iZXIsXG4gICAgc2V0UGhvbmVOdW1iZXIsXG4gICAgc2V0VmVyaWZpY2F0aW9uQ29kZSxcbiAgfSA9IHVzZVVzZXJJbmZvKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyTmFtZSA9PSAnJyAmJiB0eXBlb2Ygcm91dGVyLnF1ZXJ5LmZyb20gPT09ICd1bmRlZmluZWQnKVxuICAgICAgcm91dGVyLnB1c2goJy9zaWdudXAnKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDbGlja0NvbnRpbnVlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNpZ25JbldpdGhTTVMoe1xuICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0VmVyaWZpY2F0aW9uQ29kZShkYXRhLnZlcmlmaWNhdGlvbkNvZGUpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvdmVyaWZpY2F0aW9uJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcbiAgICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VQaG9uZU51bWJlciA9IChwaG9uZSkgPT4ge1xuICAgIHNldFBob25lTnVtYmVyKHBob25lKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhvbmUgbnVtYmVyITwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlciBzbyB5b3UgY2FuIGdldCB2ZXJpZmljYXRpb24gY29kZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxQaG9uZUlucHV0XG4gICAgICAgICAgICAgIGNvdW50cnk9eyd1cyd9XG4gICAgICAgICAgICAgIHZhbHVlPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBob25lTnVtYmVyfVxuICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzI2cHggMCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgaGVpZ2h0OiAnNDhweCcgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29udGludWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0NvbnRpbnVlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXBob25lTnVtYmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDYW4ndCBsb2dpbj8g4oCieycgJ31cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmFuZ2UtdGV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8VGV4dDEyIHRleHQ9eydQcml2YWN5IHBvbGljeSAtIFRlcm1zIG9mIHVzZSd9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG9uZVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgKiBhcyBhbGxTZXR0bGVkIGZyb20gJ3Byb21pc2UuYWxsc2V0dGxlZCdcclxuXHJcbmFsbFNldHRsZWQuc2hpbSgpXHJcblxyXG5jb25zdCBwcm9kVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvJ1xyXG5leHBvcnQgbGV0IGxvYWRlZFVybCA9IGZhbHNlXHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2RVcmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbkhlYWRlcnMgPSAobmV3VG9rZW46IHN0cmluZykgPT4ge1xyXG4gIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMgPSB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBuZXdUb2tlbixcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgdGhlIHJ1bm5pbmcgZGV2IHNlcnZlciwgaWYgaXQncyBwcm9kdWN0aW9uIGl0IGluc3RhbnRlbHkgc2V0cyB0aGUgdXJsLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmREZXZTZXJ2ZXJVcmwgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAvLyBTaG9ydGN1dFxyXG4gIHJldHVybiBwcm9kVXJsXHJcblxyXG4gIGlmIChsb2FkZWRVcmwpIHtcclxuICAgIHJldHVybiBheGlvc0NsaWVudC5kZWZhdWx0cy5iYXNlVVJMXHJcbiAgfVxyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgbG9hZGVkVXJsID0gdHJ1ZVxyXG4gICAgcmV0dXJuIHByb2RVcmxcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybHNUb1RyeSA9IFtcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLycsXHJcbiAgICAnaHR0cDovLzE5Mi4xNjguMC4yMjc6ODA4MC9hcGkvJyxcclxuICAgICdodHRwOi8vMTkyLjE2OC4wLjIwMzo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHA6Ly8xMC4wLjIuMjo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHBzOi8vc3MuZXcuci5hcHBzcG90LmNvbS9hcGkvJyxcclxuICAgIHByb2RVcmwsXHJcbiAgXVxyXG5cclxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbFNldHRsZWQoXHJcbiAgICAgIHVybHNUb1RyeS5tYXAoKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB0aW1lb3V0OiAyNTAgfSkpXHJcbiAgICApLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRldiBVUkwuJylcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGaWx0ZXIgYnkgc3VjY2Vzcy5cclxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpXHJcblxyXG4gICAgICAvLyBVc2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSByZXN1bHRzWzBdLnZhbHVlLmNvbmZpZy51cmxcclxuXHJcbiAgICAgIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmJhc2VVUkwgPSBiYXNlVXJsXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdVc2luZyBkZXYgc2VydmVyOiAnICsgYmFzZVVybCArICcsIChvZiAnICsgcmVzdWx0cy5sZW5ndGggKyAnIHN1Y2Nlc3MpJ1xyXG4gICAgICApXHJcblxyXG4gICAgICBsb2FkZWRVcmwgPSB0cnVlXHJcblxyXG4gICAgICByZXNvdmUoYmFzZVVybClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGVyc2lzdFN0YXRlID0gKHN0b3JhZ2VLZXk6IHN0cmluZywgc3RhdGU6IG9iamVjdCk6IHZvaWQgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbnRpYWxTdGF0ZSA9IChzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzYXZlZFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNhdmVkU3RhdGUgPz8gJ3t9JylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzdGF0ZSA6ICcgKyBzdG9yYWdlS2V5KVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9taXNlLmFsbHNldHRsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGhvbmUtaW5wdXQtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==