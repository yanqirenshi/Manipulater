"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Leaf;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Leaf(props) {
  var x = props.x;
  var y = props.y;
  var w = props.w;
  var h = props.h;
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      position: 'fixed',
      left: x,
      top: y,
      padding: '5px',
      borderRadius: '5px',
      zIndex: 888888,
      background: 'rgba(8, 156, 163, 1.0)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      background: '#fff',
      width: w,
      height: h,
      borderRadius: '4px'
    }
  }, children));
}