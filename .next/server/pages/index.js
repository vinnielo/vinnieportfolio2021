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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Copyright */ \"@material-ui/icons/Copyright\");\n/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Facebook */ \"@material-ui/icons/Facebook\");\n/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"@material-ui/icons/GitHub\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"@material-ui/icons/Instagram\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ \"@material-ui/icons/LinkedIn\");\n/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Twitter */ \"@material-ui/icons/Twitter\");\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/vinnielopez/Documents/Projects/vinnieportfolio2021/components/footer/index.js\";\n\n\n\n\n\n\n\nfunction Footer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: '100%',\n      backgroundColor: '#100007',\n      height: 60,\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      position: 'relative'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        style: {\n          color: '#C9C6C6'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        style: {\n          color: '#C9C6C6'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        style: {\n          color: '#C9C6C6'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        style: {\n          color: '#C9C6C6'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        style: {\n          color: '#C9C6C6'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: 'absolute',\n        bottom: 0,\n        right: 8\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          color: '#C9C6C6',\n          opacity: '50%',\n          fontSize: 15\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          style: {\n            color: '#C9C6C6',\n            opacity: '50%',\n            fontSize: 15\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 71\n        }, this), \" Vinnie Lopez.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcz9hYTI5Il0sIm5hbWVzIjpbIkZvb3RlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwiY29sb3IiLCJib3R0b20iLCJyaWdodCIsIm9wYWNpdHkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0Isc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLHFCQUFlLEVBQUUsU0FBbEM7QUFBNkNDLFlBQU0sRUFBRSxFQUFyRDtBQUF5REMsYUFBTyxFQUFDLE1BQWpFO0FBQXlFQyxnQkFBVSxFQUFDLFFBQXBGO0FBQThGQyxvQkFBYyxFQUFDLFFBQTdHO0FBQXVIQyxjQUFRLEVBQUM7QUFBaEksS0FBWjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0UscUVBQUMsZ0VBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBYSxhQUFLLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsa0VBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsa0VBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UscUVBQUMsbUVBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBSyxXQUFLLEVBQUU7QUFBQ0QsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCRSxjQUFNLEVBQUUsQ0FBL0I7QUFBa0NDLGFBQUssRUFBRTtBQUF6QyxPQUFaO0FBQUEsNkJBRUk7QUFBSSxhQUFLLEVBQUU7QUFBQ0YsZUFBSyxFQUFFLFNBQVI7QUFBbUJHLGlCQUFPLEVBQUUsS0FBNUI7QUFBbUNDLGtCQUFRLEVBQUM7QUFBNUMsU0FBWDtBQUFBLGdDQUE0RCxxRUFBQyxtRUFBRDtBQUFlLGVBQUssRUFBRTtBQUFDSixpQkFBSyxFQUFFLFNBQVI7QUFBbUJHLG1CQUFPLEVBQUUsS0FBNUI7QUFBbUNDLG9CQUFRLEVBQUM7QUFBNUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29weXJpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29weXJpZ2h0JztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzEwMDAwNycsIGhlaWdodDogNjAsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgcG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgPGRpdiA+XG4gICAgICAgIDxHaXRIdWJJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0M5QzZDNicgfX0gLz5cbiAgICAgICAgPFR3aXR0ZXJJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0M5QzZDNicgfX0vPlxuICAgICAgICA8RmFjZWJvb2tJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0M5QzZDNicgfX0vPlxuICAgICAgICA8TGlua2VkSW5JY29uIHN0eWxlPXt7IGNvbG9yOiAnI0M5QzZDNicgfX0vPlxuICAgICAgICA8SW5zdGFncmFtSWNvbiBzdHlsZT17eyBjb2xvcjogJyNDOUM2QzYnIH19Lz5cbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDAsIHJpZ2h0OiA4IH19PlxuICAgICAgICBcbiAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogJyNDOUM2QzYnLCBvcGFjaXR5OiAnNTAlJywgZm9udFNpemU6MTV9fT48Q29weXJpZ2h0SWNvbiBzdHlsZT17e2NvbG9yOiAnI0M5QzZDNicsIG9wYWNpdHk6ICc1MCUnLCBmb250U2l6ZToxNX19Lz4gVmlubmllIExvcGV6LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/index.js\n");

/***/ }),

/***/ "./components/hero/index.js":
/*!**********************************!*\
  !*** ./components/hero/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainFeaturedPost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typewriter-effect */ \"typewriter-effect\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/vinnielopez/Documents/Projects/vinnieportfolio2021/components/hero/index.js\";\n // import Link from '@material-ui/core/Link';\n\n\n\n // import Image from 'next/image';\n// import PropTypes from 'prop-types';\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  mainFeaturedPost: {\n    position: 'relative',\n    backgroundColor: theme.palette.grey[800],\n    color: theme.palette.common.white,\n    marginBottom: theme.spacing(4),\n    backgroundImage: 'url(https://images.unsplash.com/photo-1492446190781-58ac4285911d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80)',\n    backgroundSize: 'cover',\n    backgroundRepeat: 'no-repeat',\n    backgroundPosition: 'center' // height: 350\n\n  },\n  overlay: {\n    position: 'absolute',\n    top: 0,\n    bottom: 0,\n    right: 0,\n    left: 0,\n    backgroundColor: 'rgba(0,0,0,.3)'\n  },\n  mainFeaturedPostContent: {\n    position: 'relative',\n    padding: theme.spacing(3),\n    [theme.breakpoints.up('md')]: {\n      padding: theme.spacing(6),\n      paddingRight: 0\n    }\n  }\n}));\nfunction MainFeaturedPost() {\n  const classes = useStyles();\n  const name = 'Vinnie.';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.mainFeaturedPost //  style={{ backgroundImage: `url(${post.image})` }}\n    ,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.overlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      container: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        item: true,\n        md: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.mainFeaturedPostContent,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            component: \"h1\",\n            variant: \"h5\",\n            color: \"inherit\",\n            gutterBottom: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(typewriter_effect__WEBPACK_IMPORTED_MODULE_6___default.a, {\n              onInit: typewriter => {\n                typewriter.typeString(`Hi! I'm <strong style=\"color: blue;\">${name}</strong>`).pauseFor(500).deleteAll().typeString('<span style=\"color: blue;\">I am a </span>').typeString('<strong>Full Stack Developer.</strong>').pauseFor(500).deleteChars(21).typeString('Gamer.').pauseFor(500).deleteChars(6).typeString('Musician.').pauseFor(500).deleteChars(9).typeString('Reader.').pauseFor(500).deleteChars(7).typeString('Coder.').pauseFor(500).deleteChars(6).typeString('Traveler.').pauseFor(500).deleteChars(9).typeString('Son.').pauseFor(500).deleteChars(4).typeString('Brother.').pauseFor(500).deleteChars(8).typeString('Teacher.').pauseFor(500).deleteChars(10).typeString('Me!').pauseFor(500).deleteAll().typeString('Welcome to my page...').pauseFor(500).deleteAll().start();\n              },\n              options: {\n                loop: true,\n                cursor: \" :)\"\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n} // MainFeaturedPost.propTypes = {\n//   post: PropTypes.object,\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlcm8vaW5kZXguanM/Mzg2ZiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYWluRmVhdHVyZWRQb3N0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmxheSIsInRvcCIsImJvdHRvbSIsInJpZ2h0IiwibGVmdCIsIm1haW5GZWF0dXJlZFBvc3RDb250ZW50IiwicGFkZGluZyIsImJyZWFrcG9pbnRzIiwidXAiLCJwYWRkaW5nUmlnaHQiLCJNYWluRmVhdHVyZWRQb3N0IiwiY2xhc3NlcyIsIm5hbWUiLCJ0eXBld3JpdGVyIiwidHlwZVN0cmluZyIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwiZGVsZXRlQ2hhcnMiLCJzdGFydCIsImxvb3AiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0Msa0JBQWdCLEVBQUU7QUFDaEJDLFlBQVEsRUFBRSxVQURNO0FBRWhCQyxtQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUZEO0FBR2hCQyxTQUFLLEVBQUVOLEtBQUssQ0FBQ0ksT0FBTixDQUFjRyxNQUFkLENBQXFCQyxLQUhaO0FBSWhCQyxnQkFBWSxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBSkU7QUFLaEJDLG1CQUFlLEVBQ2IsdUtBTmM7QUFPaEJDLGtCQUFjLEVBQUUs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LFVBbkNILENBbUNjLHVCQW5DZCxFQW9DR0MsUUFwQ0gsQ0FvQ1ksR0FwQ1osRUFxQ0dDLFNBckNILEdBc0NHRSxLQXRDSDtBQXVDRCxlQXpDSDtBQTBDRSxxQkFBTyxFQUFFO0FBQ1BDLG9CQUFJLEVBQUUsSUFEQztBQUVQQyxzQkFBTSxFQUFFO0FBRkQ7QUExQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtGRCxDLENBRUQ7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZXJvL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tICd0eXBld3JpdGVyLWVmZmVjdCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtYWluRmVhdHVyZWRQb3N0OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbODAwXSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICd1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTI0NDYxOTA3ODEtNThhYzQyODU5MTFkP2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyOTQmcT04MCknLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgLy8gaGVpZ2h0OiAzNTBcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIH0sXG4gIG1haW5GZWF0dXJlZFBvc3RDb250ZW50OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5GZWF0dXJlZFBvc3QoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgbmFtZSA9ICdWaW5uaWUuJ1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkZlYXR1cmVkUG9zdH1cbiAgICAgIC8vICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwb3N0LmltYWdlfSlgIH19XG4gICAgPlxuICAgICAgey8qIDxkaXYgc3R5bGU9e3sgfX0+ICAqL31cbiAgICAgIHsvKiA8SW1hZ2UgXG4gICAgLy8gICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICBzcmM9Jy9pbWcvY29uc3VsdC5qcGVnJyBcbiAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICB3aWR0aD17NTAwfVxuICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcbiAgICAgICAvPiAqL31cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vdmVybGF5fSAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRmVhdHVyZWRQb3N0Q29udGVudH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9J2gxJ1xuICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcbiAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgICAgIG9uSW5pdD17KHR5cGV3cml0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYEhpISBJJ20gPHN0cm9uZyBzdHlsZT1cImNvbG9yOiBibHVlO1wiPiR7bmFtZX08L3N0cm9uZz5gKVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQWxsKClcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoJzxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWU7XCI+SSBhbSBhIDwvc3Bhbj4nKVxuICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZygnPHN0cm9uZz5GdWxsIFN0YWNrIERldmVsb3Blci48L3N0cm9uZz4nKVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQ2hhcnMoMjEpXG4gICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKCdHYW1lci4nKVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQ2hhcnMoNilcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoJ011c2ljaWFuLicpXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcig1MDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGVDaGFycyg5KVxuICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZygnUmVhZGVyLicpXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcig1MDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGVDaGFycyg3KVxuICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZygnQ29kZXIuJylcbiAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUNoYXJzKDYpXG4gICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKCdUcmF2ZWxlci4nKVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQ2hhcnMoOSlcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoJ1Nvbi4nKVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQ2hhcnMoNClcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoJ0Jyb3RoZXIuJylcbiAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUNoYXJzKDgpXG4gICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKCdUZWFjaGVyLicpXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcig1MDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGVDaGFycygxMClcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoJ01lIScpXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcig1MDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGVBbGwoKVxuICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZygnV2VsY29tZSB0byBteSBwYWdlLi4uJylcbiAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCIgOilcIixcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIHsvKiA8TGluayB2YXJpYW50PVwic3VidGl0bGUxXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAge3Bvc3QubGlua1RleHR9XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cblxuLy8gTWFpbkZlYXR1cmVkUG9zdC5wcm9wVHlwZXMgPSB7XG4vLyAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QsXG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/index */ \"./components/footer/index.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero */ \"./components/hero/index.js\");\n\nvar _jsxFileName = \"/Users/vinnielopez/Documents/Projects/vinnieportfolio2021/pages/index.js\";\n\n // import VinniesProjectPanel from '../components/projects'\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUk3QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVVFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleCc7XG4vLyBpbXBvcnQgVmlubmllc1Byb2plY3RQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RzJ1xuaW1wb3J0IE1haW5GZWF0dXJlUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+IFxuICAgICA8L0hlYWQ+XG5cbiAgICAgIFxuICAgICAgPE1haW5GZWF0dXJlUG9zdCAvPlxuICAgICAgXG4gICAgICB7LyogPFZpbm5pZXNQcm9qZWN0UGFuZWwgLz4gKi99XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI/ZjZmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiPzBlZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Paper\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/Copyright":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Copyright" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Copyright\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29weXJpZ2h0XCI/ZjRiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29weXJpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvcHlyaWdodFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Copyright\n");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Facebook\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIj81MzQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Facebook\n");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/GitHub\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCI/MzJhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/GitHub\n");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Instagram\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCI/NjkzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Instagram\n");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LinkedIn\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIj83NDgwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/LinkedIn\n");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Twitter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiPzg0ZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Twitter\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "typewriter-effect":
/*!************************************!*\
  !*** external "typewriter-effect" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typewriter-effect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBld3JpdGVyLWVmZmVjdFwiP2ViYjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidHlwZXdyaXRlci1lZmZlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBld3JpdGVyLWVmZmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///typewriter-effect\n");

/***/ })

/******/ });