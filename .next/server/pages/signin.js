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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/signin.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RleHQtZmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXh0MTIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9mb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9icmVha3BvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L2F1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zaWduaW4udHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9heGlvcy1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BlcnNpc3RlZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbG90dGllZmlsZXMvcmVhY3QtbG90dGllLXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLWN1dHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvbWlzZS5hbGxzZXR0bGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIkJ1dHRvbiIsIlByb3BzIiwiY2xhc3NlcyIsImRpc2FibGVkIiwiZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIkNhcmQiLCJzdHlsZWQiLCJQYXBlciIsImNvbG9ycyIsImJvcmRlckNvbG9yIiwidGV4dENvbG9yIiwiZGFya0JsdWUiLCJvcmFuZ2VDb2xvciIsIkNvbnRhaW5lciIsIk1VSUNvbnRhaW5lciIsIkxvYWRpbmciLCJjaGlsZHJlbiIsImlzQXV0aExvYWRlZCIsInNldEF1dGhMb2FkZWQiLCJ1c2VTdGF0ZSIsImp3dCIsImZldGNoVXNlciIsImxvZ291dCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJmaW5kRGV2U2VydmVyVXJsIiwidGhlbiIsInVybCIsImNvb2tpZUN1dHRlciIsInNldCIsImZpbmFsbHkiLCJsb2FkZWRVcmwiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1c0NvZGUiLCJsb2FkaW5nQW5pbWF0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJyb290IiwidGV4dEZpZWxkIiwiVGV4dEZpZWxkIiwicHJvcHMiLCJjbGFzc05hbWVzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImNvbnRhaW5lciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJUZXh0MTIiLCJ0ZXh0IiwicGFkZGluZ0JvdHRvbSIsImdyaWQiLCJkaXNwbGF5IiwiRm9vdGVyIiwicGFkZGluZ1RvcCIsImxvZ29fdGl0bGVzIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsImxvZ29fc20iLCJhbGlnblNlbGYiLCJIZWFkZXIiLCJiYWNrZ3JvdW5kIiwiTWFpbiIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJBUElfVVJMIiwiU1RPUkFHRV9LRVkiLCJkZWZhdWx0U3RhdGUiLCJpbml0aWFsU3RhdGUiLCJnZXRJbnRpYWxTdGF0ZSIsInNldEF1dGhUb2tlbkhlYWRlcnMiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIkF1dGhQcm92aWRlciIsInVzZXIiLCJzZXRVc2VyIiwic2V0Snd0Iiwic2lnbkluV2l0aFNNUyIsImF4aW9zQ2xpZW50IiwicG9zdCIsImNvbmZpcm1TTVMiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1cGRhdGVVc2VyIiwidmFsdWUiLCJ1c2VNZW1vIiwicGVyc2lzdFN0YXRlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciIsIlNpZ25pbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tlZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZnJvbSIsImFsbFNldHRsZWQiLCJwcm9kVXJsIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIm5ld1Rva2VuIiwiZGVmYXVsdHMiLCJhdXRob3JpemF0aW9uIiwidXJsc1RvVHJ5IiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsIm1hcCIsImdldCIsInRpbWVvdXQiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiciIsInN0YXR1cyIsImJhc2VVcmwiLCJjb25maWciLCJsb2ciLCJzdG9yYWdlS2V5Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxRQUFNLEVBQUVELEtBQUssQ0FBQ0M7QUFEeUIsQ0FBWixDQUFELENBQTVCOztBQVVBLE1BQU1DLE1BQXVCLEdBQUlDLEtBQUQsSUFBVztBQUN6QyxRQUFNQyxPQUFPLEdBQUdOLFNBQVMsRUFBekI7QUFFQSxzQkFDRSxxRUFB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LE1BQUYsS0FBYSxXQUFuQyxDQUFWLENBUmtCLENBVWxCO0FBQ0E7O0FBQ0EsWUFBTUMsT0FBTyxHQUFHTCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcvQixLQUFYLENBQWlCcUMsTUFBakIsQ0FBd0I5RyxHQUF4QztBQUVBK0QsaUJBQVcsQ0FBQ2dDLFFBQVosQ0FBcUJILE9BQXJCLEdBQStCaUIsT0FBL0I7QUFDQXZHLGFBQU8sQ0FBQ3lHLEdBQVIsQ0FDRSx1QkFBdUJGLE9BQXZCLEdBQWlDLFFBQWpDLEdBQTRDTCxPQUFPLENBQUNDLE1BQXBELEdBQTZELFdBRC9EO0FBSUFyRyxlQUFTLEdBQUcsSUFBWjtBQUVBK0YsWUFBTSxDQUFDVSxPQUFELENBQU47QUFDRCxLQXhCRDtBQXlCRCxHQTFCWSxDQUFiO0FBMkJELENBakRNLEM7Ozs7Ozs7Ozs7OztBQ3pCUDtBQUFBO0FBQUE7QUFBTyxNQUFNbEMsWUFBWSxHQUFHLENBQUNxQyxVQUFELEVBQXFCQyxLQUFyQixLQUE2QztBQUN2RSxhQUFtQyxFQUVsQztBQUNGLENBSk07QUFNQSxNQUFNNUQsY0FBYyxHQUFJMkQsVUFBRCxJQUE2QjtBQUN6RCxhQUFtQyxFQVdsQztBQUNGLENBYk0sQzs7Ozs7Ozs7Ozs7QUNOUCw2RDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9zaWduaW4udHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXHJcbmltcG9ydCB7IEJ1dHRvbiBhcyBNVUlCdXR0b24sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJ1dHRvbjogdGhlbWUuYnV0dG9uLFxyXG59KSlcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIG9uQ2xpY2s6IGFueVxyXG4gIGRpc2FibGVkPzogYW55XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbjogTmV4dFBhZ2U8UHJvcHM+ID0gKFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TVVJQnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgIGRpc2FibGVkPXtQcm9wcy5kaXNhYmxlZH1cclxuICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICBvbkNsaWNrPXsoZSkgPT4gUHJvcHMub25DbGljayhlKX1cclxuICAgID5cclxuICAgICAge1Byb3BzLnRpdGxlfVxyXG4gICAgPC9NVUlCdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ2NvbmZpZydcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChQYXBlcilgXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGZsZXg6IDAuNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNDBweCAwIDMycHggMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBmbGV4OiAwLjM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICR7Y29sb3JzLmJvcmRlckNvbG9yfTsgIFxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNS40cHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJHtjb2xvcnMudGV4dENvbG9yfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAke2NvbG9ycy5kYXJrQmx1ZX1cbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNS40cHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLnRleHRDb2xvcn07XG4gICAgbWFyZ2luOiA4cHggMCA0cHggMDtcbiAgfVxuXG4gIC5vcmFuZ2UtdGV4dCB7XG4gICAgY29sb3I6ICR7Y29sb3JzLm9yYW5nZUNvbG9yfTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5waG9uZW51bWJlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNS40cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJHtjb2xvcnMuZGFya0JsdWV9O1xuICB9LFxuYFxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iLCJpbXBvcnQgeyBDb250YWluZXIgYXMgTVVJQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoTVVJQ29udGFpbmVyKWBcclxuICBwYWRkaW5nOiAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9jYXJkJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmcgfSBmcm9tICcuL2xvYWRpbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSAnLi90ZXh0LWZpZWxkJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHQxMiB9IGZyb20gJy4vdGV4dDEyJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICdAbG90dGllZmlsZXMvcmVhY3QtbG90dGllLXBsYXllcidcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJ1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ2NvbnRleHQvYXV0aCdcclxuaW1wb3J0IHsgZmluZERldlNlcnZlclVybCwgbG9hZGVkVXJsIH0gZnJvbSAndXRpbHMvYXhpb3MtY2xpZW50J1xyXG5cclxuaW1wb3J0IGxvYWRpbmdBbmltYXRpb24gZnJvbSAnLi9sb2FkaW5nLWFuaW1hdGlvbi5qc29uJ1xyXG5cclxuLyoqXHJcbiAqIEFwcCBMb2FkaW5nIHNjcmVlbi5cclxuICovXHJcbmNvbnN0IExvYWRpbmcgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcclxuICBjb25zdCBbaXNBdXRoTG9hZGVkLCBzZXRBdXRoTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgand0LCBmZXRjaFVzZXIsIGxvZ291dCB9ID0gdXNlQXV0aCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaW5kRGV2U2VydmVyVXJsKClcclxuICAgICAgLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoJ3NlcnZlci11cmwnLCB1cmwpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzZXRBdXRoTG9hZGVkKHRydWUpXHJcbiAgICAgICAgaWYgKGxvYWRlZFVybCkge1xyXG4gICAgICAgICAgaWYgKGp3dCkge1xyXG4gICAgICAgICAgICBmZXRjaFVzZXIoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb24gbG9hZCcsIGUpXHJcbiAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5zdGF0dXNDb2RlID09PSAndW5hdXRob3Jpc2VkJykge1xyXG4gICAgICAgICAgbG9nb3V0KClcclxuICAgICAgICAgIC8vIGRpc3BhdGNoTW9kYWwoe1xyXG4gICAgICAgICAgLy8gICAgIHR5cGU6ICdhZGQnLFxyXG4gICAgICAgICAgLy8gICAgIG1vZGFsOiA8TW9kYWxFcnJvciB0ZXh0PXtnZXRMYW5ndWFnZSgpLnlvdVdlcmVMb2dnZWRPdXR9IC8+XHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpc0F1dGhMb2FkZWQgPyAoXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlckxvYWRpbmdcIj5cclxuICAgICAgICAgIDxQbGF5ZXJcclxuICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICBzcmM9e2xvYWRpbmdBbmltYXRpb259XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRleHRGaWVsZCBhcyBNVUlUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIC8vIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290IC5NdWlPdXRsaW5lZElucHV0LW5vdGNoZWRPdXRsaW5lXCI6IHtcclxuICAgIC8vICAgYm9yZGVyQ29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgLy8gfSxcclxuICAgICcmOmhvdmVyIC5NdWlPdXRsaW5lZElucHV0LXJvb3QgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmUnOiB7XHJcbiAgICAgIC8vIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLm9yYW5nZUNvbG9yLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QuTXVpLWZvY3VzZWQgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmUnOiB7XHJcbiAgICAgIC8vIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLm9yYW5nZUNvbG9yLFxyXG4gICAgfSxcclxuICAgIC8vIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dFwiOiB7XHJcbiAgICAvLyAgIGNvbG9yOiBcImdyZWVuXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiY6aG92ZXIgLk11aU91dGxpbmVkSW5wdXQtaW5wdXRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJyZWRcIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Lk11aS1mb2N1c2VkIC5NdWlPdXRsaW5lZElucHV0LWlucHV0XCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwicHVycGxlXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcIiYgLk11aUlucHV0TGFiZWwtb3V0bGluZWRcIjoge1xyXG4gICAgLy8gICBjb2xvcjogXCJncmVlblwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCImOmhvdmVyIC5NdWlJbnB1dExhYmVsLW91dGxpbmVkXCI6IHtcclxuICAgIC8vICAgY29sb3I6IFwicmVkXCJcclxuICAgIC8vIH0sXHJcbiAgICAnJiAuTXVpSW5wdXRMYWJlbC1vdXRsaW5lZC5NdWktZm9jdXNlZCc6IHtcclxuICAgICAgLy8gY29sb3I6IHRoZW1lLnBhbGV0dGUub3JhbmdlQ29sb3IsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdGV4dGZpZWxkOiB0aGVtZS50ZXh0ZmllbGQsXHJcbiAgdGV4dEZpZWxkOiB7fSxcclxufSkpXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG9uQ2hhbmdlPzogYW55XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgVGV4dEZpZWxkOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TVVJVGV4dEZpZWxkXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnRleHRGaWVsZCwgY2xhc3Nlcy5yb290KX1cclxuICAgICAgcmVxdWlyZWRcclxuICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZFwiXHJcbiAgICAgIGxhYmVsPVwiRnVsbCBuYW1lXCJcclxuICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uQ2hhbmdlKGUpfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRGaWVsZFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgbGluZUhlaWdodDogJzE0LjA2cHgnLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgZm9udENvbG9yOiAnI0EzQjRCRCcsXHJcbiAgICBjb2xvcjogJyNBM0I0QkQnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFRleHQxMjogTmV4dFBhZ2U8UHJvcHM+ID0gKFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT57UHJvcHMudGV4dH08L1R5cG9ncmFwaHk+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHQxMlxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogNDgsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNC4wNnB4JyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGZvbnRDb2xvcjogJyNBM0I0QkQnLFxyXG4gICAgY29sb3I6ICcjQTNCNEJEJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICDCqSAyMDIxIEFsbCByaWdodHMgUmVzZXJ2ZWQuIEF3YWtlIEx0ZC5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNDhweCcsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBsb2dvX3RpdGxlczoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5MZWZ0OiAtMTAsXHJcbiAgfSxcclxuICBsb2dvX3NtOiB7XHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj17J3Jvdyd9IGp1c3RpZnk9eydjZW50ZXInfSBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBoZWlnaHQ9eyc5OC44NCd9IC8+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29fdGl0bGVzfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tdGl0bGUucG5nXCIgaGVpZ2h0PXsnMzAuNzknfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby1zbWFsbC10aXRsZS5wbmdcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb19zbX0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSAnLi9tYWluJ1xyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgJ2xpbmVhci1ncmFkaWVudCgjMzQzRjQ1IDAlLCAjM0Q0QTUxIDI1LjIyJSwgIzM3NDU0QiA0Mi43MSUsICMyRTNDNDMgNzQuMTElLCAjMUYyQjMxIDEwMCUpJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG1heFdpZHRoPXtmYWxzZX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsImV4cG9ydCBjb25zdCBtb2JpbGUgPSAnMHB4J1xuZXhwb3J0IGNvbnN0IHRhYmxldCA9ICc2NDBweCdcbmV4cG9ydCBjb25zdCBkZXNrdG9wID0gJzEwMjRweCdcbiIsImV4cG9ydCBjb25zdCB0ZXh0Q29sb3IgPSAnIzU0NkU3QSdcbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvciA9ICcjRjFGMUY1J1xuZXhwb3J0IGNvbnN0IG9yYW5nZUNvbG9yID0gJyNGRjc1MzQnXG5leHBvcnQgY29uc3QgZGFya0JsdWUgPSAnIzM3NDc0RidcbiIsImV4cG9ydCAqIGFzIGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMnXG5leHBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5cbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBGQyxcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VNZW1vLFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnbW9kZWxzJ1xyXG5pbXBvcnQgeyBheGlvc0NsaWVudCwgc2V0QXV0aFRva2VuSGVhZGVycyB9IGZyb20gJ3V0aWxzL2F4aW9zLWNsaWVudCdcclxuaW1wb3J0IHsgZ2V0SW50aWFsU3RhdGUsIHBlcnNpc3RTdGF0ZSB9IGZyb20gJ3V0aWxzL3BlcnNpc3RlZC1zdGF0ZSdcclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gJ2F3YWtlLWF1dGgnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoQ29udGV4dCB7XHJcbiAgdXNlcjogVXNlciB8IG51bGxcclxuICBzZXRVc2VyOiAodXNlcjogVXNlciB8IG51bGwpID0+IHZvaWRcclxuICBqd3Q6IHN0cmluZyB8IG51bGxcclxuICBzZXRKd3Q6IChqd3Q6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcclxuICBzaWduSW5XaXRoU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBjb25maXJtU01TOiAoZGF0YTogYW55KSA9PiBQcm9taXNlPGFueT5cclxuICBsb2dvdXQ6ICgpID0+IHZvaWRcclxuICBmZXRjaFVzZXI6ICgpID0+IHZvaWRcclxuICB1cGRhdGVVc2VyOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBnZXRJbnRpYWxTdGF0ZShTVE9SQUdFX0tFWSkgPz8gZGVmYXVsdFN0YXRlXHJcblxyXG5zZXRBdXRoVG9rZW5IZWFkZXJzKGluaXRpYWxTdGF0ZS5qd3QgPz8gJycpXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe30gYXMgSUF1dGhDb250ZXh0KVxyXG5cclxuQXV0aENvbnRleHQuZGlzcGxheU5hbWUgPSAnQXV0aENvbnRleHQnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4oaW5pdGlhbFN0YXRlLnVzZXIgPz8gbnVsbClcclxuICBjb25zdCBband0LCBzZXRKd3RdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oaW5pdGlhbFN0YXRlLmp3dCA/PyBudWxsKVxyXG5cclxuICBjb25zdCBzaWduSW5XaXRoU01TID0gKGRhdGEpID0+IGF4aW9zQ2xpZW50LnBvc3QoYHNlbmQtc21zLWNvZGVgLCBkYXRhKVxyXG5cclxuICBjb25zdCBjb25maXJtU01TID0gKGRhdGEpID0+XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdChgY29uZmlybS1zbXMtY29kZWAsIGRhdGEpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlclxyXG4gICAgICAgIGNvbnN0IGp3dCA9IGRhdGEuand0IGFzIHN0cmluZ1xyXG5cclxuICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgc2V0Snd0KGp3dClcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KCdqd3QnLCBqd3QpXHJcbiAgICAgICAgc2V0QXV0aFRva2VuSGVhZGVycyhqd3QpXHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXHJcbiAgICAgIH0pXHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvb2tpZUN1dHRlci5zZXQoJ2p3dCcsIG51bGwpXHJcbiAgICBzZXRBdXRoVG9rZW5IZWFkZXJzKG51bGwpXHJcbiAgICBzZXRKd3QobnVsbClcclxuICAgIHNldFVzZXIobnVsbClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSAoKSA9PiB7XHJcbiAgICBheGlvc0NsaWVudFxyXG4gICAgICAucG9zdCgnZmV0Y2gtdXNlcicpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgYXhpb3NDbGllbnRcclxuICAgICAgLnBvc3QoJ3VwZGF0ZS11c2VyJywgZGF0YSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgdXNlcixcclxuICAgICAgc2V0VXNlcixcclxuICAgICAgand0LFxyXG4gICAgICBzZXRKd3QsXHJcbiAgICAgIHNpZ25JbldpdGhTTVMsXHJcbiAgICAgIGNvbmZpcm1TTVMsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgZmV0Y2hVc2VyLFxyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHNldFVzZXIsXHJcbiAgICAgIGp3dCxcclxuICAgICAgc2V0Snd0LFxyXG4gICAgICBzaWduSW5XaXRoU01TLFxyXG4gICAgICBjb25maXJtU01TLFxyXG4gICAgICBsb2dvdXQsXHJcbiAgICAgIGZldGNoVXNlcixcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgIF1cclxuICApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBwZXJzaXN0U3RhdGUoU1RPUkFHRV9LRVksIHsgand0LCB1c2VyIH0pLCBband0LCB1c2VyXSlcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpOiBJQXV0aENvbnRleHQgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBob29rIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBBdXRoUHJvdmlkZXIgY29tcG9uZW50JylcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb250YWluZXIsIFRleHQxMiB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IFNpZ25pbjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgb25DbGlja2VkID0gKGUpID0+IHtcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnL3Bob25lJywgcXVlcnk6IHsgZnJvbTogJ3NpZ25pbicgfSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gPGI+QXdha2UhPC9iPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgQXdha2UgZ2VuZXJhdGVzIG1vbmV5IGZyb20gYWRzIHVzaW5nIHRoaXMgZGF0YSwgY29tcGFuaWVzIGNhblxuICAgICAgICAgICAgICBjcmVhdGUgYWRzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlNpZ24gaW4gdG8gYXdha2VcIiBvbkNsaWNrPXtvbkNsaWNrZWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ2FuJ3QgbG9naW4/IOKAonsnICd9XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JhbmdlLXRleHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnbnVwJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIHVwIGZvciBuZXcgdXNlclxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPFRleHQxMiB0ZXh0PXsnUHJpdmFjeSBwb2xpY3kgLSBUZXJtcyBvZiB1c2UnfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCAqIGFzIGFsbFNldHRsZWQgZnJvbSAncHJvbWlzZS5hbGxzZXR0bGVkJ1xyXG5cclxuYWxsU2V0dGxlZC5zaGltKClcclxuXHJcbmNvbnN0IHByb2RVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS8nXHJcbmV4cG9ydCBsZXQgbG9hZGVkVXJsID0gZmFsc2VcclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvZFVybCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QXV0aFRva2VuSGVhZGVycyA9IChuZXdUb2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgYXhpb3NDbGllbnQuZGVmYXVsdHMuaGVhZGVycyA9IHtcclxuICAgIGF1dGhvcml6YXRpb246IG5ld1Rva2VuLFxyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyB0aGUgcnVubmluZyBkZXYgc2VydmVyLCBpZiBpdCdzIHByb2R1Y3Rpb24gaXQgaW5zdGFudGVseSBzZXRzIHRoZSB1cmwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmluZERldlNlcnZlclVybCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gIC8vIFNob3J0Y3V0XHJcbiAgcmV0dXJuIHByb2RVcmxcclxuXHJcbiAgaWYgKGxvYWRlZFVybCkge1xyXG4gICAgcmV0dXJuIGF4aW9zQ2xpZW50LmRlZmF1bHRzLmJhc2VVUkxcclxuICB9XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBsb2FkZWRVcmwgPSB0cnVlXHJcbiAgICByZXR1cm4gcHJvZFVybFxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXJsc1RvVHJ5ID0gW1xyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvJyxcclxuICAgICdodHRwOi8vMTkyLjE2OC4wLjIyNzo4MDgwL2FwaS8nLFxyXG4gICAgJ2h0dHA6Ly8xOTIuMTY4LjAuMjAzOjgwODAvYXBpLycsXHJcbiAgICAnaHR0cDovLzEwLjAuMi4yOjgwODAvYXBpLycsXHJcbiAgICAnaHR0cHM6Ly9zcy5ldy5yLmFwcHNwb3QuY29tL2FwaS8nLFxyXG4gICAgcHJvZFVybCxcclxuICBdXHJcblxyXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWplY3QpID0+IHtcclxuICAgIFByb21pc2UuYWxsU2V0dGxlZChcclxuICAgICAgdXJsc1RvVHJ5Lm1hcCgodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHRpbWVvdXQ6IDI1MCB9KSlcclxuICAgICkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBhbnkgZGV2IFVSTC4nKVxyXG4gICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZpbHRlciBieSBzdWNjZXNzLlxyXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoKHIpID0+IHIuc3RhdHVzID09PSAnZnVsZmlsbGVkJylcclxuXHJcbiAgICAgIC8vIFVzZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3QgYmFzZVVybCA9IHJlc3VsdHNbMF0udmFsdWUuY29uZmlnLnVybFxyXG5cclxuICAgICAgYXhpb3NDbGllbnQuZGVmYXVsdHMuYmFzZVVSTCA9IGJhc2VVcmxcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ1VzaW5nIGRldiBzZXJ2ZXI6ICcgKyBiYXNlVXJsICsgJywgKG9mICcgKyByZXN1bHRzLmxlbmd0aCArICcgc3VjY2VzcyknXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGxvYWRlZFVybCA9IHRydWVcclxuXHJcbiAgICAgIHJlc292ZShiYXNlVXJsKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwZXJzaXN0U3RhdGUgPSAoc3RvcmFnZUtleTogc3RyaW5nLCBzdGF0ZTogb2JqZWN0KTogdm9pZCA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEludGlhbFN0YXRlID0gKHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCBzYXZlZFN0YXRlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXNhdmVkU3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2F2ZWRTdGF0ZSA/PyAne30nKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHN0YXRlIDogJyArIHN0b3JhZ2VLZXkpXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvdHRpZWZpbGVzL3JlYWN0LWxvdHRpZS1wbGF5ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtY3V0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb21pc2UuYWxsc2V0dGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==