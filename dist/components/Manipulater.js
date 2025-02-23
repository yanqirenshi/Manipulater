"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Manipulater;
var _react = _interopRequireDefault(require("react"));
var _Root = _interopRequireDefault(require("./Operators/Root.js"));
var _Branch = _interopRequireDefault(require("./Operators/Branch.js"));
var _operator = _interopRequireDefault(require("../js/operator.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Manipulater(props) {
  var actions = props.actions;
  var operators = props.operators;
  var window_size = props.window_size;
  var leafs = props.leafs;
  var theme_color = props.theme_color || {
    r: 8,
    g: 156,
    b: 163
  };
  _react["default"].useEffect(function () {
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, selected_operator && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Branch["default"], {
    root: selected_operator,
    theme_color: theme_color
  }), leafs(selected_operator)), operators.list.map(function (operator) {
    return /*#__PURE__*/_react["default"].createElement(_Root["default"], {
      key: operator.code,
      operator: operator,
      active: operator.code === operators.active,
      actions: actions,
      onClick: clickRoot,
      theme_color: theme_color
    });
  }));
}