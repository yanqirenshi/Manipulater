"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Manipulater;
var React = _interopRequireWildcard(require("react"));
var _Root = _interopRequireDefault(require("./Operators/Root.js"));
var _Branch = _interopRequireDefault(require("./Operators/Branch.js"));
var _operator = _interopRequireDefault(require("../js/operator.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Manipulater(props) {
  var actions = props.actions;
  var operators = props.operators;
  var window_size = props.window_size;
  var leafs = props.leafs;
  React.useEffect(function () {
    if (!window_size) return;
    if (!operators.initialized) {
      actions.operator.change(_operator["default"].initialize(window_size, operators));
    } else if (window_size.w !== _operator["default"].window_size.w || window_size.h !== _operator["default"].window_size.h) {
      actions.operator.change(_operator["default"].initialize(window_size, operators));
    }
  }, [window_size, actions.operator, operators]);
  if (!window_size) return null;
  var clickRoot = function clickRoot(code) {
    return actions.operator.change(_operator["default"].clickedRoot(code, operators));
  };
  var selected_operator = _operator["default"].selectedOperator(operators);
  return /*#__PURE__*/React.createElement(React.Fragment, null, selected_operator && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Branch["default"], {
    root: selected_operator
  }), leafs(selected_operator)), operators.list.map(function (operator) {
    return /*#__PURE__*/React.createElement(_Root["default"], {
      key: operator.code,
      operator: operator,
      active: operator.code === operators.active,
      actions: actions,
      onClick: clickRoot
    });
  }));
}