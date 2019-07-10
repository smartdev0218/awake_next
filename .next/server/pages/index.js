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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin */ "./src/pages/signin.tsx");

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\index.tsx";



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_signin__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/signin.tsx":
/*!******************************!*\
  !*** ./src/pages/signin.tsx ***!
  \******************************/
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
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common */ "./src/components/common/index.ts");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.ts");

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\signin.tsx";





const Signin = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onClicked = e => {
    router.push({
      pathname: '/phone',
      query: {
        from: 'signin'
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      maxWidth: "sm",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "title",
            children: ["Welcome to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Awake!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 26
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subtitle",
            children: "Awake generates money from ads using this data, companies can create ads."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            title: "Sign in to awake",
            onClick: onClicked
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
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
              lineNumber: 32,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_3__["Text12"], {
        text: 'Privacy policy - Terms of use'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHQtZmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0MTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9icmVha3BvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L2F1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NpZ25pbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2F4aW9zLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGVyc2lzdGVkLXN0YXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtY3V0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9taXNlLmFsbHNldHRsZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwiQnV0dG9uIiwiUHJvcHMiLCJjbGFzc2VzIiwiZGlzYWJsZWQiLCJlIiwib25DbGljayIsInRpdGxlIiwiQ2FyZCIsInN0eWxlZCIsIlBhcGVyIiwiY29sb3JzIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0Q29sb3IiLCJkYXJrQmx1ZSIsIm9yYW5nZUNvbG9yIiwiQ29udGFpbmVyIiwiTVVJQ29udGFpbmVyIiwiTG9hZGluZyIsImNoaWxkcmVuIiwiaXNBdXRoTG9hZGVkIiwic2V0QXV0aExvYWRlZCIsInVzZVN0YXRlIiwiand0IiwiZmV0Y2hVc2VyIiwibG9nb3V0IiwidXNlQXV0aCIsInVzZUVmZmVjdCIsImZpbmREZXZTZXJ2ZXJVcmwiLCJ0aGVuIiwidXJsIiwiY29va2llQ3V0dGVyIiwic2V0IiwiZmluYWxseSIsImxvYWRlZFVybCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzQ29kZSIsImxvYWRpbmdBbmltYXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInJvb3QiLCJ0ZXh0RmllbGQiLCJUZXh0RmllbGQiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY29udGFpbmVyIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250Q29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIlRleHQxMiIsInRleHQiLCJwYWRkaW5nQm90dG9tIiwiZ3JpZCIsImRpc3BsYXkiLCJGb290ZXIiLCJwYWRkaW5nVG9wIiwibG9nb190aXRsZXMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibG9nb19zbSIsImFsaWduU2VsZiIsIkhlYWRlciIsImJhY2tncm91bmQiLCJNYWluIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsIkFQSV9VUkwiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImdldEludGlhbFN0YXRlIiwic2V0QXV0aFRva2VuSGVhZGVycyIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiQXV0aFByb3ZpZGVyIiwidXNlciIsInNldFVzZXIiLCJzZXRKd3QiLCJzaWduSW5XaXRoU01TIiwiYXhpb3NDbGllbnQiLCJwb3N0IiwiY29uZmlybVNNUyIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVwZGF0ZVVzZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJwZXJzaXN0U3RhdGUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiSG9tZSIsIlNpZ25pbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tlZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZnJvbSIsImFsbFNldHRsZWQiLCJwcm9kVXJsIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIm5ld1Rva2VuIiwiZGVmYXVsdHMiLCJhdXRob3JpemF0aW9uIiwidXJsc1RvVHJ5IiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsIm1hcCIsImdldCIsInRpbWVvdXQiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiciIsInN0YXR1cyIsImJhc2VVcmwiLCJjb25maWciLCJsb2ciLCJzdG9yYWdlS2V5Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxRQUFNLEVBQUVELEtBQUssQ0FBQ0M7QUFEeUIsQ0FBWixDQUFELENBQTVCOztBQVVBLE1BQU1DLE1BQXVCLEdBQUlDLEtBQUQsSUFBVztBQUN6QyxR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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgQnV0dG9uIGFzIE1VSUJ1dHRvbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYnV0dG9uOiB0aGVtZS5idXR0b24sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgb25DbGljazogYW55XHJcbiAgZGlzYWJsZWQ/OiBhbnlcclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgZGlzYWJsZWQ9e1Byb3BzLmRpc2FibGVkfVxyXG4gICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBQcm9wcy5vbkNsaWNrKGUpfVxyXG4gICAgPlxyXG4gICAgICB7UHJvcHMudGl0bGV9XHJcbiAgICA8L01VSUJ1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iLCJpbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnY29uZmlnJ1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKFBhcGVyKWBcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgZmxleDogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMzJweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGZsZXg6IDAuMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTRweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJHtjb2xvcnMuYm9yZGVyQ29sb3J9OyAgXG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0Q29sb3J9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLmRhcmtCbHVlfVxuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBjb2xvcjogJHtjb2xvcnMudGV4dENvbG9yfTtcbiAgICBtYXJnaW46IDhweCAwIDRweCAwO1xuICB9XG5cbiAgLm9yYW5nZS10ZXh0IHtcbiAgICBjb2xvcjogJHtjb2xvcnMub3JhbmdlQ29sb3J9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBob25lbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrQmx1ZX07XG4gIH0sXG5gXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiIsImltcG9ydCB7IENvbnRhaW5lciBhcyBNVUlDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChNVUlDb250YWluZXIpYFxyXG4gIHBhZGRpbmc6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQgfSBmcm9tICcuL2NhcmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vbG9hZGluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RmllbGQgfSBmcm9tICcuL3RleHQtZmllbGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dDEyIH0gZnJvbSAnLi90ZXh0MTInXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ0Bsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9hdXRoJ1xyXG5pbXBvcnQgeyBmaW5kRGV2U2VydmVyVXJsLCBsb2FkZWRVcmwgfSBmcm9tICd1dGlscy9heGlvcy1jbGllbnQnXHJcblxyXG5pbXBvcnQgbG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmctYW5pbWF0aW9uLmpzb24nXHJcblxyXG4vKipcclxuICogQXBwIExvYWRpbmcgc2NyZWVuLlxyXG4gKi9cclxuY29uc3QgTG9hZGluZyA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtpc0F1dGhMb2FkZWQsIHNldEF1dGhMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBqd3QsIGZldGNoVXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpbmREZXZTZXJ2ZXJVcmwoKVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldCgnc2VydmVyLXVybCcsIHVybClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhMb2FkZWQodHJ1ZSlcclxuICAgICAgICBpZiAobG9hZGVkVXJsKSB7XHJcbiAgICAgICAgICBpZiAoand0KSB7XHJcbiAgICAgICAgICAgIGZldGNoVXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvbiBsb2FkJywgZSlcclxuICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LmRhdGE/LnN0YXR1c0NvZGUgPT09ICd1bmF1dGhvcmlzZWQnKSB7XHJcbiAgICAgICAgICBsb2dvdXQoKVxyXG4gICAgICAgICAgLy8gZGlzcGF0Y2hNb2RhbCh7XHJcbiAgICAgICAgICAvLyAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICAvLyAgICAgbW9kYWw6IDxNb2RhbEVycm9yIHRleHQ9e2dldExhbmd1YWdlKCkueW91V2VyZUxvZ2dlZE91dH0gLz5cclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzQXV0aExvYWRlZCA/IChcclxuICAgICAgICBjaGlsZHJlblxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyTG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgIHNyYz17bG9hZGluZ0FuaW1hdGlvbn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGV4dEZpZWxkIGFzIE1VSVRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgLy8gICBib3JkZXJDb2xvcjogXCJncmVlblwiXHJcbiAgICAvLyB9LFxyXG4gICAgJyY6aG92ZXIgLk11aU91dGxpbmVkSW5wdXQtcm9vdCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdC5NdWktZm9jdXNlZCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJjpob3ZlciAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QuTXVpLWZvY3VzZWQgLk11aU91dGxpbmVkSW5wdXQtaW5wdXRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJwdXJwbGVcIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJiAuTXVpSW5wdXRMYWJlbC1vdXRsaW5lZFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcImdyZWVuXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiY6aG92ZXIgLk11aUlucHV0TGFiZWwtb3V0bGluZWRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJyZWRcIlxyXG4gICAgLy8gfSxcclxuICAgICcmIC5NdWlJbnB1dExhYmVsLW91dGxpbmVkLk11aS1mb2N1c2VkJzoge1xyXG4gICAgICAvLyBjb2xvcjogdGhlbWUucGFsZXR0ZS5vcmFuZ2VDb2xvcixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB0ZXh0ZmllbGQ6IHRoZW1lLnRleHRmaWVsZCxcclxuICB0ZXh0RmllbGQ6IHt9LFxyXG59KSlcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb25DaGFuZ2U/OiBhbnlcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlUZXh0RmllbGRcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMudGV4dEZpZWxkLCBjbGFzc2VzLnJvb3QpfVxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcclxuICAgICAgbGFiZWw9XCJGdWxsIG5hbWVcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTQuMDZweCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250Q29sb3I6ICcjQTNCNEJEJyxcclxuICAgIGNvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGV4dDEyOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PntQcm9wcy50ZXh0fTwvVHlwb2dyYXBoeT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDEyXHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiA0OCxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgbGluZUhlaWdodDogJzE0LjA2cHgnLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgZm9udENvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICBjb2xvcjogJyNBM0I0QkQnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgIMKpIDIwMjEgQWxsIHJpZ2h0cyBSZXNlcnZlZC4gQXdha2UgTHRkLlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6ICc0OHB4JyxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIGxvZ29fdGl0bGVzOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1hcmdpbkxlZnQ6IC0xMCxcclxuICB9LFxyXG4gIGxvZ29fc206IHtcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPXsncm93J30ganVzdGlmeT17J2NlbnRlcid9IGl0ZW0geHM9ezEyfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGhlaWdodD17Jzk4Ljg0J30gLz5cclxuICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMubG9nb190aXRsZXN9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby10aXRsZS5wbmdcIiBoZWlnaHQ9eyczMC43OSd9IC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLXNtYWxsLXRpdGxlLnBuZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvX3NtfSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tICcuL21haW4nXHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAnbGluZWFyLWdyYWRpZW50KCMzNDNGNDUgMCUsICMzRDRBNTEgMjUuMjIlLCAjMzc0NTRCIDQyLjcxJSwgIzJFM0M0MyA3NC4xMSUsICMxRjJCMzEgMTAwJSknLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgTWFpbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbWF4V2lkdGg9e2ZhbHNlfT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5cclxuIiwiZXhwb3J0IGNvbnN0IG1vYmlsZSA9ICcwcHgnXG5leHBvcnQgY29uc3QgdGFibGV0ID0gJzY0MHB4J1xuZXhwb3J0IGNvbnN0IGRlc2t0b3AgPSAnMTAyNHB4J1xuIiwiZXhwb3J0IGNvbnN0IHRleHRDb2xvciA9ICcjNTQ2RTdBJ1xuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG9yID0gJyNGMUYxRjUnXG5leHBvcnQgY29uc3Qgb3JhbmdlQ29sb3IgPSAnI0ZGNzUzNCdcbmV4cG9ydCBjb25zdCBkYXJrQmx1ZSA9ICcjMzc0NzRGJ1xuIiwiZXhwb3J0ICogYXMgYnJlYWtwb2ludHMgZnJvbSAnLi9icmVha3BvaW50cydcbmV4cG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycydcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIEZDLFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZU1lbW8sXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdtb2RlbHMnXHJcbmltcG9ydCB7IGF4aW9zQ2xpZW50LCBzZXRBdXRoVG9rZW5IZWFkZXJzIH0gZnJvbSAndXRpbHMvYXhpb3MtY2xpZW50J1xyXG5pbXBvcnQgeyBnZXRJbnRpYWxTdGF0ZSwgcGVyc2lzdFN0YXRlIH0gZnJvbSAndXRpbHMvcGVyc2lzdGVkLXN0YXRlJ1xyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAnYXdha2UtYXV0aCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhDb250ZXh0IHtcclxuICB1c2VyOiBVc2VyIHwgbnVsbFxyXG4gIHNldFVzZXI6ICh1c2VyOiBVc2VyIHwgbnVsbCkgPT4gdm9pZFxyXG4gIGp3dDogc3RyaW5nIHwgbnVsbFxyXG4gIHNldEp3dDogKGp3dDogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxyXG4gIHNpZ25JbldpdGhTTVM6IChkYXRhOiBhbnkpID0+IFByb21pc2U8YW55PlxyXG4gIGNvbmZpcm1TTVM6IChkYXRhOiBhbnkpID0+IFByb21pc2U8YW55PlxyXG4gIGxvZ291dDogKCkgPT4gdm9pZFxyXG4gIGZldGNoVXNlcjogKCkgPT4gdm9pZFxyXG4gIHVwZGF0ZVVzZXI6IChkYXRhOiBhbnkpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge31cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGdldEludGlhbFN0YXRlKFNUT1JBR0VfS0VZKSA/PyBkZWZhdWx0U3RhdGVcclxuXHJcbnNldEF1dGhUb2tlbkhlYWRlcnMoaW5pdGlhbFN0YXRlLmp3dCA/PyAnJylcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGhDb250ZXh0Pih7fSBhcyBJQXV0aENvbnRleHQpXHJcblxyXG5BdXRoQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBdXRoQ29udGV4dCdcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihpbml0aWFsU3RhdGUudXNlciA/PyBudWxsKVxyXG4gIGNvbnN0IFtqd3QsIHNldEp3dF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihpbml0aWFsU3RhdGUuand0ID8/IG51bGwpXHJcblxyXG4gIGNvbnN0IHNpZ25JbldpdGhTTVMgPSAoZGF0YSkgPT4gYXhpb3NDbGllbnQucG9zdChgc2VuZC1zbXMtY29kZWAsIGRhdGEpXHJcblxyXG4gIGNvbnN0IGNvbmZpcm1TTVMgPSAoZGF0YSkgPT5cclxuICAgIGF4aW9zQ2xpZW50XHJcbiAgICAgIC5wb3N0KGBjb25maXJtLXNtcy1jb2RlYCwgZGF0YSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGRhdGEudXNlciBhcyBVc2VyXHJcbiAgICAgICAgY29uc3Qgand0ID0gZGF0YS5qd3QgYXMgc3RyaW5nXHJcblxyXG4gICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICBzZXRKd3Qoand0KVxyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoJ2p3dCcsIGp3dClcclxuICAgICAgICBzZXRBdXRoVG9rZW5IZWFkZXJzKGp3dClcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgICAgfSlcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgY29va2llQ3V0dGVyLnNldCgnand0JywgbnVsbClcclxuICAgIHNldEF1dGhUb2tlbkhlYWRlcnMobnVsbClcclxuICAgIHNldEp3dChudWxsKVxyXG4gICAgc2V0VXNlcihudWxsKVxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9ICgpID0+IHtcclxuICAgIGF4aW9zQ2xpZW50XHJcbiAgICAgIC5wb3N0KCdmZXRjaC11c2VyJylcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIobnVsbClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdCgndXBkYXRlLXVzZXInLCBkYXRhKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBzZXRVc2VyLFxyXG4gICAgICBqd3QsXHJcbiAgICAgIHNldEp3dCxcclxuICAgICAgc2lnbkluV2l0aFNNUyxcclxuICAgICAgY29uZmlybVNNUyxcclxuICAgICAgbG9nb3V0LFxyXG4gICAgICBmZXRjaFVzZXIsXHJcbiAgICAgIHVwZGF0ZVVzZXIsXHJcbiAgICB9KSxcclxuICAgIFtcclxuICAgICAgdXNlcixcclxuICAgICAgc2V0VXNlcixcclxuICAgICAgand0LFxyXG4gICAgICBzZXRKd3QsXHJcbiAgICAgIHNpZ25JbldpdGhTTVMsXHJcbiAgICAgIGNvbmZpcm1TTVMsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgZmV0Y2hVc2VyLFxyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgXVxyXG4gIClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHBlcnNpc3RTdGF0ZShTVE9SQUdFX0tFWSwgeyBqd3QsIHVzZXIgfSksIFtqd3QsIHVzZXJdKVxyXG5cclxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCk6IElBdXRoQ29udGV4dCA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIGhvb2sgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEF1dGhQcm92aWRlciBjb21wb25lbnQnKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcblxuaW1wb3J0IFNpZ25pbiBmcm9tICcuL3NpZ25pbidcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8U2lnbmluIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgVGV4dDEyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL2xheW91dCdcblxuY29uc3QgU2lnbmluOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBvbkNsaWNrZWQgPSAoZSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6ICcvcGhvbmUnLCBxdWVyeTogeyBmcm9tOiAnc2lnbmluJyB9IH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgV2VsY29tZSB0byA8Yj5Bd2FrZSE8L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICBBd2FrZSBnZW5lcmF0ZXMgbW9uZXkgZnJvbSBhZHMgdXNpbmcgdGhpcyBkYXRhLCBjb21wYW5pZXMgY2FuXG4gICAgICAgICAgICAgIGNyZWF0ZSBhZHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiU2lnbiBpbiB0byBhd2FrZVwiIG9uQ2xpY2s9e29uQ2xpY2tlZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDYW4ndCBsb2dpbj8g4oCieycgJ31cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmFuZ2UtdGV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8VGV4dDEyIHRleHQ9eydQcml2YWN5IHBvbGljeSAtIFRlcm1zIG9mIHVzZSd9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduaW5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0ICogYXMgYWxsU2V0dGxlZCBmcm9tICdwcm9taXNlLmFsbHNldHRsZWQnXHJcblxyXG5hbGxTZXR0bGVkLnNoaW0oKVxyXG5cclxuY29uc3QgcHJvZFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLydcclxuZXhwb3J0IGxldCBsb2FkZWRVcmwgPSBmYWxzZVxyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9kVXJsLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW5IZWFkZXJzID0gKG5ld1Rva2VuOiBzdHJpbmcpID0+IHtcclxuICBheGlvc0NsaWVudC5kZWZhdWx0cy5oZWFkZXJzID0ge1xyXG4gICAgYXV0aG9yaXphdGlvbjogbmV3VG9rZW4sXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIHRoZSBydW5uaW5nIGRldiBzZXJ2ZXIsIGlmIGl0J3MgcHJvZHVjdGlvbiBpdCBpbnN0YW50ZWx5IHNldHMgdGhlIHVybC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kRGV2U2VydmVyVXJsID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgLy8gU2hvcnRjdXRcclxuICByZXR1cm4gcHJvZFVybFxyXG5cclxuICBpZiAobG9hZGVkVXJsKSB7XHJcbiAgICByZXR1cm4gYXhpb3NDbGllbnQuZGVmYXVsdHMuYmFzZVVSTFxyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGxvYWRlZFVybCA9IHRydWVcclxuICAgIHJldHVybiBwcm9kVXJsXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cmxzVG9UcnkgPSBbXHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHA6Ly8xOTIuMTY4LjAuMjI3OjgwODAvYXBpLycsXHJcbiAgICAnaHR0cDovLzE5Mi4xNjguMC4yMDM6ODA4MC9hcGkvJyxcclxuICAgICdodHRwOi8vMTAuMC4yLjI6ODA4MC9hcGkvJyxcclxuICAgICdodHRwczovL3NzLmV3LnIuYXBwc3BvdC5jb20vYXBpLycsXHJcbiAgICBwcm9kVXJsLFxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGxTZXR0bGVkKFxyXG4gICAgICB1cmxzVG9UcnkubWFwKCh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgdGltZW91dDogMjUwIH0pKVxyXG4gICAgKS50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkZXYgVVJMLicpXHJcbiAgICAgICAgcmVqZWN0KClcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRmlsdGVyIGJ5IHN1Y2Nlc3MuXHJcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcigocikgPT4gci5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKVxyXG5cclxuICAgICAgLy8gVXNlIHRoZSBmaXJzdCBvbmVcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBiYXNlVXJsID0gcmVzdWx0c1swXS52YWx1ZS5jb25maWcudXJsXHJcblxyXG4gICAgICBheGlvc0NsaWVudC5kZWZhdWx0cy5iYXNlVVJMID0gYmFzZVVybFxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnVXNpbmcgZGV2IHNlcnZlcjogJyArIGJhc2VVcmwgKyAnLCAob2YgJyArIHJlc3VsdHMubGVuZ3RoICsgJyBzdWNjZXNzKSdcclxuICAgICAgKVxyXG5cclxuICAgICAgbG9hZGVkVXJsID0gdHJ1ZVxyXG5cclxuICAgICAgcmVzb3ZlKGJhc2VVcmwpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHBlcnNpc3RTdGF0ZSA9IChzdG9yYWdlS2V5OiBzdHJpbmcsIHN0YXRlOiBvYmplY3QpOiB2b2lkID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW50aWFsU3RhdGUgPSAoc3RvcmFnZUtleTogc3RyaW5nKTogYW55ID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghc2F2ZWRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzYXZlZFN0YXRlID8/ICd7fScpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RhdGUgOiAnICsgc3RvcmFnZUtleSlcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbG90dGllZmlsZXMvcmVhY3QtbG90dGllLXBsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1jdXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvbWlzZS5hbGxzZXR0bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9