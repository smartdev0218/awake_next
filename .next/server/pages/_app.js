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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/auth */ "./src/context/auth.tsx");
/* harmony import */ var context_user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/user-info */ "./src/context/user-info.tsx");
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common */ "./src/components/common/index.ts");
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles */ "./src/styles/index.ts");

var _jsxFileName = "E:\\projects\\4.23\\awake-nextjs-refactored1\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Application({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(context_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(context_user_info__WEBPACK_IMPORTED_MODULE_4__["UserInfoProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styles__WEBPACK_IMPORTED_MODULE_6__["GlobalStyles"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: styles__WEBPACK_IMPORTED_MODULE_6__["MaterialUITheme"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
          theme: styles__WEBPACK_IMPORTED_MODULE_6__["Theme"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_common__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html{
    scroll-behavior: smooth;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, button, select {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: AvenirNext, sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/styles/index.ts":
/*!*****************************!*\
  !*** ./src/styles/index.ts ***!
  \*****************************/
/*! exports provided: GlobalStyles, Theme, MaterialUITheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/styles/global.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return _global__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/styles/theme.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mui-theme */ "./src/styles/mui-theme.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialUITheme", function() { return _mui_theme__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/styles/mui-theme.ts":
/*!*********************************!*\
  !*** ./src/styles/mui-theme.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { container, title } from "../assets/jss/material-kit-react.js";

const defaultTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({});

const defaultThemeContext = _objectSpread(_objectSpread({}, defaultTheme), {}, {
  container: {
    color: '#fff',
    zIndex: 12 // ...container

  },
  main: {
    background: '#fff',
    // position: "relative",
    zIndex: '3'
  },
  mainRaised: {
    margin: '80px 0px 0px 0px',
    borderRadius: '6px' // boxShadow:
    //   "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"

  },
  // palette: {
  // textColor: '#546E7A',
  // borderColor: '#F1F1F5',
  // orangeColor: '#FF7534',
  // darkBlue: '#37474F',
  // },
  textfield: {
    font: '14px',
    lineHeight: '16.41px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontColor: '#44444F',
    color: '#44444F',
    textAlign: 'center',
    // borderRadius: '20px',
    borderColor: '#CFD8DC',
    backgroundColor: '#FFFFFF',
    width: '100%',
    margin: '26px 0',
    textTransform: 'none',
    [`& fieldset`]: {
      borderRadius: '15px'
    }
  },
  button: {
    font: '15px',
    lineHeight: '17.58px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#FF7534',
    width: '200px',
    height: '60px',
    textTransform: 'none'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (defaultThemeContext);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    white: '#FFFFFF',
    text: '#000000',
    blue: '#0a7220',
    background: '#FFFFFF',
    gray: '#E6EBFF',
    grayDivider: '#D8D8D8',
    backgroundLineProgress: '#E6E6E6',
    backgroundInput: '#FCFCFC',
    overlay: 'rgba(0,0,0,.5)',
    border: '#979797',
    disabledButton: '#B7B7B7',
    featured: '#FCCC63',
    originBackground: '',
    title: '##001d7e'
  },
  main: {
    width: '100%',
    height: '100%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


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

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHQtZmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0MTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYnJlYWtwb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC91c2VyLWluZm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbXVpLXRoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2F4aW9zLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGVyc2lzdGVkLXN0YXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtY3V0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvbWlzZS5hbGxzZXR0bGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIkJ1dHRvbiIsIlByb3BzIiwiY2xhc3NlcyIsImRpc2FibGVkIiwiZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIkNhcmQiLCJzdHlsZWQiLCJQYXBlciIsImNvbG9ycyIsImJvcmRlckNvbG9yIiwidGV4dENvbG9yIiwiZGFya0JsdWUiLCJvcmFuZ2VDb2xvciIsIkNvbnRhaW5lciIsIk1VSUNvbnRhaW5lciIsIkxvYWRpbmciLCJjaGlsZHJlbiIsImlzQXV0aExvYWRlZCIsInNldEF1dGhMb2FkZWQiLCJ1c2VTdGF0ZSIsImp3dCIsImZldGNoVXNlciIsImxvZ291dCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJmaW5kRGV2U2VydmVyVXJsIiwidGhlbiIsInVybCIsImNvb2tpZUN1dHRlciIsInNldCIsImZpbmFsbHkiLCJsb2FkZWRVcmwiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1c0NvZGUiLCJsb2FkaW5nQW5pbWF0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJyb290IiwidGV4dEZpZWxkIiwiVGV4dEZpZWxkIiwicHJvcHMiLCJjbGFzc05hbWVzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImNvbnRhaW5lciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJUZXh0MTIiLCJ0ZXh0IiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsIkFQSV9VUkwiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImdldEludGlhbFN0YXRlIiwic2V0QXV0aFRva2VuSGVhZGVycyIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiQXV0aFByb3ZpZGVyIiwidXNlciIsInNldFVzZXIiLCJzZXRKd3QiLCJzaWduSW5XaXRoU01TIiwiYXhpb3NDbGllbnQiLCJwb3N0IiwiY29uZmlybVNNUyIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVwZGF0ZVVzZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJwZXJzaXN0U3RhdGUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiVXNlckluZm9Db250ZXh0IiwiVXNlckluZm9Qcm92aWRlciIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwic2V0VmVyaWZpY2F0aW9uQ29kZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VVc2VySW5mbyIsIkFwcGxpY2F0aW9uIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiTWF0ZXJpYWxVSVRoZW1lIiwiVGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImRlZmF1bHRUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwiZGVmYXVsdFRoZW1lQ29udGV4dCIsInpJbmRleCIsIm1haW4iLCJiYWNrZ3JvdW5kIiwibWFpblJhaXNlZCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsInRleHRmaWVsZCIsImZvbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwid2hpdGUiLCJibHVlIiwiZ3JheSIsImdyYXlEaXZpZGVyIiwiYmFja2dyb3VuZExpbmVQcm9ncmVzcyIsImJhY2tncm91bmRJbnB1dCIsIm92ZXJsYXkiLCJib3JkZXIiLCJkaXNhYmxlZEJ1dHRvbiIsImZlYXR1cmVkIiwib3JpZ2luQmFja2dyb3VuZCIsImFsbFNldHRsZWQiLCJwcm9kVXJsIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIm5ld1Rva2VuIiwiZGVmYXVsdHMiLCJhdXRob3JpemF0aW9uIiwidXJsc1RvVHJ5IiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsIm1hcCIsImdldCIsInRpbWVvdXQiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiciIsInN0YXR1cyIsImJhc2VVcmwiLCJjb25maWciLCJsb2ciLCJzdG9yYWdlS2V5Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgQnV0dG9uIGFzIE1VSUJ1dHRvbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYnV0dG9uOiB0aGVtZS5idXR0b24sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgb25DbGljazogYW55XHJcbiAgZGlzYWJsZWQ/OiBhbnlcclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgZGlzYWJsZWQ9e1Byb3BzLmRpc2FibGVkfVxyXG4gICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBQcm9wcy5vbkNsaWNrKGUpfVxyXG4gICAgPlxyXG4gICAgICB7UHJvcHMudGl0bGV9XHJcbiAgICA8L01VSUJ1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iLCJpbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnY29uZmlnJ1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKFBhcGVyKWBcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgZmxleDogMC43O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMzJweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGZsZXg6IDAuMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTRweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJHtjb2xvcnMuYm9yZGVyQ29sb3J9OyAgXG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0Q29sb3J9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLmRhcmtCbHVlfVxuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBjb2xvcjogJHtjb2xvcnMudGV4dENvbG9yfTtcbiAgICBtYXJnaW46IDhweCAwIDRweCAwO1xuICB9XG5cbiAgLm9yYW5nZS10ZXh0IHtcbiAgICBjb2xvcjogJHtjb2xvcnMub3JhbmdlQ29sb3J9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBob25lbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1LjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrQmx1ZX07XG4gIH0sXG5gXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiIsImltcG9ydCB7IENvbnRhaW5lciBhcyBNVUlDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChNVUlDb250YWluZXIpYFxyXG4gIHBhZGRpbmc6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQgfSBmcm9tICcuL2NhcmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vbG9hZGluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RmllbGQgfSBmcm9tICcuL3RleHQtZmllbGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dDEyIH0gZnJvbSAnLi90ZXh0MTInXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ0Bsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnY29udGV4dC9hdXRoJ1xyXG5pbXBvcnQgeyBmaW5kRGV2U2VydmVyVXJsLCBsb2FkZWRVcmwgfSBmcm9tICd1dGlscy9heGlvcy1jbGllbnQnXHJcblxyXG5pbXBvcnQgbG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmctYW5pbWF0aW9uLmpzb24nXHJcblxyXG4vKipcclxuICogQXBwIExvYWRpbmcgc2NyZWVuLlxyXG4gKi9cclxuY29uc3QgTG9hZGluZyA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtpc0F1dGhMb2FkZWQsIHNldEF1dGhMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBqd3QsIGZldGNoVXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpbmREZXZTZXJ2ZXJVcmwoKVxyXG4gICAgICAudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldCgnc2VydmVyLXVybCcsIHVybClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhMb2FkZWQodHJ1ZSlcclxuICAgICAgICBpZiAobG9hZGVkVXJsKSB7XHJcbiAgICAgICAgICBpZiAoand0KSB7XHJcbiAgICAgICAgICAgIGZldGNoVXNlcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvbiBsb2FkJywgZSlcclxuICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LmRhdGE/LnN0YXR1c0NvZGUgPT09ICd1bmF1dGhvcmlzZWQnKSB7XHJcbiAgICAgICAgICBsb2dvdXQoKVxyXG4gICAgICAgICAgLy8gZGlzcGF0Y2hNb2RhbCh7XHJcbiAgICAgICAgICAvLyAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICAvLyAgICAgbW9kYWw6IDxNb2RhbEVycm9yIHRleHQ9e2dldExhbmd1YWdlKCkueW91V2VyZUxvZ2dlZE91dH0gLz5cclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzQXV0aExvYWRlZCA/IChcclxuICAgICAgICBjaGlsZHJlblxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyTG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFBsYXllclxyXG4gICAgICAgICAgICBhdXRvcGxheVxyXG4gICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgIHNyYz17bG9hZGluZ0FuaW1hdGlvbn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGV4dEZpZWxkIGFzIE1VSVRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgLy8gICBib3JkZXJDb2xvcjogXCJncmVlblwiXHJcbiAgICAvLyB9LFxyXG4gICAgJyY6aG92ZXIgLk11aU91dGxpbmVkSW5wdXQtcm9vdCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdC5NdWktZm9jdXNlZCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJjpob3ZlciAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3QuTXVpLWZvY3VzZWQgLk11aU91dGxpbmVkSW5wdXQtaW5wdXRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJwdXJwbGVcIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJiAuTXVpSW5wdXRMYWJlbC1vdXRsaW5lZFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcImdyZWVuXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiY6aG92ZXIgLk11aUlucHV0TGFiZWwtb3V0bGluZWRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJyZWRcIlxyXG4gICAgLy8gfSxcclxuICAgICcmIC5NdWlJbnB1dExhYmVsLW91dGxpbmVkLk11aS1mb2N1c2VkJzoge1xyXG4gICAgICAvLyBjb2xvcjogdGhlbWUucGFsZXR0ZS5vcmFuZ2VDb2xvcixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB0ZXh0ZmllbGQ6IHRoZW1lLnRleHRmaWVsZCxcclxuICB0ZXh0RmllbGQ6IHt9LFxyXG59KSlcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb25DaGFuZ2U/OiBhbnlcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNVUlUZXh0RmllbGRcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMudGV4dEZpZWxkLCBjbGFzc2VzLnJvb3QpfVxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcclxuICAgICAgbGFiZWw9XCJGdWxsIG5hbWVcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25DaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTQuMDZweCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBmb250Q29sb3I6ICcjQTNCNEJEJyxcclxuICAgIGNvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGV4dDEyOiBOZXh0UGFnZTxQcm9wcz4gPSAoUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PntQcm9wcy50ZXh0fTwvVHlwb2dyYXBoeT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDEyXHJcbiIsImV4cG9ydCBjb25zdCBtb2JpbGUgPSAnMHB4J1xuZXhwb3J0IGNvbnN0IHRhYmxldCA9ICc2NDBweCdcbmV4cG9ydCBjb25zdCBkZXNrdG9wID0gJzEwMjRweCdcbiIsImV4cG9ydCBjb25zdCB0ZXh0Q29sb3IgPSAnIzU0NkU3QSdcbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvciA9ICcjRjFGMUY1J1xuZXhwb3J0IGNvbnN0IG9yYW5nZUNvbG9yID0gJyNGRjc1MzQnXG5leHBvcnQgY29uc3QgZGFya0JsdWUgPSAnIzM3NDc0RidcbiIsImV4cG9ydCAqIGFzIGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMnXG5leHBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5cbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBGQyxcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VNZW1vLFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnbW9kZWxzJ1xyXG5pbXBvcnQgeyBheGlvc0NsaWVudCwgc2V0QXV0aFRva2VuSGVhZGVycyB9IGZyb20gJ3V0aWxzL2F4aW9zLWNsaWVudCdcclxuaW1wb3J0IHsgZ2V0SW50aWFsU3RhdGUsIHBlcnNpc3RTdGF0ZSB9IGZyb20gJ3V0aWxzL3BlcnNpc3RlZC1zdGF0ZSdcclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gJ2F3YWtlLWF1dGgnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoQ29udGV4dCB7XHJcbiAgdXNlcjogVXNlciB8IG51bGxcclxuICBzZXRVc2VyOiAodXNlcjogVXNlciB8IG51bGwpID0+IHZvaWRcclxuICBqd3Q6IHN0cmluZyB8IG51bGxcclxuICBzZXRKd3Q6IChqd3Q6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxuICBzaWduSW5XaXRoU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBjb25maXJtU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBsb2dvdXQ6ICgpID0+IHZvaWRcclxuICBmZXRjaFVzZXI6ICgpID0+IHZvaWRcclxuICB1cGRhdGVVc2VyOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBnZXRJbnRpYWxTdGF0ZShTVE9SQUdFX0tFWSkgPz8gZGVmYXVsdFN0YXRlXHJcblxyXG5zZXRBdXRoVG9rZW5IZWFkZXJzKGluaXRpYWxTdGF0ZS5qd3QgPz8gJycpXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe30gYXMgSUF1dGhDb250ZXh0KVxyXG5cclxuQXV0aENvbnRleHQuZGlzcGxheU5hbWUgPSAnQXV0aENvbnRleHQnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4oaW5pdGlhbFN0YXRlLnVzZXIgPz8gbnVsbClcclxuICBjb25zdCBband0LCBzZXRKd3RdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oaW5pdGlhbFN0YXRlLmp3dCA/PyBudWxsKVxyXG5cclxuICBjb25zdCBzaWduSW5XaXRoU01TID0gKGRhdGEpID0+IGF4aW9zQ2xpZW50LnBvc3QoYHNlbmQtc21zLWNvZGVgLCBkYXRhKVxyXG5cclxuICBjb25zdCBjb25maXJtU01TID0gKGRhdGEpID0+XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdChgY29uZmlybS1zbXMtY29kZWAsIGRhdGEpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlclxyXG4gICAgICAgIGNvbnN0IGp3dCA9IGRhdGEuand0IGFzIHN0cmluZ1xyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgc2V0Snd0KGp3dClcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KCdqd3QnLCBqd3QpXHJcbiAgICAgICAgc2V0QXV0aFRva2VuSGVhZGVycyhqd3QpXHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXHJcbiAgICAgIH0pXHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvb2tpZUN1dHRlci5zZXQoJ2p3dCcsIG51bGwpXHJcbiAgICBzZXRBdXRoVG9rZW5IZWFkZXJzKG51bGwpXHJcbiAgICBzZXRKd3QobnVsbClcclxuICAgIHNldFVzZXIobnVsbClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSAoKSA9PiB7XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdCgnZmV0Y2gtdXNlcicpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgYXhpb3NDbGllbnRcclxuICAgICAgLnBvc3QoJ3VwZGF0ZS11c2VyJywgZGF0YSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgdXNlcixcclxuICAgICAgc2V0VXNlcixcclxuICAgICAgand0LFxyXG4gICAgICBzZXRKd3QsXHJcbiAgICAgIHNpZ25JbldpdGhTTVMsXHJcbiAgICAgIGNvbmZpcm1TTVMsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgZmV0Y2hVc2VyLFxyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHNldFVzZXIsXHJcbiAgICAgIGp3dCxcclxuICAgICAgc2V0Snd0LFxyXG4gICAgICBzaWduSW5XaXRoU01TLFxyXG4gICAgICBjb25maXJtU01TLFxyXG4gICAgICBsb2dvdXQsXHJcbiAgICAgIGZldGNoVXNlcixcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgIF1cclxuICApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBwZXJzaXN0U3RhdGUoU1RPUkFHRV9LRVksIHsgand0LCB1c2VyIH0pLCBband0LCB1c2VyXSlcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpOiBJQXV0aENvbnRleHQgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBob29rIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBBdXRoUHJvdmlkZXIgY29tcG9uZW50JylcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGQywgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJbmZvQ29udGV4dCB7XHJcbiAgcGhvbmVOdW1iZXI6IHN0cmluZyB8IG51bGxcclxuICBzZXRQaG9uZU51bWJlcjogKHBob25lOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgdXNlck5hbWU6IHN0cmluZyB8IG51bGxcclxuICBzZXRVc2VyTmFtZTogKHVzZXJOYW1lOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nIHwgbnVsbFxyXG4gIHNldFZlcmlmaWNhdGlvbkNvZGU6ICh2ZXJpZmljYXRpb25Db2RlOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PElVc2VySW5mb0NvbnRleHQ+KFxyXG4gIHt9IGFzIElVc2VySW5mb0NvbnRleHRcclxuKVxyXG5cclxuVXNlckluZm9Db250ZXh0LmRpc3BsYXlOYW1lID0gJ1VzZXJJbmZvQ29udGV4dCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbcGhvbmVOdW1iZXIsIHNldFBob25lTnVtYmVyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3ZlcmlmaWNhdGlvbkNvZGUsIHNldFZlcmlmaWNhdGlvbkNvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICBzZXRQaG9uZU51bWJlcixcclxuICAgICAgdmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgc2V0VmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgdXNlck5hbWUsXHJcbiAgICAgIHNldFVzZXJOYW1lLFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICBzZXRQaG9uZU51bWJlcixcclxuICAgICAgdmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgc2V0VmVyaWZpY2F0aW9uQ29kZSxcclxuICAgICAgdXNlck5hbWUsXHJcbiAgICAgIHNldFVzZXJOYW1lLFxyXG4gICAgXVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VySW5mb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VySW5mb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXNlckluZm8gPSAoKTogSVVzZXJJbmZvQ29udGV4dCA9PiB7XHJcblxyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJJbmZvQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICd1c2VVc2VySW5mbyBob29rIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VySW5mb1Byb3ZpZGVyIGNvbXBvbmVudCdcclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIE1hdGVyaWFsVUlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0L2F1dGgnXG5pbXBvcnQgeyBVc2VySW5mb1Byb3ZpZGVyIH0gZnJvbSAnY29udGV4dC91c2VyLWluZm8nXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIFRoZW1lLCBNYXRlcmlhbFVJVGhlbWUgfSBmcm9tICdzdHlsZXMnXG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8VXNlckluZm9Qcm92aWRlcj5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8TWF0ZXJpYWxVSVRoZW1lUHJvdmlkZXIgdGhlbWU9e01hdGVyaWFsVUlUaGVtZX0+XG4gICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e1RoZW1lfT5cbiAgICAgICAgICAgIDxMb2FkaW5nPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xvYWRpbmc+XG4gICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L01hdGVyaWFsVUlUaGVtZVByb3ZpZGVyPlxuICAgICAgPC9Vc2VySW5mb1Byb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgaHRtbHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG4gIGIsIHUsIGksIGNlbnRlcixcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG4gIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG4gIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0LCBidXR0b24sIHNlbGVjdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LWZhbWlseTogQXZlbmlyTmV4dCwgc2Fucy1zZXJpZjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEdsb2JhbFN0eWxlcyB9IGZyb20gJy4vZ2xvYmFsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaGVtZSB9IGZyb20gJy4vdGhlbWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdGVyaWFsVUlUaGVtZSB9IGZyb20gJy4vbXVpLXRoZW1lJ1xuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG4vLyBpbXBvcnQgeyBjb250YWluZXIsIHRpdGxlIH0gZnJvbSBcIi4uL2Fzc2V0cy9qc3MvbWF0ZXJpYWwta2l0LXJlYWN0LmpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tVGhlbWUgZXh0ZW5kcyBUaGVtZSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGNvbG9yOiBzdHJpbmdcbiAgICB6SW5kZXg6IG51bWJlclxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKHt9KVxuXG5jb25zdCBkZWZhdWx0VGhlbWVDb250ZXh0OiBDdXN0b21UaGVtZSA9IHtcbiAgLi4uZGVmYXVsdFRoZW1lLFxuICBjb250YWluZXI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHpJbmRleDogMTIsXG4gICAgLy8gLi4uY29udGFpbmVyXG4gIH0sXG4gIG1haW46IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB6SW5kZXg6ICczJyxcbiAgfSxcbiAgbWFpblJhaXNlZDoge1xuICAgIG1hcmdpbjogJzgwcHggMHB4IDBweCAwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgLy8gYm94U2hhZG93OlxuICAgIC8vICAgXCIwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiXG4gIH0sXG4gIC8vIHBhbGV0dGU6IHtcbiAgLy8gdGV4dENvbG9yOiAnIzU0NkU3QScsXG4gIC8vIGJvcmRlckNvbG9yOiAnI0YxRjFGNScsXG4gIC8vIG9yYW5nZUNvbG9yOiAnI0ZGNzUzNCcsXG4gIC8vIGRhcmtCbHVlOiAnIzM3NDc0RicsXG4gIC8vIH0sXG4gIHRleHRmaWVsZDoge1xuICAgIGZvbnQ6ICcxNHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMTYuNDFweCcsXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICBmb250Q29sb3I6ICcjNDQ0NDRGJyxcbiAgICBjb2xvcjogJyM0NDQ0NEYnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgLy8gYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjQ0ZEOERDJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbjogJzI2cHggMCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuXG4gICAgW2AmIGZpZWxkc2V0YF06IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGZvbnQ6ICcxNXB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMTcuNThweCcsXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBmb250Q29sb3I6ICcjRkZGRkZGJyxcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGNzUzNCcsXG4gICAgd2lkdGg6ICcyMDBweCcsXG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWVDb250ZXh0XG4iLCJjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgICB0ZXh0OiAnIzAwMDAwMCcsXG4gICAgYmx1ZTogJyMwYTcyMjAnLFxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcbiAgICBncmF5OiAnI0U2RUJGRicsXG4gICAgZ3JheURpdmlkZXI6ICcjRDhEOEQ4JyxcbiAgICBiYWNrZ3JvdW5kTGluZVByb2dyZXNzOiAnI0U2RTZFNicsXG4gICAgYmFja2dyb3VuZElucHV0OiAnI0ZDRkNGQycsXG4gICAgb3ZlcmxheTogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICBib3JkZXI6ICcjOTc5Nzk3JyxcbiAgICBkaXNhYmxlZEJ1dHRvbjogJyNCN0I3QjcnLFxuICAgIGZlYXR1cmVkOiAnI0ZDQ0M2MycsXG4gICAgb3JpZ2luQmFja2dyb3VuZDogJycsXG4gICAgdGl0bGU6ICcjIzAwMWQ3ZScsXG4gIH0sXG4gIG1haW46IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgKiBhcyBhbGxTZXR0bGVkIGZyb20gJ3Byb21pc2UuYWxsc2V0dGxlZCdcclxuXHJcbmFsbFNldHRsZWQuc2hpbSgpXHJcblxyXG5jb25zdCBwcm9kVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvJ1xyXG5leHBvcnQgbGV0IGxvYWRlZFVybCA9IGZhbHNlXHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2RVcmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbkhlYWRlcnMgPSAobmV3VG9rZW46IHN0cmluZykgPT4ge1xyXG4gIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMgPSB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBuZXdUb2tlbixcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgdGhlIHJ1bm5pbmcgZGV2IHNlcnZlciwgaWYgaXQncyBwcm9kdWN0aW9uIGl0IGluc3RhbnRlbHkgc2V0cyB0aGUgdXJsLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmREZXZTZXJ2ZXJVcmwgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAvLyBTaG9ydGN1dFxyXG4gIHJldHVybiBwcm9kVXJsXHJcblxyXG4gIGlmIChsb2FkZWRVcmwpIHtcclxuICAgIHJldHVybiBheGlvc0NsaWVudC5kZWZhdWx0cy5iYXNlVVJMXHJcbiAgfVxyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgbG9hZGVkVXJsID0gdHJ1ZVxyXG4gICAgcmV0dXJuIHByb2RVcmxcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybHNUb1RyeSA9IFtcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLycsXHJcbiAgICAnaHR0cDovLzE5Mi4xNjguMC4yMjc6ODA4MC9hcGkvJyxcclxuICAgICdodHRwOi8vMTkyLjE2OC4wLjIwMzo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHA6Ly8xMC4wLjIuMjo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHBzOi8vc3MuZXcuci5hcHBzcG90LmNvbS9hcGkvJyxcclxuICAgIHByb2RVcmwsXHJcbiAgXVxyXG5cclxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbFNldHRsZWQoXHJcbiAgICAgIHVybHNUb1RyeS5tYXAoKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB0aW1lb3V0OiAyNTAgfSkpXHJcbiAgICApLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRldiBVUkwuJylcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGaWx0ZXIgYnkgc3VjY2Vzcy5cclxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpXHJcblxyXG4gICAgICAvLyBVc2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSByZXN1bHRzWzBdLnZhbHVlLmNvbmZpZy51cmxcclxuXHJcbiAgICAgIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmJhc2VVUkwgPSBiYXNlVXJsXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdVc2luZyBkZXYgc2VydmVyOiAnICsgYmFzZVVybCArICcsIChvZiAnICsgcmVzdWx0cy5sZW5ndGggKyAnIHN1Y2Nlc3MpJ1xyXG4gICAgICApXHJcblxyXG4gICAgICBsb2FkZWRVcmwgPSB0cnVlXHJcblxyXG4gICAgICByZXNvdmUoYmFzZVVybClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGVyc2lzdFN0YXRlID0gKHN0b3JhZ2VLZXk6IHN0cmluZywgc3RhdGU6IG9iamVjdCk6IHZvaWQgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbnRpYWxTdGF0ZSA9IChzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzYXZlZFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNhdmVkU3RhdGUgPz8gJ3t9JylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzdGF0ZSA6ICcgKyBzdG9yYWdlS2V5KVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb3R0aWVmaWxlcy9yZWFjdC1sb3R0aWUtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1jdXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvbWlzZS5hbGxzZXR0bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9