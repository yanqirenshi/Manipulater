"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;
var React = _interopRequireWildcard(require("react"));
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
  var sx_base = {
    position: 'fixed',
    left: x,
    top: y,
    maxWidth: width + 'px',
    maxHeight: height + 'px',
    borderRadius: width + 'px',
    padding: border_width + 'px',
    background: active ? "rgba(8, 156, 163, 1.0)" : "#888",
    zIndex: 888888
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
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx_base,
    onClick: click
  }, type === 'function' && /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx_content
  }, val()), type === 'text' && /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx_content
  }, text(val, active)), type === 'icon' && icon(operator, active, val, sx_content));
}
function icon(operator, active, val, sx) {
  if (active) return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active));
  return /*#__PURE__*/React.createElement(_Tooltip["default"], {
    title: val
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active)));
}
function iconContents(operator, active) {
  var code = operator.label.code;
  if (!code) return operator.label.val;
  var sx = {
    fontSize: 44,
    color: active ? 'rgba(8, 156, 163, 1.0)' : '#888'
  };
  if ('settings' === code) return /*#__PURE__*/React.createElement(_Psychology["default"], {
    sx: sx
  });
  if ('search' === code) return /*#__PURE__*/React.createElement(_Search["default"], {
    sx: sx
  });
  if ('github' === code) return /*#__PURE__*/React.createElement(_GitHub["default"], {
    sx: sx
  });
  if ('links' === code) return /*#__PURE__*/React.createElement(_Link["default"], {
    sx: sx
  });
  if ('customers' === code) return /*#__PURE__*/React.createElement(_SupportAgent["default"], {
    sx: sx
  });
  if ('meetings' === code) return /*#__PURE__*/React.createElement(_Groups["default"], {
    sx: sx
  });
  if ('products' === code) return /*#__PURE__*/React.createElement(_PrecisionManufacturing["default"], {
    sx: sx
  });
  return operator.label.val;
}
function text(text, active) {
  return /*#__PURE__*/React.createElement(_Typography["default"], {
    sx: {
      fontSize: 22,
      color: active ? 'rgba(8, 156, 163, 1.0)' : '#888'
    }
  }, text);
}