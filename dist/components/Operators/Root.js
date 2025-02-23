"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Psychology = _interopRequireDefault(require("@mui/icons-material/Psychology"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));
var _Link = _interopRequireDefault(require("@mui/icons-material/Link"));
var _Groups = _interopRequireDefault(require("@mui/icons-material/Groups3"));
var _PrecisionManufacturing = _interopRequireDefault(require("@mui/icons-material/PrecisionManufacturing"));
var _SupportAgent = _interopRequireDefault(require("@mui/icons-material/SupportAgent"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Work = _interopRequireDefault(require("@mui/icons-material/Work"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Root(props) {
  var operator = props.operator;
  var onClick = props.onClick;
  var active = props.active;
  var theme_color = props.theme_color;
  var border_width = operator.border.w;
  var width = operator.size.w;
  var height = operator.size.h;
  var x = operator.position.x;
  var y = operator.position.y;
  var click = function click() {
    return onClick(operator.code);
  };
  var sx_base = {
    position: 'fixed',
    left: x,
    top: y,
    maxWidth: width + 'px',
    maxHeight: height + 'px',
    borderRadius: width + 'px',
    padding: border_width + 'px',
    background: active ? "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)") : "#888",
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
  var val = operator.label.val;
  var type = operator.label.type;
  var sx = operator.label.sx;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_base,
    onClick: click
  }, type === 'function' && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_content
  }, val()), type === 'text' && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_content
  }, text(val, active, sx, theme_color)), type === 'icon' && icon(operator, active, val, sx_content, theme_color));
}
function icon(operator, active, val, sx, theme_color) {
  if (active) return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active, theme_color));
  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: val
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active, theme_color)));
}
function iconContents(operator, active, theme_color) {
  var code = operator.label.code;
  if (!code) return operator.label.val;
  var sx = {
    fontSize: 44,
    color: active ? "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)") : '#888'
  };
  if ('settings' === code) return /*#__PURE__*/_react["default"].createElement(_Psychology["default"], {
    sx: sx
  });
  if ('search' === code) return /*#__PURE__*/_react["default"].createElement(_Search["default"], {
    sx: sx
  });
  if ('backlogs' === code) return /*#__PURE__*/_react["default"].createElement(_Work["default"], {
    sx: sx
  });
  if ('github' === code) return /*#__PURE__*/_react["default"].createElement(_GitHub["default"], {
    sx: sx
  });
  if ('links' === code) return /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    sx: sx
  });
  if ('customers' === code) return /*#__PURE__*/_react["default"].createElement(_SupportAgent["default"], {
    sx: sx
  });
  if ('meetings' === code) return /*#__PURE__*/_react["default"].createElement(_Groups["default"], {
    sx: sx
  });
  if ('products' === code) return /*#__PURE__*/_react["default"].createElement(_PrecisionManufacturing["default"], {
    sx: sx
  });
  return operator.label.val;
}
function text(text, active) {
  var sx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var theme_color = arguments.length > 3 ? arguments[3] : undefined;
  return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    sx: _objectSpread(_objectSpread({}, {
      fontSize: 22,
      color: active ? "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)") : '#888'
    }), sx)
  }, text);
}