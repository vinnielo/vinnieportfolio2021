webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar removeElementByIds = function removeElementByIds(ids) {\n  ids.forEach(function (id) {\n    var element = document.getElementById(id);\n    if (element && element.parentNode) {\n      element.parentNode.removeChild(element);\n    }\n  });\n};\n\nvar MessengerCustomerChat = function (_Component) {\n  _inherits(MessengerCustomerChat, _Component);\n\n  function MessengerCustomerChat() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MessengerCustomerChat);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessengerCustomerChat.__proto__ || Object.getPrototypeOf(MessengerCustomerChat)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      fbLoaded: false,\n      shouldShowDialog: undefined\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MessengerCustomerChat, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.setFbAsyncInit();\n      this.reloadSDKAsynchronously();\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.pageId !== this.props.pageId || prevProps.appId !== this.props.appId || prevProps.shouldShowDialog !== this.props.shouldShowDialog || prevProps.htmlRef !== this.props.htmlRef || prevProps.minimized !== this.props.minimized || prevProps.themeColor !== this.props.themeColor || prevProps.loggedInGreeting !== this.props.loggedInGreeting || prevProps.loggedOutGreeting !== this.props.loggedOutGreeting || prevProps.greetingDialogDisplay !== this.props.greetingDialogDisplay || prevProps.greetingDialogDelay !== this.props.greetingDialogDelay || prevProps.autoLogAppEvents !== this.props.autoLogAppEvents || prevProps.xfbml !== this.props.xfbml || prevProps.version !== this.props.version || prevProps.language !== this.props.language) {\n        this.setFbAsyncInit();\n        this.reloadSDKAsynchronously();\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      if (window.FB !== undefined) {\n        window.FB.CustomerChat.hide();\n      }\n    }\n  }, {\n    key: 'setFbAsyncInit',\n    value: function setFbAsyncInit() {\n      var _this2 = this;\n\n      var _props = this.props,\n          appId = _props.appId,\n          autoLogAppEvents = _props.autoLogAppEvents,\n          xfbml = _props.xfbml,\n          version = _props.version;\n\n\n      window.fbAsyncInit = function () {\n        window.FB.init({\n          appId: appId,\n          autoLogAppEvents: autoLogAppEvents,\n          xfbml: xfbml,\n          version: 'v' + version\n        });\n\n        _this2.setState({ fbLoaded: true });\n      };\n    }\n  }, {\n    key: 'loadSDKAsynchronously',\n    value: function loadSDKAsynchronously() {\n      var language = this.props.language;\n      /* eslint-disable */\n\n      (function (d, s, id) {\n        var js,\n            fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) {\n          return;\n        }\n        js = d.createElement(s);\n        js.id = id;\n        js.src = 'https://connect.facebook.net/' + language + '/sdk/xfbml.customerchat.js';\n        fjs.parentNode.insertBefore(js, fjs);\n      })(document, 'script', 'facebook-jssdk');\n      /* eslint-enable */\n    }\n  }, {\n    key: 'removeFacebookSDK',\n    value: function removeFacebookSDK() {\n      removeElementByIds(['facebook-jssdk', 'fb-root']);\n\n      delete window.FB;\n    }\n  }, {\n    key: 'reloadSDKAsynchronously',\n    value: function reloadSDKAsynchronously() {\n      this.removeFacebookSDK();\n      this.loadSDKAsynchronously();\n    }\n  }, {\n    key: 'controlPlugin',\n    value: function controlPlugin() {\n      var shouldShowDialog = this.props.shouldShowDialog;\n\n\n      if (shouldShowDialog) {\n        window.FB.CustomerChat.showDialog();\n      } else {\n        window.FB.CustomerChat.hideDialog();\n      }\n    }\n  }, {\n    key: 'subscribeEvents',\n    value: function subscribeEvents() {\n      var _props2 = this.props,\n          onCustomerChatDialogShow = _props2.onCustomerChatDialogShow,\n          onCustomerChatDialogHide = _props2.onCustomerChatDialogHide;\n\n\n      if (onCustomerChatDialogShow) {\n        window.FB.Event.subscribe('customerchat.dialogShow', onCustomerChatDialogShow);\n      }\n\n      if (onCustomerChatDialogHide) {\n        window.FB.Event.subscribe('customerchat.dialogHide', onCustomerChatDialogHide);\n      }\n    }\n  }, {\n    key: 'createMarkup',\n    value: function createMarkup() {\n      var _props3 = this.props,\n          pageId = _props3.pageId,\n          htmlRef = _props3.htmlRef,\n          minimized = _props3.minimized,\n          themeColor = _props3.themeColor,\n          loggedInGreeting = _props3.loggedInGreeting,\n          loggedOutGreeting = _props3.loggedOutGreeting,\n          greetingDialogDisplay = _props3.greetingDialogDisplay,\n          greetingDialogDelay = _props3.greetingDialogDelay;\n\n\n      var refAttribute = htmlRef !== undefined ? 'ref=\"' + htmlRef + '\"' : '';\n      var minimizedAttribute = minimized !== undefined ? 'minimized=\"' + minimized + '\"' : '';\n      var themeColorAttribute = themeColor !== undefined ? 'theme_color=\"' + themeColor + '\"' : '';\n      var loggedInGreetingAttribute = loggedInGreeting !== undefined ? 'logged_in_greeting=\"' + loggedInGreeting + '\"' : '';\n      var loggedOutGreetingAttribute = loggedOutGreeting !== undefined ? 'logged_out_greeting=\"' + loggedOutGreeting + '\"' : '';\n      var greetingDialogDisplayAttribute = greetingDialogDisplay !== undefined ? 'greeting_dialog_display=\"' + greetingDialogDisplay + '\"' : '';\n      var greetingDialogDelayAttribute = greetingDialogDelay !== undefined ? 'greeting_dialog_delay=\"' + greetingDialogDelay + '\"' : '';\n\n      return {\n        __html: '<div\\n        class=\"fb-customerchat\"\\n        page_id=\"' + pageId + '\"\\n        ' + refAttribute + '\\n        ' + minimizedAttribute + '\\n        ' + themeColorAttribute + '\\n        ' + loggedInGreetingAttribute + '\\n        ' + loggedOutGreetingAttribute + '\\n        ' + greetingDialogDisplayAttribute + '\\n        ' + greetingDialogDelayAttribute + '\\n      ></div>'\n      };\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _state = this.state,\n          fbLoaded = _state.fbLoaded,\n          shouldShowDialog = _state.shouldShowDialog;\n\n\n      if (fbLoaded && shouldShowDialog !== this.props.shouldShowDialog) {\n        document.addEventListener('DOMNodeInserted', function (event) {\n          var element = event.target;\n          if (element.className && typeof element.className === 'string' && element.className.includes('fb_dialog')) {\n            _this3.controlPlugin();\n          }\n        }, false);\n        this.subscribeEvents();\n      }\n      // Add a random key to rerender. Reference:\n      // https://stackoverflow.com/questions/30242530/dangerouslysetinnerhtml-doesnt-update-during-render\n      return _react2.default.createElement('div', { key: Date(), dangerouslySetInnerHTML: this.createMarkup() });\n    }\n  }]);\n\n  return MessengerCustomerChat;\n}(_react.Component);\n\nMessengerCustomerChat.propTypes = {\n  pageId: _propTypes2.default.string.isRequired,\n  appId: _propTypes2.default.string.isRequired,\n\n  shouldShowDialog: _propTypes2.default.bool,\n  htmlRef: _propTypes2.default.string,\n  minimized: _propTypes2.default.bool,\n  themeColor: _propTypes2.default.string,\n  loggedInGreeting: _propTypes2.default.string,\n  loggedOutGreeting: _propTypes2.default.string,\n  greetingDialogDisplay: _propTypes2.default.oneOf(['show', 'hide', 'fade']),\n  greetingDialogDelay: _propTypes2.default.number,\n  autoLogAppEvents: _propTypes2.default.bool,\n  xfbml: _propTypes2.default.bool,\n  version: _propTypes2.default.string,\n  language: _propTypes2.default.string,\n  onCustomerChatDialogShow: _propTypes2.default.func,\n  onCustomerChatDialogHide: _propTypes2.default.func\n};\nMessengerCustomerChat.defaultProps = {\n  shouldShowDialog: false,\n  htmlRef: undefined,\n  minimized: undefined,\n  themeColor: undefined,\n  loggedInGreeting: undefined,\n  loggedOutGreeting: undefined,\n  greetingDialogDisplay: undefined,\n  greetingDialogDelay: undefined,\n  autoLogAppEvents: true,\n  xfbml: true,\n  version: '2.11',\n  language: 'en_US',\n  onCustomerChatDialogShow: undefined,\n  onCustomerChatDialogHide: undefined\n};\nexports.default = MessengerCustomerChat;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0L2xpYi9NZXNzZW5nZXJDdXN0b21lckNoYXQuanM/ZmE0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDREQUE0RDtBQUMvRztBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0L2xpYi9NZXNzZW5nZXJDdXN0b21lckNoYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHJlbW92ZUVsZW1lbnRCeUlkcyA9IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRCeUlkcyhpZHMpIHtcbiAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBNZXNzZW5nZXJDdXN0b21lckNoYXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZXNzZW5nZXJDdXN0b21lckNoYXQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lc3NlbmdlckN1c3RvbWVyQ2hhdCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmYkxvYWRlZDogZmFsc2UsXG4gICAgICBzaG91bGRTaG93RGlhbG9nOiB1bmRlZmluZWRcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZXNzZW5nZXJDdXN0b21lckNoYXQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0RmJBc3luY0luaXQoKTtcbiAgICAgIHRoaXMucmVsb2FkU0RLQXN5bmNocm9ub3VzbHkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAocHJldlByb3BzLnBhZ2VJZCAhPT0gdGhpcy5wcm9wcy5wYWdlSWQgfHwgcHJldlByb3BzLmFwcElkICE9PSB0aGlzLnByb3BzLmFwcElkIHx8IHByZXZQcm9wcy5zaG91bGRTaG93RGlhbG9nICE9PSB0aGlzLnByb3BzLnNob3VsZFNob3dEaWFsb2cgfHwgcHJldlByb3BzLmh0bWxSZWYgIT09IHRoaXMucHJvcHMuaHRtbFJlZiB8fCBwcmV2UHJvcHMubWluaW1pemVkICE9PSB0aGlzLnByb3BzLm1pbmltaXplZCB8fCBwcmV2UHJvcHMudGhlbWVDb2xvciAhPT0gdGhpcy5wcm9wcy50aGVtZUNvbG9yIHx8IHByZXZQcm9wcy5sb2dnZWRJbkdyZWV0aW5nICE9PSB0aGlzLnByb3BzLmxvZ2dlZEluR3JlZXRpbmcgfHwgcHJldlByb3BzLmxvZ2dlZE91dEdyZWV0aW5nICE9PSB0aGlzLnByb3BzLmxvZ2dlZE91dEdyZWV0aW5nIHx8IHByZXZQcm9wcy5ncmVldGluZ0RpYWxvZ0Rpc3BsYXkgIT09IHRoaXMucHJvcHMuZ3JlZXRpbmdEaWFsb2dEaXNwbGF5IHx8IHByZXZQcm9wcy5ncmVldGluZ0RpYWxvZ0RlbGF5ICE9PSB0aGlzLnByb3BzLmdyZWV0aW5nRGlhbG9nRGVsYXkgfHwgcHJldlByb3BzLmF1dG9Mb2dBcHBFdmVudHMgIT09IHRoaXMucHJvcHMuYXV0b0xvZ0FwcEV2ZW50cyB8fCBwcmV2UHJvcHMueGZibWwgIT09IHRoaXMucHJvcHMueGZibWwgfHwgcHJldlByb3BzLnZlcnNpb24gIT09IHRoaXMucHJvcHMudmVyc2lvbiB8fCBwcmV2UHJvcHMubGFuZ3VhZ2UgIT09IHRoaXMucHJvcHMubGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRGYkFzeW5jSW5pdCgpO1xuICAgICAgICB0aGlzLnJlbG9hZFNES0FzeW5jaHJvbm91c2x5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh3aW5kb3cuRkIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB3aW5kb3cuRkIuQ3VzdG9tZXJDaGF0LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGYkFzeW5jSW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZiQXN5bmNJbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcElkID0gX3Byb3BzLmFwcElkLFxuICAgICAgICAgIGF1dG9Mb2dBcHBFdmVudHMgPSBfcHJvcHMuYXV0b0xvZ0FwcEV2ZW50cyxcbiAgICAgICAgICB4ZmJtbCA9IF9wcm9wcy54ZmJtbCxcbiAgICAgICAgICB2ZXJzaW9uID0gX3Byb3BzLnZlcnNpb247XG5cblxuICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuRkIuaW5pdCh7XG4gICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgIGF1dG9Mb2dBcHBFdmVudHM6IGF1dG9Mb2dBcHBFdmVudHMsXG4gICAgICAgICAgeGZibWw6IHhmYm1sLFxuICAgICAgICAgIHZlcnNpb246ICd2JyArIHZlcnNpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgZmJMb2FkZWQ6IHRydWUgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvYWRTREtBc3luY2hyb25vdXNseScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRTREtBc3luY2hyb25vdXNseSgpIHtcbiAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2U7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4gICAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG4gICAgICAgIHZhciBqcyxcbiAgICAgICAgICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcbiAgICAgICAganMuaWQgPSBpZDtcbiAgICAgICAganMuc3JjID0gJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvJyArIGxhbmd1YWdlICsgJy9zZGsveGZibWwuY3VzdG9tZXJjaGF0LmpzJztcbiAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuICAgICAgfSkoZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVGYWNlYm9va1NESycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZhY2Vib29rU0RLKCkge1xuICAgICAgcmVtb3ZlRWxlbWVudEJ5SWRzKFsnZmFjZWJvb2stanNzZGsnLCAnZmItcm9vdCddKTtcblxuICAgICAgZGVsZXRlIHdpbmRvdy5GQjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWxvYWRTREtBc3luY2hyb25vdXNseScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZFNES0FzeW5jaHJvbm91c2x5KCkge1xuICAgICAgdGhpcy5yZW1vdmVGYWNlYm9va1NESygpO1xuICAgICAgdGhpcy5sb2FkU0RLQXN5bmNocm9ub3VzbHkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb250cm9sUGx1Z2luJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbFBsdWdpbigpIHtcbiAgICAgIHZhciBzaG91bGRTaG93RGlhbG9nID0gdGhpcy5wcm9wcy5zaG91bGRTaG93RGlhbG9nO1xuXG5cbiAgICAgIGlmIChzaG91bGRTaG93RGlhbG9nKSB7XG4gICAgICAgIHdpbmRvdy5GQi5DdXN0b21lckNoYXQuc2hvd0RpYWxvZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LkZCLkN1c3RvbWVyQ2hhdC5oaWRlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3Vic2NyaWJlRXZlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlRXZlbnRzKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ3VzdG9tZXJDaGF0RGlhbG9nU2hvdyA9IF9wcm9wczIub25DdXN0b21lckNoYXREaWFsb2dTaG93LFxuICAgICAgICAgIG9uQ3VzdG9tZXJDaGF0RGlhbG9nSGlkZSA9IF9wcm9wczIub25DdXN0b21lckNoYXREaWFsb2dIaWRlO1xuXG5cbiAgICAgIGlmIChvbkN1c3RvbWVyQ2hhdERpYWxvZ1Nob3cpIHtcbiAgICAgICAgd2luZG93LkZCLkV2ZW50LnN1YnNjcmliZSgnY3VzdG9tZXJjaGF0LmRpYWxvZ1Nob3cnLCBvbkN1c3RvbWVyQ2hhdERpYWxvZ1Nob3cpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DdXN0b21lckNoYXREaWFsb2dIaWRlKSB7XG4gICAgICAgIHdpbmRvdy5GQi5FdmVudC5zdWJzY3JpYmUoJ2N1c3RvbWVyY2hhdC5kaWFsb2dIaWRlJywgb25DdXN0b21lckNoYXREaWFsb2dIaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVNYXJrdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVNYXJrdXAoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcGFnZUlkID0gX3Byb3BzMy5wYWdlSWQsXG4gICAgICAgICAgaHRtbFJlZiA9IF9wcm9wczMuaHRtbFJlZixcbiAgICAgICAgICBtaW5pbWl6ZWQgPSBfcHJvcHMzLm1pbmltaXplZCxcbiAgICAgICAgICB0aGVtZUNvbG9yID0gX3Byb3BzMy50aGVtZUNvbG9yLFxuICAgICAgICAgIGxvZ2dlZEluR3JlZXRpbmcgPSBfcHJvcHMzLmxvZ2dlZEluR3JlZXRpbmcsXG4gICAgICAgICAgbG9nZ2VkT3V0R3JlZXRpbmcgPSBfcHJvcHMzLmxvZ2dlZE91dEdyZWV0aW5nLFxuICAgICAgICAgIGdyZWV0aW5nRGlhbG9nRGlzcGxheSA9IF9wcm9wczMuZ3JlZXRpbmdEaWFsb2dEaXNwbGF5LFxuICAgICAgICAgIGdyZWV0aW5nRGlhbG9nRGVsYXkgPSBfcHJvcHMzLmdyZWV0aW5nRGlhbG9nRGVsYXk7XG5cblxuICAgICAgdmFyIHJlZkF0dHJpYnV0ZSA9IGh0bWxSZWYgIT09IHVuZGVmaW5lZCA/ICdyZWY9XCInICsgaHRtbFJlZiArICdcIicgOiAnJztcbiAgICAgIHZhciBtaW5pbWl6ZWRBdHRyaWJ1dGUgPSBtaW5pbWl6ZWQgIT09IHVuZGVmaW5lZCA/ICdtaW5pbWl6ZWQ9XCInICsgbWluaW1pemVkICsgJ1wiJyA6ICcnO1xuICAgICAgdmFyIHRoZW1lQ29sb3JBdHRyaWJ1dGUgPSB0aGVtZUNvbG9yICE9PSB1bmRlZmluZWQgPyAndGhlbWVfY29sb3I9XCInICsgdGhlbWVDb2xvciArICdcIicgOiAnJztcbiAgICAgIHZhciBsb2dnZWRJbkdyZWV0aW5nQXR0cmlidXRlID0gbG9nZ2VkSW5HcmVldGluZyAhPT0gdW5kZWZpbmVkID8gJ2xvZ2dlZF9pbl9ncmVldGluZz1cIicgKyBsb2dnZWRJbkdyZWV0aW5nICsgJ1wiJyA6ICcnO1xuICAgICAgdmFyIGxvZ2dlZE91dEdyZWV0aW5nQXR0cmlidXRlID0gbG9nZ2VkT3V0R3JlZXRpbmcgIT09IHVuZGVmaW5lZCA/ICdsb2dnZWRfb3V0X2dyZWV0aW5nPVwiJyArIGxvZ2dlZE91dEdyZWV0aW5nICsgJ1wiJyA6ICcnO1xuICAgICAgdmFyIGdyZWV0aW5nRGlhbG9nRGlzcGxheUF0dHJpYnV0ZSA9IGdyZWV0aW5nRGlhbG9nRGlzcGxheSAhPT0gdW5kZWZpbmVkID8gJ2dyZWV0aW5nX2RpYWxvZ19kaXNwbGF5PVwiJyArIGdyZWV0aW5nRGlhbG9nRGlzcGxheSArICdcIicgOiAnJztcbiAgICAgIHZhciBncmVldGluZ0RpYWxvZ0RlbGF5QXR0cmlidXRlID0gZ3JlZXRpbmdEaWFsb2dEZWxheSAhPT0gdW5kZWZpbmVkID8gJ2dyZWV0aW5nX2RpYWxvZ19kZWxheT1cIicgKyBncmVldGluZ0RpYWxvZ0RlbGF5ICsgJ1wiJyA6ICcnO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBfX2h0bWw6ICc8ZGl2XFxuICAgICAgICBjbGFzcz1cImZiLWN1c3RvbWVyY2hhdFwiXFxuICAgICAgICBwYWdlX2lkPVwiJyArIHBhZ2VJZCArICdcIlxcbiAgICAgICAgJyArIHJlZkF0dHJpYnV0ZSArICdcXG4gICAgICAgICcgKyBtaW5pbWl6ZWRBdHRyaWJ1dGUgKyAnXFxuICAgICAgICAnICsgdGhlbWVDb2xvckF0dHJpYnV0ZSArICdcXG4gICAgICAgICcgKyBsb2dnZWRJbkdyZWV0aW5nQXR0cmlidXRlICsgJ1xcbiAgICAgICAgJyArIGxvZ2dlZE91dEdyZWV0aW5nQXR0cmlidXRlICsgJ1xcbiAgICAgICAgJyArIGdyZWV0aW5nRGlhbG9nRGlzcGxheUF0dHJpYnV0ZSArICdcXG4gICAgICAgICcgKyBncmVldGluZ0RpYWxvZ0RlbGF5QXR0cmlidXRlICsgJ1xcbiAgICAgID48L2Rpdj4nXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmYkxvYWRlZCA9IF9zdGF0ZS5mYkxvYWRlZCxcbiAgICAgICAgICBzaG91bGRTaG93RGlhbG9nID0gX3N0YXRlLnNob3VsZFNob3dEaWFsb2c7XG5cblxuICAgICAgaWYgKGZiTG9hZGVkICYmIHNob3VsZFNob3dEaWFsb2cgIT09IHRoaXMucHJvcHMuc2hvdWxkU2hvd0RpYWxvZykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUgJiYgdHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJiBlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcygnZmJfZGlhbG9nJykpIHtcbiAgICAgICAgICAgIF90aGlzMy5jb250cm9sUGx1Z2luKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgYSByYW5kb20ga2V5IHRvIHJlcmVuZGVyLiBSZWZlcmVuY2U6XG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDI0MjUzMC9kYW5nZXJvdXNseXNldGlubmVyaHRtbC1kb2VzbnQtdXBkYXRlLWR1cmluZy1yZW5kZXJcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBrZXk6IERhdGUoKSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHRoaXMuY3JlYXRlTWFya3VwKCkgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lc3NlbmdlckN1c3RvbWVyQ2hhdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1lc3NlbmdlckN1c3RvbWVyQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIHBhZ2VJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXBwSWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgc2hvdWxkU2hvd0RpYWxvZzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBodG1sUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbWluaW1pemVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRoZW1lQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsb2dnZWRJbkdyZWV0aW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbG9nZ2VkT3V0R3JlZXRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBncmVldGluZ0RpYWxvZ0Rpc3BsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydzaG93JywgJ2hpZGUnLCAnZmFkZSddKSxcbiAgZ3JlZXRpbmdEaWFsb2dEZWxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGF1dG9Mb2dBcHBFdmVudHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgeGZibWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdmVyc2lvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxhbmd1YWdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb25DdXN0b21lckNoYXREaWFsb2dTaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ3VzdG9tZXJDaGF0RGlhbG9nSGlkZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdWxkU2hvd0RpYWxvZzogZmFsc2UsXG4gIGh0bWxSZWY6IHVuZGVmaW5lZCxcbiAgbWluaW1pemVkOiB1bmRlZmluZWQsXG4gIHRoZW1lQ29sb3I6IHVuZGVmaW5lZCxcbiAgbG9nZ2VkSW5HcmVldGluZzogdW5kZWZpbmVkLFxuICBsb2dnZWRPdXRHcmVldGluZzogdW5kZWZpbmVkLFxuICBncmVldGluZ0RpYWxvZ0Rpc3BsYXk6IHVuZGVmaW5lZCxcbiAgZ3JlZXRpbmdEaWFsb2dEZWxheTogdW5kZWZpbmVkLFxuICBhdXRvTG9nQXBwRXZlbnRzOiB0cnVlLFxuICB4ZmJtbDogdHJ1ZSxcbiAgdmVyc2lvbjogJzIuMTEnLFxuICBsYW5ndWFnZTogJ2VuX1VTJyxcbiAgb25DdXN0b21lckNoYXREaWFsb2dTaG93OiB1bmRlZmluZWQsXG4gIG9uQ3VzdG9tZXJDaGF0RGlhbG9nSGlkZTogdW5kZWZpbmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js\n");

/***/ }),

/***/ "./node_modules/react-messenger-customer-chat/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-messenger-customer-chat/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _MessengerCustomerChat = __webpack_require__(/*! ./MessengerCustomerChat */ \"./node_modules/react-messenger-customer-chat/lib/MessengerCustomerChat.js\");\n\nvar _MessengerCustomerChat2 = _interopRequireDefault(_MessengerCustomerChat);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = _MessengerCustomerChat2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0L2xpYi9pbmRleC5qcz9lNDE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLDBHQUF5Qjs7QUFFOUQ7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0L2xpYi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9NZXNzZW5nZXJDdXN0b21lckNoYXQgPSByZXF1aXJlKCcuL01lc3NlbmdlckN1c3RvbWVyQ2hhdCcpO1xuXG52YXIgX01lc3NlbmdlckN1c3RvbWVyQ2hhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZXNzZW5nZXJDdXN0b21lckNoYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9NZXNzZW5nZXJDdXN0b21lckNoYXQyLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-messenger-customer-chat/lib/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_vinnielopez_Documents_Projects_vinnieportfolio2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-messenger-customer-chat */ \"./node_modules/react-messenger-customer-chat/lib/index.js\");\n/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/vinnielopez/Documents/Projects/vinnieportfolio2021/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_vinnielopez_Documents_Projects_vinnieportfolio2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import Drift from \"react-driftjs\";\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      pageId: \"112037220980342\",\n      appId: \"150119663689694\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFDRTtBQUFBLDRCQUNGLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFLGVBR0YscUVBQUMsb0VBQUQ7QUFDRSxZQUFNLEVBQUMsaUJBRFQ7QUFFRSxXQUFLLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEU7QUFBQSxrQkFERjtBQVVEOztLQVhRRixLO0FBYU1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBEcmlmdCBmcm9tIFwicmVhY3QtZHJpZnRqc1wiO1xuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgey8qIDxEcmlmdCBhcHBJZD0nejg5YmN1Ynp3dHR5JyAvPiAqL31cbiAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxuICAgIHBhZ2VJZD1cIjExMjAzNzIyMDk4MDM0MlwiXG4gICAgYXBwSWQ9XCIxNTAxMTk2NjM2ODk2OTRcIlxuICAvPlxuICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})