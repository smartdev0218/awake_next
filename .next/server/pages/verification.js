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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/verification.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/components/form/index.ts":
/*!**************************************!*\
  !*** ./src/components/form/index.ts ***!
  \**************************************/
/*! exports provided: VerificationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verification_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-form */ "./src/components/form/verification-form/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerificationForm", function() { return _verification_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/form/verification-form/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/form/verification-form/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactCodeInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./src/components/form/verification-form/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\components\\form\\verification-form\\index.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
class ReactCodeInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "__clearvalues__", () => {
      const {
        fields
      } = this.props;
      this.setState({
        values: Array(fields).fill('')
      });
      this.iRefs[0].current.focus();
    });

    _defineProperty(this, "triggerChange", (values = this.state.values) => {
      const {
        onChange,
        onComplete,
        fields
      } = this.props;
      const val = values.join('');
      onChange && onChange(val);

      if (onComplete && val.length >= fields) {
        onComplete(val);
      }
    });

    _defineProperty(this, "onChange", e => {
      const index = parseInt(e.target.dataset.id);

      if (this.props.type === 'number') {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
      } // this.handleKeys[index] = false;


      if (e.target.value === '' || this.props.type === 'number' && !e.target.validity.valid) {
        return;
      }

      const {
        fields
      } = this.props;
      let next;
      const value = e.target.value;
      let {
        values
      } = this.state;
      values = Object.assign([], values);

      if (value.length > 1) {
        let nextIndex = value.length + index - 1;

        if (nextIndex >= fields) {
          nextIndex = fields - 1;
        }

        next = this.iRefs[nextIndex];
        const split = value.split('');
        split.forEach((item, i) => {
          const cursor = index + i;

          if (cursor < fields) {
            values[cursor] = item;
          }
        });
        this.setState({
          values
        });
      } else {
        next = this.iRefs[index + 1];
        values[index] = value;
        this.setState({
          values
        });
      }

      if (next) {
        next.current.focus();
        next.current.select();
      }

      this.triggerChange(values);
    });

    _defineProperty(this, "onKeyDown", e => {
      const index = parseInt(e.target.dataset.id);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = this.iRefs[prevIndex];
      const next = this.iRefs[nextIndex];

      switch (e.keyCode) {
        case KEY_CODE.backspace:
          e.preventDefault();
          const vals = [...this.state.values];

          if (this.state.values[index]) {
            vals[index] = '';
            this.setState({
              values: vals
            });
            this.triggerChange(vals);
          } else if (prev) {
            vals[prevIndex] = '';
            prev.current.focus();
            this.setState({
              values: vals
            });
            this.triggerChange(vals);
          }

          break;

        case KEY_CODE.left:
          e.preventDefault();

          if (prev) {
            prev.current.focus();
          }

          break;

        case KEY_CODE.right:
          e.preventDefault();

          if (next) {
            next.current.focus();
          }

          break;

        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;

        default:
          // this.handleKeys[index] = true;
          break;
      }
    });

    _defineProperty(this, "onFocus", e => {
      e.target.select(e);
    });

    const {
      fields: _fields,
      values: _values
    } = props;

    let _vals;

    console.log(_fields);
    let autoFocusIndex = 0;

    if (_values && _values.length) {
      _vals = [];

      for (let i = 0; i < _fields; i++) {
        _vals.push(_values[i] || '');
      }

      autoFocusIndex = _values.length >= _fields ? 0 : _values.length;
    } else {
      _vals = Array(_fields).fill('');
    }

    this.state = {
      values: _vals,
      autoFocusIndex
    };
    this.iRefs = [];

    for (let i = 0; i < _fields; i++) {
      this.iRefs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());
    }

    this.id = +new Date(); // this.handleKeys = Array(fields).fill(false);
  }
  /**
   * Clear all field value & focus first field
   */


  render() {
    const {
      values,
      autoFocusIndex
    } = this.state;
    const {
      loading,
      title,
      fieldHeight,
      fieldWidth,
      fields,
      autoFocus,
      className,
      type
    } = this.props;
    const INPUT_STYLE = {
      width: fieldWidth,
      height: fieldHeight,
      border: 'solid 1px',
      margin: '0 10px',
      borderRadius: '13px'
    };
    const ROOT_STYLE = {
      width: fields * fieldWidth + 100,
      margin: '26px 0'
    };
    const LOADING_STYLE = {
      lineHeight: `${fieldHeight}px`
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['react-code-input-container']} ${className}`,
      style: ROOT_STYLE,
      children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['title'],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['react-code-input'],
        children: values.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: type === 'number' ? 'tel' : type,
          pattern: type === 'number' ? '[0-9]*' : null,
          autoFocus: autoFocus && index === autoFocusIndex,
          style: INPUT_STYLE,
          "data-id": index,
          value: value,
          id: this.props.id ? `${this.props.id}-${index}` : null,
          ref: this.iRefs[index],
          onChange: this.onChange,
          onKeyDown: this.onKeyDown // onKeyUp={this.onKeyUp}
          ,
          onFocus: this.onFocus,
          disabled: this.props.disabled,
          required: this.props.required,
          placeholder: this.props.placeholder[index]
        }, `${this.id}-${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['loading'],
        style: LOADING_STYLE,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['blur']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['spin'],
          viewBox: "0 0 1024 1024",
          "data-icon": "loading",
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            fill: "#006fff",
            d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this);
  }

}

_defineProperty(ReactCodeInput, "propTypes", {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['text', 'number']),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fieldWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fieldHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
});

_defineProperty(ReactCodeInput, "defaultProps", {
  type: 'number',
  fields: 6,
  fieldWidth: 58,
  fieldHeight: 54,
  autoFocus: true,
  disabled: false,
  required: false,
  placeholder: []
});

/***/ }),

/***/ "./src/components/form/verification-form/styles.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/form/verification-form/styles.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"react-code-input-container": "styles_react-code-input-container__N_kRv",
	"react-code-input": "styles_react-code-input__3t5o0",
	"loading": "styles_loading__2rCBK",
	"blur": "styles_blur__F3wgu",
	"title": "styles_title__3yKUh",
	"spin": "styles_spin__3oq9T",
	"loadingCircle": "styles_loadingCircle__3en_C"
};


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

/***/ "./src/pages/verification.tsx":
/*!************************************!*\
  !*** ./src/pages/verification.tsx ***!
  \************************************/
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
/* harmony import */ var context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/auth */ "./src/context/auth.tsx");
/* harmony import */ var context_user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/user-info */ "./src/context/user-info.tsx");
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common */ "./src/components/common/index.ts");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/form */ "./src/components/form/index.ts");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.ts");

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\verification.tsx";








const Verification = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    confirmSMS
  } = Object(context_auth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const {
    setPhoneNumber,
    userName,
    verificationCode,
    phoneNumber
  } = Object(context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"])();
  console.log(context_user_info__WEBPACK_IMPORTED_MODULE_4__["useUserInfo"]);

  const handleClickResend = () => {
    setPhoneNumber('');
    router.push('/phone');
  };

  const handleVerifyCode = code => {
    if (userName === null) {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber
      }).then(res => {
        console.log(res);
        alert(res.user.username + "logged in successfully!");
      }).catch(error => {
        console.log(error);
      });
    } else {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber,
        username: userName
      }).then(res => {
        console.log(res);
        alert(res.user.username + "registered successfully!");
      }).catch(error => {
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
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "We sent you an SMS code on number."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "phonenumber",
            children: phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_form__WEBPACK_IMPORTED_MODULE_6__["VerificationForm"], {
            fields: 4,
            onComplete: handleVerifyCode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            title: "Re-send code",
            onClick: handleClickResend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
              lineNumber: 68,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Verification);

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHQtZmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0MTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS92ZXJpZmljYXRpb24tZm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS92ZXJpZmljYXRpb24tZm9ybS9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L21haW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYnJlYWtwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC91c2VyLWluZm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92ZXJpZmljYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9heGlvcy1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BlcnNpc3RlZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbG90dGllZmlsZXMvcmVhY3QtbG90dGllLXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLWN1dHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvbWlzZS5hbGxzZXR0bGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJCdXR0b24iLCJQcm9wcyIsImNsYXNzZXMiLCJkaXNhYmxlZCIsImUiLCJvbkNsaWNrIiwidGl0bGUiLCJDYXJkIiwic3R5bGVkIiwiUGFwZXIiLCJjb2xvcnMiLCJib3JkZXJDb2xvciIsInRleHRDb2xvciIsImRhcmtCbHVlIiwib3JhbmdlQ29sb3IiLCJDb250YWluZXIiLCJNVUlDb250YWluZXIiLCJMb2FkaW5nIiwiY2hpbGRyZW4iLCJpc0F1dGhMb2FkZWQiLCJzZXRBdXRoTG9hZGVkIiwidXNlU3RhdGUiLCJqd3QiLCJmZXRjaFVzZXIiLCJsb2dvdXQiLCJ1c2VBdXRoIiwidXNlRWZmZWN0IiwiZmluZERldlNlcnZlclVybCIsInRoZW4iLCJ1cmwiLCJjb29raWVDdXR0ZXIiLCJzZXQiLCJmaW5hbGx5IiwibG9hZGVkVXJsIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXNDb2RlIiwibG9hZGluZ0FuaW1hdGlvbiIsImhlaWdodCIsIndpZHRoIiwicm9vdCIsInRleHRGaWVsZCIsIlRleHRGaWVsZCIsInByb3BzIiwiY2xhc3NOYW1lcyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJjb250YWluZXIiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwiVGV4dDEyIiwidGV4dCIsIktFWV9DT0RFIiwiYmFja3NwYWNlIiwibGVmdCIsInVwIiwicmlnaHQiLCJkb3duIiwiUmVhY3RDb2RlSW5wdXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImZpZWxkcyIsInNldFN0YXRlIiwidmFsdWVzIiwiQXJyYXkiLCJmaWxsIiwiaVJlZnMiLCJjdXJyZW50IiwiZm9jdXMiLCJzdGF0ZSIsIm9uQ29tcGxldGUiLCJ2YWwiLCJqb2luIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJzZUludCIsInRhcmdldCIsImRhdGFzZXQiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwibmV4dCIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRJbmRleCIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwiY3Vyc29yIiwic2VsZWN0IiwidHJpZ2dlckNoYW5nZSIsInByZXZJbmRleCIsInByZXYiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJ2YWxzIiwibG9nIiwiYXV0b0ZvY3VzSW5kZXgiLCJwdXNoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJEYXRlIiwicmVuZGVyIiwibG9hZGluZyIsImZpZWxkSGVpZ2h0IiwiZmllbGRXaWR0aCIsImF1dG9Gb2N1cyIsImNsYXNzTmFtZSIsIklOUFVUX1NUWUxFIiwiYm9yZGVyIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiUk9PVF9TVFlMRSIsIkxPQURJTkdfU1RZTEUiLCJzdHlsZXMiLCJtYXAiLCJvbktleURvd24iLCJvbkZvY3VzIiwicmVxdWlyZWQiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImZ1bmMiLCJudW1iZXIiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiIsInBhZGRpbmdCb3R0b20iLCJncmlkIiwiZGlzcGxheSIsIkZvb3RlciIsInBhZGRpbmdUb3AiLCJsb2dvX3RpdGxlcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJsb2dvX3NtIiwiYWxpZ25TZWxmIiwiSGVhZGVyIiwiYmFja2dyb3VuZCIsIk1haW4iLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiQVBJX1VSTCIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiZ2V0SW50aWFsU3RhdGUiLCJzZXRBdXRoVG9rZW5IZWFkZXJzIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJBdXRoUHJvdmlkZXIiLCJ1c2VyIiwic2V0VXNlciIsInNldEp3dCIsInNpZ25JbldpdGhTTVMiLCJheGlvc0NsaWVudCIsInBvc3QiLCJjb25maXJtU01TIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXBkYXRlVXNlciIsInVzZU1lbW8iLCJwZXJzaXN0U3RhdGUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiVXNlckluZm9Db250ZXh0IiwiVXNlckluZm9Qcm92aWRlciIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwic2V0VmVyaWZpY2F0aW9uQ29kZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VVc2VySW5mbyIsIlZlcmlmaWNhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrUmVzZW5kIiwiaGFuZGxlVmVyaWZ5Q29kZSIsImNvZGUiLCJzbXNDb2RlIiwidmVyaWZpY2F0aW9uSWQiLCJyZXMiLCJ1c2VybmFtZSIsImFsbFNldHRsZWQiLCJwcm9kVXJsIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIm5ld1Rva2VuIiwiZGVmYXVsdHMiLCJhdXRob3JpemF0aW9uIiwidXJsc1RvVHJ5IiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsImdldCIsInRpbWVvdXQiLCJyZXN1bHRzIiwiZmlsdGVyIiwiciIsInN0YXR1cyIsImJhc2VVcmwiLCJjb25maWciLCJzdG9yYWdlS2V5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FB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QWpETSxDOzs7Ozs7Ozs7Ozs7QUN6QlA7QUFBQTtBQUFBO0FBQU8sTUFBTTNDLFlBQVksR0FBRyxDQUFDNkMsVUFBRCxFQUFxQnBKLEtBQXJCLEtBQTZDO0FBQ3ZFLGFBQW1DLEVBRWxDO0FBQ0YsQ0FKTTtBQU1BLE1BQU1rRixjQUFjLEdBQUlrRSxVQUFELElBQTZCO0FBQ3pELGFBQW1DLEVBV2xDO0FBQ0YsQ0FiTSxDOzs7Ozs7Ozs7OztBQ05QLDZEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3ZlcmlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3ZlcmlmaWNhdGlvbi50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgQnV0dG9uIGFzIE1VSUJ1dHRvbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYnV0dG9uOiB0aGVtZS5idXR0b24sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgb25DbGljazogYW55XHJcbiAgZGlzYWJsZWQ/OiBhbnlcclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgZGlzYWJsZWQ9e1Byb3BzLmRpc2FibGVkfVxyXG4gICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBQcm9wcy5vbkNsaWNrKGUpfVxyXG4gICAgPlxyXG4gICAgICB7UHJvcHMudGl0bGV9XHJcbiAgICA8L01VSUJ1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iLCJpbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnY29uZmlnJ1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKFBhcGVyKWBcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgZmxleDogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMzJweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGZsZXg6IDAuMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTRweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJHtjb2xvcnMuYm9yZGVyQ29sb3J9OyAgXG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0Q29sb3J9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLmRhcmtCbHVlfVxuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBjb2xvcjogJHtjb2xvcnMudGV4dENvbG9yfTtcbiAgICBtYXJnaW46IDhweCAwIDRweCAwO1xuICB9XG5cbiAgLm9yYW5nZS10ZXh0IHtcbiAgICBjb2xvcjogJHtjb2xvcnMub3JhbmdlQ29sb3J9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBob25lbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrQmx1ZX07XG4gIH0sXG5gXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiIsImltcG9ydCB7IENvbnRhaW5lciBhcyBNVUlDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChNVUlDb250YWluZXIpYFxyXG4gIHBhZGRpbmc6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQgfSBmcm9tICcuL2NhcmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vbG9hZGluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RmllbGQgfSBmcm9tICcuL3RleHQtZmllbGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dDEyIH0gZnJvbSAnLi90ZXh0MTInXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ0Bsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9hdXRoJ1xyXG5pbXBvcnQgeyBmaW5kRGV2U2VydmVyVXJsLCBsb2FkZWRVcmwgfSBmcm9tICd1dGlscy9heGlvcy1jbGllbnQnXHJcblxyXG5pbXBvcnQgbG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmctYW5pbWF0aW9uLmpzb24nXHJcblxyXG4vKipcclxuICogQXBwIExvYWRpbmcgc2NyZWVuLlxyXG4gKi9cclxuY29uc3QgTG9hZGluZyA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtpc0F1dGhMb2FkZWQsIHNldEF1dGhMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBqd3QsIGZldGNoVXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpbmREZXZTZXJ2ZXJVcmwoKVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldCgnc2VydmVyLXVybCcsIHVybClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhMb2FkZWQodHJ1ZSlcclxuICAgICAgICBpZiAobG9hZGVkVXJsKSB7XHJcbiAgICAgICAgICBpZiAoand0KSB7XHJcbiAgICAgICAgICAgIGZldGNoVXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvbiBsb2FkJywgZSlcclxuICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LmRhdGE/LnN0YXR1c0NvZGUgPT09ICd1bmF1dGhvcmlzZWQnKSB7XHJcbiAgICAgICAgICBsb2dvdXQoKVxyXG4gICAgICAgICAgLy8gZGlzcGF0Y2hNb2RhbCh7XHJcbiAgICAgICAgICAvLyAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICAvLyAgICAgbW9kYWw6IDxNb2RhbEVycm9yIHRleHQ9e2dldExhbmd1YWdlKCkueW91V2VyZUxvZ2dlZE91dH0gLz5cclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzQXV0aExvYWRlZCA/IChcclxuICAgICAgICBjaGlsZHJlblxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyTG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgIHNyYz17bG9hZGluZ0FuaW1hdGlvbn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGV4dEZpZWxkIGFzIE1VSVRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgLy8gICBib3JkZXJDb2xvcjogXCJncmVlblwiXHJcbiAgICAvLyB9LFxyXG4gICAgJyY6aG92ZXIgLk11aU91dGxpbmVkSW5wdXQtcm9vdCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdC5NdWktZm9jdXNlZCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJjpob3ZlciAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QuTXVpLWZvY3VzZWQgLk11aU91dGxpbmVkSW5wdXQtaW5wdXRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJwdXJwbGVcIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJiAuTXVpSW5wdXRMYWJlbC1vdXRsaW5lZFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcImdyZWVuXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiY6aG92ZXIgLk11aUlucHV0TGFiZWwtb3V0bGluZWRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJyZWRcIlxyXG4gICAgLy8gfSxcclxuICAgICcmIC5NdWlJbnB1dExhYmVsLW91dGxpbmVkLk11aS1mb2N1c2VkJzoge1xyXG4gICAgICAvLyBjb2xvcjogdGhlbWUucGFsZXR0ZS5vcmFuZ2VDb2xvcixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB0ZXh0ZmllbGQ6IHRoZW1lLnRleHRmaWVsZCxcclxuICB0ZXh0RmllbGQ6IHt9LFxyXG59KSlcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb25DaGFuZ2U/OiBhbnlcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlUZXh0RmllbGRcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMudGV4dEZpZWxkLCBjbGFzc2VzLnJvb3QpfVxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcclxuICAgICAgbGFiZWw9XCJGdWxsIG5hbWVcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTQuMDZweCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250Q29sb3I6ICcjQTNCNEJEJyxcclxuICAgIGNvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGV4dDEyOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PntQcm9wcy50ZXh0fTwvVHlwb2dyYXBoeT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDEyXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVyaWZpY2F0aW9uRm9ybSB9IGZyb20gJy4vdmVyaWZpY2F0aW9uLWZvcm0nXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgS0VZX0NPREUgPSB7XHJcbiAgYmFja3NwYWNlOiA4LFxyXG4gIGxlZnQ6IDM3LFxyXG4gIHVwOiAzOCxcclxuICByaWdodDogMzksXHJcbiAgZG93bjogNDAsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29kZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICdudW1iZXInXSksXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmaWVsZFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmaWVsZEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgZmllbGRzOiA2LFxyXG4gICAgZmllbGRXaWR0aDogNTgsXHJcbiAgICBmaWVsZEhlaWdodDogNTQsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBwbGFjZWhvbGRlcjogW10sXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBjb25zdCB7IGZpZWxkcywgdmFsdWVzIH0gPSBwcm9wc1xyXG4gICAgbGV0IHZhbHNcclxuICAgIGNvbnNvbGUubG9nKGZpZWxkcylcclxuICAgIGxldCBhdXRvRm9jdXNJbmRleCA9IDBcclxuICAgIGlmICh2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICB2YWxzID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHM7IGkrKykge1xyXG4gICAgICAgIHZhbHMucHVzaCh2YWx1ZXNbaV0gfHwgJycpXHJcbiAgICAgIH1cclxuICAgICAgYXV0b0ZvY3VzSW5kZXggPSB2YWx1ZXMubGVuZ3RoID49IGZpZWxkcyA/IDAgOiB2YWx1ZXMubGVuZ3RoXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWxzID0gQXJyYXkoZmllbGRzKS5maWxsKCcnKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVzOiB2YWxzLCBhdXRvRm9jdXNJbmRleCB9XHJcblxyXG4gICAgdGhpcy5pUmVmcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkczsgaSsrKSB7XHJcbiAgICAgIHRoaXMuaVJlZnMucHVzaChSZWFjdC5jcmVhdGVSZWYoKSlcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSArbmV3IERhdGUoKVxyXG5cclxuICAgIC8vIHRoaXMuaGFuZGxlS2V5cyA9IEFycmF5KGZpZWxkcykuZmlsbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBhbGwgZmllbGQgdmFsdWUgJiBmb2N1cyBmaXJzdCBmaWVsZFxyXG4gICAqL1xyXG4gIF9fY2xlYXJ2YWx1ZXNfXyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZmllbGRzIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiBBcnJheShmaWVsZHMpLmZpbGwoJycpIH0pXHJcbiAgICB0aGlzLmlSZWZzWzBdLmN1cnJlbnQuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNoYW5nZSA9ICh2YWx1ZXMgPSB0aGlzLnN0YXRlLnZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25Db21wbGV0ZSwgZmllbGRzIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWwgPSB2YWx1ZXMuam9pbignJylcclxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbClcclxuICAgIGlmIChvbkNvbXBsZXRlICYmIHZhbC5sZW5ndGggPj0gZmllbGRzKSB7XHJcbiAgICAgIG9uQ29tcGxldGUodmFsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKVxyXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXlxcZF0vZ2ksICcnKVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5oYW5kbGVLZXlzW2luZGV4XSA9IGZhbHNlO1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gJycgfHxcclxuICAgICAgKHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgIWUudGFyZ2V0LnZhbGlkaXR5LnZhbGlkKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBmaWVsZHMgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCBuZXh0XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBsZXQgeyB2YWx1ZXMgfSA9IHRoaXMuc3RhdGVcclxuICAgIHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oW10sIHZhbHVlcylcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGxldCBuZXh0SW5kZXggPSB2YWx1ZS5sZW5ndGggKyBpbmRleCAtIDFcclxuICAgICAgaWYgKG5leHRJbmRleCA+PSBmaWVsZHMpIHtcclxuICAgICAgICBuZXh0SW5kZXggPSBmaWVsZHMgLSAxXHJcbiAgICAgIH1cclxuICAgICAgbmV4dCA9IHRoaXMuaVJlZnNbbmV4dEluZGV4XVxyXG4gICAgICBjb25zdCBzcGxpdCA9IHZhbHVlLnNwbGl0KCcnKVxyXG4gICAgICBzcGxpdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gaW5kZXggKyBpXHJcbiAgICAgICAgaWYgKGN1cnNvciA8IGZpZWxkcykge1xyXG4gICAgICAgICAgdmFsdWVzW2N1cnNvcl0gPSBpdGVtXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0ID0gdGhpcy5pUmVmc1tpbmRleCArIDFdXHJcbiAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHQpIHtcclxuICAgICAgbmV4dC5jdXJyZW50LmZvY3VzKClcclxuICAgICAgbmV4dC5jdXJyZW50LnNlbGVjdCgpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlKHZhbHVlcylcclxuICB9XHJcblxyXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQpXHJcbiAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIDFcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgMVxyXG4gICAgY29uc3QgcHJldiA9IHRoaXMuaVJlZnNbcHJldkluZGV4XVxyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMuaVJlZnNbbmV4dEluZGV4XVxyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBLRVlfQ09ERS5iYWNrc3BhY2U6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdmFscyA9IFsuLi50aGlzLnN0YXRlLnZhbHVlc11cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICB2YWxzW2luZGV4XSA9ICcnXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB2YWxzIH0pXHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2UodmFscylcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXYpIHtcclxuICAgICAgICAgIHZhbHNbcHJldkluZGV4XSA9ICcnXHJcbiAgICAgICAgICBwcmV2LmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlczogdmFscyB9KVxyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlKHZhbHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgS0VZX0NPREUubGVmdDpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgcHJldi5jdXJyZW50LmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBLRVlfQ09ERS5yaWdodDpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgbmV4dC5jdXJyZW50LmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBLRVlfQ09ERS51cDpcclxuICAgICAgY2FzZSBLRVlfQ09ERS5kb3duOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVLZXlzW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG9uS2V5VXAgPSBlID0+IHtcclxuICAvLyAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZCk7XHJcbiAgLy8gICBpZiAodGhpcy5oYW5kbGVLZXlzW2luZGV4XSkge1xyXG4gIC8vICAgICB0aGlzLmhhbmRsZUtleXNbaW5kZXhdID0gZmFsc2U7XHJcbiAgLy8gICAgIGNvbnN0IG5leHQgPSB0aGlzLmlSZWZzW2luZGV4ICsgMV07XHJcbiAgLy8gICAgIGlmIChuZXh0KSB7XHJcbiAgLy8gICAgICAgbmV4dC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICBvbkZvY3VzID0gKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnNlbGVjdChlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIGF1dG9Gb2N1c0luZGV4IH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxvYWRpbmcsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBmaWVsZEhlaWdodCxcclxuICAgICAgZmllbGRXaWR0aCxcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBhdXRvRm9jdXMsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgdHlwZSxcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBJTlBVVF9TVFlMRSA9IHtcclxuICAgICAgd2lkdGg6IGZpZWxkV2lkdGgsXHJcbiAgICAgIGhlaWdodDogZmllbGRIZWlnaHQsXHJcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCcsXHJcbiAgICAgIG1hcmdpbjogJzAgMTBweCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzEzcHgnLFxyXG4gICAgfVxyXG4gICAgY29uc3QgUk9PVF9TVFlMRSA9IHtcclxuICAgICAgd2lkdGg6IGZpZWxkcyAqIGZpZWxkV2lkdGggKyAxMDAsXHJcbiAgICAgIG1hcmdpbjogJzI2cHggMCcsXHJcbiAgICB9XHJcbiAgICBjb25zdCBMT0FESU5HX1NUWUxFID0ge1xyXG4gICAgICBsaW5lSGVpZ2h0OiBgJHtmaWVsZEhlaWdodH1weGAsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ3JlYWN0LWNvZGUtaW5wdXQtY29udGFpbmVyJ119ICR7Y2xhc3NOYW1lfWB9XHJcbiAgICAgICAgc3R5bGU9e1JPT1RfU1RZTEV9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGUgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlJ119Pnt0aXRsZX08L3A+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3JlYWN0LWNvZGUtaW5wdXQnXX0+XHJcbiAgICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9e3R5cGUgPT09ICdudW1iZXInID8gJ3RlbCcgOiB0eXBlfVxyXG4gICAgICAgICAgICAgIHBhdHRlcm49e3R5cGUgPT09ICdudW1iZXInID8gJ1swLTldKicgOiBudWxsfVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzICYmIGluZGV4ID09PSBhdXRvRm9jdXNJbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17SU5QVVRfU1RZTEV9XHJcbiAgICAgICAgICAgICAga2V5PXtgJHt0aGlzLmlkfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgZGF0YS1pZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkID8gYCR7dGhpcy5wcm9wcy5pZH0tJHtpbmRleH1gIDogbnVsbH1cclxuICAgICAgICAgICAgICByZWY9e3RoaXMuaVJlZnNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XHJcbiAgICAgICAgICAgICAgLy8gb25LZXlVcD17dGhpcy5vbktleVVwfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcltpbmRleF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsb2FkaW5nJ119IHN0eWxlPXtMT0FESU5HX1NUWUxFfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYmx1ciddfSAvPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3NwaW4nXX1cclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pY29uPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzAwNmZmZlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTk4OCA1NDhjLTE5LjkgMC0zNi0xNi4xLTM2LTM2IDAtNTkuNC0xMS42LTExNy0zNC42LTE3MS4zYTQ0MC40NSA0NDAuNDUgMCAwIDAtOTQuMy0xMzkuOSA0MzcuNzEgNDM3LjcxIDAgMCAwLTEzOS45LTk0LjNDNjI5IDgzLjYgNTcxLjQgNzIgNTEyIDcyYy0xOS45IDAtMzYtMTYuMS0zNi0zNnMxNi4xLTM2IDM2LTM2YzY5LjEgMCAxMzYuMiAxMy41IDE5OS4zIDQwLjNDNzcyLjMgNjYgODI3IDEwMyA4NzQgMTUwYzQ3IDQ3IDgzLjkgMTAxLjggMTA5LjcgMTYyLjcgMjYuNyA2My4xIDQwLjIgMTMwLjIgNDAuMiAxOTkuMy4xIDE5LjktMTYgMzYtMzUuOSAzNnpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlYWN0LWNvZGUtaW5wdXQtY29udGFpbmVyXCI6IFwic3R5bGVzX3JlYWN0LWNvZGUtaW5wdXQtY29udGFpbmVyX19OX2tSdlwiLFxuXHRcInJlYWN0LWNvZGUtaW5wdXRcIjogXCJzdHlsZXNfcmVhY3QtY29kZS1pbnB1dF9fM3Q1bzBcIixcblx0XCJsb2FkaW5nXCI6IFwic3R5bGVzX2xvYWRpbmdfXzJyQ0JLXCIsXG5cdFwiYmx1clwiOiBcInN0eWxlc19ibHVyX19GM3dndVwiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVzX3RpdGxlX18zeUtVaFwiLFxuXHRcInNwaW5cIjogXCJzdHlsZXNfc3Bpbl9fM29xOVRcIixcblx0XCJsb2FkaW5nQ2lyY2xlXCI6IFwic3R5bGVzX2xvYWRpbmdDaXJjbGVfXzNlbl9DXCJcbn07XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogNDgsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNC4wNnB4JyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGZvbnRDb2xvcjogJyNBM0I0QkQnLFxyXG4gICAgY29sb3I6ICcjQTNCNEJEJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICDCqSAyMDIxIEFsbCByaWdodHMgUmVzZXJ2ZWQuIEF3YWtlIEx0ZC5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNDhweCcsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBsb2dvX3RpdGxlczoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5MZWZ0OiAtMTAsXHJcbiAgfSxcclxuICBsb2dvX3NtOiB7XHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj17J3Jvdyd9IGp1c3RpZnk9eydjZW50ZXInfSBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBoZWlnaHQ9eyc5OC44NCd9IC8+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29fdGl0bGVzfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tdGl0bGUucG5nXCIgaGVpZ2h0PXsnMzAuNzknfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby1zbWFsbC10aXRsZS5wbmdcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb19zbX0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgJ2xpbmVhci1ncmFkaWVudCgjMzQzRjQ1IDAlLCAjM0Q0QTUxIDI1LjIyJSwgIzM3NDU0QiA0Mi43MSUsICMyRTNDNDMgNzQuMTElLCAjMUYyQjMxIDEwMCUpJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPXtmYWxzZX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsImV4cG9ydCBjb25zdCBtb2JpbGUgPSAnMHB4J1xuZXhwb3J0IGNvbnN0IHRhYmxldCA9ICc2NDBweCdcbmV4cG9ydCBjb25zdCBkZXNrdG9wID0gJzEwMjRweCdcbiIsImV4cG9ydCBjb25zdCB0ZXh0Q29sb3IgPSAnIzU0NkU3QSdcbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvciA9ICcjRjFGMUY1J1xuZXhwb3J0IGNvbnN0IG9yYW5nZUNvbG9yID0gJyNGRjc1MzQnXG5leHBvcnQgY29uc3QgZGFya0JsdWUgPSAnIzM3NDc0RidcbiIsImV4cG9ydCAqIGFzIGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMnXG5leHBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5cbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBGQyxcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VNZW1vLFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnbW9kZWxzJ1xyXG5pbXBvcnQgeyBheGlvc0NsaWVudCwgc2V0QXV0aFRva2VuSGVhZGVycyB9IGZyb20gJ3V0aWxzL2F4aW9zLWNsaWVudCdcclxuaW1wb3J0IHsgZ2V0SW50aWFsU3RhdGUsIHBlcnNpc3RTdGF0ZSB9IGZyb20gJ3V0aWxzL3BlcnNpc3RlZC1zdGF0ZSdcclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gJ2F3YWtlLWF1dGgnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoQ29udGV4dCB7XHJcbiAgdXNlcjogVXNlciB8IG51bGxcclxuICBzZXRVc2VyOiAodXNlcjogVXNlciB8IG51bGwpID0+IHZvaWRcclxuICBqd3Q6IHN0cmluZyB8IG51bGxcclxuICBzZXRKd3Q6IChqd3Q6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxuICBzaWduSW5XaXRoU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBjb25maXJtU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBsb2dvdXQ6ICgpID0+IHZvaWRcclxuICBmZXRjaFVzZXI6ICgpID0+IHZvaWRcclxuICB1cGRhdGVVc2VyOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBnZXRJbnRpYWxTdGF0ZShTVE9SQUdFX0tFWSkgPz8gZGVmYXVsdFN0YXRlXHJcblxyXG5zZXRBdXRoVG9rZW5IZWFkZXJzKGluaXRpYWxTdGF0ZS5qd3QgPz8gJycpXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe30gYXMgSUF1dGhDb250ZXh0KVxyXG5cclxuQXV0aENvbnRleHQuZGlzcGxheU5hbWUgPSAnQXV0aENvbnRleHQnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4oaW5pdGlhbFN0YXRlLnVzZXIgPz8gbnVsbClcclxuICBjb25zdCBband0LCBzZXRKd3RdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oaW5pdGlhbFN0YXRlLmp3dCA/PyBudWxsKVxyXG5cclxuICBjb25zdCBzaWduSW5XaXRoU01TID0gKGRhdGEpID0+IGF4aW9zQ2xpZW50LnBvc3QoYHNlbmQtc21zLWNvZGVgLCBkYXRhKVxyXG5cclxuICBjb25zdCBjb25maXJtU01TID0gKGRhdGEpID0+XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdChgY29uZmlybS1zbXMtY29kZWAsIGRhdGEpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlclxyXG4gICAgICAgIGNvbnN0IGp3dCA9IGRhdGEuand0IGFzIHN0cmluZ1xyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgc2V0Snd0KGp3dClcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KCdqd3QnLCBqd3QpXHJcbiAgICAgICAgc2V0QXV0aFRva2VuSGVhZGVycyhqd3QpXHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXHJcbiAgICAgIH0pXHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvb2tpZUN1dHRlci5zZXQoJ2p3dCcsIG51bGwpXHJcbiAgICBzZXRBdXRoVG9rZW5IZWFkZXJzKG51bGwpXHJcbiAgICBzZXRKd3QobnVsbClcclxuICAgIHNldFVzZXIobnVsbClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSAoKSA9PiB7XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdCgnZmV0Y2gtdXNlcicpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgYXhpb3NDbGllbnRcclxuICAgICAgLnBvc3QoJ3VwZGF0ZS11c2VyJywgZGF0YSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgdXNlcixcclxuICAgICAgc2V0VXNlcixcclxuICAgICAgand0LFxyXG4gICAgICBzZXRKd3QsXHJcbiAgICAgIHNpZ25JbldpdGhTTVMsXHJcbiAgICAgIGNvbmZpcm1TTVMsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgZmV0Y2hVc2VyLFxyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHNldFVzZXIsXHJcbiAgICAgIGp3dCxcclxuICAgICAgc2V0Snd0LFxyXG4gICAgICBzaWduSW5XaXRoU01TLFxyXG4gICAgICBjb25maXJtU01TLFxyXG4gICAgICBsb2dvdXQsXHJcbiAgICAgIGZldGNoVXNlcixcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgIF1cclxuICApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBwZXJzaXN0U3RhdGUoU1RPUkFHRV9LRVksIHsgand0LCB1c2VyIH0pLCBband0LCB1c2VyXSlcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpOiBJQXV0aENvbnRleHQgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBob29rIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBBdXRoUHJvdmlkZXIgY29tcG9uZW50JylcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGQywgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJbmZvQ29udGV4dCB7XHJcbiAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IG51bGxcclxuICBzZXRQaG9uZU51bWJlcjogKHBob25lOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgdXNlck5hbWU6IHN0cmluZyB8IG51bGxcclxuICBzZXRVc2VyTmFtZTogKHVzZXJOYW1lOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nIHwgbnVsbFxyXG4gIHNldFZlcmlmaWNhdGlvbkNvZGU6ICh2ZXJpZmljYXRpb25Db2RlOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PElVc2VySW5mb0NvbnRleHQ+KFxyXG4gIHt9IGFzIElVc2VySW5mb0NvbnRleHRcclxuKVxyXG5cclxuVXNlckluZm9Db250ZXh0LmRpc3BsYXlOYW1lID0gJ1VzZXJJbmZvQ29udGV4dCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbcGhvbmVOdW1iZXIsIHNldFBob25lTnVtYmVyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3ZlcmlmaWNhdGlvbkNvZGUsIHNldFZlcmlmaWNhdGlvbkNvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICBzZXRQaG9uZU51bWJlcixcclxuICAgICAgdmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgc2V0VmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgdXNlck5hbWUsXHJcbiAgICAgIHNldFVzZXJOYW1lLFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICBzZXRQaG9uZU51bWJlcixcclxuICAgICAgdmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgc2V0VmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgdXNlck5hbWUsXHJcbiAgICAgIHNldFVzZXJOYW1lLFxyXG4gICAgXVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VySW5mb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VySW5mb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXNlckluZm8gPSAoKTogSVVzZXJJbmZvQ29udGV4dCA9PiB7XHJcblxyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJJbmZvQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICd1c2VVc2VySW5mbyBob29rIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VySW5mb1Byb3ZpZGVyIGNvbXBvbmVudCdcclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvYXV0aCdcbmltcG9ydCB7IHVzZVVzZXJJbmZvIH0gZnJvbSAnY29udGV4dC91c2VyLWluZm8nXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgVGV4dDEyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBWZXJpZmljYXRpb25Gb3JtIH0gZnJvbSAnY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IFZlcmlmaWNhdGlvbjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY29uZmlybVNNUyB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IHsgc2V0UGhvbmVOdW1iZXIsIHVzZXJOYW1lLCB2ZXJpZmljYXRpb25Db2RlLCBwaG9uZU51bWJlciB9ID0gdXNlVXNlckluZm8oKVxuICBjb25zb2xlLmxvZyh1c2VVc2VySW5mbyk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tSZXNlbmQgPSAoKSA9PiB7XG4gICAgc2V0UGhvbmVOdW1iZXIoJycpXG4gICAgcm91dGVyLnB1c2goJy9waG9uZScpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWZXJpZnlDb2RlID0gKGNvZGUpID0+IHtcbiAgICBpZiAodXNlck5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpcm1TTVMoe1xuICAgICAgICBzbXNDb2RlOiBjb2RlLFxuICAgICAgICB2ZXJpZmljYXRpb25JZDogdmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICBhbGVydChyZXMudXNlci51c2VybmFtZSArIFwibG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSFcIilcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbmZpcm1TTVMoe1xuICAgICAgICBzbXNDb2RlOiBjb2RlLFxuICAgICAgICB2ZXJpZmljYXRpb25JZDogdmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgICAgICB1c2VybmFtZTogdXNlck5hbWVcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgYWxlcnQocmVzLnVzZXIudXNlcm5hbWUgKyBcInJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IVwiKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+VmVyaWZpY2F0aW9uPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5XZSBzZW50IHlvdSBhbiBTTVMgY29kZSBvbiBudW1iZXIuPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGhvbmVudW1iZXJcIj57cGhvbmVOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgPFZlcmlmaWNhdGlvbkZvcm0gZmllbGRzPXs0fSBvbkNvbXBsZXRlPXtoYW5kbGVWZXJpZnlDb2RlfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlJlLXNlbmQgY29kZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrUmVzZW5kfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENhbid0IGxvZ2luPyDigKJ7JyAnfVxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yYW5nZS10ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3NpZ251cCcpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiB1cCBmb3IgbmV3IHVzZXJcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxUZXh0MTIgdGV4dD17J1ByaXZhY3kgcG9saWN5IC0gVGVybXMgb2YgdXNlJ30gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmlmaWNhdGlvblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgKiBhcyBhbGxTZXR0bGVkIGZyb20gJ3Byb21pc2UuYWxsc2V0dGxlZCdcclxuXHJcbmFsbFNldHRsZWQuc2hpbSgpXHJcblxyXG5jb25zdCBwcm9kVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvJ1xyXG5leHBvcnQgbGV0IGxvYWRlZFVybCA9IGZhbHNlXHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2RVcmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbkhlYWRlcnMgPSAobmV3VG9rZW46IHN0cmluZykgPT4ge1xyXG4gIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMgPSB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBuZXdUb2tlbixcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgdGhlIHJ1bm5pbmcgZGV2IHNlcnZlciwgaWYgaXQncyBwcm9kdWN0aW9uIGl0IGluc3RhbnRlbHkgc2V0cyB0aGUgdXJsLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmREZXZTZXJ2ZXJVcmwgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAvLyBTaG9ydGN1dFxyXG4gIHJldHVybiBwcm9kVXJsXHJcblxyXG4gIGlmIChsb2FkZWRVcmwpIHtcclxuICAgIHJldHVybiBheGlvc0NsaWVudC5kZWZhdWx0cy5iYXNlVVJMXHJcbiAgfVxyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgbG9hZGVkVXJsID0gdHJ1ZVxyXG4gICAgcmV0dXJuIHByb2RVcmxcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybHNUb1RyeSA9IFtcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLycsXHJcbiAgICAnaHR0cDovLzE5Mi4xNjguMC4yMjc6ODA4MC9hcGkvJyxcclxuICAgICdodHRwOi8vMTkyLjE2OC4wLjIwMzo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHA6Ly8xMC4wLjIuMjo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHBzOi8vc3MuZXcuci5hcHBzcG90LmNvbS9hcGkvJyxcclxuICAgIHByb2RVcmwsXHJcbiAgXVxyXG5cclxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbFNldHRsZWQoXHJcbiAgICAgIHVybHNUb1RyeS5tYXAoKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB0aW1lb3V0OiAyNTAgfSkpXHJcbiAgICApLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRldiBVUkwuJylcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGaWx0ZXIgYnkgc3VjY2Vzcy5cclxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpXHJcblxyXG4gICAgICAvLyBVc2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSByZXN1bHRzWzBdLnZhbHVlLmNvbmZpZy51cmxcclxuXHJcbiAgICAgIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmJhc2VVUkwgPSBiYXNlVXJsXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdVc2luZyBkZXYgc2VydmVyOiAnICsgYmFzZVVybCArICcsIChvZiAnICsgcmVzdWx0cy5sZW5ndGggKyAnIHN1Y2Nlc3MpJ1xyXG4gICAgICApXHJcblxyXG4gICAgICBsb2FkZWRVcmwgPSB0cnVlXHJcblxyXG4gICAgICByZXNvdmUoYmFzZVVybClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGVyc2lzdFN0YXRlID0gKHN0b3JhZ2VLZXk6IHN0cmluZywgc3RhdGU6IG9iamVjdCk6IHZvaWQgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbnRpYWxTdGF0ZSA9IChzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzYXZlZFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNhdmVkU3RhdGUgPz8gJ3t9JylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzdGF0ZSA6ICcgKyBzdG9yYWdlS2V5KVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9taXNlLmFsbHNldHRsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==