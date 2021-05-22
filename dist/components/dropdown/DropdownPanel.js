"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ClassNames = require("../utils/ClassNames");

var _CSSTransition = require("../transition/CSSTransition");

var _Portal = require("../portal/Portal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownPanelComponent = /*#__PURE__*/function (_Component) {
  _inherits(DropdownPanelComponent, _Component);

  var _super = _createSuper(DropdownPanelComponent);

  function DropdownPanelComponent() {
    _classCallCheck(this, DropdownPanelComponent);

    return _super.apply(this, arguments);
  }

  _createClass(DropdownPanelComponent, [{
    key: "renderElement",
    value: function renderElement() {
      var className = (0, _ClassNames.classNames)('p-dropdown-panel p-component', this.props.panelClassName);
      return /*#__PURE__*/_react.default.createElement(_CSSTransition.CSSTransition, {
        nodeRef: this.props.forwardRef,
        classNames: "p-connected-overlay",
        in: this.props.in,
        timeout: {
          enter: 120,
          exit: 100
        },
        options: this.props.transitionOptions,
        unmountOnExit: true,
        onEnter: this.props.onEnter,
        onEntering: this.props.onEntering,
        onEntered: this.props.onEntered,
        onExit: this.props.onExit,
        onExited: this.props.onExited
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.props.forwardRef,
        className: className,
        style: this.props.panelStyle,
        onClick: this.props.onClick
      }, this.props.filter, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-dropdown-items-wrapper",
        style: {
          maxHeight: this.props.scrollHeight || 'auto'
        }
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "p-dropdown-items",
        role: "listbox"
      }, this.props.children))));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      return /*#__PURE__*/_react.default.createElement(_Portal.Portal, {
        element: element,
        appendTo: this.props.appendTo
      });
    }
  }]);

  return DropdownPanelComponent;
}(_react.Component);

_defineProperty(DropdownPanelComponent, "defaultProps", {
  appendTo: null,
  filter: null,
  scrollHeight: null,
  panelClassName: null,
  panelStyle: null,
  onClick: null
});

_defineProperty(DropdownPanelComponent, "propTypes", {
  appendTo: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  filter: _propTypes.default.any,
  scrollHeight: _propTypes.default.string,
  panelClassName: _propTypes.default.string,
  panelStyle: _propTypes.default.object,
  onClick: _propTypes.default.func
});

var DropdownPanel = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(DropdownPanelComponent, _extends({
    forwardRef: ref
  }, props));
});

exports.DropdownPanel = DropdownPanel;