"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Root(props) {
  var operator = props.operator;
  var onClick = props.onClick;
  var active = props.active;
  var border_width = operator.border.w;
  var width = operator.size.w;
  var height = operator.size.h;
  var x = operator.position.x;
  var y = operator.position.y;
  var click = function click() {
    return onClick(operator.code);
  };
  console.log('--------------------');
  console.log(operator);
  var sx_base = {
    position: 'fixed',
    left: x,
    top: y,
    maxWidth: width + 'px',
    maxHeight: height + 'px',
    borderRadius: width + 'px',
    padding: border_width + 'px',
    background: active ? "rgba(8, 156, 163, 1.0)" : "rgba(8, 156, 163, 0.2)",
    zIndex: 888
  };
  var sx_content = {
    width: width - border_width * 2 + 'px',
    height: height - border_width * 2 + 'px',
    borderRadius: width - border_width * 2 + 'px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  console.log(sx_base);
  console.log(sx_content);
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx_base,
    onClick: click
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx_content
  }, operator.label.val));
}