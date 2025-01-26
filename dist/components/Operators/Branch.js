"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Branch;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// https://www.granfairs.com/blog/staff/make-triangle-with-css
// http://apps.eky.hk/css-triangle-generator/ja

function Branch(props) {
  var root = props.root;
  var w_center = root.position.x + root.size.w / 2;
  var x = w_center - 22 / 2 - 3;
  var y = root.position.y - 28;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      position: 'fixed',
      left: x,
      top: y,
      borderTop: '27px solid rgba(8, 156, 163, 1.0)',
      borderRight: '15px solid transparent',
      borderLeft: '15px solid transparent',
      zIndex: 888888
    }
  });
}